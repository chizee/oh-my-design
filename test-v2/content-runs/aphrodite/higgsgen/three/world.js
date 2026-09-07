/* Higgsgen — 스크롤 월드 (자작, three.js r149 위)
 *
 * 무엇인가: 안개 속에 우리 스틸이 인화지처럼 걸린 회랑을 스크롤이 통과한다.
 * 모델링은 없다. 판(plane)에 텍스처를 입히고, 전경은 알파 컷아웃 빌보드로 깊이를 만든다.
 * (기법 참고: MengTo/kage 를 계측·구조 관찰만 했다. 코드·에셋은 가져오지 않았다.)
 *
 * 스크롤은 목표만 쓰고 상시 rAF 루프가 α 로 따라간다 — fx-library/smooth-scrub-engine 과 같은 원리.
 */
(function () {
  var RM = matchMedia("(prefers-reduced-motion: reduce)");
  var host = document.getElementById("world");
  if (!host || !window.THREE) return;

  var W = innerWidth, H = innerHeight;
  var DPR = Math.min(devicePixelRatio || 1, RM.matches ? 1 : 1.6);

  var renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false, powerPreference: "high-performance" });
  renderer.setPixelRatio(DPR);
  renderer.setSize(W, H);
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.16;
  host.appendChild(renderer.domElement);

  var BG = 0x0b0c0e;
  var scene = new THREE.Scene();
  scene.background = new THREE.Color(BG);
  scene.fog = new THREE.FogExp2(BG, 0.050);

  var camera = new THREE.PerspectiveCamera(46, W / H, 0.1, 260);

  /* ── 빛: 한 방향 + 아주 낮은 채움. DESIGN 의 "광원 하나" 규율 ── */
  var key = new THREE.DirectionalLight(0xffe6c2, 2.2);
  key.position.set(-6, 9, 4);
  scene.add(key);
  scene.add(new THREE.HemisphereLight(0x1a2430, 0x04060a, 0.34));

  /* ── 바닥: 젖은 콘크리트. 판의 반사를 흉내내는 어두운 광택 ── */
  var ground = new THREE.Mesh(
    new THREE.PlaneGeometry(120, 320, 1, 1),
    new THREE.MeshStandardMaterial({ color: 0x080a0c, roughness: 0.62, metalness: 0.0 })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.z = -120;
  scene.add(ground);

  /* ── 회랑의 판: 우리 스틸이 양쪽에 걸린다 ── */
  var loader = new THREE.TextureLoader();
  var plates = [];
  var PLATE = window.__WORLD_PLATES || [];
  PLATE.forEach(function (src, i) {
    var side = i % 2 === 0 ? -1 : 1;
    var z = -16 - i * 16;
    var tex = loader.load(src, function (t) { t.encoding = THREE.sRGBEncoding; t.anisotropy = 4; });
    var h = 5.4, w = h * 1.5;
    var m = new THREE.Mesh(
      new THREE.PlaneGeometry(w, h),
      new THREE.MeshBasicMaterial({ map: tex, toneMapped: false })
    );
    m.position.set(side * 7.4, 3.4 + (i % 2) * 0.6, z);
    m.rotation.y = side * -0.48;
    scene.add(m);
    /* 판 뒤의 얇은 후광 — 인화지가 빛을 받는 느낌 */
    var halo = new THREE.Mesh(
      new THREE.PlaneGeometry(w * 1.06, h * 1.06),
      new THREE.MeshBasicMaterial({ color: 0x161c24, transparent: true, opacity: 0.55 })
    );
    halo.position.copy(m.position); halo.position.z -= 0.10 * side; halo.rotation.copy(m.rotation);
    scene.add(halo);
    plates.push(m);
  });

  /* ── 전경 컷아웃 빌보드: 깊이를 만드는 층 ── */
  var CUT = window.__WORLD_CUTS || {};
  function billboard(src, x, y, z, scale, sway) {
    if (!src) return null;
    var t = loader.load(src, function (tt) { tt.encoding = THREE.sRGBEncoding; });
    var m = new THREE.Mesh(
      new THREE.PlaneGeometry(1.78 * scale, 1.0 * scale),
      new THREE.MeshBasicMaterial({ map: t, transparent: true, depthWrite: false, opacity: 1 })
    );
    m.position.set(x, y, z);
    m.userData.sway = sway || 0;
    m.userData.baseX = x;
    scene.add(m);
    return m;
  }
  var cuts = [
    billboard(CUT.pillar, -7.4, 4.2, -8, 10, 0),
    billboard(CUT.grass, -3.4, 0.9, -5.2, 7, 0.06),
    billboard(CUT.grass, 4.2, 0.8, -6.4, 6, 0.05),
    billboard(CUT.bench, 3.0, 1.0, -20, 6, 0),
    billboard(CUT.lamp, -1.2, 6.6, -30, 5, 0.02),
    billboard(CUT.grass, -5.0, 0.8, -44, 8, 0.07),
  ].filter(Boolean);

  /* ── 인스턴스 풀: 바닥에 흩어진 마른 억새. 정점 셰이더에서 흔든다 ── */
  var BLADES = RM.matches ? 0 : 2200;
  var grass = null;
  if (BLADES) {
    var bladeGeo = new THREE.PlaneGeometry(0.035, 0.5, 1, 3);
    bladeGeo.translate(0, 0.25, 0);
    var bladeMat = new THREE.MeshBasicMaterial({ color: 0x14150f, side: THREE.DoubleSide, transparent: true, opacity: 0.85 });
    bladeMat.onBeforeCompile = function (sh) {
      sh.uniforms.uT = { value: 0 };
      bladeMat.userData.sh = sh;
      sh.vertexShader = "uniform float uT;\n" + sh.vertexShader.replace(
        "#include <begin_vertex>",
        "#include <begin_vertex>\n" +
        "float sway = sin(uT * 0.9 + position.y * 2.0 + float(gl_InstanceID) * 0.37) * 0.10 * transformed.y;\n" +
        "transformed.x += sway;"
      );
    };
    grass = new THREE.InstancedMesh(bladeGeo, bladeMat, BLADES);
    var d = new THREE.Object3D();
    for (var i = 0; i < BLADES; i++) {
      var a = Math.random() * Math.PI * 2, r = 2.2 + Math.random() * 3.6;
      d.position.set(Math.cos(a) * r, 0, -10 - Math.random() * 150);
      d.rotation.y = Math.random() * Math.PI;
      d.scale.setScalar(0.5 + Math.random() * 0.7);
      d.updateMatrix();
      grass.setMatrixAt(i, d.matrix);
    }
    scene.add(grass);
  }

  /* ── 불티: 무입력에서도 화면이 살아 있게 하는 층 ── */
  var MOTES = RM.matches ? 0 : 900;
  var motes = null, moteBase = null;
  if (MOTES) {
    var pg = new THREE.BufferGeometry();
    var pos = new Float32Array(MOTES * 3);
    for (var k = 0; k < MOTES; k++) {
      pos[k * 3] = (Math.random() - 0.5) * 18;
      pos[k * 3 + 1] = 0.4 + Math.random() * 7;
      pos[k * 3 + 2] = -6 - Math.random() * 150;
    }
    pg.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    var cv = document.createElement("canvas"); cv.width = cv.height = 32;
    var cx = cv.getContext("2d");
    var gr = cx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gr.addColorStop(0, "rgba(255,224,180,1)"); gr.addColorStop(0.45, "rgba(255,214,160,.45)"); gr.addColorStop(1, "rgba(255,210,150,0)");
    cx.fillStyle = gr; cx.fillRect(0, 0, 32, 32);
    var moteTex = new THREE.CanvasTexture(cv);
    motes = new THREE.Points(pg, new THREE.PointsMaterial({ map: moteTex, color: 0xffd9a0, size: 0.10, transparent: true, opacity: 0.55, depthWrite: false, blending: THREE.AdditiveBlending }));
    moteBase = pos.slice(0);
    scene.add(motes);
  }

  /* ── 카메라 경로: 스크롤이 이 길을 따라 걷는다 ── */
  var path = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 2.0, 4),
    new THREE.Vector3(-1.2, 2.2, -16),
    new THREE.Vector3(1.4, 2.6, -38),
    new THREE.Vector3(-0.8, 2.2, -62),
    new THREE.Vector3(0.6, 2.4, -92),
    new THREE.Vector3(0, 2.2, -124),
  ]);

  /* ── 스크롤: 목표만 쓰고 루프가 따라간다 ── */
  var ALPHA = RM.matches ? 1 : 0.085;
  var cur = 0, target = 0, t0 = performance.now();
  var track = document.getElementById("worldtrack");

  function progress() {
    if (!track) return 0;
    var travel = track.offsetHeight - innerHeight;
    if (travel <= 0) return 0;
    var p = -track.getBoundingClientRect().top / travel;
    return Math.min(Math.max(p, 0), 1);
  }

  var tmp = new THREE.Vector3(), look = new THREE.Vector3();
  function frame(now) {
    var el = (now - t0) / 1000;
    target = progress();
    cur += (target - cur) * ALPHA;
    if (Math.abs(target - cur) < 0.0004) cur = target;

    path.getPointAt(Math.min(cur, 0.999), tmp);
    camera.position.copy(tmp);
    path.getPointAt(Math.min(cur + 0.06, 1), look);
    look.y = tmp.y - 0.25;
    camera.lookAt(look);

    if (grass && grass.material.userData.sh) grass.material.userData.sh.uniforms.uT.value = el;
    for (var i = 0; i < cuts.length; i++) {
      var c = cuts[i];
      if (c.userData.sway) c.position.x = c.userData.baseX + Math.sin(el * 0.5 + i) * c.userData.sway;
    }
    if (motes) {
      var p = motes.geometry.attributes.position.array;
      for (var m = 0; m < MOTES; m++) {
        p[m * 3 + 1] = moteBase[m * 3 + 1] + Math.sin(el * 0.28 + m) * 0.5;
        p[m * 3] = moteBase[m * 3] + Math.cos(el * 0.19 + m * 0.7) * 0.4;
      }
      motes.geometry.attributes.position.needsUpdate = true;
    }
    /* 판은 카메라를 살짝 향한다 — 지나갈 때 화면을 받는다 */
    for (var q = 0; q < plates.length; q++) {
      var d2 = plates[q].position.z - camera.position.z;
      plates[q].material.opacity = 1;
      plates[q].rotation.y += ((plates[q].position.x < 0 ? 0.48 : -0.48) - plates[q].rotation.y) * 0.02;
      if (d2 > 8) plates[q].visible = false; else plates[q].visible = true;
    }
    renderer.render(scene, camera);
    window.__worldFrames = (window.__worldFrames || 0) + 1;
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  addEventListener("resize", function () {
    W = innerWidth; H = innerHeight;
    camera.aspect = W / H; camera.updateProjectionMatrix();
    renderer.setSize(W, H);
  });
})();
