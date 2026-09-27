/**
 * CarModels - 3D 賽博超跑模型產生器 (Three.js)
 * 包含：
 * 1. CYBER AERO X-1：依據 CAD 3-View Blueprint 1:1 精密重製的原型車
 * 2. INFERNO PHANTOM GT：全新打造的黑紅金隱身戰機風重裝超跑
 */

class CarModelBuilder {
  constructor() {
    // 預設車漆色系表
    this.colorPalettes = {
      cyberCyan: 0x00f0ff,
      infernoCrimson: 0xff0055,
      pulsePurple: 0x9900ff,
      stealthCarbon: 0x181e28,
      venomGreen: 0x00ff66,
      liquidGold: 0xffaa00
    };
  }

  // ==========================================
  // 車款 1: CYBER AERO X-1 (CAD 藍圖原型車)
  // ==========================================
  buildCyberAeroX1(primaryColor = 0x00f0ff) {
    const carGroup = new THREE.Group();
    carGroup.name = "CyberAeroX1";

    // 材質系統
    const bodyMat = new THREE.MeshStandardMaterial({
      color: primaryColor,
      metalness: 0.88,
      roughness: 0.18,
    });

    const carbonMat = new THREE.MeshStandardMaterial({
      color: 0x121620,
      metalness: 0.5,
      roughness: 0.35,
    });

    const glassMat = new THREE.MeshStandardMaterial({
      color: 0x070d18,
      metalness: 0.95,
      roughness: 0.05,
      transparent: true,
      opacity: 0.82,
    });

    const ledHeadlightMat = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      emissive: 0x00f0ff,
      emissiveIntensity: 2.5,
      roughness: 0.1,
    });

    const ledTaillightMat = new THREE.MeshStandardMaterial({
      color: 0xff0044,
      emissive: 0xff0044,
      emissiveIntensity: 2.2,
      roughness: 0.1,
    });

    const rimMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      metalness: 0.92,
      roughness: 0.15,
    });

    const tireMat = new THREE.MeshStandardMaterial({
      color: 0x090c12,
      metalness: 0.08,
      roughness: 0.88,
    });

    // 1. 平整化工程底盤
    const chassisGroup = new THREE.Group();
    const floorShape = new THREE.Shape();
    floorShape.moveTo(72, 26);
    floorShape.quadraticCurveTo(77, 13, 77, 0);
    floorShape.quadraticCurveTo(77, -13, 72, -26);
    floorShape.lineTo(-70, -28);
    floorShape.quadraticCurveTo(-76, 0, -70, 28);
    floorShape.closePath();

    const floorGeo = new THREE.ExtrudeGeometry(floorShape, {
      depth: 3.2,
      bevelEnabled: true,
      bevelSegments: 4,
      bevelSize: 1.2,
      bevelThickness: 1.2
    });
    floorGeo.rotateX(Math.PI / 2);
    const floorMesh = new THREE.Mesh(floorGeo, carbonMat);
    floorMesh.position.y = 7;
    floorMesh.castShadow = true;
    chassisGroup.add(floorMesh);

    // 2. 前下分流前唇 (Splitter) 與星環光刃
    const aeroGroup = new THREE.Group();
    const splitterShape = new THREE.Shape();
    splitterShape.moveTo(82, 0);
    splitterShape.quadraticCurveTo(79, 25, 70, 39);
    splitterShape.quadraticCurveTo(65, 41, 62, 38);
    splitterShape.quadraticCurveTo(72, 22, 75, 0);
    splitterShape.quadraticCurveTo(72, -22, 62, -38);
    splitterShape.quadraticCurveTo(65, -41, 70, -39);
    splitterShape.quadraticCurveTo(79, -25, 82, 0);

    const splitterGeo = new THREE.ExtrudeGeometry(splitterShape, { depth: 2.2, bevelEnabled: true, bevelSegments: 3, bevelSize: 0.8, bevelThickness: 0.8 });
    splitterGeo.rotateX(Math.PI / 2);
    const splitterMesh = new THREE.Mesh(splitterGeo, carbonMat);
    splitterMesh.position.y = 5.6;
    splitterMesh.castShadow = true;
    aeroGroup.add(splitterMesh);

    const splitterGlowShape = new THREE.Shape();
    splitterGlowShape.moveTo(83, 0);
    splitterGlowShape.quadraticCurveTo(80, 26, 71, 40);
    splitterGlowShape.lineTo(70, 39);
    splitterGlowShape.quadraticCurveTo(79, 25, 82, 0);
    splitterGlowShape.quadraticCurveTo(79, -25, 70, -39);
    splitterGlowShape.lineTo(71, -40);
    splitterGlowShape.quadraticCurveTo(80, -26, 83, 0);

    const splitterGlowGeo = new THREE.ExtrudeGeometry(splitterGlowShape, { depth: 1.8, bevelEnabled: false });
    splitterGlowGeo.rotateX(Math.PI / 2);
    const splitterGlowMesh = new THREE.Mesh(splitterGlowGeo, ledHeadlightMat);
    splitterGlowMesh.position.y = 5.8;
    aeroGroup.add(splitterGlowMesh);

    // 風刀 (Canards) 與 側裙 (Skirts)
    for (let side of [1, -1]) {
      const canardShape = new THREE.Shape();
      canardShape.moveTo(0, 0);
      canardShape.quadraticCurveTo(6, 4, 14, 2);
      canardShape.lineTo(12, 0);
      canardShape.closePath();
      const canardGeo = new THREE.ExtrudeGeometry(canardShape, { depth: 1.5, bevelEnabled: true, bevelSegments: 2, bevelSize: 0.4, bevelThickness: 0.4 });
      const canardMesh = new THREE.Mesh(canardGeo, carbonMat);
      canardMesh.position.set(65, 11.5, side * 36);
      canardMesh.rotation.y = side * 0.35;
      canardMesh.rotation.z = -0.15;
      if (side === -1) canardMesh.scale.z = -1;
      aeroGroup.add(canardMesh);

      // 側裙霓虹
      const skirtNeonGeo = new THREE.CylinderGeometry(0.7, 0.7, 68, 12);
      skirtNeonGeo.rotateZ(Math.PI / 2);
      const skirtNeon = new THREE.Mesh(skirtNeonGeo, ledHeadlightMat);
      skirtNeon.position.set(0, 6.2, side * 37.5);
      aeroGroup.add(skirtNeon);
    }

    // 後文丘里擴散器 (Venturi Diffuser)
    const diffShape = new THREE.Shape();
    diffShape.moveTo(-55, 28);
    diffShape.quadraticCurveTo(-65, 30, -78, 25);
    diffShape.quadraticCurveTo(-82, 0, -78, -25);
    diffShape.quadraticCurveTo(-65, -30, -55, -28);
    diffShape.closePath();
    const diffGeo = new THREE.ExtrudeGeometry(diffShape, { depth: 2.5, bevelEnabled: true, bevelSegments: 3, bevelSize: 0.8, bevelThickness: 0.8 });
    diffGeo.rotateX(Math.PI / 2);
    const diffMesh = new THREE.Mesh(diffGeo, carbonMat);
    diffMesh.position.set(0, 7.5, 0);
    diffMesh.rotation.z = -0.12;
    aeroGroup.add(diffMesh);

    // 4 道導流垂直鰭片
    for (let zOffset of [-18, -6, 6, 18]) {
      const finShape = new THREE.Shape();
      finShape.moveTo(-58, 0);
      finShape.quadraticCurveTo(-70, 2, -80, 8);
      finShape.lineTo(-78, 0);
      finShape.closePath();
      const finGeo = new THREE.ExtrudeGeometry(finShape, { depth: 1.4, bevelEnabled: false });
      const finMesh = new THREE.Mesh(finGeo, carbonMat);
      finMesh.position.set(0, 5, zOffset);
      aeroGroup.add(finMesh);
    }

    // 3. 流線車體外殼 (Body Shell)
    const bodyGroup = new THREE.Group();

    // 前輪拱寬體 (Front Fenders)
    for (let side of [1, -1]) {
      const fenderShape = new THREE.Shape();
      fenderShape.moveTo(72, 8);
      fenderShape.quadraticCurveTo(62, 19, 48, 19.5);
      fenderShape.quadraticCurveTo(34, 19, 22, 14);
      fenderShape.quadraticCurveTo(32, 10, 36, 6);
      fenderShape.quadraticCurveTo(48, 14, 60, 6);
      fenderShape.closePath();

      const fenderGeo = new THREE.ExtrudeGeometry(fenderShape, { depth: 13, bevelEnabled: true, bevelSegments: 6, bevelSize: 2.5, bevelThickness: 2.5 });
      fenderGeo.computeVertexNormals();
      const fenderMesh = new THREE.Mesh(fenderGeo, bodyMat);
      fenderMesh.position.set(0, 0, side === 1 ? 23 : -36);
      fenderMesh.castShadow = true;
      bodyGroup.add(fenderMesh);

      // 星環光刃頭燈光帶
      const lightCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(71, 9, side * 30),
        new THREE.Vector3(64, 15, side * 33),
        new THREE.Vector3(50, 18, side * 34),
        new THREE.Vector3(40, 16, side * 33)
      ]);
      const lightGeo = new THREE.TubeGeometry(lightCurve, 16, 1.2, 8, false);
      const lightMesh = new THREE.Mesh(lightGeo, ledHeadlightMat);
      bodyGroup.add(lightMesh);
    }

    // 引擎蓋 (Hood) 與 S-Duct
    const hoodShape = new THREE.Shape();
    hoodShape.moveTo(76, 7);
    hoodShape.quadraticCurveTo(55, 14, 20, 15.5);
    hoodShape.lineTo(20, 10);
    hoodShape.quadraticCurveTo(55, 9, 76, 5);
    hoodShape.closePath();
    const hoodGeo = new THREE.ExtrudeGeometry(hoodShape, { depth: 26, bevelEnabled: true, bevelSegments: 6, bevelSize: 2.0, bevelThickness: 2.0 });
    hoodGeo.computeVertexNormals();
    const hoodMesh = new THREE.Mesh(hoodGeo, bodyMat);
    hoodMesh.position.set(0, 0, -13);
    hoodMesh.castShadow = true;
    bodyGroup.add(hoodMesh);

    const sDuctGeo = new THREE.CylinderGeometry(8, 10, 20, 16, 1, false, 0, Math.PI);
    sDuctGeo.rotateZ(Math.PI / 2);
    sDuctGeo.rotateY(Math.PI / 2);
    const sDuctMesh = new THREE.Mesh(sDuctGeo, carbonMat);
    sDuctMesh.position.set(48, 14.5, 0);
    sDuctMesh.scale.set(1.4, 0.4, 1.0);
    bodyGroup.add(sDuctMesh);

    // 水滴曲面戰鬥機座艙 (Teardrop Canopy)
    const sphereGeo = new THREE.SphereGeometry(18, 32, 20);
    const pos = sphereGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      let x = pos.getX(i);
      let y = pos.getY(i);
      let z = pos.getZ(i);
      if (y < -2) y = -2;
      let taper = x < 0 ? 1.0 + (x / 30) * 0.48 : 1.0 - (x / 26) * 0.18;
      if (taper < 0.22) taper = 0.22;
      z *= taper;
      x *= 1.8;
      y *= 0.76;
      z *= 1.25;
      pos.setXYZ(i, x, y, z);
    }
    sphereGeo.computeVertexNormals();
    const canopyMesh = new THREE.Mesh(sphereGeo, glassMat);
    canopyMesh.position.set(-6, 17.5, 0);
    canopyMesh.castShadow = true;
    bodyGroup.add(canopyMesh);

    // 後輪拱寬體 (Rear Fenders)
    for (let side of [1, -1]) {
      const rearFenderShape = new THREE.Shape();
      rearFenderShape.moveTo(-20, 13);
      rearFenderShape.quadraticCurveTo(-46, 21, -74, 15);
      rearFenderShape.quadraticCurveTo(-72, 7, -62, 6);
      rearFenderShape.quadraticCurveTo(-48, 14, -36, 6);
      rearFenderShape.quadraticCurveTo(-26, 7, -20, 13);
      rearFenderShape.closePath();

      const rearFenderGeo = new THREE.ExtrudeGeometry(rearFenderShape, { depth: 15, bevelEnabled: true, bevelSegments: 6, bevelSize: 2.5, bevelThickness: 2.5 });
      rearFenderGeo.computeVertexNormals();
      const rearFenderMesh = new THREE.Mesh(rearFenderGeo, bodyMat);
      rearFenderMesh.position.set(0, 0, side === 1 ? 23 : -38);
      rearFenderMesh.castShadow = true;
      bodyGroup.add(rearFenderMesh);
    }

    // 後甲板與中央背脊 (Spine)
    const deckShape = new THREE.Shape();
    deckShape.moveTo(-18, 15);
    deckShape.quadraticCurveTo(-44, 17.5, -72, 14.5);
    deckShape.lineTo(-72, 7.5);
    deckShape.quadraticCurveTo(-44, 7.5, -18, 7.5);
    deckShape.closePath();
    const deckGeo = new THREE.ExtrudeGeometry(deckShape, { depth: 28, bevelEnabled: true, bevelSegments: 4, bevelSize: 1.5, bevelThickness: 1.5 });
    deckGeo.computeVertexNormals();
    const deckMesh = new THREE.Mesh(deckGeo, bodyMat);
    deckMesh.position.set(0, 0, -14);
    deckMesh.castShadow = true;
    bodyGroup.add(deckMesh);

    const spineShape = new THREE.Shape();
    spineShape.moveTo(-20, 17);
    spineShape.quadraticCurveTo(-40, 23, -64, 18);
    spineShape.lineTo(-62, 15);
    spineShape.quadraticCurveTo(-40, 16, -20, 15);
    spineShape.closePath();
    const spineGeo = new THREE.ExtrudeGeometry(spineShape, { depth: 1.6, bevelEnabled: true, bevelSegments: 2, bevelSize: 0.4, bevelThickness: 0.4 });
    const spineMesh = new THREE.Mesh(spineGeo, carbonMat);
    spineMesh.position.set(0, 0, -0.8);
    bodyGroup.add(spineMesh);

    // 貫穿式 OLED 尾燈 (煞車連動爆亮)
    const taillightMesh = new THREE.Mesh(new THREE.BoxGeometry(3.5, 2.5, 68), ledTaillightMat);
    taillightMesh.position.set(-71, 14.5, 0);
    bodyGroup.add(taillightMesh);

    // 天鵝頸雙支柱與主動翼
    for (let side of [1, -1]) {
      const pylonShape = new THREE.Shape();
      pylonShape.moveTo(-54, 15.5);
      pylonShape.quadraticCurveTo(-60, 24, -68, 28.5);
      pylonShape.lineTo(-72, 28.5);
      pylonShape.quadraticCurveTo(-66, 21, -60, 15.5);
      pylonShape.closePath();
      const pylonGeo = new THREE.ExtrudeGeometry(pylonShape, { depth: 2.2, bevelEnabled: true, bevelSegments: 2, bevelSize: 0.4, bevelThickness: 0.4 });
      const pylonMesh = new THREE.Mesh(pylonGeo, carbonMat);
      pylonMesh.position.set(0, 0, side * 18 - 1.1);
      bodyGroup.add(pylonMesh);
    }

    const wingAirfoil = new THREE.Shape();
    wingAirfoil.moveTo(7, 0);
    wingAirfoil.quadraticCurveTo(0, 2.0, -10, 1.4);
    wingAirfoil.quadraticCurveTo(-14, 0.6, -15, 0);
    wingAirfoil.quadraticCurveTo(-10, -0.6, 0, -1.0);
    wingAirfoil.quadraticCurveTo(4, -0.8, 7, 0);
    const wingGeo = new THREE.ExtrudeGeometry(wingAirfoil, { depth: 76, bevelEnabled: true, bevelSegments: 3, bevelSize: 0.8, bevelThickness: 0.8 });
    const wingMesh = new THREE.Mesh(wingGeo, carbonMat);
    wingMesh.position.set(-66, 29, -38);
    wingMesh.rotation.z = -0.06;
    wingMesh.castShadow = true;
    bodyGroup.add(wingMesh);

    // 4. 四輪組件 (前輪阿克曼轉向)
    const wheels = [];
    const wheelSpecs = [
      { x: 48, z: 38, isLeft: true, isFront: true },
      { x: 48, z: -38, isLeft: false, isFront: true },
      { x: -48, z: 38, isLeft: true, isFront: false },
      { x: -48, z: -38, isLeft: false, isFront: false }
    ];

    wheelSpecs.forEach(spec => {
      const wheelAssembly = new THREE.Group();
      wheelAssembly.position.set(spec.x, 17, spec.z);
      wheelAssembly.userData = { origX: spec.x, origZ: spec.z, isLeft: spec.isLeft, isFront: spec.isFront };

      const wheelRotator = new THREE.Group();
      const tireGeo = new THREE.CylinderGeometry(17, 17, 13.5, 24);
      const tireMesh = new THREE.Mesh(tireGeo, tireMat);
      tireMesh.rotation.x = Math.PI / 2;
      tireMesh.castShadow = true;
      wheelRotator.add(tireMesh);

      const rimGeo = new THREE.CylinderGeometry(13, 13, 14, 20);
      const rimMesh = new THREE.Mesh(rimGeo, rimMat);
      rimMesh.rotation.x = Math.PI / 2;
      wheelRotator.add(rimMesh);

      // 7 葉片渦輪刀鋒
      for (let b = 0; b < 7; b++) {
        const bladeGeo = new THREE.BoxGeometry(1.8, 6, 14.2);
        const blade = new THREE.Mesh(bladeGeo, carbonMat);
        const bAngle = b * (Math.PI * 2 / 7);
        blade.position.set(Math.cos(bAngle) * 7.5, Math.sin(bAngle) * 7.5, 0);
        blade.rotation.z = bAngle + 0.5;
        wheelRotator.add(blade);
      }

      const hubGeo = new THREE.CylinderGeometry(3.6, 3.6, 14.8, 16);
      const hubMesh = new THREE.Mesh(hubGeo, ledHeadlightMat);
      hubMesh.rotation.x = Math.PI / 2;
      wheelRotator.add(hubMesh);

      wheelAssembly.add(wheelRotator);
      wheelAssembly.userData.rotator = wheelRotator;

      carGroup.add(wheelAssembly);
      wheels.push(wheelAssembly);
    });

    // 車底霓虹燈 (Underglow)
    const underglowLight = new THREE.PointLight(primaryColor, 2.5, 120);
    underglowLight.position.set(0, 3, 0);
    carGroup.add(underglowLight);

    carGroup.add(chassisGroup);
    carGroup.add(aeroGroup);
    carGroup.add(bodyGroup);

    // 車輛動態操作介面
    carGroup.userData = {
      type: 'cyber',
      name: "CYBER AERO X-1",
      subtitle: "賽博天青・空力原形車 (Blueprint 1:1)",
      specs: {
        name: "CYBER AERO X-1",
        topSpeed: 325,
        accel: 9.2,
        handling: 9.8,
        nitroCap: 100,
        nitroRecharge: 15,
        soundType: 'cyber'
      },
      wheels: wheels,
      bodyMaterial: bodyMat,
      underglow: underglowLight,
      taillight: ledTaillightMat,
      setBraking: (isBraking) => {
        ledTaillightMat.emissiveIntensity = isBraking ? 4.5 : 1.8;
      },
      setColor: (colorHex) => {
        bodyMat.color.setHex(colorHex);
        underglowLight.color.setHex(colorHex);
      },
      setBoosting: (isBoosting) => {
        underglowLight.intensity = isBoosting ? 5.0 : 2.5;
      }
    };

    return carGroup;
  }

  // ==========================================
  // 車款 2: INFERNO PHANTOM GT (烈焰戰鬥超跑)
  // ==========================================
  buildInfernoPhantomGT(primaryColor = 0xff0055) {
    const carGroup = new THREE.Group();
    carGroup.name = "InfernoPhantomGT";

    // 材質系統 (曜石深碳 + 烈焰紅 + 琥珀金)
    const bodyMat = new THREE.MeshStandardMaterial({
      color: primaryColor,
      metalness: 0.9,
      roughness: 0.22,
    });

    const carbonMat = new THREE.MeshStandardMaterial({
      color: 0x0c0f16,
      metalness: 0.6,
      roughness: 0.28,
    });

    const stealthArmorMat = new THREE.MeshStandardMaterial({
      color: 0x181a22,
      metalness: 0.85,
      roughness: 0.25,
    });

    const glassMat = new THREE.MeshStandardMaterial({
      color: 0x1a050d,
      metalness: 0.98,
      roughness: 0.05,
      transparent: true,
      opacity: 0.88,
    });

    const ledCrimsonMat = new THREE.MeshStandardMaterial({
      color: 0xff0055,
      emissive: 0xff0055,
      emissiveIntensity: 2.8,
      roughness: 0.1,
    });

    const ledGoldMat = new THREE.MeshStandardMaterial({
      color: 0xffaa00,
      emissive: 0xffaa00,
      emissiveIntensity: 3.0,
      roughness: 0.1,
    });

    const exhaustFireMat = new THREE.MeshStandardMaterial({
      color: 0xff5500,
      emissive: 0xff7700,
      emissiveIntensity: 3.5,
      roughness: 0.1,
    });

    const rimMat = new THREE.MeshStandardMaterial({
      color: 0x1a1d26,
      metalness: 0.95,
      roughness: 0.1,
    });

    const tireMat = new THREE.MeshStandardMaterial({
      color: 0x080a0f,
      metalness: 0.08,
      roughness: 0.9,
    });

    // 1. 重裝防護平整底盤
    const chassisGroup = new THREE.Group();
    const floorShape = new THREE.Shape();
    floorShape.moveTo(76, 28);
    floorShape.lineTo(82, 0);
    floorShape.lineTo(76, -28);
    floorShape.lineTo(-72, -30);
    floorShape.lineTo(-78, 0);
    floorShape.lineTo(-72, 30);
    floorShape.closePath();

    const floorGeo = new THREE.ExtrudeGeometry(floorShape, { depth: 3.5, bevelEnabled: true, bevelSegments: 3, bevelSize: 1.0, bevelThickness: 1.0 });
    floorGeo.rotateX(Math.PI / 2);
    const floorMesh = new THREE.Mesh(floorGeo, carbonMat);
    floorMesh.position.y = 7;
    floorMesh.castShadow = true;
    chassisGroup.add(floorMesh);

    // 2. 侵略性前臉：雙垂直獠牙 LED + 尖銳鯊鼻前唇
    const aeroGroup = new THREE.Group();
    const noseShape = new THREE.Shape();
    noseShape.moveTo(86, 0);
    noseShape.lineTo(74, 38);
    noseShape.lineTo(66, 40);
    noseShape.lineTo(70, 0);
    noseShape.lineTo(66, -40);
    noseShape.lineTo(74, -38);
    noseShape.closePath();

    const noseGeo = new THREE.ExtrudeGeometry(noseShape, { depth: 2.8, bevelEnabled: true, bevelSegments: 3, bevelSize: 0.8, bevelThickness: 0.8 });
    noseGeo.rotateX(Math.PI / 2);
    const noseMesh = new THREE.Mesh(noseGeo, carbonMat);
    noseMesh.position.y = 5.8;
    noseMesh.castShadow = true;
    aeroGroup.add(noseMesh);

    // 雙垂直戰鬥獠牙 LED (Fang Headlights)
    for (let side of [1, -1]) {
      const fangCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(82, 7, side * 22),
        new THREE.Vector3(76, 14, side * 32),
        new THREE.Vector3(56, 18, side * 35),
        new THREE.Vector3(42, 17, side * 34)
      ]);
      const fangGeo = new THREE.TubeGeometry(fangCurve, 16, 1.4, 6, false);
      const fangMesh = new THREE.Mesh(fangGeo, ledCrimsonMat);
      aeroGroup.add(fangMesh);

      // 側翼進氣口金屬鋒刃
      const bladeGeo = new THREE.BoxGeometry(22, 1.6, 5);
      const bladeMesh = new THREE.Mesh(bladeGeo, stealthArmorMat);
      bladeMesh.position.set(60, 11, side * 36);
      bladeMesh.rotation.y = side * 0.3;
      aeroGroup.add(bladeMesh);
    }

    // 3. 戰機折角幾何車體 (Mecha Stealth Faceted Body)
    const bodyGroup = new THREE.Group();

    // 尖銳機首引擎蓋 (Sharp Faceted Hood)
    const hoodShape = new THREE.Shape();
    hoodShape.moveTo(82, 8);
    hoodShape.lineTo(40, 18);
    hoodShape.lineTo(16, 17);
    hoodShape.lineTo(16, 9);
    hoodShape.lineTo(78, 6);
    hoodShape.closePath();
    const hoodGeo = new THREE.ExtrudeGeometry(hoodShape, { depth: 28, bevelEnabled: true, bevelSegments: 4, bevelSize: 1.6, bevelThickness: 1.6 });
    hoodGeo.computeVertexNormals();
    const hoodMesh = new THREE.Mesh(hoodGeo, bodyMat);
    hoodMesh.position.set(0, 0, -14);
    hoodMesh.castShadow = true;
    bodyGroup.add(hoodMesh);

    // 引擎蓋三段式散熱導流鰭 (Tri-Vents)
    for (let v = 0; v < 3; v++) {
      const ventGeo = new THREE.BoxGeometry(8, 1.2, 14 - v * 3);
      const ventMesh = new THREE.Mesh(ventGeo, carbonMat);
      ventMesh.position.set(60 - v * 12, 14 + v * 1.5, 0);
      ventMesh.rotation.z = -0.2;
      bodyGroup.add(ventMesh);
    }

    // 前輪暴龜寬體 (Aggressive Front Fenders)
    for (let side of [1, -1]) {
      const frontFenderShape = new THREE.Shape();
      frontFenderShape.moveTo(74, 9);
      frontFenderShape.lineTo(54, 21);
      frontFenderShape.lineTo(24, 15);
      frontFenderShape.lineTo(34, 6);
      frontFenderShape.lineTo(62, 6);
      frontFenderShape.closePath();
      const ffGeo = new THREE.ExtrudeGeometry(frontFenderShape, { depth: 14, bevelEnabled: true, bevelSegments: 4, bevelSize: 2.4, bevelThickness: 2.4 });
      ffGeo.computeVertexNormals();
      const ffMesh = new THREE.Mesh(ffGeo, stealthArmorMat);
      ffMesh.position.set(0, 0, side === 1 ? 23 : -37);
      ffMesh.castShadow = true;
      bodyGroup.add(ffMesh);
    }

    // 隱身戰機座艙 (Stealth Multi-Faceted Canopy)
    const cockpitGeo = new THREE.CylinderGeometry(14, 22, 54, 6, 1);
    cockpitGeo.rotateZ(Math.PI / 2);
    cockpitGeo.scale(1.0, 0.65, 0.85);
    const cockpitMesh = new THREE.Mesh(cockpitGeo, glassMat);
    cockpitMesh.position.set(-6, 18, 0);
    cockpitMesh.castShadow = true;
    bodyGroup.add(cockpitMesh);

    // 後輪狂暴肌理寬體 (Rear Muscular Widebody)
    for (let side of [1, -1]) {
      const rearFenderShape = new THREE.Shape();
      rearFenderShape.moveTo(-16, 14);
      rearFenderShape.lineTo(-44, 23);
      rearFenderShape.lineTo(-76, 16);
      rearFenderShape.lineTo(-68, 6);
      rearFenderShape.lineTo(-34, 6);
      rearFenderShape.closePath();
      const rfGeo = new THREE.ExtrudeGeometry(rearFenderShape, { depth: 16, bevelEnabled: true, bevelSegments: 5, bevelSize: 2.8, bevelThickness: 2.8 });
      rfGeo.computeVertexNormals();
      const rfMesh = new THREE.Mesh(rfGeo, bodyMat);
      rfMesh.position.set(0, 0, side === 1 ? 23 : -39);
      rfMesh.castShadow = true;
      bodyGroup.add(rfMesh);

      // 側置戰術垂直定風翼 (Vertical Rudder Aero Fins)
      const finShape = new THREE.Shape();
      finShape.moveTo(-52, 16);
      finShape.lineTo(-68, 33);
      finShape.lineTo(-76, 33);
      finShape.lineTo(-68, 16);
      finShape.closePath();
      const finGeo = new THREE.ExtrudeGeometry(finShape, { depth: 1.8, bevelEnabled: true, bevelSegments: 2, bevelSize: 0.5, bevelThickness: 0.5 });
      const finMesh = new THREE.Mesh(finGeo, carbonMat);
      finMesh.position.set(0, 0, side * 34 - 0.9);
      bodyGroup.add(finMesh);
    }

    // 後引擎艙甲板
    const rearDeckShape = new THREE.Shape();
    rearDeckShape.moveTo(-14, 16);
    rearDeckShape.lineTo(-46, 19);
    rearDeckShape.lineTo(-74, 15);
    rearDeckShape.lineTo(-74, 8);
    rearDeckShape.lineTo(-14, 8);
    rearDeckShape.closePath();
    const rdGeo = new THREE.ExtrudeGeometry(rearDeckShape, { depth: 26, bevelEnabled: true, bevelSegments: 3, bevelSize: 1.5, bevelThickness: 1.5 });
    rdGeo.computeVertexNormals();
    const rdMesh = new THREE.Mesh(rdGeo, stealthArmorMat);
    rdMesh.position.set(0, 0, -13);
    rdMesh.castShadow = true;
    bodyGroup.add(rdMesh);

    // 4. 雙渦輪噴射尾噴口 (Twin Jet-Turbine Afterburners)
    const exhaustGroup = new THREE.Group();
    for (let side of [1, -1]) {
      const exhaustTubeGeo = new THREE.CylinderGeometry(5.2, 6.2, 14, 18, 1, true);
      exhaustTubeGeo.rotateZ(Math.PI / 2);
      const exhaustTube = new THREE.Mesh(exhaustTubeGeo, carbonMat);
      exhaustTube.position.set(-72, 14, side * 14);
      exhaustGroup.add(exhaustTube);

      // 發光燃燒室內部環 (Glowing Combustion Chamber)
      const fireRingGeo = new THREE.TorusGeometry(3.6, 1.2, 8, 20);
      fireRingGeo.rotateY(Math.PI / 2);
      const fireRing = new THREE.Mesh(fireRingGeo, exhaustFireMat);
      fireRing.position.set(-73, 14, side * 14);
      exhaustGroup.add(fireRing);

      // 噴射尾焰光錐 (Afterburner Flame Cone)
      const flameGeo = new THREE.ConeGeometry(3.8, 18, 16);
      flameGeo.rotateZ(-Math.PI / 2);
      const flameMat = new THREE.MeshStandardMaterial({
        color: 0xff6600,
        emissive: 0xff3300,
        emissiveIntensity: 3.5,
        transparent: true,
        opacity: 0.75
      });
      const flame = new THREE.Mesh(flameGeo, flameMat);
      flame.position.set(-83, 14, side * 14);
      flame.scale.set(0.1, 0.1, 0.1); // 平時微縮，加速時噴發
      exhaustGroup.add(flame);
      exhaustGroup.userData = exhaustGroup.userData || {};
      if (!exhaustGroup.userData.flames) exhaustGroup.userData.flames = [];
      exhaustGroup.userData.flames.push(flame);
    }
    bodyGroup.add(exhaustGroup);

    // 車尾雙層機甲主動尾翼 (Tiered Mecha Wing)
    const wingGeo = new THREE.BoxGeometry(16, 2.5, 78);
    const wingMesh = new THREE.Mesh(wingGeo, carbonMat);
    wingMesh.position.set(-68, 30, 0);
    wingMesh.rotation.z = -0.08;
    wingMesh.castShadow = true;
    bodyGroup.add(wingMesh);

    const wingLight = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.5, 74), ledCrimsonMat);
    wingLight.position.set(-76, 30.5, 0);
    bodyGroup.add(wingLight);

    // 車尾貫穿式幾何尾燈
    const taillightMesh = new THREE.Mesh(new THREE.BoxGeometry(3.5, 3.0, 66), ledCrimsonMat);
    taillightMesh.position.set(-73, 15, 0);
    bodyGroup.add(taillightMesh);

    // 5. 戰鬥鍛造車輪 (深凹五爪星型 + 金色光圈)
    const wheels = [];
    const wheelSpecs = [
      { x: 48, z: 39, isLeft: true, isFront: true },
      { x: 48, z: -39, isLeft: false, isFront: true },
      { x: -48, z: 40, isLeft: true, isFront: false },
      { x: -48, z: -40, isLeft: false, isFront: false }
    ];

    wheelSpecs.forEach(spec => {
      const wheelAssembly = new THREE.Group();
      wheelAssembly.position.set(spec.x, 17, spec.z);
      wheelAssembly.userData = { origX: spec.x, origZ: spec.z, isLeft: spec.isLeft, isFront: spec.isFront };

      const wheelRotator = new THREE.Group();
      const tireGeo = new THREE.CylinderGeometry(17, 17, 14.5, 24);
      const tireMesh = new THREE.Mesh(tireGeo, tireMat);
      tireMesh.rotation.x = Math.PI / 2;
      tireMesh.castShadow = true;
      wheelRotator.add(tireMesh);

      const rimGeo = new THREE.CylinderGeometry(13.2, 13.2, 15, 20);
      const rimMesh = new THREE.Mesh(rimGeo, rimMat);
      rimMesh.rotation.x = Math.PI / 2;
      wheelRotator.add(rimMesh);

      // 深凹 5 爪鍛造骨架
      for (let s = 0; s < 5; s++) {
        const spokeGeo = new THREE.BoxGeometry(2.4, 11, 15.2);
        const spoke = new THREE.Mesh(spokeGeo, carbonMat);
        const angle = s * (Math.PI * 2 / 5);
        spoke.position.set(Math.cos(angle) * 5.5, Math.sin(angle) * 5.5, 0);
        spoke.rotation.z = angle;
        wheelRotator.add(spoke);
      }

      // 金色霓虹輪圈外緣
      const outerRingGeo = new THREE.TorusGeometry(12.8, 0.6, 8, 24);
      const outerRing = new THREE.Mesh(outerRingGeo, ledGoldMat);
      outerRing.position.z = spec.isLeft ? 7.6 : -7.6;
      wheelRotator.add(outerRing);

      wheelAssembly.add(wheelRotator);
      wheelAssembly.userData.rotator = wheelRotator;

      carGroup.add(wheelAssembly);
      wheels.push(wheelAssembly);
    });

    // 車底烈焰紅光 (Underglow)
    const underglowLight = new THREE.PointLight(primaryColor, 3.0, 130);
    underglowLight.position.set(0, 3, 0);
    carGroup.add(underglowLight);

    carGroup.add(chassisGroup);
    carGroup.add(aeroGroup);
    carGroup.add(bodyGroup);

    // 車輛動態操作介面
    carGroup.userData = {
      type: 'inferno',
      name: "INFERNO PHANTOM GT",
      subtitle: "烈焰幻影・戰鬥重裝超跑 (Mecha Beast)",
      specs: {
        name: "INFERNO PHANTOM GT",
        topSpeed: 360,
        accel: 9.9,
        handling: 8.5,
        nitroCap: 130,
        nitroRecharge: 18,
        soundType: 'inferno'
      },
      wheels: wheels,
      bodyMaterial: bodyMat,
      underglow: underglowLight,
      taillight: ledCrimsonMat,
      exhaustGroup: exhaustGroup,
      setBraking: (isBraking) => {
        ledCrimsonMat.emissiveIntensity = isBraking ? 5.0 : 2.2;
      },
      setColor: (colorHex) => {
        bodyMat.color.setHex(colorHex);
        underglowLight.color.setHex(colorHex);
      },
      setBoosting: (isBoosting) => {
        underglowLight.intensity = isBoosting ? 6.0 : 3.0;
        const s = isBoosting ? 1.0 : 0.05;
        if (exhaustGroup.userData && exhaustGroup.userData.flames) {
          exhaustGroup.userData.flames.forEach(f => f.scale.set(s, s * 1.6, s));
        }
      }
    };

    return carGroup;
  }
}

window.CarModelBuilder = CarModelBuilder;
