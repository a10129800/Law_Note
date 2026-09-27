/**
 * TrackBuilder - 3D 國際專業 Grand Prix 擬真賽道與自然真實世界環境構建器
 * 包含：
 * 1. 高畫質柏油路面 (含中央虛線、雙側實線與輪胎煞車印痕)
 * 2. 賽車場國際標準紅白相間路緣石 (Curbs / Kerbs)
 * 3. 鍍鋅金屬波浪防撞護欄 (Armco Steel Guardrails) 與立柱
 * 4. 彎道緩衝區紅白色安全防撞輪胎牆 (Tire Barriers)
 * 5. 起跑/終點鋼構龍門 (Start/Finish Gantry) 附 5 盞紅燈與計時儀表
 * 6. 大面積起伏綠茵草地地貌 (Rolling Grass Terrain) 與遠景山巒 (Mountain Ridges)
 * 7. 擬真 3D 樹木植被林地 (針葉松樹與茂密落葉闊葉樹)
 * 8. 賽事主看台 (Grandstands)、維修區房 (Pit Garages) 與賽事控制塔 (Race Control Tower)
 * 9. 彎道前 150m/100m/50m 煞車距離指示標誌牌
 * 10. 擬真天際線與漸層天空穹頂 (Realistic Sky Dome)
 */

class TrackBuilder {
  constructor(scene) {
    this.scene = scene;
    this.trackCurve = null;
    this.checkpoints = [];
    this.boostPads = [];
    this.speedTraps = [];
    this.trackWidth = 240; // 國際 GT/F1 寬闊賽道規格
    this.totalLength = 0;
    this.environmentGroup = new THREE.Group();
    this.trackGroup = new THREE.Group();
    this.scene.add(this.environmentGroup);
    this.scene.add(this.trackGroup);

    // 預先產生程式化高解析度紋理 (無需外部網路連線，100% 穩定且高畫質)
    this.textures = this.generateProceduralTextures();
  }

  // ==========================================
  // 1. 程式化紋理生成系統 (Canvas Textures)
  // ==========================================
  generateProceduralTextures() {
    const textures = {};

    // A. 柏油路面紋理 (Asphalt Tarmac with Markings & Skid Marks)
    const roadCanvas = document.createElement('canvas');
    roadCanvas.width = 1024;
    roadCanvas.height = 1024;
    const rCtx = roadCanvas.getContext('2d');

    // 柏油底色 (深灰帶瀝青顆粒雜色)
    rCtx.fillStyle = '#262930';
    rCtx.fillRect(0, 0, 1024, 1024);

    // 瀝青微粒雜訊
    const imgData = rCtx.getImageData(0, 0, 1024, 1024);
    const data = imgData.data;
    for (let i = 0; i < data.length; i += 4) {
      const noise = (Math.random() - 0.5) * 22;
      data[i] = Math.min(255, Math.max(0, data[i] + noise));
      data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise));
      data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise));
    }
    rCtx.putImageData(imgData, 0, 0);

    // 輪胎膠化煞車軌跡 (Dark Racing Line Grooves)
    const grooveGrad1 = rCtx.createLinearGradient(0, 0, 1024, 0);
    grooveGrad1.addColorStop(0.22, 'rgba(15, 17, 22, 0)');
    grooveGrad1.addColorStop(0.32, 'rgba(12, 14, 18, 0.45)');
    grooveGrad1.addColorStop(0.42, 'rgba(15, 17, 22, 0)');
    grooveGrad1.addColorStop(0.58, 'rgba(15, 17, 22, 0)');
    grooveGrad1.addColorStop(0.68, 'rgba(12, 14, 18, 0.45)');
    grooveGrad1.addColorStop(0.78, 'rgba(15, 17, 22, 0)');
    rCtx.fillStyle = grooveGrad1;
    rCtx.fillRect(0, 0, 1024, 1024);

    // 左右兩側邊緣白色實線 (Track Limit Boundary Lines)
    rCtx.fillStyle = '#eef2f8';
    rCtx.fillRect(36, 0, 18, 1024);
    rCtx.fillRect(970, 0, 18, 1024);

    // 賽道中央間斷導向虛線 (Dashed Center Divider Line)
    const dashLength = 70;
    const gapLength = 58;
    const totalStep = dashLength + gapLength;
    rCtx.fillStyle = '#eef2f8';
    for (let y = 0; y < 1024; y += totalStep) {
      rCtx.fillRect(505, y, 14, dashLength);
    }

    const roadTex = new THREE.CanvasTexture(roadCanvas);
    roadTex.wrapS = THREE.RepeatWrapping;
    roadTex.wrapT = THREE.RepeatWrapping;
    roadTex.repeat.set(1, 48);
    textures.road = roadTex;

    // B. 紅白相間國際標準路緣石紋理 (Red & White Kerbs)
    const kerbCanvas = document.createElement('canvas');
    kerbCanvas.width = 512;
    kerbCanvas.height = 128;
    const kCtx = kerbCanvas.getContext('2d');
    const numStripes = 8;
    const sWidth = 512 / numStripes;
    for (let s = 0; s < numStripes; s++) {
      kCtx.fillStyle = (s % 2 === 0) ? '#d2232a' : '#f0f3f8';
      kCtx.fillRect(s * sWidth, 0, sWidth, 128);
    }
    // 陰影微立體凹凸
    const kerbGrad = kCtx.createLinearGradient(0, 0, 0, 128);
    kerbGrad.addColorStop(0, 'rgba(255,255,255,0.25)');
    kerbGrad.addColorStop(0.5, 'rgba(0,0,0,0)');
    kerbGrad.addColorStop(1, 'rgba(0,0,0,0.4)');
    kCtx.fillStyle = kerbGrad;
    kCtx.fillRect(0, 0, 512, 128);

    const kerbTex = new THREE.CanvasTexture(kerbCanvas);
    kerbTex.wrapS = THREE.RepeatWrapping;
    kerbTex.wrapT = THREE.RepeatWrapping;
    kerbTex.repeat.set(4, 1);
    textures.kerb = kerbTex;

    // C. 綠茵自然草皮紋理 (Natural Green Grass)
    const grassCanvas = document.createElement('canvas');
    grassCanvas.width = 512;
    grassCanvas.height = 512;
    const gCtx = grassCanvas.getContext('2d');
    gCtx.fillStyle = '#427533';
    gCtx.fillRect(0, 0, 512, 512);

    const gImgData = gCtx.getImageData(0, 0, 512, 512);
    const gData = gImgData.data;
    for (let i = 0; i < gData.length; i += 4) {
      const gNoise = (Math.random() - 0.5) * 35;
      gData[i] = Math.min(255, Math.max(0, gData[i] + gNoise * 0.7));
      gData[i + 1] = Math.min(255, Math.max(0, gData[i + 1] + gNoise));
      gData[i + 2] = Math.min(255, Math.max(0, gData[i + 2] + gNoise * 0.5));
    }
    gCtx.putImageData(gImgData, 0, 0);

    const grassTex = new THREE.CanvasTexture(grassCanvas);
    grassTex.wrapS = THREE.RepeatWrapping;
    grassTex.wrapT = THREE.RepeatWrapping;
    grassTex.repeat.set(60, 60);
    textures.grass = grassTex;

    // D. 晴空白晝天空漸層 (Realistic Sky Gradient)
    const skyCanvas = document.createElement('canvas');
    skyCanvas.width = 1024;
    skyCanvas.height = 512;
    const sCtx = skyCanvas.getContext('2d');
    const skyGrad = sCtx.createLinearGradient(0, 0, 0, 512);
    skyGrad.addColorStop(0, '#1c6bb5');    // 天頂深藍
    skyGrad.addColorStop(0.45, '#4f9ee3'); // 中層蔚藍
    skyGrad.addColorStop(0.82, '#a5d2f6'); // 近地平線透藍
    skyGrad.addColorStop(1.0, '#e2effa');  // 地平線暖白霞氣
    sCtx.fillStyle = skyGrad;
    sCtx.fillRect(0, 0, 1024, 512);

    // 漂浮軟白雲層 (Soft Cumulus Clouds)
    sCtx.fillStyle = 'rgba(255, 255, 255, 0.45)';
    for (let c = 0; c < 30; c++) {
      const cx = (c * 37) % 1024;
      const cy = 140 + Math.sin(c * 1.5) * 80;
      const cw = 70 + (c % 5) * 25;
      const ch = 20 + (c % 3) * 12;
      sCtx.beginPath();
      sCtx.ellipse(cx, cy, cw, ch, 0, 0, Math.PI * 2);
      sCtx.fill();
    }

    const skyTex = new THREE.CanvasTexture(skyCanvas);
    textures.sky = skyTex;

    return textures;
  }

  // ==========================================
  // 2. 主賽道與環境組裝
  // ==========================================
  buildTrack() {
    // 1. 定義豐富起伏的高速國際賽車場控制點 (約 12 個關鍵節點)
    const points = [
      new THREE.Vector3(0, 0, 0),             // 起跑大直道
      new THREE.Vector3(800, 0, 100),         // 直線衝刺區
      new THREE.Vector3(1500, 45, 500),       // 緩爬升高速大外弧 (Eau Rouge 風格)
      new THREE.Vector3(1900, 85, 1200),      // 高架景觀頂點
      new THREE.Vector3(1600, 35, 2000),      // 俯衝連續 S 彎入口
      new THREE.Vector3(900, 0, 2300),        // 地面高速過渡段
      new THREE.Vector3(100, 0, 2100),        // S 彎出口大急轉
      new THREE.Vector3(-600, 0, 1600),       // 西側森林高速走廊
      new THREE.Vector3(-1200, 55, 900),      // 緩坡立體彎道
      new THREE.Vector3(-1400, 75, 0),        // 北側觀景制高點
      new THREE.Vector3(-1000, 28, -700),     // 俯衝大盲彎
      new THREE.Vector3(-400, 0, -500),       // 回正最後衝刺直線
    ];

    this.trackCurve = new THREE.CatmullRomCurve3(points, true, 'centripetal', 0.5);
    this.totalLength = this.trackCurve.getLength();

    // 2. 生成賽道網格面 (Ribbon Road Geometry)
    const segments = 360;
    const roadPoints = this.trackCurve.getSpacedPoints(segments);

    const positions = [];
    const normals = [];
    const uvs = [];
    const indices = [];

    const halfW = this.trackWidth / 2;

    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const pt = roadPoints[i % segments];
      const tangent = this.trackCurve.getTangentAt(t).normalize();
      const up = new THREE.Vector3(0, 1, 0);
      const side = new THREE.Vector3().crossVectors(tangent, up).normalize();

      // 計算左右兩側路緣頂點
      const leftPt = pt.clone().add(side.clone().multiplyScalar(halfW));
      const rightPt = pt.clone().add(side.clone().multiplyScalar(-halfW));

      positions.push(leftPt.x, leftPt.y + 0.5, leftPt.z);
      positions.push(rightPt.x, rightPt.y + 0.5, rightPt.z);

      normals.push(0, 1, 0, 0, 1, 0);
      uvs.push(0, t * 48, 1, t * 48);

      if (i < segments) {
        const row1 = i * 2;
        const row2 = (i + 1) * 2;
        indices.push(row1, row2, row1 + 1);
        indices.push(row1 + 1, row2, row2 + 1);
      }
    }

    const roadGeo = new THREE.BufferGeometry();
    roadGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    roadGeo.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
    roadGeo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    roadGeo.setIndex(indices);
    roadGeo.computeVertexNormals();

    const roadMat = new THREE.MeshStandardMaterial({
      map: this.textures.road,
      roughness: 0.82,
      metalness: 0.12,
      side: THREE.DoubleSide
    });
    const roadMesh = new THREE.Mesh(roadGeo, roadMat);
    roadMesh.receiveShadow = true;
    this.trackGroup.add(roadMesh);

    // 3. 雙側國際賽道紅白路緣石 (Curbs / Kerbs)
    this.buildTrackCurbs(roadPoints, segments, halfW);

    // 4. 鍍鋅金屬防撞波浪護欄 (Armco Steel Guardrails & Posts)
    this.buildMetalGuardrails(roadPoints, segments, halfW);

    // 5. 彎道防撞輪胎牆與煞車警示牌 (Tire Barriers & Brake Markers)
    this.buildTireWallsAndMarkers(roadPoints, segments, halfW);

    // 6. 起跑終點大型鋼構龍門與五盞出發號誌燈 (Start/Finish Gantry)
    this.buildStartGantry();

    // 7. 擬真起伏綠茵草地地貌 (Rolling Terrain)
    this.buildRollingTerrain();

    // 8. 擬真森林植被 (3D Pine & Deciduous Trees)
    this.buildVegetation(roadPoints, segments, halfW);

    // 9. 賽事主看台與維修區大樓 (Grandstands & Pit Buildings)
    this.buildCircuitBuildings();

    // 10. 遠景山巒剪影 (Distant Mountains)
    this.buildDistantMountains();

    // 11. 逼真天際天空穹頂 (Realistic Sky Dome)
    this.buildSkyDome();

    // 12. 地面加速衝刺區
    this.buildBoostPads();

    // 13. 檢查點系統
    this.buildCheckpoints(segments);

    // 14. 地平線嘉年華特色世界 (Horizon Festival Arches, Checkpoint Gates, Speed Traps, Flags)
    this.buildHorizonFestivalWorld();

    return this.trackCurve;
  }

  // ==========================================
  // 3. 紅白相間路緣石 (Kerbs)
  // ==========================================
  buildTrackCurbs(roadPoints, segments, halfW) {
    const curbMat = new THREE.MeshStandardMaterial({
      map: this.textures.kerb,
      roughness: 0.65,
      metalness: 0.15,
      side: THREE.DoubleSide
    });

    const curbWidth = 14;
    const curbHeight = 1.4;

    for (let side of [1, -1]) {
      const positions = [];
      const normals = [];
      const uvs = [];
      const indices = [];

      for (let i = 0; i <= segments; i++) {
        const t = i / segments;
        const pt = roadPoints[i % segments];
        const tangent = this.trackCurve.getTangentAt(t).normalize();
        const up = new THREE.Vector3(0, 1, 0);
        const sideVec = new THREE.Vector3().crossVectors(tangent, up).normalize();

        const baseDist = side * halfW;
        const innerPt = pt.clone().add(sideVec.clone().multiplyScalar(baseDist));
        const outerPt = pt.clone().add(sideVec.clone().multiplyScalar(baseDist + side * curbWidth));

        positions.push(innerPt.x, innerPt.y + 0.8, innerPt.z);
        positions.push(outerPt.x, outerPt.y + 0.8 + curbHeight, outerPt.z);

        normals.push(0, 1, 0, 0, 1, 0);
        uvs.push(0, t * 72, 1, t * 72);

        if (i < segments) {
          const r1 = i * 2;
          const r2 = (i + 1) * 2;
          indices.push(r1, r2, r1 + 1);
          indices.push(r1 + 1, r2, r2 + 1);
        }
      }

      const curbGeo = new THREE.BufferGeometry();
      curbGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      curbGeo.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
      curbGeo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
      curbGeo.setIndex(indices);
      curbGeo.computeVertexNormals();

      const curbMesh = new THREE.Mesh(curbGeo, curbMat);
      curbMesh.receiveShadow = true;
      this.trackGroup.add(curbMesh);
    }
  }

  // ==========================================
  // 4. 鍍鋅金屬防撞護欄與支撐立柱 (Armco Guardrails)
  // ==========================================
  buildMetalGuardrails(roadPoints, segments, halfW) {
    const railMat = new THREE.MeshStandardMaterial({
      color: 0xc4cdd5,
      metalness: 0.85,
      roughness: 0.28
    });

    const postMat = new THREE.MeshStandardMaterial({
      color: 0x475569,
      metalness: 0.9,
      roughness: 0.4
    });

    const railOffset = halfW + 16;
    const postGeo = new THREE.BoxGeometry(2.4, 18, 2.4);

    for (let side of [1, -1]) {
      const railPoints = [];

      for (let i = 0; i < segments; i++) {
        const t = i / segments;
        const pt = roadPoints[i];
        const tangent = this.trackCurve.getTangentAt(t).normalize();
        const up = new THREE.Vector3(0, 1, 0);
        const sideVec = new THREE.Vector3().crossVectors(tangent, up).normalize();

        const postPos = pt.clone().add(sideVec.clone().multiplyScalar(side * railOffset));
        railPoints.push(postPos.clone().add(new THREE.Vector3(0, 9, 0)));

        // 每隔 4 個點豎立一根鋼製立柱
        if (i % 4 === 0) {
          const post = new THREE.Mesh(postGeo, postMat);
          post.position.set(postPos.x, postPos.y + 7.5, postPos.z);
          post.castShadow = true;
          this.trackGroup.add(post);
        }
      }

      const railCurve = new THREE.CatmullRomCurve3(railPoints, true);
      // 雙層波浪鋼板護欄
      const tubeGeoUpper = new THREE.TubeGeometry(railCurve, segments, 2.8, 8, true);
      const tubeMeshUpper = new THREE.Mesh(tubeGeoUpper, railMat);
      tubeMeshUpper.castShadow = true;
      tubeMeshUpper.receiveShadow = true;
      this.trackGroup.add(tubeMeshUpper);
    }
  }

  // ==========================================
  // 5. 彎道防撞輪胎牆與煞車警示看板
  // ==========================================
  buildTireWallsAndMarkers(roadPoints, segments, halfW) {
    const tireMatRed = new THREE.MeshStandardMaterial({ color: 0xc81e28, roughness: 0.85, metalness: 0.1 });
    const tireMatWhite = new THREE.MeshStandardMaterial({ color: 0xedf0f4, roughness: 0.85, metalness: 0.1 });
    const tireGeo = new THREE.CylinderGeometry(5.5, 5.5, 4.2, 14);

    // 在高曲率彎道外側設置輪胎牆緩衝堆
    const curveApexes = [0.25, 0.42, 0.55, 0.72, 0.88];

    curveApexes.forEach(apexT => {
      const pt = this.trackCurve.getPointAt(apexT);
      const tangent = this.trackCurve.getTangentAt(apexT).normalize();
      const up = new THREE.Vector3(0, 1, 0);
      const sideVec = new THREE.Vector3().crossVectors(tangent, up).normalize();

      for (let s = -1; s <= 1; s += 2) {
        const wallBase = pt.clone().add(sideVec.clone().multiplyScalar(s * (halfW + 28)));
        for (let row = 0; row < 6; row++) {
          const forwardOffset = tangent.clone().multiplyScalar((row - 2.5) * 14);
          for (let layer = 0; layer < 3; layer++) {
            const tire = new THREE.Mesh(tireGeo, (row + layer) % 2 === 0 ? tireMatRed : tireMatWhite);
            tire.position.copy(wallBase).add(forwardOffset);
            tire.position.y += 2.2 + layer * 4.2;
            tire.rotation.z = Math.PI / 2;
            tire.castShadow = true;
            this.trackGroup.add(tire);
          }
        }
      }

      // 設置 100m 煞車警示牌 (Brake Distance Boards)
      const signPt = this.trackCurve.getPointAt((apexT - 0.035 + 1.0) % 1.0);
      const signTangent = this.trackCurve.getTangentAt((apexT - 0.035 + 1.0) % 1.0).normalize();
      const signSide = new THREE.Vector3().crossVectors(signTangent, up).normalize();

      const boardPos = signPt.clone().add(signSide.clone().multiplyScalar(halfW + 22));
      const boardGroup = new THREE.Group();
      boardGroup.position.copy(boardPos);
      boardGroup.position.y += 14;

      const boardSign = new THREE.Mesh(
        new THREE.BoxGeometry(16, 12, 1.5),
        new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.3 })
      );
      boardGroup.add(boardSign);

      const boardTextCanvas = document.createElement('canvas');
      boardTextCanvas.width = 128;
      boardTextCanvas.height = 96;
      const bCtx = boardTextCanvas.getContext('2d');
      bCtx.fillStyle = '#ffffff';
      bCtx.fillRect(0, 0, 128, 96);
      bCtx.fillStyle = '#000000';
      bCtx.font = 'bold 52px monospace';
      bCtx.textAlign = 'center';
      bCtx.textBaseline = 'middle';
      bCtx.fillText('100', 64, 48);

      const textTex = new THREE.CanvasTexture(boardTextCanvas);
      const textPlate = new THREE.Mesh(
        new THREE.PlaneGeometry(15, 11),
        new THREE.MeshBasicMaterial({ map: textTex })
      );
      textPlate.position.z = 0.85;
      boardGroup.add(textPlate);

      // 支架立柱
      const signLeg = new THREE.Mesh(
        new THREE.CylinderGeometry(1, 1, 14, 8),
        new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.8 })
      );
      signLeg.position.y = -7;
      boardGroup.add(signLeg);

      boardGroup.lookAt(boardPos.clone().add(signTangent.clone().multiplyScalar(-1)));
      this.trackGroup.add(boardGroup);
    });
  }

  // ==========================================
  // 6. 起跑終點鋼構龍門 (Start/Finish Gantry)
  // ==========================================
  buildStartGantry() {
    const startPt = this.trackCurve.getPointAt(0);
    const tangent = this.trackCurve.getTangentAt(0).normalize();
    const up = new THREE.Vector3(0, 1, 0);
    const side = new THREE.Vector3().crossVectors(tangent, up).normalize();

    const gantryGroup = new THREE.Group();
    gantryGroup.position.copy(startPt);

    const trussMat = new THREE.MeshStandardMaterial({
      color: 0x2b3547,
      metalness: 0.88,
      roughness: 0.25
    });

    const gantrySpan = this.trackWidth + 60;
    const gantryHeight = 78;

    // 兩側立體鋼柱
    for (let s of [1, -1]) {
      const col = new THREE.Mesh(new THREE.BoxGeometry(14, gantryHeight, 14), trussMat);
      col.position.copy(side.clone().multiplyScalar(s * (gantrySpan / 2)));
      col.position.y = gantryHeight / 2;
      col.castShadow = true;
      gantryGroup.add(col);
    }

    // 橫跨主鋼桁架
    const beam = new THREE.Mesh(new THREE.BoxGeometry(gantrySpan, 16, 20), trussMat);
    beam.position.y = gantryHeight;
    beam.castShadow = true;
    gantryGroup.add(beam);

    // 5 盞國際賽事起跑紅燈 (F1 Starting Lights)
    for (let l = -2; l <= 2; l++) {
      const lightBox = new THREE.Mesh(
        new THREE.BoxGeometry(14, 10, 6),
        new THREE.MeshStandardMaterial({ color: 0x111622, metalness: 0.8 })
      );
      lightBox.position.set(l * 28, gantryHeight - 12, 0);

      const lamp = new THREE.Mesh(
        new THREE.CircleGeometry(3.6, 16),
        new THREE.MeshStandardMaterial({
          color: 0xff1e28,
          emissive: 0xff1e28,
          emissiveIntensity: 1.6,
          roughness: 0.1
        })
      );
      lamp.position.z = 3.2;
      lightBox.add(lamp);
      gantryGroup.add(lightBox);
    }

    // 地表黑白棋盤起跑線 (Checkered Finish Line)
    const lineCanvas = document.createElement('canvas');
    lineCanvas.width = 512;
    lineCanvas.height = 64;
    const lCtx = lineCanvas.getContext('2d');
    const cols = 16;
    const rows = 2;
    const cw = 512 / cols;
    const ch = 64 / rows;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        lCtx.fillStyle = (r + c) % 2 === 0 ? '#ffffff' : '#1a202c';
        lCtx.fillRect(c * cw, r * ch, cw, ch);
      }
    }
    const checkTex = new THREE.CanvasTexture(lineCanvas);
    const startMesh = new THREE.Mesh(
      new THREE.BoxGeometry(this.trackWidth, 1.2, 22),
      new THREE.MeshStandardMaterial({ map: checkTex, roughness: 0.6 })
    );
    startMesh.position.y = 0.9;
    gantryGroup.add(startMesh);

    this.trackGroup.add(gantryGroup);
  }

  // ==========================================
  // 7. 起伏綠茵草地地貌 (Rolling Terrain)
  // ==========================================
  buildRollingTerrain() {
    const terrainSize = 14000;
    const terrainGeo = new THREE.PlaneGeometry(terrainSize, terrainSize, 80, 80);
    terrainGeo.rotateX(-Math.PI / 2);

    const pos = terrainGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);

      // 自然起伏丘陵波浪
      let y = Math.sin(x * 0.0012) * Math.cos(z * 0.0012) * 90;
      y += Math.sin(x * 0.0028 + 1.2) * 40;
      y += Math.cos(z * 0.0025 + 0.8) * 35;

      // 賽道區域草地沉降至路面下方，確保柏油路面、標線與路緣石完全清晰展現
      y = Math.min(y, -2.5) - 3.5;

      pos.setY(i, y);
    }
    terrainGeo.computeVertexNormals();

    const terrainMat = new THREE.MeshStandardMaterial({
      map: this.textures.grass,
      roughness: 0.92,
      metalness: 0.05
    });

    const terrain = new THREE.Mesh(terrainGeo, terrainMat);
    terrain.receiveShadow = true;
    this.environmentGroup.add(terrain);
  }

  // ==========================================
  // 8. 擬真 3D 樹木林地 (Trees & Vegetation)
  // ==========================================
  buildVegetation(roadPoints, segments, halfW) {
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x4a3728, roughness: 0.9 });
    const pineMat1 = new THREE.MeshStandardMaterial({ color: 0x1e4620, roughness: 0.85, metalness: 0.05 });
    const pineMat2 = new THREE.MeshStandardMaterial({ color: 0x28592c, roughness: 0.85, metalness: 0.05 });
    const oakMat1 = new THREE.MeshStandardMaterial({ color: 0x3d7e2b, roughness: 0.85, metalness: 0.05 });
    const oakMat2 = new THREE.MeshStandardMaterial({ color: 0x519839, roughness: 0.85, metalness: 0.05 });

    const pineTrunkGeo = new THREE.CylinderGeometry(2.5, 4.0, 32, 8);
    const oakTrunkGeo = new THREE.CylinderGeometry(3.2, 5.0, 30, 8);

    // 沿著賽道兩側與外圍丘陵散佈約 180 棵 3D 樹木
    const numTrees = 180;
    for (let t = 0; t < numTrees; t++) {
      const tFrac = t / numTrees;
      const roadPt = this.trackCurve.getPointAt(tFrac);
      const tangent = this.trackCurve.getTangentAt(tFrac).normalize();
      const up = new THREE.Vector3(0, 1, 0);
      const sideVec = new THREE.Vector3().crossVectors(tangent, up).normalize();

      const sideSign = (t % 2 === 0) ? 1 : -1;
      const distFromTrack = halfW + 45 + Math.random() * 260;
      const treePos = roadPt.clone().add(sideVec.clone().multiplyScalar(sideSign * distFromTrack));
      treePos.y = Math.max(-2, roadPt.y - 4);

      const treeGroup = new THREE.Group();
      treeGroup.position.copy(treePos);
      const treeScale = 0.85 + Math.random() * 0.55;
      treeGroup.scale.set(treeScale, treeScale, treeScale);

      if (t % 2 === 0) {
        // 樹種 1: 常青針葉松樹 (Multi-Tiered Pine Tree)
        const trunk = new THREE.Mesh(pineTrunkGeo, trunkMat);
        trunk.position.y = 16;
        trunk.castShadow = true;
        treeGroup.add(trunk);

        const tiers = 3;
        for (let tier = 0; tier < tiers; tier++) {
          const coneRadius = 24 - tier * 5.5;
          const coneHeight = 26 - tier * 3;
          const coneGeo = new THREE.ConeGeometry(coneRadius, coneHeight, 8);
          const coneMat = (tier % 2 === 0) ? pineMat1 : pineMat2;
          const cone = new THREE.Mesh(coneGeo, coneMat);
          cone.position.y = 30 + tier * 16;
          cone.castShadow = true;
          cone.receiveShadow = true;
          treeGroup.add(cone);
        }
      } else {
        // 樹種 2: 茂密落葉闊葉樹 (Deciduous Shade Tree)
        const trunk = new THREE.Mesh(oakTrunkGeo, trunkMat);
        trunk.position.y = 15;
        trunk.castShadow = true;
        treeGroup.add(trunk);

        const crownLayers = [
          { r: 22, y: 38, mat: oakMat1 },
          { r: 18, y: 48, mat: oakMat2 },
          { r: 14, y: 56, mat: oakMat1 }
        ];
        crownLayers.forEach(layer => {
          const crownGeo = new THREE.DodecahedronGeometry(layer.r, 1);
          const crown = new THREE.Mesh(crownGeo, layer.mat);
          crown.position.y = layer.y;
          crown.scale.set(1.1, 0.9, 1.1);
          crown.castShadow = true;
          crown.receiveShadow = true;
          treeGroup.add(crown);
        });
      }

      this.environmentGroup.add(treeGroup);
    }
  }

  // ==========================================
  // 9. 賽事主看台與維修區大樓 (Grandstands & Pit)
  // ==========================================
  buildCircuitBuildings() {
    const startPt = this.trackCurve.getPointAt(0);
    const tangent = this.trackCurve.getTangentAt(0).normalize();
    const up = new THREE.Vector3(0, 1, 0);
    const side = new THREE.Vector3().crossVectors(tangent, up).normalize();

    // A. 主觀眾看台 (Grandstand with Seating Tiers & Canopy)
    const standPos = startPt.clone().add(side.clone().multiplyScalar(this.trackWidth / 2 + 75));
    const standGroup = new THREE.Group();
    standGroup.position.copy(standPos);

    const concMat = new THREE.MeshStandardMaterial({ color: 0xd9e1ea, roughness: 0.75 });
    const seatMatRed = new THREE.MeshStandardMaterial({ color: 0xcc242b, roughness: 0.5 });
    const seatMatBlue = new THREE.MeshStandardMaterial({ color: 0x1d5ca3, roughness: 0.5 });
    const canopyMat = new THREE.MeshStandardMaterial({ color: 0x222e42, metalness: 0.6, roughness: 0.35 });

    // 階梯看台底座
    const standLength = 480;
    const numRows = 6;
    for (let r = 0; r < numRows; r++) {
      const stepMesh = new THREE.Mesh(
        new THREE.BoxGeometry(standLength, 12, 18),
        (r % 2 === 0) ? seatMatRed : seatMatBlue
      );
      stepMesh.position.set(0, 6 + r * 10, (r - numRows / 2) * 16);
      stepMesh.castShadow = true;
      stepMesh.receiveShadow = true;
      standGroup.add(stepMesh);
    }

    // 看台遮陽鋼頂棚
    const roof = new THREE.Mesh(new THREE.BoxGeometry(standLength, 6, 120), canopyMat);
    roof.position.set(0, numRows * 10 + 26, 0);
    roof.rotation.x = -0.12;
    roof.castShadow = true;
    standGroup.add(roof);

    // 頂部支撐鋼柱
    for (let c = -2; c <= 2; c++) {
      const p = new THREE.Mesh(
        new THREE.CylinderGeometry(2, 2, numRows * 10 + 24, 8),
        new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.85 })
      );
      p.position.set(c * 100, (numRows * 10 + 24) / 2, -45);
      standGroup.add(p);
    }

    standGroup.lookAt(standPos.clone().add(side.clone().multiplyScalar(-1)));
    this.environmentGroup.add(standGroup);

    // B. 維修區大樓與賽事控制塔 (Pit Lane & Race Control Tower)
    const pitPos = startPt.clone().add(side.clone().multiplyScalar(-this.trackWidth / 2 - 80));
    const pitGroup = new THREE.Group();
    pitGroup.position.copy(pitPos);

    const bldgMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.65, roughness: 0.35 });
    const glassMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.05, metalness: 0.95, transparent: true, opacity: 0.85 });

    // 一樓維修車庫排房
    const pitMesh = new THREE.Mesh(new THREE.BoxGeometry(380, 28, 65), bldgMat);
    pitMesh.position.y = 14;
    pitMesh.castShadow = true;
    pitMesh.receiveShadow = true;
    pitGroup.add(pitMesh);

    // 二樓貴賓觀察室 (Glass VIP Lounge)
    const loungeMesh = new THREE.Mesh(new THREE.BoxGeometry(340, 22, 55), glassMat);
    loungeMesh.position.y = 39;
    pitGroup.add(loungeMesh);

    // 三層賽事控制指揮塔 (Control Tower)
    const tower = new THREE.Mesh(new THREE.BoxGeometry(70, 75, 60), bldgMat);
    tower.position.set(130, 37.5, 0);
    tower.castShadow = true;
    pitGroup.add(tower);

    const towerGlass = new THREE.Mesh(new THREE.BoxGeometry(66, 18, 56), glassMat);
    towerGlass.position.set(130, 64, 0);
    pitGroup.add(towerGlass);

    pitGroup.lookAt(pitPos.clone().add(side));
    this.environmentGroup.add(pitGroup);

    // C. 賽道沿途 6 座高空照明燈塔 (Stadium Floodlight Towers)
    const lightTowersT = [0.12, 0.32, 0.52, 0.68, 0.84, 0.95];
    lightTowersT.forEach(lt => {
      const lp = this.trackCurve.getPointAt(lt);
      const ltang = this.trackCurve.getTangentAt(lt).normalize();
      const lside = new THREE.Vector3().crossVectors(ltang, up).normalize();

      const towerPos = lp.clone().add(lside.clone().multiplyScalar(this.trackWidth / 2 + 40));
      const mastGroup = new THREE.Group();
      mastGroup.position.copy(towerPos);

      const mast = new THREE.Mesh(
        new THREE.CylinderGeometry(2, 3.5, 95, 8),
        new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.85, roughness: 0.3 })
      );
      mast.position.y = 47.5;
      mast.castShadow = true;
      mastGroup.add(mast);

      // 頂部照明燈盤
      const head = new THREE.Mesh(
        new THREE.BoxGeometry(28, 14, 6),
        new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.8 })
      );
      head.position.y = 95;
      head.lookAt(lp);

      const bulb = new THREE.Mesh(
        new THREE.PlaneGeometry(26, 12),
        new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfffae8, emissiveIntensity: 1.4 })
      );
      bulb.position.z = 3.1;
      head.add(bulb);
      mastGroup.add(head);

      this.environmentGroup.add(mastGroup);
    });
  }

  // ==========================================
  // 10. 遠景山巒剪影 (Distant Mountains)
  // ==========================================
  buildDistantMountains() {
    const mountainMat = new THREE.MeshStandardMaterial({
      color: 0x3d546a,
      roughness: 0.95,
      metalness: 0.1
    });

    const numPeaks = 18;
    const radius = 6200;

    for (let p = 0; p < numPeaks; p++) {
      const angle = (p / numPeaks) * Math.PI * 2;
      const mx = Math.cos(angle) * radius + (Math.random() - 0.5) * 600;
      const mz = Math.sin(angle) * radius + (Math.random() - 0.5) * 600;
      const mHeight = 550 + Math.random() * 550;
      const mRadius = 600 + Math.random() * 500;

      const mGeo = new THREE.ConeGeometry(mRadius, mHeight, 7);
      const mMesh = new THREE.Mesh(mGeo, mountainMat);
      mMesh.position.set(mx, mHeight / 2 - 80, mz);
      mMesh.scale.set(1.2, 1.0, 1.0);
      this.environmentGroup.add(mMesh);
    }
  }

  // ==========================================
  // 11. 逼真天際天空穹頂 (Realistic Sky Dome)
  // ==========================================
  buildSkyDome() {
    const skyGeo = new THREE.SphereGeometry(7200, 32, 20);
    const skyMat = new THREE.MeshBasicMaterial({
      map: this.textures.sky,
      side: THREE.BackSide,
      fog: false
    });
    const skyDome = new THREE.Mesh(skyGeo, skyMat);
    skyDome.position.set(0, 0, 0);
    this.environmentGroup.add(skyDome);
  }

  // ==========================================
  // 12. 地表加速光帶板 (Boost Pads)
  // ==========================================
  buildBoostPads() {
    const padFractions = [0.08, 0.35, 0.62, 0.85];

    padFractions.forEach((t) => {
      const pt = this.trackCurve.getPointAt(t);
      const tangent = this.trackCurve.getTangentAt(t).normalize();

      const padGroup = new THREE.Group();
      padGroup.position.copy(pt);

      // 三道前進推進箭頭
      for (let c = 0; c < 3; c++) {
        const arrowGeo = new THREE.BoxGeometry(68 - c * 8, 1.4, 8);
        const arrowMat = new THREE.MeshStandardMaterial({
          color: 0x00f0ff,
          emissive: 0x00c8e6,
          emissiveIntensity: 2.5,
          roughness: 0.2
        });
        const arrowMesh = new THREE.Mesh(arrowGeo, arrowMat);
        arrowMesh.position.copy(tangent.clone().multiplyScalar(c * 22 - 22));
        arrowMesh.position.y = 1.2;
        padGroup.add(arrowMesh);
      }

      this.trackGroup.add(padGroup);
      this.boostPads.push({
        position: pt,
        radius: 75,
        boostPower: 45
      });
    });
  }

  // ==========================================
  // 13. 檢查點系統
  // ==========================================
  buildCheckpoints(segments) {
    const numCheckpoints = 24;
    for (let i = 0; i < numCheckpoints; i++) {
      const t = i / numCheckpoints;
      const pt = this.trackCurve.getPointAt(t);
      const tangent = this.trackCurve.getTangentAt(t).normalize();
      this.checkpoints.push({
        index: i,
        t: t,
        position: pt,
        tangent: tangent,
        radius: this.trackWidth * 0.75
      });
    }
  }

  // ==========================================
  // 14. 地平線嘉年華特色世界 (Horizon Festival World)
  // ==========================================
  buildHorizonFestivalWorld() {
    this.buildHorizonFestivalArches();
    this.buildHorizonCheckpointGates();
    this.buildHorizonSpeedTraps();
    this.buildHorizonFeatherFlags();
  }

  // 產生嘉年華大型發光橫幅紋理
  generateFestivalBannerTexture(title = "HORIZON FESTIVAL", subtitle = "FESTIVAL CIRCUIT OVERDRIVE", theme = "pink") {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    // 地平線經典漸層 (洋紅 -> 金黃 -> 青藍)
    const grad = ctx.createLinearGradient(0, 0, 1024, 0);
    if (theme === 'pink') {
      grad.addColorStop(0, '#ff007f');
      grad.addColorStop(0.5, '#ff5500');
      grad.addColorStop(1, '#ffcc00');
    } else if (theme === 'cyan') {
      grad.addColorStop(0, '#0088ff');
      grad.addColorStop(0.5, '#00f0ff');
      grad.addColorStop(1, '#00ff88');
    } else {
      grad.addColorStop(0, '#ffcc00');
      grad.addColorStop(0.5, '#ff007f');
      grad.addColorStop(1, '#00f0ff');
    }

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1024, 256);

    // 科技網格底紋
    ctx.fillStyle = 'rgba(10, 15, 26, 0.78)';
    ctx.fillRect(14, 14, 1024 - 28, 256 - 28);

    // 內襯金黃色邊框
    ctx.strokeStyle = '#ffcc00';
    ctx.lineWidth = 6;
    ctx.strokeRect(14, 14, 1024 - 28, 256 - 28);

    // 兩側箭頭符號
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 64px "Montserrat", sans-serif';
    ctx.fillText('◀◀', 42, 148);
    ctx.fillText('▶▶', 1024 - 150, 148);

    // 主標題
    ctx.fillStyle = '#ffffff';
    ctx.font = 'italic 900 66px "Montserrat", sans-serif';
    ctx.textAlign = 'center';
    ctx.shadowColor = 'rgba(255, 0, 127, 0.9)';
    ctx.shadowBlur = 18;
    ctx.fillText(title, 512, 126);

    // 副標題
    ctx.fillStyle = '#ffcc00';
    ctx.font = '800 30px "Montserrat", sans-serif';
    ctx.shadowBlur = 10;
    ctx.shadowColor = 'rgba(0, 240, 255, 0.8)';
    ctx.fillText(subtitle, 512, 190);

    const tex = new THREE.CanvasTexture(canvas);
    return tex;
  }

  // 1. 建造 4 座跨道大型地平線嘉年華巨型拱門 (Mega Festival Arches)
  buildHorizonFestivalArches() {
    const archConfigs = [
      { t: 0.00, title: "HORIZON FESTIVAL", subtitle: "START / FINISH LINE ✦ SPEED OVERDRIVE", theme: "pink" },
      { t: 0.28, title: "DRIFT ZONE APEX", subtitle: "HOLD SLIDE FOR MASSIVE MULTIPLIERS ✦", theme: "cyan" },
      { t: 0.55, title: "HORIZON MEGAPLEX", subtitle: "EXTREME CANYON SECTOR ✦ FULL THROTTLE", theme: "yellow" },
      { t: 0.82, title: "FINAL STRETCH", subtitle: "PUSH FOR THE PODIUM ✦ HORIZON GLORY", theme: "pink" }
    ];

    const trussMat = new THREE.MeshStandardMaterial({
      color: 0x182030,
      metalness: 0.88,
      roughness: 0.25
    });

    const neonPinkMat = new THREE.MeshStandardMaterial({
      color: 0xff007f,
      emissive: 0xff007f,
      emissiveIntensity: 2.5
    });

    const neonCyanMat = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      emissive: 0x00f0ff,
      emissiveIntensity: 2.5
    });

    archConfigs.forEach(cfg => {
      const pt = this.trackCurve.getPointAt(cfg.t);
      const tangent = this.trackCurve.getTangentAt(cfg.t).normalize();
      const up = new THREE.Vector3(0, 1, 0);
      const side = new THREE.Vector3().crossVectors(tangent, up).normalize();

      const archGroup = new THREE.Group();
      archGroup.position.copy(pt);

      const span = this.trackWidth + 60;
      const archHeight = 72;

      // 左右兩座鋼結構立塔
      for (let s of [1, -1]) {
        const pylon = new THREE.Mesh(new THREE.BoxGeometry(16, archHeight, 18), trussMat);
        pylon.position.set(s * (span / 2), archHeight / 2, 0);
        pylon.castShadow = true;
        archGroup.add(pylon);

        // 立塔外緣發光霓虹燈條
        const neonStrip = new THREE.Mesh(new THREE.BoxGeometry(2.5, archHeight, 2.5), (s === 1) ? neonPinkMat : neonCyanMat);
        neonStrip.position.set(s * (span / 2 - s * 8.5), archHeight / 2, 0);
        archGroup.add(neonStrip);
      }

      // 橫跨大樑
      const topTruss = new THREE.Mesh(new THREE.BoxGeometry(span, 16, 20), trussMat);
      topTruss.position.set(0, archHeight, 0);
      topTruss.castShadow = true;
      archGroup.add(topTruss);

      // 中央雙面大型嘉年華招牌 (Horizon Festival Billboard)
      const bannerTex = this.generateFestivalBannerTexture(cfg.title, cfg.subtitle, cfg.theme);
      const bannerMat = new THREE.MeshStandardMaterial({
        map: bannerTex,
        roughness: 0.2,
        emissive: 0xffffff,
        emissiveMap: bannerTex,
        emissiveIntensity: 0.95
      });

      // 正面與背面招牌
      for (let dir of [1, -1]) {
        const bannerMesh = new THREE.Mesh(new THREE.PlaneGeometry(span - 40, 26), bannerMat);
        bannerMesh.position.set(0, archHeight, dir * 10.5);
        if (dir === -1) bannerMesh.rotateY(Math.PI);
        archGroup.add(bannerMesh);
      }

      // 拱門頂部聚光射燈組
      for (let j = -3; j <= 3; j++) {
        const spotBulb = new THREE.Mesh(
          new THREE.SphereGeometry(2.2, 12, 12),
          (j % 2 === 0) ? neonPinkMat : neonCyanMat
        );
        spotBulb.position.set(j * 32, archHeight + 9, 0);
        archGroup.add(spotBulb);
      }

      archGroup.lookAt(pt.clone().add(tangent));
      this.environmentGroup.add(archGroup);
    });
  }

  // 2. 建造 24 處地平線經典霓虹立柱檢查點光門 (Horizon Checkpoint Gates)
  buildHorizonCheckpointGates() {
    const pylonMat = new THREE.MeshStandardMaterial({
      color: 0x0b101c,
      metalness: 0.9,
      roughness: 0.2
    });

    const glowPinkMat = new THREE.MeshStandardMaterial({
      color: 0xff007f,
      emissive: 0xff007f,
      emissiveIntensity: 3.0
    });

    const glowYellowMat = new THREE.MeshStandardMaterial({
      color: 0xffcc00,
      emissive: 0xffcc00,
      emissiveIntensity: 2.8
    });

    this.checkpoints.forEach((cp, idx) => {
      const pt = cp.position;
      const tangent = cp.tangent;
      const up = new THREE.Vector3(0, 1, 0);
      const side = new THREE.Vector3().crossVectors(tangent, up).normalize();

      const gateGroup = new THREE.Group();
      gateGroup.position.copy(pt);

      const halfW = this.trackWidth / 2 + 8;
      const pylonHeight = 32;
      const isAlt = (idx % 2 === 0);
      const currentGlowMat = isAlt ? glowPinkMat : glowYellowMat;

      // 賽道左右各一座發光霓虹標記柱
      for (let s of [1, -1]) {
        const pylon = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 3.5, pylonHeight, 12), pylonMat);
        pylon.position.set(s * halfW, pylonHeight / 2, 0);
        pylon.castShadow = true;
        gateGroup.add(pylon);

        // 頂部浮動發光水晶箭頭
        const crystal = new THREE.Mesh(new THREE.ConeGeometry(3.5, 8, 4), currentGlowMat);
        crystal.position.set(s * halfW, pylonHeight + 5, 0);
        crystal.rotation.x = Math.PI;
        gateGroup.add(crystal);

        // 光柱立面霓虹光環
        const ring = new THREE.Mesh(new THREE.TorusGeometry(3.2, 0.8, 8, 16), currentGlowMat);
        ring.position.set(s * halfW, pylonHeight * 0.75, 0);
        ring.rotation.x = Math.PI / 2;
        gateGroup.add(ring);
      }

      gateGroup.lookAt(pt.clone().add(tangent));
      this.trackGroup.add(gateGroup);
    });
  }

  // 3. 建造 2 處地平線測速照相機站 (Horizon Speed Trap Camera Stations)
  buildHorizonSpeedTraps() {
    const trapConfigs = [
      { id: 1, name: "MEGAPLEX SPEED TRAP", t: 0.38, target3: 240, target2: 200, target1: 160 },
      { id: 2, name: "SUNSET CANYON SPEED TRAP", t: 0.72, target3: 255, target2: 210, target1: 170 }
    ];

    const cameraHousingMat = new THREE.MeshStandardMaterial({
      color: 0x141a29,
      metalness: 0.85,
      roughness: 0.25
    });

    const warningStripeCanvas = document.createElement('canvas');
    warningStripeCanvas.width = 256;
    warningStripeCanvas.height = 64;
    const wCtx = warningStripeCanvas.getContext('2d');
    for (let x = 0; x < 256; x += 32) {
      wCtx.fillStyle = (x % 64 === 0) ? '#ffcc00' : '#111622';
      wCtx.fillRect(x, 0, 32, 64);
    }
    const warningTex = new THREE.CanvasTexture(warningStripeCanvas);
    const warningMat = new THREE.MeshBasicMaterial({ map: warningTex });

    const flashBulbMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xffffff,
      emissiveIntensity: 1.5
    });

    trapConfigs.forEach(tc => {
      const pt = this.trackCurve.getPointAt(tc.t);
      const tangent = this.trackCurve.getTangentAt(tc.t).normalize();
      const up = new THREE.Vector3(0, 1, 0);
      const side = new THREE.Vector3().crossVectors(tangent, up).normalize();

      const trapGroup = new THREE.Group();
      trapGroup.position.copy(pt);

      const span = this.trackWidth + 30;
      const gHeight = 52;

      // 跨道黃黑警示條紋大樑
      const crossBeam = new THREE.Mesh(new THREE.BoxGeometry(span, 7, 8), warningMat);
      crossBeam.position.y = gHeight;
      crossBeam.castShadow = true;
      trapGroup.add(crossBeam);

      // 支撐立柱
      for (let s of [1, -1]) {
        const pillar = new THREE.Mesh(new THREE.CylinderGeometry(3.5, 4.5, gHeight, 16), cameraHousingMat);
        pillar.position.set(s * (span / 2), gHeight / 2, 0);
        pillar.castShadow = true;
        trapGroup.add(pillar);
      }

      // 測速照相機主機匣與高頻閃光燈 (Camera Modules)
      for (let c of [-1, 1]) {
        const camBox = new THREE.Mesh(new THREE.BoxGeometry(16, 12, 14), cameraHousingMat);
        camBox.position.set(c * 42, gHeight + 7, 0);

        // 照相機鏡頭
        const lens = new THREE.Mesh(new THREE.CylinderGeometry(4.5, 4.5, 5, 24), flashBulbMat);
        lens.rotation.x = Math.PI / 2;
        lens.position.z = 7;
        camBox.add(lens);

        // 測速雷達圓盤
        const dish = new THREE.Mesh(new THREE.SphereGeometry(5, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), warningMat);
        dish.position.set(0, 8, 0);
        camBox.add(dish);

        trapGroup.add(camBox);
      }

      trapGroup.lookAt(pt.clone().add(tangent));
      this.environmentGroup.add(trapGroup);

      // 註冊測速照相邏輯點
      this.speedTraps.push({
        id: tc.id,
        name: tc.name,
        t: tc.t,
        position: pt,
        radius: 65,
        target3Star: tc.target3,
        target2Star: tc.target2,
        target1Star: tc.target1,
        lastTriggerTime: 0
      });
    });
  }

  // 4. 建造賽道兩側地平線嘉年華羽毛立旗 (Horizon Feather Flags)
  buildHorizonFeatherFlags() {
    const flagTs = [
      0.02, 0.04, 0.06, 0.25, 0.27, 0.29,
      0.52, 0.54, 0.56, 0.79, 0.81, 0.83
    ];

    const poleMat = new THREE.MeshStandardMaterial({
      color: 0x222938,
      metalness: 0.8,
      roughness: 0.3
    });

    const colors = [0xff007f, 0x00f0ff, 0xffcc00];

    flagTs.forEach((t, i) => {
      const pt = this.trackCurve.getPointAt(t);
      const tangent = this.trackCurve.getTangentAt(t).normalize();
      const up = new THREE.Vector3(0, 1, 0);
      const side = new THREE.Vector3().crossVectors(tangent, up).normalize();

      for (let s of [1, -1]) {
        const flagGroup = new THREE.Group();
        const dist = s * (this.trackWidth / 2 + 16);
        flagGroup.position.copy(pt.clone().add(side.clone().multiplyScalar(dist)));

        // 旗桿
        const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 1.2, 42, 8), poleMat);
        pole.position.y = 21;
        flagGroup.add(pole);

        // 彩色羽毛旗面 (Feather / Teardrop Banner)
        const flagColor = colors[(i + (s === 1 ? 0 : 1)) % colors.length];
        const flagMat = new THREE.MeshStandardMaterial({
          color: flagColor,
          emissive: flagColor,
          emissiveIntensity: 0.65,
          side: THREE.DoubleSide
        });

        const sailGeo = new THREE.PlaneGeometry(8, 28);
        const sailMesh = new THREE.Mesh(sailGeo, flagMat);
        sailMesh.position.set(4, 25, 0);
        sailMesh.rotation.y = Math.PI / 2;
        flagGroup.add(sailMesh);

        this.environmentGroup.add(flagGroup);
      }
    });
  }

  // 取得賽道樣條與節點
  getTrackCurve() {
    return this.trackCurve;
  }

  getCheckpoints() {
    return this.checkpoints;
  }

  getBoostPads() {
    return this.boostPads;
  }

  getSpeedTraps() {
    return this.speedTraps;
  }
}

window.TrackBuilder = TrackBuilder;

