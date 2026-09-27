/**
 * CyberAudioSynth - 擬真賽車多諧波轉速聲浪與賽道音效合成引擎 (Web Audio API)
 * 包含：
 * 1. 真實 RPM (1000~8500) 驅動的多缸多諧波引擎聲浪 (基頻、進氣共振、排氣重低音)
 * 2. 升檔斷油切換 (Shift Cut) 與排氣管劈啪回火放炮 (Exhaust Pops & Bangs)
 * 3. 渦輪增壓進氣嘯叫與收油洩壓閥 (Turbo Blow-Off Valve)
 * 4. 輪胎碾壓紅白路緣石低頻震動 (Kerb Rumble "Thump-thump")
 * 5. 高速空氣流體風切聲 (High-Speed Wind Rush)
 * 6. 輪胎抓地極限側偏角尖叫 (Slip-Angle Responsive Tire Screech)
 */

class CyberAudioSynth {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.isInitialized = false;

    this.carType = 'cyber';

    // 引擎振盪器群 (多諧波架構)
    this.engineGain = null;
    this.engineFilter = null;
    this.osc1 = null;    // 燃燒做功基頻
    this.osc2 = null;    // 進氣歧管二次諧波
    this.subOsc = null;  // 排氣管低頻脈衝
    this.distortionNode = null;

    // 渦輪與風切聲
    this.windGain = null;
    this.windFilter = null;
    this.windNoise = null;

    // 氮氣音效節點
    this.nitroGain = null;
    this.nitroFilter = null;
    this.nitroNoise = null;
    this.nitroOsc = null;

    // 甩尾與煞車輪胎尖叫
    this.driftGain = null;
    this.driftFilter = null;
    this.driftNoise = null;

    // 路緣石震動合成
    this.kerbGain = null;
    this.kerbOsc = null;
    this.lastKerbTime = 0;

    // 噪音緩衝區
    this.noiseBuffer = null;

    // 地平線嘉年華電台 (Horizon Bass Arena Web Audio Synth)
    this.radioGain = null;
    this.isRadioOn = true;
    this.radioStep = 0;
    this.radioBpm = 126;
    this.radioInterval = null;
  }

  init() {
    if (this.isInitialized) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();

      // 產生 2 秒白噪音 Buffer
      const bufferSize = this.ctx.sampleRate * 2;
      this.noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = this.noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      this.setupEngineSynth();
      this.setupWindSynth();
      this.setupNitroSynth();
      this.setupDriftSynth();
      this.setupKerbSynth();
      this.setupHorizonRadio();

      this.isInitialized = true;
    } catch (err) {
      console.warn('Web Audio API not supported or blocked:', err);
    }
  }

  setupEngineSynth() {
    // 總引擎輸出 Gain
    this.engineGain = this.ctx.createGain();
    this.engineGain.gain.setValueAtTime(0.05, this.ctx.currentTime);

    // 引擎多級共鳴低通/帶通濾波器
    this.engineFilter = this.ctx.createBiquadFilter();
    this.engineFilter.type = 'lowpass';
    this.engineFilter.frequency.setValueAtTime(450, this.ctx.currentTime);
    this.engineFilter.Q.setValueAtTime(3.2, this.ctx.currentTime);

    // 軟飽和過載失真 (WaveShaper) - 營造真實多缸引擎金屬爆發感
    this.distortionNode = this.ctx.createWaveShaper();
    this.distortionNode.curve = this.makeDistortionCurve(22);
    this.distortionNode.oversample = '2x';

    // 主燃燒做功振盪器 (鋸齒波 Sawtooth)
    this.osc1 = this.ctx.createOscillator();
    this.osc1.type = 'sawtooth';
    this.osc1.frequency.setValueAtTime(70, this.ctx.currentTime);

    // 二次進氣共鳴振盪器
    this.osc2 = this.ctx.createOscillator();
    this.osc2.type = 'triangle';
    this.osc2.frequency.setValueAtTime(105, this.ctx.currentTime);

    // 排氣管低沉 Sub 脈衝
    this.subOsc = this.ctx.createOscillator();
    this.subOsc.type = 'square';
    this.subOsc.frequency.setValueAtTime(35, this.ctx.currentTime);

    const subGain = this.ctx.createGain();
    subGain.gain.value = 0.45;
    this.subOsc.connect(subGain);
    subGain.connect(this.engineFilter);

    this.osc1.connect(this.engineFilter);
    this.osc2.connect(this.engineFilter);

    this.engineFilter.connect(this.distortionNode);
    this.distortionNode.connect(this.engineGain);
    this.engineGain.connect(this.ctx.destination);

    this.osc1.start();
    this.osc2.start();
    this.subOsc.start();
  }

  makeDistortionCurve(amount) {
    const k = amount;
    const n_samples = 44100;
    const curve = new Float32Array(n_samples);
    const deg = Math.PI / 180;
    for (let i = 0; i < n_samples; ++i) {
      const x = (i * 2) / n_samples - 1;
      curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
    }
    return curve;
  }

  setupWindSynth() {
    this.windGain = this.ctx.createGain();
    this.windGain.gain.setValueAtTime(0, this.ctx.currentTime);

    this.windFilter = this.ctx.createBiquadFilter();
    this.windFilter.type = 'lowpass';
    this.windFilter.frequency.setValueAtTime(350, this.ctx.currentTime);

    this.windNoise = this.ctx.createBufferSource();
    this.windNoise.buffer = this.noiseBuffer;
    this.windNoise.loop = true;

    this.windNoise.connect(this.windFilter);
    this.windFilter.connect(this.windGain);
    this.windGain.connect(this.ctx.destination);

    this.windNoise.start();
  }

  setupNitroSynth() {
    this.nitroGain = this.ctx.createGain();
    this.nitroGain.gain.setValueAtTime(0, this.ctx.currentTime);

    this.nitroFilter = this.ctx.createBiquadFilter();
    this.nitroFilter.type = 'bandpass';
    this.nitroFilter.frequency.setValueAtTime(900, this.ctx.currentTime);
    this.nitroFilter.Q.setValueAtTime(2.2, this.ctx.currentTime);

    this.nitroNoise = this.ctx.createBufferSource();
    this.nitroNoise.buffer = this.noiseBuffer;
    this.nitroNoise.loop = true;

    this.nitroOsc = this.ctx.createOscillator();
    this.nitroOsc.type = 'sawtooth';
    this.nitroOsc.frequency.setValueAtTime(450, this.ctx.currentTime);

    const nOscGain = this.ctx.createGain();
    nOscGain.gain.value = 0.28;
    this.nitroOsc.connect(nOscGain);
    nOscGain.connect(this.nitroGain);

    this.nitroNoise.connect(this.nitroFilter);
    this.nitroFilter.connect(this.nitroGain);
    this.nitroGain.connect(this.ctx.destination);

    this.nitroNoise.start();
    this.nitroOsc.start();
  }

  setupDriftSynth() {
    this.driftGain = this.ctx.createGain();
    this.driftGain.gain.setValueAtTime(0, this.ctx.currentTime);

    this.driftFilter = this.ctx.createBiquadFilter();
    this.driftFilter.type = 'bandpass';
    this.driftFilter.frequency.setValueAtTime(1100, this.ctx.currentTime);
    this.driftFilter.Q.setValueAtTime(4.2, this.ctx.currentTime);

    this.driftNoise = this.ctx.createBufferSource();
    this.driftNoise.buffer = this.noiseBuffer;
    this.driftNoise.loop = true;

    this.driftNoise.connect(this.driftFilter);
    this.driftFilter.connect(this.driftGain);
    this.driftGain.connect(this.ctx.destination);

    this.driftNoise.start();
  }

  setupKerbSynth() {
    this.kerbGain = this.ctx.createGain();
    this.kerbGain.gain.setValueAtTime(0, this.ctx.currentTime);

    this.kerbOsc = this.ctx.createOscillator();
    this.kerbOsc.type = 'triangle';
    this.kerbOsc.frequency.setValueAtTime(115, this.ctx.currentTime);

    this.kerbOsc.connect(this.kerbGain);
    this.kerbGain.connect(this.ctx.destination);
    this.kerbOsc.start();
  }

  setCarType(type) {
    this.carType = type;
    if (!this.ctx) return;
    if (type === 'cyber') {
      this.osc1.type = 'sawtooth';
      this.osc2.type = 'triangle';
    } else {
      this.osc1.type = 'sawtooth';
      this.osc2.type = 'square';
    }
  }

  // 主即時音頻參數更新
  update(speed, maxSpeed, isAccelerating, isBraking, isBoosting, isDrifting, rpm = 1050, gear = 1, isShifting = false, slipAngle = 0, isRevLimiting = false) {
    if (!this.enabled || !this.ctx) return;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    const t = this.ctx.currentTime;
    const absSpeed = Math.abs(speed);
    const speedRatio = Math.min(absSpeed / (maxSpeed || 1), 1.0);

    // 1. 真實 RPM (1000 ~ 8500) 驅動引擎基頻與濾波器
    const safeRpm = Math.max(950, Math.min(8500, rpm));
    // 依轉速計算點火頻率 (V8 / 雙渦輪賽車點火脈衝)
    const firingFreq = (safeRpm / 60) * (this.carType === 'cyber' ? 3.6 : 4.0);

    this.osc1.frequency.setTargetAtTime(firingFreq, t, 0.025);
    this.osc2.frequency.setTargetAtTime(firingFreq * 1.5, t, 0.025);
    this.subOsc.frequency.setTargetAtTime(firingFreq * 0.5, t, 0.03);

    // 濾波器隨轉速與油門開度動態開啟 (全油門聲浪破喉、高轉金屬呼嘯)
    const baseCutoff = 380 + (safeRpm / 8500) * 3400;
    const throttleBoost = isAccelerating ? 1400 : (isBraking ? -200 : 0);
    this.engineFilter.frequency.setTargetAtTime(Math.min(7800, baseCutoff + throttleBoost), t, 0.035);

    // 引擎音量 (換檔 0.07 秒切斷動力頓挫、紅線斷油快速切斷 "Ta-ta-ta")
    let engineVol = 0.08;
    if (isShifting) {
      engineVol = 0.02; // 換檔離合收油
    } else if (isRevLimiting) {
      // 紅線快速點火切斷脈衝 (16 Hz 爆衝頓挫)
      const limiterPulse = Math.sin(t * 95) > 0 ? 0.28 : 0.02;
      engineVol = limiterPulse;
    } else if (absSpeed > 0.05 || isAccelerating) {
      engineVol = 0.10 + (isAccelerating ? 0.20 : 0.07) * (safeRpm / 8500);
    }
    this.engineGain.gain.setTargetAtTime(engineVol, t, (isShifting || isRevLimiting) ? 0.015 : 0.05);

    // 2. 高速氣流風切聲 (Wind Rush)
    let windVol = 0;
    if (absSpeed > 100) {
      windVol = Math.min(0.30, ((absSpeed - 100) / 220) * 0.30);
      this.windFilter.frequency.setTargetAtTime(320 + (absSpeed / 300) * 980, t, 0.08);
    }
    this.windGain.gain.setTargetAtTime(windVol, t, 0.08);

    // 3. 氮氣增壓音效 (NOS Warp Whistle)
    let nitroVol = 0;
    if (isBoosting) {
      nitroVol = 0.35;
      this.nitroFilter.frequency.setTargetAtTime(850 + speedRatio * 1500, t, 0.04);
      this.nitroOsc.frequency.setTargetAtTime(400 + speedRatio * 650, t, 0.04);
    }
    this.nitroGain.gain.setTargetAtTime(nitroVol, t, 0.05);

    // 4. 輪胎側偏角與煞車尖叫 (Tire Screech)
    let driftVol = 0;
    const absSlip = Math.abs(slipAngle);
    if ((isDrifting || (isBraking && absSpeed > 60)) && absSpeed > 25) {
      const slipFactor = Math.min(1.0, isDrifting ? (absSlip * 2.8 + 0.3) : 0.4);
      driftVol = Math.min(0.35, 0.08 + slipFactor * 0.27);
      const squealFreq = 950 + Math.sin(t * 22) * 180 + (absSpeed / maxSpeed) * 450;
      this.driftFilter.frequency.setTargetAtTime(squealFreq, t, 0.03);
    }
    this.driftGain.gain.setTargetAtTime(driftVol, t, 0.04);
  }

  // 排氣管回火放炮 (Exhaust Backfire / Pops & Bangs)
  playBackfire(isDownshift = false) {
    if (!this.enabled || !this.ctx) return;
    this.init();
    try {
      const now = this.ctx.currentTime;
      const numPops = isDownshift ? (1 + Math.floor(Math.random() * 2)) : (1 + Math.floor(Math.random() * 3));

      for (let p = 0; p < numPops; p++) {
        const pTime = now + p * (0.05 + Math.random() * 0.04);

        // 1. 銳利金屬碎石破裂聲
        const noise = this.ctx.createBufferSource();
        noise.buffer = this.noiseBuffer;

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(1400 + Math.random() * 900, pTime);
        filter.Q.setValueAtTime(5.5, pTime);

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.35 + Math.random() * 0.2, pTime);
        gain.gain.exponentialRampToValueAtTime(0.001, pTime + 0.06);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);
        noise.start(pTime);
        noise.stop(pTime + 0.06);

        // 2. 深沉排氣砲聲低頻 (Sub-bass Pop)
        const subOsc = this.ctx.createOscillator();
        subOsc.type = 'sine';
        subOsc.frequency.setValueAtTime(85 + Math.random() * 30, pTime);
        subOsc.frequency.exponentialRampToValueAtTime(30, pTime + 0.09);

        const subGain = this.ctx.createGain();
        subGain.gain.setValueAtTime(0.4, pTime);
        subGain.gain.exponentialRampToValueAtTime(0.001, pTime + 0.09);

        subOsc.connect(subGain);
        subGain.connect(this.ctx.destination);
        subOsc.start(pTime);
        subOsc.stop(pTime + 0.09);
      }
    } catch (e) {}
  }

  // 壓過紅白路緣石撞擊聲 (Kerb Rumble)
  playKerbRumble() {
    if (!this.enabled || !this.ctx) return;
    const now = performance.now();
    if (now - this.lastKerbTime < 65) return; // 限制脈衝節奏
    this.lastKerbTime = now;

    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(110 + Math.random() * 30, t);
      osc.frequency.exponentialRampToValueAtTime(45, t + 0.05);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.25, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.05);
    } catch (e) {}
  }

  // 渦輪洩壓閥音效 (Blow-Off Valve)
  playBlowOffValve() {
    if (!this.enabled || !this.ctx) return;
    try {
      const t = this.ctx.currentTime;
      const noise = this.ctx.createBufferSource();
      noise.buffer = this.noiseBuffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(2800, t);
      filter.frequency.exponentialRampToValueAtTime(900, t + 0.22);
      filter.Q.setValueAtTime(3.5, t);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.28, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.22);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      noise.start(t);
      noise.stop(t + 0.22);
    } catch (e) {}
  }

  // 加速光帶音效
  playBoostPadSound() {
    if (!this.enabled || !this.ctx) return;
    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(320, t);
      osc.frequency.exponentialRampToValueAtTime(1200, t + 0.35);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.22, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.35);
    } catch (e) {}
  }

  playCountdownBeep(isFinal = false) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = isFinal ? 'triangle' : 'sine';
      const freq = isFinal ? 880 : 440;
      const duration = isFinal ? 0.6 : 0.2;

      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      if (isFinal) {
        osc.frequency.exponentialRampToValueAtTime(1100, this.ctx.currentTime + duration);
      }
      gain.gain.setValueAtTime(0.22, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {}
  }

  playCheckpointChime() {
    if (!this.enabled || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      [523.25, 659.25, 783.99].forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.06);

        gain.gain.setValueAtTime(0.14, now + i * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.3);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + i * 0.06);
        osc.stop(now + i * 0.06 + 0.3);
      });
    } catch (e) {}
  }

  playCrashSound(intensity = 0.5) {
    if (!this.enabled || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const noise = this.ctx.createBufferSource();
      noise.buffer = this.noiseBuffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, now);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(Math.min(0.35, intensity * 0.35), now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.28);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start(now);
      noise.stop(now + 0.28);
    } catch (e) {}
  }

  playClick() {
    if (!this.enabled || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1000, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch (e) {}
  }

  toggleAudio() {
    this.enabled = !this.enabled;
    if (!this.enabled && this.ctx && this.ctx.state === 'running') {
      this.ctx.suspend();
    } else if (this.enabled && this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.enabled;
  }

  // ==========================================
  // 地平線嘉年華音樂電台 (Horizon Bass Arena Web Audio Synth)
  // ==========================================
  setupHorizonRadio() {
    if (this.radioGain || !this.ctx) return;
    try {
      this.radioGain = this.ctx.createGain();
      this.radioGain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      this.radioGain.connect(this.ctx.destination);

      this.isRadioOn = true;
      this.radioStep = 0;
      this.radioBpm = 126;
      this.startHorizonRadio();
    } catch (e) {}
  }

  startHorizonRadio() {
    if (this.radioInterval) clearInterval(this.radioInterval);
    if (!this.ctx || !this.isRadioOn) return;

    // 16 步進低音與主旋律音階 (C Minor Bass & Synth Progression)
    const bassNotes = [
      65.41, 65.41, 77.78, 65.41,
      87.31, 87.31, 77.78, 98.00,
      65.41, 65.41, 77.78, 65.41,
      116.54, 116.54, 98.00, 77.78
    ];
    const leadNotes = [
      261.63, 0, 311.13, 392.00,
      349.23, 0, 392.00, 523.25,
      261.63, 0, 311.13, 392.00,
      466.16, 392.00, 349.23, 311.13
    ];

    const stepDuration = (60 / this.radioBpm) / 4; // ~0.119s

    this.radioInterval = setInterval(() => {
      if (!this.isRadioOn || !this.enabled || !this.ctx || this.ctx.state !== 'running') return;
      try {
        const t = this.ctx.currentTime;
        const step = this.radioStep % 16;
        this.radioStep++;

        // 1. Kick Drum (四拍動感重低音 4-on-the-floor)
        if (step % 4 === 0) {
          const kickOsc = this.ctx.createOscillator();
          const kickGain = this.ctx.createGain();
          kickOsc.type = 'sine';
          kickOsc.frequency.setValueAtTime(130, t);
          kickOsc.frequency.exponentialRampToValueAtTime(38, t + 0.12);
          kickGain.gain.setValueAtTime(0.35, t);
          kickGain.gain.exponentialRampToValueAtTime(0.001, t + 0.14);
          kickOsc.connect(kickGain);
          kickGain.connect(this.radioGain);
          kickOsc.start(t);
          kickOsc.stop(t + 0.14);
        }

        // 2. Hi-Hat (反拍切分音)
        if (step % 2 === 1 && this.noiseBuffer) {
          const hatSrc = this.ctx.createBufferSource();
          hatSrc.buffer = this.noiseBuffer;
          const hatFilter = this.ctx.createBiquadFilter();
          hatFilter.type = 'highpass';
          hatFilter.frequency.setValueAtTime(8500, t);
          const hatGain = this.ctx.createGain();
          hatGain.gain.setValueAtTime(0.06, t);
          hatGain.gain.exponentialRampToValueAtTime(0.001, t + 0.04);
          hatSrc.connect(hatFilter);
          hatFilter.connect(hatGain);
          hatGain.connect(this.radioGain);
          hatSrc.start(t);
          hatSrc.stop(t + 0.04);
        }

        // 3. Bass Synth (每一拍持續厚重 Bassline)
        const bassFreq = bassNotes[step];
        if (bassFreq > 0) {
          const bassOsc = this.ctx.createOscillator();
          const bassFilter = this.ctx.createBiquadFilter();
          const bGain = this.ctx.createGain();
          bassOsc.type = 'sawtooth';
          bassOsc.frequency.setValueAtTime(bassFreq, t);

          bassFilter.type = 'lowpass';
          bassFilter.frequency.setValueAtTime(420, t);
          bassFilter.frequency.exponentialRampToValueAtTime(170, t + stepDuration * 0.9);
          bassFilter.Q.setValueAtTime(3.8, t);

          bGain.gain.setValueAtTime(0.18, t);
          bGain.gain.exponentialRampToValueAtTime(0.001, t + stepDuration * 0.95);

          bassOsc.connect(bassFilter);
          bassFilter.connect(bGain);
          bGain.connect(this.radioGain);
          bassOsc.start(t);
          bassOsc.stop(t + stepDuration * 0.95);
        }

        // 4. Horizon Lead Synth (嘉年華主旋律琶音)
        const leadFreq = leadNotes[step];
        if (leadFreq > 0) {
          const leadOsc = this.ctx.createOscillator();
          const lFilter = this.ctx.createBiquadFilter();
          const lGain = this.ctx.createGain();
          leadOsc.type = 'square';
          leadOsc.frequency.setValueAtTime(leadFreq, t);

          lFilter.type = 'lowpass';
          lFilter.frequency.setValueAtTime(1600, t);
          lFilter.frequency.exponentialRampToValueAtTime(700, t + stepDuration * 0.85);

          lGain.gain.setValueAtTime(0.08, t);
          lGain.gain.exponentialRampToValueAtTime(0.001, t + stepDuration * 0.85);

          leadOsc.connect(lFilter);
          lFilter.connect(lGain);
          lGain.connect(this.radioGain);
          leadOsc.start(t);
          leadOsc.stop(t + stepDuration * 0.85);
        }
      } catch (err) {}
    }, stepDuration * 1000);
  }

  toggleHorizonRadio() {
    this.isRadioOn = !this.isRadioOn;
    if (this.isRadioOn) {
      if (!this.radioGain && this.ctx) {
        this.setupHorizonRadio();
      } else {
        this.startHorizonRadio();
      }
    } else {
      if (this.radioInterval) {
        clearInterval(this.radioInterval);
        this.radioInterval = null;
      }
    }
    return this.isRadioOn;
  }

  // 跑車排氣管劇烈回火劈啪放炮 (Horizon Exhaust Crackles & Pops)
  playExhaustCrackles(numPops = 3) {
    if (!this.enabled || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      for (let i = 0; i < numPops; i++) {
        const pTime = now + i * (0.05 + Math.random() * 0.04);
        
        // 1. 尖銳氣流爆音
        if (this.noiseBuffer) {
          const noise = this.ctx.createBufferSource();
          noise.buffer = this.noiseBuffer;
          const filter = this.ctx.createBiquadFilter();
          filter.type = 'bandpass';
          filter.frequency.setValueAtTime(1400 + Math.random() * 800, pTime);
          filter.Q.setValueAtTime(2.2, pTime);

          const gain = this.ctx.createGain();
          gain.gain.setValueAtTime(0.28, pTime);
          gain.gain.exponentialRampToValueAtTime(0.001, pTime + 0.05);

          noise.connect(filter);
          filter.connect(gain);
          gain.connect(this.ctx.destination);
          noise.start(pTime);
          noise.stop(pTime + 0.05);
        }

        // 2. 重低音排氣震波
        const popOsc = this.ctx.createOscillator();
        const popGain = this.ctx.createGain();
        popOsc.type = 'triangle';
        popOsc.frequency.setValueAtTime(160 + Math.random() * 50, pTime);
        popOsc.frequency.exponentialRampToValueAtTime(40, pTime + 0.07);

        popGain.gain.setValueAtTime(0.32, pTime);
        popGain.gain.exponentialRampToValueAtTime(0.001, pTime + 0.07);

        popOsc.connect(popGain);
        popGain.connect(this.ctx.destination);
        popOsc.start(pTime);
        popOsc.stop(pTime + 0.07);
      }
    } catch (e) {}
  }

  // 測速照相快門聲與歡呼音效 (Speed Trap Shutter & Chime)
  playSpeedTrapSound(stars = 3) {
    if (!this.enabled || !this.ctx) return;
    try {
      const t = this.ctx.currentTime;
      // 快門卡嗒聲 (Camera Shutter Click)
      if (this.noiseBuffer) {
        const shutter = this.ctx.createBufferSource();
        shutter.buffer = this.noiseBuffer;
        const sFilter = this.ctx.createBiquadFilter();
        sFilter.type = 'highpass';
        sFilter.frequency.setValueAtTime(2400, t);
        const sGain = this.ctx.createGain();
        sGain.gain.setValueAtTime(0.35, t);
        sGain.gain.exponentialRampToValueAtTime(0.001, t + 0.08);
        shutter.connect(sFilter);
        sFilter.connect(sGain);
        sGain.connect(this.ctx.destination);
        shutter.start(t);
        shutter.stop(t + 0.08);
      }

      // 星級獎勵和弦 (Celebratory Chord)
      const freqs = (stars >= 3) ? [523.25, 659.25, 783.99, 1046.50] : [523.25, 659.25, 783.99];
      freqs.forEach((f, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(f, t + 0.08 + idx * 0.05);

        gain.gain.setValueAtTime(0.18, t + 0.08 + idx * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.45);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t + 0.08 + idx * 0.05);
        osc.stop(t + 0.45);
      });
    } catch (e) {}
  }

  // 技術分數結算入帳音效 (Skill Banked XP)
  playSkillBankedSound() {
    if (!this.enabled || !this.ctx) return;
    try {
      const t = this.ctx.currentTime;
      [440, 554.37, 659.25, 880].forEach((f, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, t + i * 0.04);
        gain.gain.setValueAtTime(0.15, t + i * 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, t + i * 0.04 + 0.3);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t + i * 0.04);
        osc.stop(t + i * 0.04 + 0.3);
      });
    } catch (e) {}
  }

  // 技術分數中斷破碎音效 (Skill Chain Broken)
  playSkillBrokenSound() {
    if (!this.enabled || !this.ctx) return;
    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, t);
      osc.frequency.exponentialRampToValueAtTime(60, t + 0.25);
      gain.gain.setValueAtTime(0.3, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.25);
    } catch (e) {}
  }
}

window.CyberAudioSynth = CyberAudioSynth;
