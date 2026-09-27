/**
 * GameController - 地平線嘉年華風格主邏輯控制器 (Forza Horizon Style Controller)
 * 協調 Three.js 渲染、嘉年華世界、動態甩尾追隨鏡頭、技術分數連擊系統 (Skill Score) 與 HUD 儀表。
 */

const GAME_STATE = {
  GARAGE: 'GARAGE',
  COUNTDOWN: 'COUNTDOWN',
  RACING: 'RACING',
  FINISHED: 'FINISHED'
};

/**
 * HorizonSkillScoreManager - 地平線招牌「技術分數」連擊與倍率引擎
 * 即時識別：DRIFT (甩尾), SPEED (超速), NEAR MISS (驚險超車), BURNOUT (起步燒胎), CLEAN RACING (乾淨行駛)
 * 支持最高 x5.0 倍率、平穩結算入帳 (Banked XP) 與撞牆破壞警告 (Skill Chain Broken)
 */
class HorizonSkillScoreManager {
  constructor(game) {
    this.game = game;
    this.baseScore = 0;
    this.multiplier = 1.0;
    this.timer = 0;
    this.maxTimer = 2.6; // 技能冷卻維持時間
    this.isActive = false;

    // 狀態追蹤
    this.driftTime = 0;
    this.speedTime = 0;
    this.burnoutTime = 0;
    this.cleanRaceTime = 0;
    this.lastNearMissTime = 0;

    // DOM 快取
    this.container = document.getElementById('horizon-skill-container');
    this.badgeList = document.getElementById('skill-badge-list');
    this.baseScoreEl = document.getElementById('skill-base-score');
    this.multiplierEl = document.getElementById('skill-multiplier');
    this.timerBar = document.getElementById('skill-timer-bar');
    this.bankedAlert = document.getElementById('skill-banked-alert');
    this.brokenAlert = document.getElementById('skill-broken-alert');
    this.totalXpEl = document.getElementById('hud-total-xp');
  }

  addSkill(name, points, type = 'drift') {
    this.baseScore += points;
    this.timer = this.maxTimer;
    this.isActive = true;

    // 動態倍率攀升 (最高 x5.0)
    if (this.baseScore >= 2400) this.multiplier = 5.0;
    else if (this.baseScore >= 1600) this.multiplier = 4.0;
    else if (this.baseScore >= 900) this.multiplier = 3.0;
    else if (this.baseScore >= 450) this.multiplier = 2.5;
    else if (this.baseScore >= 200) this.multiplier = 2.0;
    else if (this.baseScore >= 80) this.multiplier = 1.5;

    this.renderBadge(`${name} +${points}`, type);
    this.updateUI();
  }

  renderBadge(text, type) {
    if (!this.badgeList) return;
    const badge = document.createElement('div');
    badge.className = `skill-badge-item ${type}`;
    badge.textContent = text;
    this.badgeList.appendChild(badge);

    while (this.badgeList.children.length > 3) {
      this.badgeList.removeChild(this.badgeList.firstChild);
    }

    setTimeout(() => {
      if (badge.parentNode) {
        badge.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
        badge.style.opacity = '0';
        badge.style.transform = 'translateY(-10px)';
        setTimeout(() => {
          if (badge.parentNode) badge.parentNode.removeChild(badge);
        }, 250);
      }
    }, 1800);
  }

  update(dt, player, ai, audio) {
    if (!player) return;
    const absSpeed = Math.abs(player.speed);

    // 1. 檢測碰撞中斷 (Hard Wall Impact -> SKILL CHAIN BROKEN!)
    if (player.hardImpact && this.isActive) {
      this.breakChain(audio);
      return;
    }

    // 2. 檢測漂移技能 (Drift Skills)
    if (player.isDrifting && absSpeed > 28) {
      this.driftTime += dt;
      if (this.driftTime >= 4.0 && !this.hasAwardedUltimateDrift) {
        this.addSkill("ULTIMATE DRIFT", 1000, 'drift');
        this.hasAwardedUltimateDrift = true;
      } else if (this.driftTime >= 2.4 && !this.hasAwardedAwesomeDrift) {
        this.addSkill("AWESOME DRIFT", 500, 'drift');
        this.hasAwardedAwesomeDrift = true;
      } else if (this.driftTime >= 1.2 && !this.hasAwardedGreatDrift) {
        this.addSkill("GREAT DRIFT", 250, 'drift');
        this.hasAwardedGreatDrift = true;
      } else if (this.driftTime >= 0.35 && !this.hasAwardedDrift) {
        this.addSkill("DRIFT", 100, 'drift');
        this.hasAwardedDrift = true;
      }
    } else {
      this.driftTime = 0;
      this.hasAwardedDrift = false;
      this.hasAwardedGreatDrift = false;
      this.hasAwardedAwesomeDrift = false;
      this.hasAwardedUltimateDrift = false;
    }

    // 3. 檢測極速奔馳 (Speed Skills)
    if (absSpeed > 165) {
      this.speedTime += dt;
      if (this.speedTime >= 2.0) {
        this.speedTime = 0;
        if (absSpeed > 310) {
          this.addSkill("ULTIMATE SPEED", 500, 'speed');
        } else if (absSpeed > 260) {
          this.addSkill("AWESOME SPEED", 300, 'speed');
        } else if (absSpeed > 210) {
          this.addSkill("GREAT SPEED", 200, 'speed');
        } else {
          this.addSkill("SPEED", 100, 'speed');
        }
      }
    } else {
      this.speedTime = 0;
    }

    // 4. 檢測近距驚險超車 (Near Miss)
    if (ai) {
      const now = performance.now();
      const distToAi = player.position.distanceTo(ai.position);
      if (distToAi > 20 && distToAi < 85 && absSpeed > 100 && (now - this.lastNearMissTime > 4000)) {
        this.lastNearMissTime = now;
        this.addSkill("NEAR MISS 驚險超車", 350, 'near-miss');
      }
    }

    // 5. 檢測起步燒胎 (Burnout)
    if (player.wheelSpin > 0.45 && absSpeed < 45) {
      this.burnoutTime += dt;
      if (this.burnoutTime > 0.5 && !this.hasAwardedBurnout) {
        this.hasAwardedBurnout = true;
        this.addSkill("BURNOUT 燒胎起步", 150, 'burnout');
      }
    } else {
      this.burnoutTime = 0;
      this.hasAwardedBurnout = false;
    }

    // 6. 檢測乾淨俐落行駛 (Clean Racing)
    this.cleanRaceTime += dt;
    if (this.cleanRaceTime > 7.0 && absSpeed > 70) {
      this.cleanRaceTime = 0;
      this.addSkill("CLEAN RACING 乾淨俐落", 250, 'clean');
    }

    // 7. 計時器衰減與結算入帳 (Banking)
    if (this.isActive) {
      this.timer -= dt;
      if (this.timerBar) {
        const pct = Math.max(0, Math.min(100, (this.timer / this.maxTimer) * 100));
        this.timerBar.style.width = pct + '%';
      }

      if (this.timer <= 0) {
        this.bankScore(audio);
      }
    }
  }

  bankScore(audio) {
    if (!this.isActive) return;
    const finalEarned = Math.round(this.baseScore * this.multiplier);
    this.game.totalHorizonXP = (this.game.totalHorizonXP || 0) + finalEarned;

    if (this.totalXpEl) {
      this.totalXpEl.textContent = this.game.totalHorizonXP.toLocaleString();
    }

    if (this.bankedAlert) {
      this.bankedAlert.textContent = `BANKED! +${finalEarned.toLocaleString()} XP`;
      this.bankedAlert.style.display = 'block';
      setTimeout(() => {
        if (this.bankedAlert) this.bankedAlert.style.display = 'none';
      }, 1000);
    }

    if (audio && audio.playSkillBankedSound) {
      audio.playSkillBankedSound();
    }

    this.resetCombo();
  }

  breakChain(audio) {
    if (!this.isActive) return;

    if (this.brokenAlert) {
      this.brokenAlert.style.display = 'block';
      setTimeout(() => {
        if (this.brokenAlert) this.brokenAlert.style.display = 'none';
      }, 900);
    }

    if (audio && audio.playSkillBrokenSound) {
      audio.playSkillBrokenSound();
    }

    this.resetCombo();
  }

  resetCombo() {
    this.baseScore = 0;
    this.multiplier = 1.0;
    this.timer = 0;
    this.isActive = false;
    this.cleanRaceTime = 0;
    if (this.container) this.container.classList.remove('active');
    if (this.badgeList) this.badgeList.innerHTML = '';
  }

  updateUI() {
    if (!this.container) return;
    this.container.classList.add('active');
    if (this.baseScoreEl) this.baseScoreEl.textContent = this.baseScore.toLocaleString();
    if (this.multiplierEl) this.multiplierEl.textContent = `x ${this.multiplier.toFixed(1)}`;
  }
}

class CyberRacingGame {
  constructor() {
    this.container = document.getElementById('canvas-container') || document.body;
    this.state = GAME_STATE.GARAGE;
    this.gameMode = 'gp'; // 'gp' (AI 競速), 'time_attack' (計時賽), 'free' (自由試駕)

    // 地平線技術分數管理器與累積總 XP
    this.skillManager = null;
    this.totalHorizonXP = 0;

    // Three.js 核心
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.clock = new THREE.Clock();

    // 系統模組
    this.audio = new CyberAudioSynth();
    this.modelBuilder = new CarModelBuilder();
    this.trackBuilder = null;

    // 車輛與展示台
    this.selectedCarType = 'cyber'; // 'cyber' 或 'inferno'
    this.selectedColor = 0x00f0ff;
    this.playerVehicle = null;
    this.aiVehicle = null;
    this.garageCarMesh = null;
    this.garageTurntable = null;
    this.showroomLights = [];

    // 鏡頭模式 ('chase', 'hood', 'top')
    this.cameraMode = 'chase';
    this.cameraHeading = 0;
    this.orbitAngle = 0;

    // 粒子系統 (甩尾火花)
    this.sparksParticleSystem = null;

    // 輸入狀態
    this.input = {
      up: false,
      down: false,
      left: false,
      right: false,
      handbrake: false,
      nitro: false
    };

    // 迷你地圖
    this.minimapCanvas = document.getElementById('minimap-canvas');
    this.minimapCtx = this.minimapCanvas ? this.minimapCanvas.getContext('2d') : null;

    this.init();
  }

  init() {
    try {
      this.setupScene();
      this.setupLighting();
      this.setupParticleEffects();

      // 初始化賽道
      this.trackBuilder = new TrackBuilder(this.scene);
      this.trackCurve = this.trackBuilder.buildTrack();

      // 初始化地平線技術分數管理器 (Horizon Skill Score System)
      this.skillManager = new HorizonSkillScoreManager(this);

      // 建立車庫展示展台與車輛
      this.setupGarageShowroom();

      // 綁定鍵盤與觸控事件
      this.setupEventListeners();

      // 綁定 UI 按鈕
      this.setupUIHandlers();

      // 確保初始 HUD 狀態正確 (車庫模式時隱藏比賽 HUD)
      const hudHeader = document.getElementById('hud-header');
      if (hudHeader) hudHeader.style.display = 'none';
      const gameHud = document.getElementById('game-hud');
      if (gameHud) gameHud.style.display = 'none';

      // 啟動主渲染循環
      this.animate = this.animate.bind(this);
      requestAnimationFrame(this.animate);

      console.log("⚡ Cyber Racing Game initialized successfully!");
    } catch (err) {
      console.error("Critical initialization error:", err);
      if (window.onerror) {
        window.onerror(err.message, 'game.js', 0, 0, err);
      }
    }
  }

  setupScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x060810);
    this.scene.fog = new THREE.FogExp2(0x060810, 0.0004);

    const w = window.innerWidth;
    const h = window.innerHeight;

    this.camera = new THREE.PerspectiveCamera(55, w / h, 1, 16000);
    this.camera.position.set(0, 32, -140);
    this.camera.lookAt(0, 16, 0);

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: "high-performance"
    });
    this.renderer.setSize(w, h);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.35;

    // 清除舊 canvas 避免重複
    this.container.innerHTML = '';
    this.container.appendChild(this.renderer.domElement);

    window.addEventListener('resize', () => this.onWindowResize());
  }

  setupLighting() {
    // 擬真自然戶外光照系統 (Natural Sun & Sky Lighting)
    const ambient = new THREE.HemisphereLight(0x8ec5ff, 0x4d613c, 1.25);
    this.scene.add(ambient);

    const mainSun = new THREE.DirectionalLight(0xfffbf2, 2.0);
    mainSun.position.set(800, 1600, 600);
    mainSun.castShadow = true;
    mainSun.shadow.mapSize.width = 2048;
    mainSun.shadow.mapSize.height = 2048;
    mainSun.shadow.camera.near = 100;
    mainSun.shadow.camera.far = 5000;
    mainSun.shadow.camera.left = -2000;
    mainSun.shadow.camera.right = 2000;
    mainSun.shadow.camera.top = 2000;
    mainSun.shadow.camera.bottom = -2000;
    mainSun.shadow.bias = -0.0003;
    this.scene.add(mainSun);

    // 柔和天際環境微光 (Sky Fill Light)
    const skyFill = new THREE.DirectionalLight(0xa5d2f6, 0.75);
    skyFill.position.set(-800, 600, -800);
    this.scene.add(skyFill);
  }

  // 擬真輪胎白煙與排氣管回火烈焰粒子系統
  setupParticleEffects() {
    const smokeCount = 360;
    const smokeGeo = new THREE.BufferGeometry();
    const smokePos = new Float32Array(smokeCount * 3);
    const smokeVel = [];

    for (let i = 0; i < smokeCount; i++) {
      smokePos[i * 3] = 0;
      smokePos[i * 3 + 1] = -999;
      smokePos[i * 3 + 2] = 0;
      smokeVel.push({ x: 0, y: 0, z: 0, life: 0, maxLife: 1.0, size: 20 });
    }

    smokeGeo.setAttribute('position', new THREE.BufferAttribute(smokePos, 3));
    const smokeMat = new THREE.PointsMaterial({
      color: 0xe6edf5,
      size: 22.0,
      transparent: true,
      opacity: 0.48,
      depthWrite: false,
      blending: THREE.NormalBlending
    });

    this.sparksParticleSystem = new THREE.Points(smokeGeo, smokeMat);
    this.sparksParticleSystem.userData = { vel: smokeVel };
    this.scene.add(this.sparksParticleSystem);

    // 1. 地面黑色輪胎煞車印痕系統 (Dynamic Tire Skidmarks)
    const maxMarks = 800;
    const skidGeo = new THREE.BufferGeometry();
    const skidPos = new Float32Array(maxMarks * 3);
    for (let i = 0; i < maxMarks; i++) {
      skidPos[i * 3] = 0;
      skidPos[i * 3 + 1] = -999;
      skidPos[i * 3 + 2] = 0;
    }
    skidGeo.setAttribute('position', new THREE.BufferAttribute(skidPos, 3));
    const skidMat = new THREE.PointsMaterial({
      color: 0x14171e,
      size: 8.5,
      transparent: true,
      opacity: 0.65,
      depthWrite: false
    });
    this.skidmarksMesh = new THREE.Points(skidGeo, skidMat);
    this.skidmarkIdx = 0;
    this.scene.add(this.skidmarksMesh);

    // 2. 排氣管噴火與回火特效 (Exhaust Flame Bursts)
    const flameCount = 50;
    const flameGeo = new THREE.BufferGeometry();
    const flamePos = new Float32Array(flameCount * 3);
    const flameVel = [];
    for (let i = 0; i < flameCount; i++) {
      flamePos[i * 3] = 0;
      flamePos[i * 3 + 1] = -999;
      flamePos[i * 3 + 2] = 0;
      flameVel.push({ x: 0, y: 0, z: 0, life: 0 });
    }
    flameGeo.setAttribute('position', new THREE.BufferAttribute(flamePos, 3));
    const flameMat = new THREE.PointsMaterial({
      color: 0xff6600,
      size: 9.5,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending
    });
    this.flamesParticleSystem = new THREE.Points(flameGeo, flameMat);
    this.flamesParticleSystem.userData = { vel: flameVel };
    this.scene.add(this.flamesParticleSystem);
  }

  // 車庫展示展台與燈光
  setupGarageShowroom() {
    // 建立或更新旋轉展示台
    if (!this.garageTurntable) {
      this.garageTurntable = new THREE.Group();
      this.garageTurntable.position.set(0, 0, 0);

      // 展示台金屬基底
      const discGeo = new THREE.CylinderGeometry(110, 115, 6, 48);
      const discMat = new THREE.MeshStandardMaterial({
        color: 0x0b101c,
        metalness: 0.85,
        roughness: 0.25
      });
      const discMesh = new THREE.Mesh(discGeo, discMat);
      discMesh.position.y = 3;
      discMesh.receiveShadow = true;
      this.garageTurntable.add(discMesh);

      // 外緣發光霓虹圈
      const ringGeo = new THREE.TorusGeometry(112, 1.6, 8, 48);
      ringGeo.rotateX(Math.PI / 2);
      const ringMat = new THREE.MeshStandardMaterial({
        color: 0x00f0ff,
        emissive: 0x00f0ff,
        emissiveIntensity: 3.5
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.position.y = 5.8;
      this.garageTurntable.add(ringMesh);
      this.garageTurntable.userData.ringMat = ringMat;

      // 頂部聚光燈
      const spotLight = new THREE.SpotLight(0xffffff, 2.8, 400, Math.PI / 4, 0.4);
      spotLight.position.set(0, 180, 0);
      spotLight.target.position.set(0, 10, 0);
      this.scene.add(spotLight);
      this.scene.add(spotLight.target);
      this.showroomLights.push(spotLight);

      this.scene.add(this.garageTurntable);
    }

    // 移除舊車輛
    if (this.garageCarMesh) {
      this.garageTurntable.remove(this.garageCarMesh);
      this.garageCarMesh = null;
    }

    // 依選定車型重新構建
    if (this.selectedCarType === 'cyber') {
      this.garageCarMesh = this.modelBuilder.buildCyberAeroX1(this.selectedColor);
      if (this.garageTurntable.userData.ringMat) {
        this.garageTurntable.userData.ringMat.color.setHex(0x00f0ff);
        this.garageTurntable.userData.ringMat.emissive.setHex(0x00f0ff);
      }
    } else {
      this.garageCarMesh = this.modelBuilder.buildInfernoPhantomGT(this.selectedColor);
      if (this.garageTurntable.userData.ringMat) {
        this.garageTurntable.userData.ringMat.color.setHex(0xff0055);
        this.garageTurntable.userData.ringMat.emissive.setHex(0xff0055);
      }
    }

    // 將車輛放置在展台中央
    this.garageCarMesh.position.set(0, 6, 0);
    this.garageCarMesh.rotation.set(0, -Math.PI / 6, 0);
    this.garageTurntable.add(this.garageCarMesh);
    this.garageTurntable.visible = true;

    // 隱藏比賽賽道，讓車庫乾淨俐落
    if (this.trackBuilder) {
      this.trackBuilder.trackGroup.visible = false;
      this.trackBuilder.environmentGroup.visible = false;
    }

    this.updateGarageUI();
  }

  updateGarageUI() {
    const isCyber = this.selectedCarType === 'cyber';
    const nameEl = document.getElementById('garage-car-name');
    const subEl = document.getElementById('garage-car-subtitle');
    const tagEl = document.getElementById('garage-car-tag');

    const topSpeedBar = document.getElementById('spec-topspeed-bar');
    const accelBar = document.getElementById('spec-accel-bar');
    const handlingBar = document.getElementById('spec-handling-bar');
    const nitroBar = document.getElementById('spec-nitro-bar');

    if (isCyber) {
      if (nameEl) nameEl.textContent = "CYBER AERO X-1";
      if (subEl) subEl.textContent = "CAD 3-View Blueprint 原型超跑 (Cd 0.22 水滴座艙)";
      if (tagEl) {
        tagEl.textContent = "AERO DYNAMICS SPECIALIST";
        tagEl.style.color = "#00f0ff";
        tagEl.style.borderColor = "rgba(0, 240, 255, 0.4)";
      }
      if (topSpeedBar) { topSpeedBar.style.width = "82%"; topSpeedBar.className = "spec-bar-fill"; }
      if (accelBar) { accelBar.style.width = "90%"; accelBar.className = "spec-bar-fill"; }
      if (handlingBar) { handlingBar.style.width = "98%"; handlingBar.className = "spec-bar-fill"; }
      if (nitroBar) { nitroBar.style.width = "85%"; nitroBar.className = "spec-bar-fill"; }
    } else {
      if (nameEl) nameEl.textContent = "INFERNO PHANTOM GT";
      if (subEl) subEl.textContent = "烈焰幻影・黑紅金戰鬥超跑 (雙渦輪噴射尾焰)";
      if (tagEl) {
        tagEl.textContent = "MECHA MUSCLE BEAST";
        tagEl.style.color = "#ff0055";
        tagEl.style.borderColor = "rgba(255, 0, 85, 0.4)";
      }
      if (topSpeedBar) { topSpeedBar.style.width = "96%"; topSpeedBar.className = "spec-bar-fill crimson"; }
      if (accelBar) { accelBar.style.width = "98%"; accelBar.className = "spec-bar-fill crimson"; }
      if (handlingBar) { handlingBar.style.width = "84%"; handlingBar.className = "spec-bar-fill crimson"; }
      if (nitroBar) { nitroBar.style.width = "98%"; nitroBar.className = "spec-bar-fill crimson"; }
    }
  }

  // 開始比賽
  startRace() {
    this.audio.init();

    // 啟動地平線 Bass Arena 電子廣播電台
    if (this.audio.startHorizonRadio) {
      this.audio.startHorizonRadio();
      const radioBtn = document.getElementById('radio-btn');
      if (radioBtn) {
        radioBtn.textContent = '📻 HORIZON BASS ARENA [ON]';
        radioBtn.classList.add('active');
      }
    }

    // 重置技術分數連擊
    if (this.skillManager) {
      this.skillManager.resetCombo();
    }

    this.state = GAME_STATE.COUNTDOWN;

    // 隱藏展示台
    if (this.garageTurntable) {
      this.garageTurntable.visible = false;
    }

    // 顯示賽道與真實環境，切換為自然白晝天空與大氣霧化
    this.scene.background = new THREE.Color(0x8ec5ff);
    this.scene.fog = new THREE.FogExp2(0xcbe3f7, 0.00015);
    if (this.trackBuilder) {
      this.trackBuilder.trackGroup.visible = true;
      this.trackBuilder.environmentGroup.visible = true;
    }

    // 隱藏車庫與結算面板，顯示賽事 HUD
    document.getElementById('garage-screen').classList.add('hidden');
    document.getElementById('finish-modal').style.display = 'none';
    document.getElementById('hud-header').style.display = 'flex';
    document.getElementById('game-hud').style.display = 'flex';

    // 重置賽道煞車印痕
    if (this.skidmarksMesh) {
      this.skidmarksMesh.visible = true;
      const p = this.skidmarksMesh.geometry.attributes.position.array;
      for (let i = 0; i < p.length; i += 3) {
        p[i + 1] = -999;
      }
      this.skidmarksMesh.geometry.attributes.position.needsUpdate = true;
      this.skidmarkIdx = 0;
    }

    // 1. 產生玩家賽車實體
    if (this.playerVehicle) {
      this.scene.remove(this.playerVehicle.mesh);
      this.playerVehicle = null;
    }

    const playerMesh = (this.selectedCarType === 'cyber')
      ? this.modelBuilder.buildCyberAeroX1(this.selectedColor)
      : this.modelBuilder.buildInfernoPhantomGT(this.selectedColor);
    this.scene.add(playerMesh);

    this.playerVehicle = new VehiclePhysics(playerMesh, playerMesh.userData.specs, true);
    this.audio.setCarType(playerMesh.userData.specs.soundType);

    // 2. 若為 Grand Prix 模式，產生 AI 對手賽車 (另一款車)
    if (this.aiVehicle) {
      this.scene.remove(this.aiVehicle.mesh);
      this.aiVehicle = null;
    }

    if (this.gameMode === 'gp') {
      const aiType = (this.selectedCarType === 'cyber') ? 'inferno' : 'cyber';
      const aiColor = (aiType === 'inferno') ? 0xff0055 : 0x00f0ff;
      const aiMesh = (aiType === 'cyber')
        ? this.modelBuilder.buildCyberAeroX1(aiColor)
        : this.modelBuilder.buildInfernoPhantomGT(aiColor);
      this.scene.add(aiMesh);

      this.aiVehicle = new AIRacerDynamics(aiMesh, aiMesh.userData.specs);
    }

    // 3. 車輛放置於起跑線 (Start Grid)
    const startPt = this.trackCurve.getPointAt(0);
    const startTangent = this.trackCurve.getTangentAt(0).normalize();
    const up = new THREE.Vector3(0, 1, 0);
    const side = new THREE.Vector3().crossVectors(startTangent, up).normalize();
    const startHeading = Math.atan2(startTangent.x, startTangent.z);

    // 玩家在左側起跑格
    const playerStartPos = startPt.clone().add(side.clone().multiplyScalar(-24));
    playerStartPos.y = startPt.y + 0.5;
    this.playerVehicle.resetTo(playerStartPos, startHeading);

    // AI 在右側後方起跑格
    if (this.aiVehicle) {
      const aiStartPos = startPt.clone().add(side.clone().multiplyScalar(24)).add(startTangent.clone().multiplyScalar(-60));
      aiStartPos.y = startPt.y + 0.5;
      this.aiVehicle.resetTo(aiStartPos, startHeading);
      this.aiVehicle.trackT = 0.002;
    }

    // 重置追隨相機朝向與起始視角
    this.cameraHeading = startHeading;
    this.camera.position.set(
      playerStartPos.x - Math.sin(startHeading) * 145,
      playerStartPos.y + 36,
      playerStartPos.z - Math.cos(startHeading) * 145
    );
    this.camera.lookAt(
      playerStartPos.x + Math.sin(startHeading) * 35,
      playerStartPos.y + 11,
      playerStartPos.z + Math.cos(startHeading) * 35
    );

    // 4. 倒數計時 3, 2, 1, GO!
    this.runCountdownSequence();
  }

  runCountdownSequence() {
    const overlay = document.getElementById('countdown-overlay');
    overlay.style.display = 'block';

    let count = 3;
    overlay.textContent = count;
    overlay.style.color = "#fff";
    this.audio.playCountdownBeep(false);

    const interval = setInterval(() => {
      count--;
      if (count > 0) {
        overlay.textContent = count;
        overlay.style.animation = 'none';
        void overlay.offsetWidth;
        overlay.style.animation = 'countdownPop 0.8s ease-out';
        this.audio.playCountdownBeep(false);
      } else if (count === 0) {
        overlay.textContent = "GO!";
        overlay.style.color = "#00ff88";
        overlay.style.animation = 'none';
        void overlay.offsetWidth;
        overlay.style.animation = 'countdownPop 0.8s ease-out';
        this.audio.playCountdownBeep(true);
        this.state = GAME_STATE.RACING;
        if (this.playerVehicle) {
          this.playerVehicle.lapStartTime = performance.now();
        }
      } else {
        clearInterval(interval);
        overlay.style.display = 'none';
        overlay.style.color = "#fff";
      }
    }, 1000);
  }

  finishRace() {
    this.state = GAME_STATE.FINISHED;
    const modal = document.getElementById('finish-modal');
    const title = document.getElementById('finish-title');
    const details = document.getElementById('finish-details');

    const isWinner = !this.aiVehicle || (this.playerVehicle.lapProgress + this.playerVehicle.lap >= this.aiVehicle.lapProgress + this.aiVehicle.lap);

    if (title) {
      if (this.gameMode === 'gp') {
        title.textContent = isWinner ? "VICTORY! 奪冠獲勝" : "DEFEAT 遺憾落敗";
        title.className = isWinner ? "finish-title winner" : "finish-title defeat";
      } else {
        title.textContent = "FINISH! 挑戰完成";
        title.className = "finish-title winner";
      }
    }

    if (details) {
      const best = (this.playerVehicle.bestLapTime < Infinity) ? this.playerVehicle.bestLapTime.toFixed(2) + 's' : '--';
      details.innerHTML = `
        <div>🏆 最終排名：<strong>${isWinner ? '第 1 名 (Champion)' : '第 2 名'}</strong></div>
        <div>⏱️ 最佳單圈時間 (Best Lap)：<strong>${best}</strong></div>
        <div>⚡ 車型紀錄：<strong>${(this.playerVehicle && this.playerVehicle.specs && this.playerVehicle.specs.name) || (this.playerVehicle && this.playerVehicle.mesh && this.playerVehicle.mesh.userData && this.playerVehicle.mesh.userData.name) || 'CYBER SUPERCAR'}</strong></div>
      `;
    }

    modal.style.display = 'flex';
  }

  returnToGarage() {
    this.state = GAME_STATE.GARAGE;
    this.scene.background = new THREE.Color(0x060810);
    this.scene.fog = new THREE.FogExp2(0x060810, 0.0004);
    document.getElementById('finish-modal').style.display = 'none';
    document.getElementById('garage-screen').classList.remove('hidden');
    document.getElementById('hud-header').style.display = 'none';
    document.getElementById('game-hud').style.display = 'none';

    if (this.skillManager) {
      this.skillManager.resetCombo();
    }
    const stBanner = document.getElementById('speed-trap-banner');
    if (stBanner) stBanner.classList.remove('show');

    if (this.playerVehicle) {
      this.scene.remove(this.playerVehicle.mesh);
      this.playerVehicle = null;
    }
    if (this.aiVehicle) {
      this.scene.remove(this.aiVehicle.mesh);
      this.aiVehicle = null;
    }

    if (this.skidmarksMesh) {
      this.skidmarksMesh.visible = false;
    }

    this.setupGarageShowroom();
  }

  restartRace() {
    this.returnToGarage();
    setTimeout(() => {
      this.startRace();
    }, 150);
  }

  // 主渲染與遊戲物理步進
  animate() {
    requestAnimationFrame(this.animate);
    try {
      const dt = Math.min(this.clock.getDelta(), 0.05);

      if (this.state === 'GARAGE') {
        // 展示台旋轉車輛與動態環繞視角
        if (this.garageTurntable) {
          this.garageTurntable.rotation.y += dt * 0.45;
        }
        this.camera.position.set(0, 32, -135);
        this.camera.lookAt(0, 16, 0);

      } else if (this.state === 'COUNTDOWN' || this.state === 'RACING' || this.state === 'FINISHED') {
        const boostPads = this.trackBuilder ? this.trackBuilder.getBoostPads() : [];
        const checkpoints = this.trackBuilder ? this.trackBuilder.getCheckpoints() : [];

        // 1. 更新玩家車輛物理
        if (this.playerVehicle) {
          const activeInput = (this.state === 'RACING') ? this.input : { up: false, down: false, left: false, right: false, handbrake: false, nitro: false };
          this.playerVehicle.update(dt, activeInput, this.trackCurve, this.trackBuilder.trackWidth, boostPads, this.audio);
          this.playerVehicle.updateLap(checkpoints, this.audio);

          // 地平線技術分數連擊更新 (Drift, Speed, Near Miss, Burnout, Clean Racing)
          if (this.skillManager && this.state === 'RACING') {
            this.skillManager.update(dt, this.playerVehicle, this.aiVehicle, this.audio);
          }

          // 地平線測速照相機 (Speed Trap) 檢測
          if (this.state === 'RACING') {
            this.checkSpeedTraps();
          }

          if (this.playerVehicle.raceFinished && this.state === 'RACING') {
            this.finishRace();
          }
        }

        // 2. 更新 AI 對手物理
        if (this.aiVehicle && this.state === 'RACING') {
          this.aiVehicle.updateAI(dt, this.trackCurve, this.trackBuilder.trackWidth, boostPads, this.playerVehicle);
          this.aiVehicle.updateLap(checkpoints, null);
        }

        // 3. 更新動態追隨鏡頭
        this.updateCamera(dt);

        // 4. 更新音效引擎 (傳送真實 RPM、檔位、換檔切斷、輪胎側滑角與紅線斷油)
        if (this.playerVehicle) {
          this.audio.update(
            this.playerVehicle.speed,
            this.playerVehicle.maxSpeed,
            this.playerVehicle.isAccelerating,
            this.playerVehicle.isBraking,
            this.playerVehicle.isBoosting,
            this.playerVehicle.isDrifting,
            this.playerVehicle.rpm,
            this.playerVehicle.gear,
            this.playerVehicle.isShifting,
            this.playerVehicle.slipAngle,
            this.playerVehicle.isRevLimiting
          );
        }

        // 5. 更新甩尾與火花特效
        this.updateParticleEffects(dt);

        // 6. 更新賽博 HUD
        this.updateHUD();

        // 7. 繪製全賽道 Mini-map
        this.renderMinimap();
      }

      this.renderer.render(this.scene, this.camera);
    } catch (renderErr) {
      console.warn("Render loop tick warning:", renderErr);
    }
  }

  // 穩固流暢的地平線追隨鏡頭系統 (Stable Horizon Chase Camera)
  updateCamera(dt) {
    if (!this.playerVehicle) return;

    const carPos = this.playerVehicle.position;
    const carHeading = this.playerVehicle.heading;
    const absSpeed = Math.abs(this.playerVehicle.speed);
    const speedRatio = Math.min(absSpeed / this.playerVehicle.maxSpeed, 1.0);

    if (this.cameraMode === 'chase') {
      // 1. 角度差計算 (嚴格進行 ±PI 繞向環繞，徹底杜絕旋轉狂轉與角度跳變)
      if (this.cameraHeading === undefined) {
        this.cameraHeading = carHeading;
      }

      let angleDiff = carHeading - this.cameraHeading;
      while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
      while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;

      // 追隨旋轉阻尼：直線與正常轉向平滑跟隨 (8.5)，甩尾時允許車身側向滑移入鏡 (5.0)
      const rotSpeed = this.playerVehicle.isDrifting ? 5.0 : 8.5;
      this.cameraHeading += angleDiff * Math.min(1.0, rotSpeed * dt);

      // 2. 視距與視高：居高臨下穩定俯視前路，移除隨機高頻抖動
      const accelOffset = (this.playerVehicle.isAccelerating ? -4 : 0) + (this.playerVehicle.isBraking ? 6 : 0);
      const backDist = 145 + speedRatio * 18 + accelOffset;
      const camHeight = 36 + speedRatio * 5;

      const targetCamX = carPos.x - Math.sin(this.cameraHeading) * backDist;
      const targetCamY = carPos.y + camHeight;
      const targetCamZ = carPos.z - Math.cos(this.cameraHeading) * backDist;

      // 3. 平滑位置彈簧阻尼
      const posDamp = Math.min(1.0, dt * 10.0);
      this.camera.position.x += (targetCamX - this.camera.position.x) * posDamp;
      this.camera.position.y += (targetCamY - this.camera.position.y) * posDamp;
      this.camera.position.z += (targetCamZ - this.camera.position.z) * posDamp;

      // 4. 瞄準焦點：精準鎖定在車頭延伸線前方，車身永遠穩固位於畫面下半部，視界清晰安定
      const lookAhead = 35;
      const targetLook = new THREE.Vector3(
        carPos.x + Math.sin(carHeading) * lookAhead,
        carPos.y + 11,
        carPos.z + Math.cos(carHeading) * lookAhead
      );
      this.camera.lookAt(targetLook);

      // 5. 自然視野動態折躍 (58° 巡航 -> 72° 高速 -> 78° 氮氣加速)
      const targetFov = this.playerVehicle.isBoosting ? 78 : (58 + speedRatio * 14);
      this.camera.fov += (targetFov - this.camera.fov) * Math.min(1.0, dt * 4.5);
      this.camera.updateProjectionMatrix();

    } else if (this.cameraMode === 'hood') {
      // 引擎蓋座艙主觀駕駛視角 (極致路面流速狂飆體驗)
      const forwardDist = 20;
      const hoodHeight = 17;
      this.camera.position.set(
        carPos.x + Math.sin(carHeading) * forwardDist,
        carPos.y + hoodHeight,
        carPos.z + Math.cos(carHeading) * forwardDist
      );
      const lookAhead = 160;
      const targetLook = new THREE.Vector3(
        carPos.x + Math.sin(carHeading) * lookAhead,
        carPos.y + 15,
        carPos.z + Math.cos(carHeading) * lookAhead
      );
      this.camera.lookAt(targetLook);

      const targetFov = this.playerVehicle.isBoosting ? 82 : (60 + speedRatio * 16);
      this.camera.fov += (targetFov - this.camera.fov) * Math.min(1.0, dt * 5.0);
      this.camera.updateProjectionMatrix();

    } else if (this.cameraMode === 'top') {
      // 賽事電視轉播遠景追隨視角
      const topHeight = 85;
      const topBack = 185;
      const targetX = carPos.x - Math.sin(carHeading) * topBack;
      const targetZ = carPos.z - Math.cos(carHeading) * topBack;
      this.camera.position.x += (targetX - this.camera.position.x) * Math.min(1.0, dt * 7.5);
      this.camera.position.y += (carPos.y + topHeight - this.camera.position.y) * Math.min(1.0, dt * 7.5);
      this.camera.position.z += (targetZ - this.camera.position.z) * Math.min(1.0, dt * 7.5);
      this.camera.lookAt(
        carPos.x + Math.sin(carHeading) * 40,
        carPos.y + 10,
        carPos.z + Math.cos(carHeading) * 40
      );
    }
  }

  // 擬真輪胎白煙與排氣管回火烈焰更新
  updateParticleEffects(dt) {
    if (!this.sparksParticleSystem || !this.playerVehicle) return;

    const positions = this.sparksParticleSystem.geometry.attributes.position.array;
    const vels = this.sparksParticleSystem.userData.vel;
    const smokeIntensity = this.playerVehicle.smokeIntensity || 0;
    const carPos = this.playerVehicle.position;
    const heading = this.playerVehicle.heading;
    const fwdX = Math.sin(heading);
    const fwdZ = Math.cos(heading);
    const sideX = Math.cos(heading);
    const sideZ = -Math.sin(heading);

    // 1. 輪胎焦煙粒子生成 (後輪打滑、燒胎或重煞時噴發濃密白煙)
    if (smokeIntensity > 0.04) {
      const spawnCount = Math.ceil(smokeIntensity * 4);
      for (let s = 0; s < spawnCount; s++) {
        for (let i = 0; i < vels.length; i++) {
          if (vels[i].life <= 0) {
            // 隨機在左後輪或右後輪地面接觸點生成
            const isLeft = Math.random() < 0.5;
            const wheelSide = isLeft ? -38 : 38;
            const emitterX = carPos.x - fwdX * 48 + sideX * wheelSide;
            const emitterZ = carPos.z - fwdZ * 48 + sideZ * wheelSide;

            positions[i * 3] = emitterX + (Math.random() - 0.5) * 8;
            positions[i * 3 + 1] = carPos.y + 1.2;
            positions[i * 3 + 2] = emitterZ + (Math.random() - 0.5) * 8;

            vels[i] = {
              x: -fwdX * (15 + Math.random() * 20) + (Math.random() - 0.5) * 16,
              y: 5 + Math.random() * 12,
              z: -fwdZ * (15 + Math.random() * 20) + (Math.random() - 0.5) * 16,
              life: 0.85 + Math.random() * 0.35,
              maxLife: 1.2
            };
            break;
          }
        }
      }
    }

    // 推進現有白煙粒子 (上升膨脹並飄散消逝)
    for (let i = 0; i < vels.length; i++) {
      if (vels[i].life > 0) {
        positions[i * 3] += vels[i].x * dt;
        positions[i * 3 + 1] += vels[i].y * dt;
        positions[i * 3 + 2] += vels[i].z * dt;
        vels[i].y += dt * 4.0; // 熱空氣向上飄升
        vels[i].life -= dt * 1.2;
        if (vels[i].life <= 0) {
          positions[i * 3 + 1] = -999;
        }
      }
    }
    this.sparksParticleSystem.geometry.attributes.position.needsUpdate = true;

    // 2. 地面黑色輪胎煞車印痕
    if (this.playerVehicle.generateSkidmarks && this.skidmarksMesh) {
      const p = this.skidmarksMesh.geometry.attributes.position.array;

      const leftX = carPos.x - fwdX * 42 - sideX * 36;
      const leftZ = carPos.z - fwdZ * 42 - sideZ * 36;
      const rightX = carPos.x - fwdX * 42 + sideX * 36;
      const rightZ = carPos.z - fwdZ * 42 + sideZ * 36;
      const groundY = carPos.y + 0.45;

      const idxL = (this.skidmarkIdx % 400) * 2;
      p[idxL * 3] = leftX;
      p[idxL * 3 + 1] = groundY;
      p[idxL * 3 + 2] = leftZ;

      p[(idxL + 1) * 3] = rightX;
      p[(idxL + 1) * 3 + 1] = groundY;
      p[(idxL + 1) * 3 + 2] = rightZ;

      this.skidmarkIdx++;
      this.skidmarksMesh.geometry.attributes.position.needsUpdate = true;
    }

    // 3. 排氣管噴火與回火特效 (Exhaust Conical Flames)
    if (this.flamesParticleSystem) {
      const fPos = this.flamesParticleSystem.geometry.attributes.position.array;
      const fVels = this.flamesParticleSystem.userData.vel;

      if (this.playerVehicle.backfireEvent || this.playerVehicle.isBoosting) {
        for (let s of [-14, 14]) {
          for (let i = 0; i < fVels.length; i++) {
            if (fVels[i].life <= 0) {
              fPos[i * 3] = carPos.x - fwdX * 68 + sideX * s;
              fPos[i * 3 + 1] = carPos.y + 11.5;
              fPos[i * 3 + 2] = carPos.z - fwdZ * 68 + sideZ * s;

              fVels[i] = {
                x: -fwdX * (110 + Math.random() * 45) + (Math.random() - 0.5) * 12,
                y: (Math.random() - 0.2) * 14,
                z: -fwdZ * (110 + Math.random() * 45) + (Math.random() - 0.5) * 12,
                life: 0.18
              };
              break;
            }
          }
        }
      }

      for (let i = 0; i < fVels.length; i++) {
        if (fVels[i].life > 0) {
          fPos[i * 3] += fVels[i].x * dt;
          fPos[i * 3 + 1] += fVels[i].y * dt;
          fPos[i * 3 + 2] += fVels[i].z * dt;
          fVels[i].life -= dt * 6.5;
          if (fVels[i].life <= 0) {
            fPos[i * 3 + 1] = -999;
          }
        }
      }
      this.flamesParticleSystem.geometry.attributes.position.needsUpdate = true;
    }
  }

  // 賽事級 Motec 數位儀表與遠程數據即時更新
  updateHUD() {
    if (!this.playerVehicle) return;

    const absSpeed = Math.round(Math.abs(this.playerVehicle.speed));
    const speedEl = document.getElementById('hud-speed-val');
    if (speedEl) speedEl.textContent = absSpeed;

    // 1. 檔位與地平線經典圓弧轉速儀表 (Forza Horizon Circular Dial)
    const gearEl = document.getElementById('hud-gear-val');
    if (gearEl) {
      if (this.playerVehicle.isReversing) gearEl.textContent = 'R';
      else if (absSpeed < 1 && !this.playerVehicle.isAccelerating) gearEl.textContent = 'N';
      else gearEl.textContent = this.playerVehicle.gear || 1;
    }

    const tachoArc = document.getElementById('tacho-rpm-arc');
    if (tachoArc) {
      // 240 度圓弧總長 351.85 (半徑 84)
      const curRpm = this.playerVehicle.rpm || 1000;
      const rpmRatio = Math.max(0, Math.min(1.0, (curRpm - 1000) / 7250));
      const dashOffset = 351.85 * (1.0 - rpmRatio);
      tachoArc.style.strokeDashoffset = dashOffset;

      // 7700 RPM 以上或紅線斷油爆閃
      if (curRpm > 7700 || this.playerVehicle.isRevLimiting) {
        tachoArc.classList.add('redline');
      } else {
        tachoArc.classList.remove('redline');
      }
    }

    // 2. 地平線輔助系統動態指示燈 (E-BRAKE, ABS, TCS)
    const ebrakePill = document.getElementById('assist-ebrake');
    const absPill = document.getElementById('assist-abs');
    const tcsPill = document.getElementById('assist-tcs');

    if (ebrakePill) {
      const isHandbraking = this.input.handbrake || this.playerVehicle.isHandbraking;
      ebrakePill.classList.toggle('active', !!isHandbraking);
      ebrakePill.classList.toggle('ebrake', !!isHandbraking);
    }
    if (absPill) {
      const isAbsActive = this.playerVehicle.isBraking && absSpeed > 30 && (Math.abs(this.playerVehicle.slipAngle || 0) > 0.08 || (this.playerVehicle.understeerRatio || 0) > 0.15);
      absPill.classList.toggle('active', isAbsActive);
      absPill.classList.toggle('abs', isAbsActive);
    }
    if (tcsPill) {
      const isTcsActive = this.playerVehicle.isAccelerating && ((this.playerVehicle.smokeIntensity || 0) > 0.1 || this.playerVehicle.isDrifting);
      tcsPill.classList.toggle('active', isTcsActive);
      tcsPill.classList.toggle('tcs', isTcsActive);
    }

    // 3. 累積 HORIZON XP 總分顯示
    const totalXpEl = document.getElementById('hud-total-xp');
    if (totalXpEl) {
      totalXpEl.textContent = (this.totalHorizonXP || 0).toLocaleString();
    }

    // 3. G 力摩擦圓盤 (Friction Circle G-Meter)
    const gDot = document.getElementById('g-meter-dot');
    const gReadout = document.getElementById('g-meter-readout');
    if (gDot) {
      // 側向 G: 左右偏移，縱向 G: 上下偏移
      const dotX = 50 - Math.max(-42, Math.min(42, (this.playerVehicle.lateralG || 0) * 28));
      const dotY = 50 - Math.max(-42, Math.min(42, (this.playerVehicle.longitudinalG || 0) * 28));
      gDot.style.left = `calc(${dotX}% - 3.5px)`;
      gDot.style.top = `calc(${dotY}% - 3.5px)`;

      const totalG = Math.sqrt((this.playerVehicle.lateralG || 0) ** 2 + (this.playerVehicle.longitudinalG || 0) ** 2);
      if (gReadout) {
        gReadout.textContent = totalG.toFixed(1) + 'G';
      }
    }

    // 4. 四輪即時抓地力監控 (Tire Grip HUD)
    if (this.playerVehicle.tireGrip) {
      const updateTireEl = (id, val) => {
        const el = document.getElementById(id);
        if (!el) return;
        if (val > 0.72) {
          el.style.background = '#00ff88';
          el.style.boxShadow = '0 0 6px rgba(0, 255, 136, 0.6)';
        } else if (val > 0.42) {
          el.style.background = '#ffaa00';
          el.style.boxShadow = '0 0 8px rgba(255, 170, 0, 0.8)';
        } else {
          el.style.background = '#ff0055';
          el.style.boxShadow = '0 0 12px rgba(255, 0, 85, 0.9)';
        }
      };
      updateTireEl('tire-fl', this.playerVehicle.tireGrip.fl);
      updateTireEl('tire-fr', this.playerVehicle.tireGrip.fr);
      updateTireEl('tire-rl', this.playerVehicle.tireGrip.rl);
      updateTireEl('tire-rr', this.playerVehicle.tireGrip.rr);
    }

    // 5. 動態警示標籤 (Understeer / Drift / Rev Limit)
    const alertBadge = document.getElementById('dynamics-alert');
    if (alertBadge) {
      if (this.playerVehicle.isRevLimiting) {
        alertBadge.textContent = "REV LIMIT 斷油";
        alertBadge.className = "dynamics-badge revlimit";
      } else if (this.playerVehicle.understeerRatio > 0.28) {
        alertBadge.textContent = "UNDERSTEER 推頭";
        alertBadge.className = "dynamics-badge understeer";
      } else if (this.playerVehicle.isDrifting || this.playerVehicle.oversteerRatio > 0.28) {
        alertBadge.textContent = "DRIFT 側滑甩尾";
        alertBadge.className = "dynamics-badge oversteer";
      } else {
        alertBadge.textContent = "GRIP BALANCED";
        alertBadge.className = "dynamics-badge";
      }
    }

    // 6. 高速周邊動態風線 (Speed Wind Overlay)
    const windOverlay = document.getElementById('speed-wind-overlay');
    if (windOverlay) {
      if (absSpeed > 160) {
        const windOpacity = Math.min(0.85, (absSpeed - 160) / 140);
        windOverlay.style.opacity = windOpacity;
      } else {
        windOverlay.style.opacity = '0';
      }
    }

    // 7. 氮氣槽
    const nosBar = document.getElementById('nos-bar');
    const nosValText = document.getElementById('nos-val-text');
    if (nosBar) {
      const pct = Math.round((this.playerVehicle.nitro / this.playerVehicle.maxNitro) * 100);
      nosBar.style.width = pct + '%';
      if (nosValText) nosValText.textContent = pct + '%';
      if (this.playerVehicle.isBoosting) {
        nosBar.classList.add('pulsing');
        const overlay = document.getElementById('nitro-warp-overlay');
        if (overlay) overlay.classList.add('active');
      } else {
        nosBar.classList.remove('pulsing');
        const overlay = document.getElementById('nitro-warp-overlay');
        if (overlay) overlay.classList.remove('active');
      }
    }

    // 8. 圈數與單圈時間
    const lapEl = document.getElementById('hud-lap-val');
    const timeEl = document.getElementById('hud-time-val');
    const bestEl = document.getElementById('hud-best-val');
    const posEl = document.getElementById('hud-pos-val');

    if (lapEl) lapEl.textContent = `${Math.min(3, this.playerVehicle.lap)}/3`;
    if (timeEl) timeEl.textContent = this.playerVehicle.currentLapTime.toFixed(1) + 's';
    if (bestEl) {
      bestEl.textContent = (this.playerVehicle.bestLapTime < Infinity) ? this.playerVehicle.bestLapTime.toFixed(1) + 's' : '--';
    }

    // 9. 排名計算 (Player vs AI)
    if (posEl) {
      if (this.aiVehicle) {
        const pScore = this.playerVehicle.lap * 10 + this.playerVehicle.lapProgress;
        const aiScore = this.aiVehicle.lap * 10 + this.aiVehicle.lapProgress;
        posEl.textContent = (pScore >= aiScore) ? "1st" : "2nd";
        posEl.className = (pScore >= aiScore) ? "stat-item-val pos-gold" : "stat-item-val";
      } else {
        posEl.textContent = "1st";
      }
    }
  }

  // 繪製全賽道 Mini-map
  renderMinimap() {
    if (!this.minimapCtx || !this.trackCurve) return;
    const ctx = this.minimapCtx;
    const w = this.minimapCanvas.width;
    const h = this.minimapCanvas.height;

    ctx.clearRect(0, 0, w, h);

    const mapMinX = -1600;
    const mapMaxX = 2100;
    const mapMinZ = -900;
    const mapMaxZ = 2500;

    const toCanvasX = (wx) => 12 + ((wx - mapMinX) / (mapMaxX - mapMinX)) * (w - 24);
    const toCanvasY = (wz) => 12 + ((wz - mapMinZ) / (mapMaxZ - mapMinZ)) * (h - 24);

    // 1. 繪製賽道軌跡
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = 'rgba(0, 240, 255, 0.35)';
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    const samples = 80;
    for (let i = 0; i <= samples; i++) {
      const pt = this.trackCurve.getPointAt(i / samples);
      const cx = toCanvasX(pt.x);
      const cy = toCanvasY(pt.z);
      if (i === 0) ctx.moveTo(cx, cy);
      else ctx.lineTo(cx, cy);
    }
    ctx.closePath();
    ctx.stroke();

    // 2. 繪製 AI 賽車位置 (紅點)
    if (this.aiVehicle) {
      const aiX = toCanvasX(this.aiVehicle.position.x);
      const aiY = toCanvasY(this.aiVehicle.position.z);
      ctx.beginPath();
      ctx.arc(aiX, aiY, 4.5, 0, Math.PI * 2);
      ctx.fillStyle = '#ff0055';
      ctx.fill();
    }

    // 3. 繪製玩家位置 (天青藍點)
    if (this.playerVehicle) {
      const pX = toCanvasX(this.playerVehicle.position.x);
      const pY = toCanvasY(this.playerVehicle.position.z);
      ctx.beginPath();
      ctx.arc(pX, pY, 5.5, 0, Math.PI * 2);
      ctx.fillStyle = '#00f0ff';
      ctx.fill();
    }
  }

  // 鍵盤與手勢操作監聽
  setupEventListeners() {
    window.addEventListener('keydown', (e) => {
      this.audio.init();
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) {
        e.preventDefault();
      }
      switch (e.code) {
        case 'KeyW':
        case 'ArrowUp':
          this.input.up = true;
          break;
        case 'KeyS':
        case 'ArrowDown':
          this.input.down = true;
          break;
        case 'KeyA':
        case 'ArrowLeft':
          this.input.left = true;
          break;
        case 'KeyD':
        case 'ArrowRight':
          this.input.right = true;
          break;
        case 'Space':
          this.input.handbrake = true;
          break;
        case 'ShiftLeft':
        case 'ShiftRight':
          this.input.nitro = true;
          break;
        case 'KeyC':
          this.toggleCameraMode();
          break;
        case 'KeyR':
          this.resetPlayerCar();
          break;
        case 'KeyM':
          this.toggleAudio();
          break;
      }
    });

    window.addEventListener('keyup', (e) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) {
        e.preventDefault();
      }
      switch (e.code) {
        case 'KeyW':
        case 'ArrowUp':
          this.input.up = false;
          break;
        case 'KeyS':
        case 'ArrowDown':
          this.input.down = false;
          break;
        case 'KeyA':
        case 'ArrowLeft':
          this.input.left = false;
          break;
        case 'KeyD':
        case 'ArrowRight':
          this.input.right = false;
          break;
        case 'Space':
          this.input.handbrake = false;
          break;
        case 'ShiftLeft':
        case 'ShiftRight':
          this.input.nitro = false;
          break;
      }
    });

    // 觸控按鍵
    const bindTouch = (id, key) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.addEventListener('pointerdown', (e) => { e.preventDefault(); this.audio.init(); this.input[key] = true; });
      el.addEventListener('pointerup', (e) => { e.preventDefault(); this.input[key] = false; });
      el.addEventListener('pointercancel', (e) => { e.preventDefault(); this.input[key] = false; });
    };

    bindTouch('touch-left', 'left');
    bindTouch('touch-right', 'right');
    bindTouch('touch-gas', 'up');
    bindTouch('touch-brake', 'down');
    bindTouch('touch-nitro', 'nitro');
  }

  // 檢測地平線測速照相機 (Speed Trap Detection)
  checkSpeedTraps() {
    if (!this.playerVehicle || !this.trackBuilder) return;
    const traps = this.trackBuilder.getSpeedTraps();
    if (!traps || traps.length === 0) return;

    const carPos = this.playerVehicle.position;
    const now = performance.now();

    for (let trap of traps) {
      if (now - trap.lastTriggerTime < 5000) continue; // 5秒內不重複觸發
      const dist = carPos.distanceTo(trap.position);
      if (dist < (trap.radius || 65)) {
        trap.lastTriggerTime = now;
        const currentSpeed = Math.abs(this.playerVehicle.speed);
        this.triggerSpeedTrap(trap, currentSpeed);
      }
    }
  }

  // 觸發測速照相快門爆閃與星級榮耀通報
  triggerSpeedTrap(trap, speed) {
    const flashEl = document.getElementById('speed-trap-flash');
    const bannerEl = document.getElementById('speed-trap-banner');
    const speedValEl = document.getElementById('st-speed-val');
    const starsEl = document.getElementById('st-stars');

    // 1. 測速照相白熾爆閃光 (Camera Flash)
    if (flashEl) {
      flashEl.classList.remove('flash');
      void flashEl.offsetWidth; // 強制重繪
      flashEl.classList.add('flash');
      setTimeout(() => {
        if (flashEl) flashEl.classList.remove('flash');
      }, 400);
    }

    // 2. 星級評定與獎勵點數
    let stars = 1;
    let starText = "⭐ 1 STAR - KEEP PUSHING!";
    let points = 250;
    if (speed >= (trap.target3Star || 240)) {
      stars = 3;
      starText = "⭐⭐⭐ 3 STARS - HORIZON LEGEND!";
      points = 1000;
    } else if (speed >= (trap.target2Star || 185)) {
      stars = 2;
      starText = "⭐⭐ 2 STARS - GREAT SPEED!";
      points = 500;
    }

    if (speedValEl) speedValEl.textContent = speed.toFixed(1);
    if (starsEl) starsEl.textContent = `${starText} (+${points} XP)`;

    if (bannerEl) {
      bannerEl.classList.add('show');
      clearTimeout(this._speedTrapTimer);
      this._speedTrapTimer = setTimeout(() => {
        if (bannerEl) bannerEl.classList.remove('show');
      }, 2800);
    }

    // 3. 納入技術分數連擊系統
    if (this.skillManager) {
      this.skillManager.addSkill(`SPEED TRAP 測速照相 (${stars}★)`, points, 'speed');
    }

    // 4. 音效回饋 (快門喀嚓聲 + 嘉年華榮耀和弦)
    if (this.audio && this.audio.playSpeedTrapSound) {
      this.audio.playSpeedTrapSound(stars);
    }
  }

  // 車輛重置
  resetPlayerCar() {
    if (!this.playerVehicle || !this.trackCurve) return;
    const closest = this.playerVehicle.getClosestTrackPoint(this.trackCurve);
    if (closest) {
      const tangent = this.trackCurve.getTangentAt(closest.t).normalize();
      const heading = Math.atan2(tangent.x, tangent.z);
      this.playerVehicle.resetTo(closest.point.clone().add(new THREE.Vector3(0, 0.5, 0)), heading);
      this.cameraHeading = heading;
    }
  }

  toggleCameraMode() {
    const modes = ['chase', 'hood', 'top'];
    const idx = modes.indexOf(this.cameraMode);
    this.cameraMode = modes[(idx + 1) % modes.length];

    const btn = document.getElementById('cam-btn');
    if (btn) {
      const labels = { chase: '🏎️ HORIZON 甩尾追隨', hood: '🚘 車頭駕駛艙', top: '📐 鳥瞰視角' };
      btn.textContent = labels[this.cameraMode];
    }
  }

  toggleAudio() {
    const isAudioOn = this.audio.toggleAudio();
    const btn = document.getElementById('audio-btn');
    if (btn) {
      btn.textContent = isAudioOn ? '🔊 SOUND ON' : '🔇 MUTE';
      btn.classList.toggle('active', isAudioOn);
    }
  }

  // UI 按鈕交互綁定
  setupUIHandlers() {
    const clickHelper = (id, handler) => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('click', (e) => {
          e.stopPropagation();
          this.audio.playClick();
          handler(e);
        });
      }
    };

    // 頂部 HUD 按鈕
    clickHelper('audio-btn', () => this.toggleAudio());
    clickHelper('cam-btn', () => this.toggleCameraMode());
    clickHelper('garage-btn', () => this.returnToGarage());
    clickHelper('radio-btn', () => {
      if (this.audio && this.audio.toggleHorizonRadio) {
        const isPlaying = this.audio.toggleHorizonRadio();
        const btn = document.getElementById('radio-btn');
        if (btn) {
          btn.textContent = isPlaying ? '📻 HORIZON BASS ARENA [ON]' : '📻 HORIZON RADIO [OFF]';
          btn.classList.toggle('active', isPlaying);
        }
      }
    });

    // 車型切換
    const tabCyber = document.getElementById('tab-cyber');
    const tabInferno = document.getElementById('tab-inferno');

    if (tabCyber) {
      tabCyber.addEventListener('click', (e) => {
        e.stopPropagation();
        this.selectedCarType = 'cyber';
        this.selectedColor = 0x00f0ff;
        tabCyber.classList.add('active');
        if (tabInferno) tabInferno.classList.remove('active');
        this.setupGarageShowroom();
      });
    }

    if (tabInferno) {
      tabInferno.addEventListener('click', (e) => {
        e.stopPropagation();
        this.selectedCarType = 'inferno';
        this.selectedColor = 0xff0055;
        tabInferno.classList.add('active');
        if (tabCyber) tabCyber.classList.remove('active');
        this.setupGarageShowroom();
      });
    }

    // 塗裝調色盤
    document.querySelectorAll('.swatch-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        document.querySelectorAll('.swatch-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const hex = parseInt(btn.dataset.color, 16);
        this.selectedColor = hex;
        if (this.garageCarMesh && this.garageCarMesh.userData.setColor) {
          this.garageCarMesh.userData.setColor(hex);
        }
      });
    });

    // 模式選擇
    document.querySelectorAll('.mode-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.gameMode = btn.dataset.mode;
      });
    });

    // 開始比賽
    clickHelper('start-race-btn', () => this.startRace());

    // 結算面板
    clickHelper('modal-retry-btn', () => this.restartRace());
    clickHelper('modal-garage-btn', () => this.returnToGarage());
  }

  onWindowResize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  }
}

// 穩健啟動程序 (防止 DOMContentLoaded 提前觸發)
function launchGame() {
  if (window.gameInstance) return;
  try {
    window.gameInstance = new CyberRacingGame();
    window.game = window.gameInstance;
  } catch (err) {
    console.error("Game bootstrap error:", err);
    if (window.onerror) window.onerror(err.message, 'game.js', 0, 0, err);
  }
}

window.CyberRacingGame = CyberRacingGame;
window.launchGame = launchGame;

if (document.readyState === 'complete' || document.readyState === 'interactive') {
  setTimeout(launchGame, 20);
} else {
  document.addEventListener('DOMContentLoaded', launchGame);
  window.addEventListener('load', launchGame);
}
