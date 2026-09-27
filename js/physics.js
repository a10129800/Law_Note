/**
 * PhysicsEngine - 殿堂級專業擬真賽車動力學引擎 (GT Pro Motorsport Dynamics)
 * 完美平衡真實物理重量感與流暢操控手感：
 * 1. 速度感應動態轉向角 (Speed-Sensitive Dynamic Steering Rack)
 * 2. 偏航轉向慣性與輪胎咬向咬合 (Chassis Yaw Inertia & Tire Bite)
 * 3. 實體 6 速序列式齒輪箱 (0-100 加速 ~2.4s, 換檔頓挫, 退檔補油, 紅線斷油回彈)
 * 4. 碳陶賽車級高制動力煞車系統 (High-Decel Racing Brakes with Nose-Dive Trail Braking)
 * 5. 動態慣性漂移與反打方向盤平衡 (Momentum Drift & Counter-Steering Stabilizer)
 * 6. 輪胎抓地極限推頭 (Understeer) 與甩尾 (Oversteer) 模擬
 * 7. 即時四輪抓地遙測數據 (4-Wheel Telemetry) 與濃密輪胎白煙
 */

class VehiclePhysics {
  constructor(carMesh, specs, isPlayer = true) {
    this.mesh = carMesh;
    this.specs = specs;
    this.isPlayer = isPlayer;

    // 車輛實體參數
    this.mass = 1380;          // 車重 kg
    this.wheelbase = 2.72;     // 軸距 (米)
    this.distFront = 1.28;     // 重心 (CG) 至前軸距離 (米)
    this.distRear = 1.44;      // 重心 (CG) 至後軸距離 (米)

    // 運動學與速度狀態
    this.position = new THREE.Vector3();
    this.velocity = new THREE.Vector3(); // 世界座標系下的速度 (m/s)
    this.heading = 0;                    // 車身朝向角 (Yaw 弧度)
    this.yawRate = 0;                    // 偏航角速度 (rad/s)
    this.speed = 0;                      // 標量車速 (km/h)
    this.steerAngle = 0;                 // 前輪實際轉向角 (弧度)
    this.targetSteer = 0;                // 駕駛員輸入目標轉向角

    // 輪胎側滑與抓地力
    this.driftAngle = 0;                 // 車身滑移角 (弧度)
    this.slipAngle = 0;                  // 綜合側滑角
    this.lateralG = 0;                   // 側向加速度 (G)
    this.longitudinalG = 0;              // 縱向加速度 (G)
    this.understeerRatio = 0;            // 推頭指數 (0~1)
    this.oversteerRatio = 0;             // 甩尾指數 (0~1)
    this.smokeIntensity = 0;             // 輪胎白煙強度 (0~1)
    this.wheelSpin = 0;                  // 驅動輪打滑率
    this.generateSkidmarks = false;

    // 四輪即時抓地狀態 (供 Motec 賽車儀表顯示)
    this.tireGrip = {
      fl: 1.0, fr: 1.0,
      rl: 1.0, rr: 1.0
    };

    // 傳動系統與真實引擎轉速 (1000 ~ 8500 RPM)
    this.gear = 1;
    this.rpm = 1050;
    this.idleRpm = 1050;
    this.redlineRpm = 8250;
    this.isShifting = false;
    this.shiftTimer = 0;
    this.isRevLimiting = false;
    this.revLimiterTimer = 0;
    this.backfireEvent = false;

    // 6 速序列式變速齒輪箱規格
    this.gearMaxSpeeds = [0, 85, 142, 198, 252, 302, 355];
    this.gearMinSpeeds = [0, 0, 58, 110, 165, 218, 268];
    this.gearRatios = [0, 3.8, 2.45, 1.78, 1.35, 1.06, 0.88];

    // 載重轉移與姿態 (Weight Transfer)
    this.pitch = 0;                      // 前後俯仰角 (Braking Dive / Acceleration Squat)
    this.roll = 0;                       // 左右側傾角 (Cornering Roll)
    this.dynamicPitch = 0;               // 懸吊動態俯仰 (煞車下沉/加速下蹲)
    this.onKerb = false;

    // 操作狀態開關
    this.isAccelerating = false;
    this.isBraking = false;
    this.isReversing = false;
    this.isDrifting = false;
    this.isBoosting = false;
    this.wasAccelerating = false;
    this.wasBoosting = false;
    this.hardImpact = false;
    this.nitro = specs.nitroCap || 100;
    this.maxNitro = specs.nitroCap || 100;

    // 比賽進度
    this.lap = 1;
    this.currentCheckpoint = 0;
    this.lapProgress = 0;
    this.lapStartTime = 0;
    this.currentLapTime = 0;
    this.bestLapTime = Infinity;
    this.lapHistory = [];
    this.raceFinished = false;

    // 性能基礎調諧
    this.maxSpeed = specs.topSpeed || 325;
    this.boostMaxSpeed = this.maxSpeed * 1.25;
    this.accelRate = (specs.accel || 9.2) * 16.5; // 基礎加速率 (~150)
    this.brakingRate = 195.0;                     // 碳陶賽車級強煞車 (~195 km/h/s)
    this.naturalDrag = 28.0;                      // 基礎滾動與風阻
  }

  resetTo(position, heading) {
    this.position.copy(position);
    this.heading = heading;
    this.speed = 0;
    this.velocity.set(0, 0, 0);
    this.yawRate = 0;
    this.steerAngle = 0;
    this.targetSteer = 0;
    this.pitch = 0;
    this.roll = 0;
    this.dynamicPitch = 0;
    this.gear = 1;
    this.rpm = this.idleRpm;
    this.isShifting = false;
    this.shiftTimer = 0;
    this.isRevLimiting = false;
    this.driftAngle = 0;
    this.slipAngle = 0;
    this.lateralG = 0;
    this.longitudinalG = 0;
    this.understeerRatio = 0;
    this.oversteerRatio = 0;
    this.smokeIntensity = 0;
    this.wheelSpin = 0;
    this.onKerb = false;
    this.generateSkidmarks = false;
    this.backfireEvent = false;
    this.isDrifting = false;
    this.isBoosting = false;
    this.nitro = this.maxNitro;
    this.lap = 1;
    this.currentCheckpoint = 0;
    this.lapProgress = 0;
    this.raceFinished = false;
    this.tireGrip = { fl: 1.0, fr: 1.0, rl: 1.0, rr: 1.0 };
    this.syncMeshTransform();
  }

  update(dt, input, trackCurve, trackWidth, boostPads, audioSynth) {
    if (this.raceFinished) {
      this.speed *= Math.max(0, 1 - dt * 1.5);
    }

    dt = Math.min(dt, 0.05); // 防止大跳幀
    this.backfireEvent = false;
    this.hardImpact = false;

    // ==========================================
    // 1. 序列式齒輪箱傳動、加速與煞車動力學
    // ==========================================
    const targetTopSpeed = this.isBoosting ? this.boostMaxSpeed : this.maxSpeed;
    const absSpeed = Math.abs(this.speed);

    // 換檔動力切斷衝擊 (0.075 秒離合斷油頓挫)
    if (this.isShifting) {
      this.shiftTimer -= dt;
      if (this.shiftTimer <= 0) {
        this.isShifting = false;
      }
    }

    // 紅線斷油回彈 ("Ta-ta-ta-ta" Rev Limiter Bounce)
    if (this.rpm >= this.redlineRpm) {
      this.isRevLimiting = true;
      this.revLimiterTimer += dt;
      if (this.revLimiterTimer > 0.065) {
        this.rpm = this.redlineRpm - (180 + Math.random() * 260);
        this.revLimiterTimer = 0;
        this.backfireEvent = true;
        if (this.isPlayer && audioSynth && audioSynth.playBackfire) {
          audioSynth.playBackfire(false);
        }
      }
    } else {
      this.isRevLimiting = false;
      this.revLimiterTimer = 0;
    }

    if (input.up) {
      this.isAccelerating = true;
      this.isReversing = false;

      // 自動進檔機制 (8050 RPM 時進檔)
      if (this.rpm > 8050 && this.gear < 6 && !this.isShifting && this.speed > this.gearMinSpeeds[this.gear + 1]) {
        this.gear++;
        this.isShifting = true;
        this.shiftTimer = 0.075;
        this.rpm = 5350; // 進檔後轉速回落至大扭力區
        this.backfireEvent = true;
        if (this.isPlayer && audioSynth) {
          if (audioSynth.playExhaustCrackles) {
            audioSynth.playExhaustCrackles(2);
          } else if (audioSynth.playBackfire) {
            audioSynth.playBackfire();
          }
        }
      }

      // 依檔位齒輪比放大輪上有效扭力 (低速猛烈、高速延展)
      const gearRatio = this.gearRatios[this.gear] || 1.0;
      let torqueFactor = (gearRatio / 2.0) * 0.95;

      // 起步燒胎打滑 (0 ~ 30 km/h 全油門觸發後輪燒胎與濃煙)
      if (absSpeed < 32 && this.gear === 1) {
        this.wheelSpin = Math.min(1.0, this.wheelSpin + dt * 4.0);
        this.smokeIntensity = Math.max(this.smokeIntensity, 0.75 * this.wheelSpin);
        torqueFactor *= (0.75 + 0.25 * (1 - this.wheelSpin));
        this.rpm = Math.min(this.redlineRpm, this.rpm + dt * 14000);
      } else {
        this.wheelSpin = Math.max(0, this.wheelSpin - dt * 3.5);
      }

      // 高速空氣風阻平滑衰減
      const aeroResistance = 1.0 - Math.min(0.92, (this.speed / targetTopSpeed) ** 1.3);
      let effectiveAccel = this.accelRate * torqueFactor * Math.max(0.12, aeroResistance);

      if (this.isShifting) {
        effectiveAccel *= 0.1; // 換檔離合期間動力切斷
      }

      this.speed += effectiveAccel * dt;

      // 正常行駛轉速隨檔位攀升
      if (!this.wheelSpin || absSpeed >= 32) {
        const gMin = this.gearMinSpeeds[this.gear];
        const gMax = this.gearMaxSpeeds[this.gear];
        const gProgress = Math.max(0, Math.min(1.0, (absSpeed - gMin) / (gMax - gMin + 0.001)));
        const targetRpm = 2200 + gProgress * 5950;
        this.rpm += (targetRpm - this.rpm) * Math.min(1.0, dt * 15.0);
      }

    } else if (input.down) {
      if (this.speed > 8) {
        // 重踩煞車 (賽車級高制動力減速)
        this.isBraking = true;
        this.isReversing = false;
        this.speed -= this.brakingRate * dt;

        // 煞車自動降檔 (Rev-Matching Downshift 補油回火)
        if (this.gear > 1 && this.speed < this.gearMinSpeeds[this.gear] - 5) {
          this.gear--;
          this.rpm = Math.min(this.redlineRpm - 250, this.rpm + 2300);
          this.backfireEvent = true;
          if (this.isPlayer && audioSynth && audioSynth.playBackfire) {
            audioSynth.playBackfire(true);
          }
        } else {
          const gMin = this.gearMinSpeeds[this.gear];
          const gMax = this.gearMaxSpeeds[this.gear];
          const gProgress = Math.max(0, Math.min(1.0, (absSpeed - gMin) / (gMax - gMin + 0.001)));
          const targetRpm = 1350 + gProgress * 4600;
          this.rpm += (targetRpm - this.rpm) * Math.min(1.0, dt * 9.0);
        }
      } else {
        // 倒車模式
        this.isBraking = false;
        this.isReversing = true;
        this.gear = -1;
        this.speed -= this.accelRate * 0.45 * dt;
        if (this.speed < -65) this.speed = -65;
        this.rpm = 1800 + (absSpeed / 65) * 3800;
      }
    } else {
      // 鬆開油門滑行 (Coasting Overrun & 引擎煞車制動力)
      this.isAccelerating = false;
      this.isBraking = false;
      this.isReversing = false;
      this.wheelSpin = Math.max(0, this.wheelSpin - dt * 5.0);

      // 高轉速鬆開油門觸發渦輪洩壓與回火劈啪放炮 (Horizon Overrun Crackles & BOV)
      if (this.isPlayer && audioSynth && this.wasAccelerating && (this.wasBoosting || this.rpm > 4800)) {
        if (audioSynth.playBlowOffValve) {
          audioSynth.playBlowOffValve();
        }
        if (audioSynth.playExhaustCrackles && Math.random() < 0.7) {
          this.backfireEvent = true;
          audioSynth.playExhaustCrackles(2 + Math.floor(Math.random() * 2));
        } else if (Math.random() < 0.5 && audioSynth.playBackfire) {
          this.backfireEvent = true;
          audioSynth.playBackfire(false);
        }
      }

      if (this.gear > 1 && this.speed < this.gearMinSpeeds[this.gear]) {
        this.gear--;
      }

      if (absSpeed > 0.5) {
        // 引擎煞車阻力
        const engineBrake = (this.rpm / 8500) * 32.0;
        const totalDrag = this.naturalDrag + engineBrake;
        const dragSign = Math.sign(this.speed);
        this.speed -= dragSign * totalDrag * dt;
        if (Math.sign(this.speed) !== dragSign) this.speed = 0;

        const gMin = this.gearMinSpeeds[this.gear];
        const gMax = this.gearMaxSpeeds[this.gear];
        const gProgress = Math.max(0, Math.min(1.0, (absSpeed - gMin) / (gMax - gMin + 0.001)));
        const targetRpm = 1200 + gProgress * 3500;
        this.rpm += (targetRpm - this.rpm) * Math.min(1.0, dt * 6.5);
      } else {
        this.speed = 0;
        this.gear = 1;
        this.rpm += (this.idleRpm - this.rpm) * Math.min(1.0, dt * 5.0);
      }
    }

    // 氮氣加速 (Nitro NOS Overdrive)
    if (input.nitro && this.nitro > 4 && this.speed > 25) {
      this.isBoosting = true;
      this.speed += this.accelRate * 1.55 * dt;
      this.nitro = Math.max(0, this.nitro - dt * 30);
    } else {
      this.isBoosting = false;
      this.nitro = Math.min(this.maxNitro, this.nitro + dt * (this.specs.nitroRecharge || 15) * 0.45);
    }

    // ==========================================
    // 2. 地平線敏捷轉向動態系統 (Forza Horizon Responsive Steering)
    // 徹底根治「轉彎沒反應導致撞牆」：隨車速平滑調節，高速絕不鎖死，保證隨傳隨到的靈敏指向性
    // ==========================================
    if (this.isPlayer) {
      let rawSteer = 0;
      if (input.left) rawSteer += 1.0;
      if (input.right) rawSteer -= 1.0;

      // 速度感應動態最大轉向角 (Speed-Sensitive Steering Lock)
      // 低速 (0~50 km/h): 最大打盤角 ~31.5° (0.55 rad) 倒車與調頭極致靈活
      // 中速 (120 km/h): 保持 ~24.5° (0.43 rad) 充沛指向性
      // 極速 (240+ km/h): 仍保持 ~18.5° (0.32 rad) 充裕入彎咬合力，絕不鎖死在 3.7° 的推頭死角！
      const speedFactor = Math.max(0, Math.min(1.0, (absSpeed - 40) / 220));
      const maxLockAtSpeed = THREE.MathUtils.lerp(0.55, 0.32, speedFactor);

      this.targetSteer = rawSteer * maxLockAtSpeed;

      // 方向盤超敏捷響應率 (打盤 16.0 rad/s 瞬間見效，自回正 18.0 rad/s 迅速俐落)
      const steerSpeed = (rawSteer !== 0) ? 16.0 : 18.0;
      this.steerAngle += (this.targetSteer - this.steerAngle) * Math.min(1.0, steerSpeed * dt);
    }

    // ==========================================
    // 3. 偏航運動學與爽快甩尾動力學 (Yaw Dynamics & Horizon Drift)
    // ==========================================
    const speedMs = absSpeed / 3.6;
    const moveSign = (this.speed >= 0) ? 1 : -1;

    // 手煞車或高速大角轉向判定甩尾 (Arcade-Sim Drift Initiator)
    const isHardHandbrake = input.handbrake && absSpeed > 18;
    const isTurnDrift = (Math.abs(this.steerAngle) > 0.16 && absSpeed > 45 && (input.up || input.nitro));
    if (isHardHandbrake || isTurnDrift || (Math.abs(this.driftAngle) > 0.06 && absSpeed > 25)) {
      this.isDrifting = true;
    } else {
      this.isDrifting = false;
    }

    // 歸一化打盤量 (-1.0 ~ +1.0)
    const currentMaxLock = Math.max(0.1, Math.abs(this.targetSteer) > 0.01 ? Math.abs(this.targetSteer) : 0.4);
    const steerRatio = Math.max(-1.0, Math.min(1.0, this.steerAngle / currentMaxLock));

    // 地平線等級偏航角速度 (Yaw Rate):
    // 低速靈動 ~2.4 rad/s，高速平穩強勁 ~1.65 ~ 1.95 rad/s，保證任何彎道都能一拉即過！
    const baseTurnSpeed = THREE.MathUtils.lerp(2.4, 1.75, Math.min(1.0, absSpeed / 250));
    let targetYawRate = steerRatio * baseTurnSpeed;

    // 煞車重心前移咬合 (Trail Braking Bonus)
    if (this.isBraking) {
      targetYawRate *= 1.22;
    }
    // 甩尾或手煞時提高車尾擺動角速度
    if (this.isDrifting) {
      targetYawRate *= 1.32;
    }

    // 推頭警告指數 (僅用於 Motec 視覺警示，不再暴力閹割玩家轉向)
    const demandLatG = (speedMs * Math.abs(targetYawRate)) / 9.81;
    this.understeerRatio = Math.max(0, Math.min(1.0, (demandLatG - 1.5) * 1.2));

    // 偏航角速度平滑響應 (18.0 響應極速，告別轉彎延遲)
    const yawInertiaResponse = this.isDrifting ? 14.0 : 18.0;
    this.yawRate += (targetYawRate - this.yawRate) * Math.min(1.0, yawInertiaResponse * dt);

    // 漂移側滑角 (Drift Slip Angle) 與反打方向盤輔助 (Horizon Counter-Steer Stabilizer)
    if (this.isDrifting) {
      const driftDir = Math.sign(this.yawRate || this.steerAngle || 1);
      const targetDriftAngle = driftDir * (0.34 + (isHardHandbrake ? 0.15 : 0.06));

      // 反打方向盤平衡 (Counter-Steering: 方向盤與甩尾方向相反時穩定滑移出彎)
      const isCounterSteer = (this.steerAngle * driftDir < -0.01);
      const counterSteerDamping = isCounterSteer ? 2.6 : 1.2;

      this.driftAngle += (targetDriftAngle - this.driftAngle) * dt * (4.2 * counterSteerDamping);
      this.oversteerRatio = Math.min(1.0, Math.abs(this.driftAngle) / 0.35);

      // 鬆開手煞車且回正方向盤時平滑回正
      if (isCounterSteer && !input.handbrake) {
        this.driftAngle *= Math.max(0, 1 - dt * 2.8);
      }
    } else {
      this.driftAngle *= Math.max(0, 1 - dt * 8.5);
      this.oversteerRatio = 0;
    }

    // 更新車身朝向 (Heading)
    if (absSpeed > 0.5 && this.isPlayer) {
      this.heading += this.yawRate * dt * moveSign;
    }

    // ==========================================
    // 4. 車身速度向量 (Velocity Vector) 與漂移慣性滑移
    // ==========================================
    // 速度移動向量方向 = 車身朝向 + 漂移側滑角
    const moveHeading = this.heading + (this.driftAngle * moveSign);

    const fwdX = Math.sin(moveHeading);
    const fwdZ = Math.cos(moveHeading);

    // 瞬時速度向量追隨 (提升至 24.0，消除速度滯後延遲)
    const targetVx = fwdX * speedMs;
    const targetVz = fwdZ * speedMs;
    const velocityLag = this.isDrifting ? 8.5 : 24.0;
    this.velocity.x += (targetVx - this.velocity.x) * Math.min(1.0, velocityLag * dt);
    this.velocity.z += (targetVz - this.velocity.z) * Math.min(1.0, velocityLag * dt);

    // 計算整車側滑偏角 (Slip Angle)
    const actualHeading = Math.atan2(this.velocity.x, this.velocity.z);
    let slipDelta = this.heading - actualHeading;
    while (slipDelta > Math.PI) slipDelta -= Math.PI * 2;
    while (slipDelta < -Math.PI) slipDelta += Math.PI * 2;
    this.slipAngle = slipDelta;

    // 計算即時 G 力 (橫向 G 與 縱向 G)
    const rawLatG = (speedMs * Math.abs(this.yawRate)) / 9.81;
    this.lateralG = Math.max(-1.75, Math.min(1.75, Math.sign(this.yawRate) * rawLatG));
    this.longitudinalG = (this.isAccelerating ? 0.65 : 0) - (this.isBraking ? 1.25 : 0);

    // 四輪抓地狀態監控 (供 Motec 儀表)
    const isTurningLeft = this.steerAngle > 0;
    const latShift = Math.min(0.35, Math.abs(this.lateralG) * 0.22);
    const frontGrip = Math.max(0.20, 1.0 - this.understeerRatio * 0.65);
    const rearGrip = Math.max(0.18, 1.0 - (this.isDrifting ? 0.70 : 0));
    this.tireGrip.fl = Math.max(0.1, frontGrip - (isTurningLeft ? -latShift : latShift));
    this.tireGrip.fr = Math.max(0.1, frontGrip - (isTurningLeft ? latShift : -latShift));
    this.tireGrip.rl = Math.max(0.1, rearGrip - (isTurningLeft ? -latShift : latShift));
    this.tireGrip.rr = Math.max(0.1, rearGrip - (isTurningLeft ? latShift : -latShift));

    // 輪胎焦煙生成強度 (濃密白煙)
    const driftSmoke = (this.isDrifting && absSpeed > 35) ? Math.min(1.0, Math.abs(this.driftAngle) * 3.5 + 0.3) : 0;
    const brakeSmoke = (this.isBraking && absSpeed > 75) ? 0.5 : 0;
    this.smokeIntensity = Math.max(this.wheelSpin * 0.85, driftSmoke, brakeSmoke);

    // 輪胎黑色煞車痕
    this.generateSkidmarks = (this.isDrifting && absSpeed > 35) ||
      (this.isBraking && absSpeed > 65 && Math.abs(this.slipAngle) > 0.04) ||
      (this.wheelSpin > 0.3);

    // 世界座標更新 (World Scale = 0.28)
    const worldScale = 0.28;
    this.position.x += this.velocity.x * (worldScale * 3.6) * dt;
    this.position.z += this.velocity.z * (worldScale * 3.6) * dt;

    // ==========================================
    // 5. 賽道吸附、路緣石顛簸與邊界碰撞
    // ==========================================
    this.alignWithTrack(trackCurve, trackWidth, dt, audioSynth);
    this.checkTrackBoundaries(trackCurve, trackWidth, audioSynth);
    this.checkBoostPads(boostPads, audioSynth);

    // ==========================================
    // 6. 動態載重俯仰 (Pitch) 與側傾 (Roll)
    // 依據 GT3 頂規硬派賽車懸吊剛性嚴格約束，徹底杜絕懸空、翹頭與翻車
    // ==========================================
    const MAX_BODY_ROLL = 0.045;   // ~2.58度極限側傾 (賽事級防傾桿約束)
    const MAX_PITCH_DIVE = 0.022;  // ~1.26度重煞車車頭微下沉
    const MAX_PITCH_SQUAT = 0.014; // ~0.80度起步/氮氣車尾微下蹲

    const accelDive = (this.isAccelerating ? 0.012 : 0) * (this.isBoosting ? 1.3 : 1.0);
    const brakeDive = (this.isBraking ? 0.022 : 0);
    const targetDynamicPitch = Math.max(-MAX_PITCH_DIVE, Math.min(MAX_PITCH_SQUAT, accelDive - brakeDive));
    const targetRoll = Math.max(-MAX_BODY_ROLL, Math.min(MAX_BODY_ROLL, -this.lateralG * 0.024));

    this.dynamicPitch += (targetDynamicPitch - this.dynamicPitch) * Math.min(1.0, dt * 9.0);
    this.dynamicPitch = Math.max(-MAX_PITCH_DIVE, Math.min(MAX_PITCH_SQUAT, this.dynamicPitch));
    this.pitch = this.dynamicPitch;

    this.roll += (targetRoll - this.roll) * Math.min(1.0, dt * 9.0);
    this.roll = Math.max(-MAX_BODY_ROLL, Math.min(MAX_BODY_ROLL, this.roll));

    // 更新輪胎視覺阿克曼角與轉速
    this.updateWheelVisuals(dt);

    // 同步 3D 模型位移與旋轉
    this.syncMeshTransform();

    this.wasAccelerating = this.isAccelerating;
    this.wasBoosting = this.isBoosting;
  }

  alignWithTrack(trackCurve, trackWidth, dt, audioSynth) {
    if (!trackCurve) return;
    const closest = this.getClosestTrackPoint(trackCurve);
    if (closest && closest.point) {
      // 保持底盤與輪胎精準咬合在柏油路面 (路面頂點高度為 closest.point.y + 0.5)
      // 輪胎底緣在 local y=0，車體高度設置為 closest.point.y + 0.5，四輪完美踩實地面，零懸空、零穿模
      const targetY = closest.point.y + 0.5;
      this.position.y += (targetY - this.position.y) * Math.min(1.0, dt * 30);
      this.lapProgress = closest.t;

      // 紅白路緣石顛簸物理 (Kerb Riding Vibration)
      const halfWidth = trackWidth / 2;
      if (closest.distance > (halfWidth - 16) && closest.distance <= (halfWidth + 12)) {
        this.onKerb = true;
        const kerbJolt = Math.sin(performance.now() * 0.04) * 0.25;
        this.position.y += kerbJolt;
        if (this.isPlayer && audioSynth && audioSynth.playKerbRumble && Math.abs(this.speed) > 30) {
          audioSynth.playKerbRumble();
        }
      } else {
        this.onKerb = false;
      }
    }
  }

  getClosestTrackPoint(trackCurve) {
    if (!trackCurve) return null;
    const samples = 120;
    let minDist = Infinity;
    let bestT = 0;
    let bestPt = null;

    const currentT = (this.lapProgress !== undefined && !isNaN(this.lapProgress)) ? this.lapProgress : 0;
    
    // 粗搜鄰近 ±15% 區間
    for (let i = -18; i <= 18; i++) {
      let t = (currentT + i / samples) % 1.0;
      if (t < 0) t += 1.0;
      const pt = trackCurve.getPointAt(t);
      const distSq = (pt.x - this.position.x) ** 2 + (pt.z - this.position.z) ** 2;
      if (distSq < minDist) {
        minDist = distSq;
        bestT = t;
        bestPt = pt;
      }
    }

    // 精搜：在最佳 t 鄰域 ±0.008 範圍內細化定位，消除高度階躍跳動
    for (let j = -8; j <= 8; j++) {
      let t = (bestT + j * 0.001) % 1.0;
      if (t < 0) t += 1.0;
      const pt = trackCurve.getPointAt(t);
      const distSq = (pt.x - this.position.x) ** 2 + (pt.z - this.position.z) ** 2;
      if (distSq < minDist) {
        minDist = distSq;
        bestT = t;
        bestPt = pt;
      }
    }

    return { t: bestT, point: bestPt, distance: Math.sqrt(minDist) };
  }

  checkTrackBoundaries(trackCurve, trackWidth, audioSynth) {
    if (!trackCurve) return;
    const closest = this.getClosestTrackPoint(trackCurve);
    if (!closest || !closest.point) return;
    const halfWidth = trackWidth / 2;

    const maxAllowedDist = halfWidth - 10;
    if (closest.distance > maxAllowedDist) {
      const toTrack = closest.point.clone().sub(this.position);
      toTrack.y = 0;
      toTrack.normalize();

      // 強制將車輛彈性阻擋在賽道護欄內，杜絕穿透護欄飛入草地懸空
      const overshoot = closest.distance - maxAllowedDist;
      this.position.add(toTrack.multiplyScalar(overshoot + 1.5));

      // 撞牆達到一定車速與深度時標記為硬性碰撞 (破壞技術連擊)
      if (Math.abs(this.speed) > 40 && overshoot > 1.0) {
        this.hardImpact = true;
      }

      // 保留適度速度 (~72%)，避免死鎖吸牆
      this.speed *= 0.72;

      // 關鍵修復：絕不將 yawRate 乘 0.2！
      // 若玩家正在向賽道中心轉向，提供主動偏航脫離輔助，讓賽車一把方向盤即可滑離牆壁
      const steerDir = Math.sign(this.steerAngle);
      if (steerDir !== 0) {
        this.yawRate += steerDir * 1.5 * 0.016;
      }

      if (audioSynth && audioSynth.playCrashSound) {
        audioSynth.playCrashSound(0.5);
      }
    }
  }

  checkBoostPads(boostPads, audioSynth) {
    if (!boostPads || !boostPads.length) return;
    for (let pad of boostPads) {
      const dist = this.position.distanceTo(pad.position);
      if (dist < pad.radius && this.speed > 20) {
        this.speed = Math.min(this.boostMaxSpeed, this.speed + 48);
        this.nitro = Math.min(this.maxNitro, this.nitro + 35);
        if (this.isPlayer && audioSynth && audioSynth.playBoostPadSound) {
          audioSynth.playBoostPadSound();
        }
      }
    }
  }

  updateWheelVisuals(dt) {
    if (!this.mesh || !this.mesh.userData || !this.mesh.userData.wheels) return;

    const wheelCircumference = 2 * Math.PI * 17;
    const wheelRotDelta = ((this.speed * 0.28 * dt) / wheelCircumference) * Math.PI * 2 * 10;

    this.mesh.userData.wheels.forEach(wheel => {
      if (wheel.userData.rotator) {
        wheel.userData.rotator.rotation.z -= wheelRotDelta;
      }
      if (wheel.userData.isFront) {
        wheel.rotation.y = this.steerAngle;
      }
    });
  }

  syncMeshTransform() {
    this.mesh.position.copy(this.position);
    this.pitch = this.dynamicPitch || 0;
    this.mesh.rotation.set(this.roll, this.heading - Math.PI / 2, this.pitch, 'YXZ');
  }

  updateLap(checkpoints, audioSynth) {
    if (!checkpoints || !checkpoints.length || this.raceFinished) return;

    const nextCpIdx = (this.currentCheckpoint + 1) % checkpoints.length;
    const nextCp = checkpoints[nextCpIdx];

    const dist = this.position.distanceTo(nextCp.position);
    if (dist < nextCp.radius) {
      this.currentCheckpoint = nextCpIdx;

      if (nextCpIdx === 0) {
        const now = performance.now();
        if (this.lapStartTime > 0) {
          const lapTime = (now - this.lapStartTime) / 1000;
          this.lapHistory.push(lapTime);
          if (lapTime < this.bestLapTime) {
            this.bestLapTime = lapTime;
          }
        }
        this.lapStartTime = now;
        this.lap += 1;

        if (this.isPlayer && audioSynth && audioSynth.playCheckpointChime) {
          audioSynth.playCheckpointChime();
        }

        if (this.lap > 3) {
          this.raceFinished = true;
        }
      }
    }

    if (this.lapStartTime > 0) {
      this.currentLapTime = (performance.now() - this.lapStartTime) / 1000;
    }
  }
}

// ==============================================
// AI 賽車智慧循跡動態 (AI Rival Driver)
// ==============================================
class AIRacerDynamics extends VehiclePhysics {
  constructor(carMesh, specs) {
    super(carMesh, specs, false);
    this.trackT = 0.01;
    this.lateralOffset = 20;
    this.targetSpeed = specs.topSpeed * 0.94;
    this.aggression = 0.85;
  }

  updateAI(dt, trackCurve, trackWidth, boostPads, playerVehicle) {
    if (!trackCurve || this.raceFinished) return;

    const currentPt = trackCurve.getPointAt(this.trackT);
    const lookAheadT = (this.trackT + 0.04) % 1.0;
    const aheadPt = trackCurve.getPointAt(lookAheadT);

    const tangent = trackCurve.getTangentAt(this.trackT).normalize();
    const aheadTangent = trackCurve.getTangentAt(lookAheadT).normalize();
    const curvature = 1.0 - tangent.dot(aheadTangent);

    let maxCruisingSpeed = this.specs.topSpeed;
    if (curvature > 0.08) {
      maxCruisingSpeed = this.specs.topSpeed * (0.65 - curvature * 0.8);
    } else {
      if (this.nitro > 30 && Math.random() < 0.03) {
        this.isBoosting = true;
        maxCruisingSpeed = this.boostMaxSpeed;
      }
    }

    const aiInput = {
      up: this.speed < maxCruisingSpeed,
      down: this.speed > maxCruisingSpeed + 20,
      left: false,
      right: false,
      handbrake: curvature > 0.16,
      nitro: this.isBoosting
    };

    const advanceSpeed = (this.speed * 0.28) / trackCurve.getLength();
    this.trackT = (this.trackT + advanceSpeed * dt) % 1.0;
    this.lapProgress = this.trackT;

    const pathPt = trackCurve.getPointAt(this.trackT);
    const pathTangent = trackCurve.getTangentAt(this.trackT).normalize();
    const up = new THREE.Vector3(0, 1, 0);
    const side = new THREE.Vector3().crossVectors(pathTangent, up).normalize();

    const targetHeading = Math.atan2(pathTangent.x, pathTangent.z);

    let headingDiff = targetHeading - this.heading;
    while (headingDiff > Math.PI) headingDiff -= Math.PI * 2;
    while (headingDiff < -Math.PI) headingDiff += Math.PI * 2;

    this.heading += headingDiff * dt * 5.0;
    this.steerAngle = Math.max(-0.42, Math.min(0.42, headingDiff * 1.5));

    super.update(dt, aiInput, trackCurve, trackWidth, boostPads, null);
  }
}

window.VehiclePhysics = VehiclePhysics;
window.AIRacerDynamics = AIRacerDynamics;
