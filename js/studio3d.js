import * as THREE from 'three';

export const scene = new THREE.Scene();
export const clock = new THREE.Clock();
export let camera, renderer;

const ROOM = { W: 24, D: 16, H: 4.5 };
export { ROOM };

export function initScene(canvas) {
  scene.background = new THREE.Color(0x060608);
  scene.fog = new THREE.FogExp2(0x060608, 0.028);

  camera = new THREE.PerspectiveCamera(68, innerWidth / innerHeight, 0.1, 80);
  camera.position.set(0, 1.6, 6.5);

  renderer = new THREE.WebGLRenderer({ antialias: true, canvas, powerPreference: 'high-performance' });
  renderer.setSize(innerWidth, innerHeight);
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  window.addEventListener('resize', () => {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  });

  return { camera, renderer };
}

export function buildRoom() {
  const hW = ROOM.W / 2, hD = ROOM.D / 2;

  // Floor
  const floorMat = new THREE.MeshStandardMaterial({ color: 0x080810, roughness: 0.85, metalness: 0.1 });
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(ROOM.W, ROOM.D), floorMat);
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  scene.add(floor);

  // Grid overlay
  const grid = new THREE.GridHelper(Math.max(ROOM.W, ROOM.D) + 4, 48, 0x14142a, 0x0c0c18);
  grid.position.y = 0.005;
  scene.add(grid);

  // Ceiling
  const ceilMat = new THREE.MeshStandardMaterial({ color: 0x050508, roughness: 1.0 });
  const ceil = new THREE.Mesh(new THREE.PlaneGeometry(ROOM.W, ROOM.D), ceilMat);
  ceil.rotation.x = Math.PI / 2;
  ceil.position.y = ROOM.H;
  scene.add(ceil);

  // Wall material
  const wallMat = new THREE.MeshStandardMaterial({ color: 0x0a0a14, roughness: 0.9, metalness: 0.05 });

  // Back wall
  addWall(ROOM.W, ROOM.H, [0, ROOM.H / 2, -hD], 0, wallMat);
  // Left wall
  addWall(ROOM.D, ROOM.H, [-hW, ROOM.H / 2, 0], Math.PI / 2, wallMat);
  // Right wall
  addWall(ROOM.D, ROOM.H, [hW, ROOM.H / 2, 0], -Math.PI / 2, wallMat);
  // Front wall left
  addWall(hW - 2, ROOM.H, [-(hW / 2 + 1), ROOM.H / 2, hD], Math.PI, wallMat);
  // Front wall right
  addWall(hW - 2, ROOM.H, [(hW / 2 + 1), ROOM.H / 2, hD], Math.PI, wallMat);

  addNeonStrips(hW, hD);
  addCeilingLightFixtures();
}

function addWall(w, h, pos, rotY, mat) {
  const wall = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
  wall.position.set(...pos);
  wall.rotation.y = rotY;
  wall.receiveShadow = true;
  scene.add(wall);
}

function addNeonStrips(hW, hD) {
  const orange = new THREE.MeshBasicMaterial({ color: 0xFC8337 });
  const purple = new THREE.MeshBasicMaterial({ color: 0x8b5cf6 });

  const hStrip = new THREE.BoxGeometry(hW * 2, 0.02, 0.04);
  const vStrip = new THREE.BoxGeometry(0.04, 0.02, hD * 2);

  [[0, 0.01, hD - 0.02, hStrip, orange],
   [0, 0.01, -hD + 0.02, hStrip, orange],
   [-hW + 0.02, 0.01, 0, vStrip, purple],
   [hW - 0.02, 0.01, 0, vStrip, purple]].forEach(([x, y, z, geo, mat]) => {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z);
    scene.add(m);
  });

  // Ceiling edge strips
  const ceilOrange = new THREE.BoxGeometry(hW * 2, 0.015, 0.03);
  const ceilPurple = new THREE.BoxGeometry(0.03, 0.015, hD * 2);
  [[0, ROOM.H - 0.01, -hD + 0.02, ceilOrange, orange],
   [0, ROOM.H - 0.01, hD - 0.02, ceilOrange, orange],
   [-hW + 0.02, ROOM.H - 0.01, 0, ceilPurple, purple],
   [hW - 0.02, ROOM.H - 0.01, 0, ceilPurple, purple]].forEach(([x, y, z, geo, mat]) => {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z);
    scene.add(m);
  });
}

function addCeilingLightFixtures() {
  const fixtureMat = new THREE.MeshBasicMaterial({ color: 0x181825 });
  const glowMat = new THREE.MeshBasicMaterial({ color: 0xFC8337, transparent: true, opacity: 0.6 });
  const positions = [[0, 0], [-6, -3], [6, -3], [-6, 4], [6, 4]];

  positions.forEach(([x, z]) => {
    const housing = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.06, 0.3), fixtureMat);
    housing.position.set(x, ROOM.H - 0.03, z);
    scene.add(housing);
    const glow = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 0.2), glowMat);
    glow.position.set(x, ROOM.H - 0.07, z);
    glow.rotation.x = Math.PI / 2;
    scene.add(glow);
  });
}

export function addLighting() {
  scene.add(new THREE.AmbientLight(0x1a1a2e, 0.5));

  const mainLight = new THREE.PointLight(0xffeedd, 0.5, 25, 1.5);
  mainLight.position.set(0, 4.2, 0);
  scene.add(mainLight);

  const accents = [
    [0xFC8337, 1.6, [-8, 3.5, -4]],
    [0xFC8337, 1.0, [7, 3.5, 4]],
    [0x8b5cf6, 1.4, [9, 3.5, -5]],
    [0x8b5cf6, 0.9, [-7, 3.5, 5]],
    [0xFC8337, 0.6, [0, 3.5, -6]],
    [0x8b5cf6, 0.5, [0, 3.5, 5]],
  ];

  accents.forEach(([color, intensity, pos]) => {
    const l = new THREE.PointLight(color, intensity, 14, 2);
    l.position.set(...pos);
    scene.add(l);
  });

  const spot = new THREE.SpotLight(0xffffff, 0.6, 18, Math.PI / 5, 0.6);
  spot.position.set(0, 4.4, 0);
  spot.target.position.set(0, 0, -2);
  spot.castShadow = true;
  spot.shadow.mapSize.set(512, 512);
  scene.add(spot);
  scene.add(spot.target);
}
