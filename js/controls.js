import * as THREE from 'three';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';

export let controls;
const velocity = new THREE.Vector3();
const direction = new THREE.Vector3();
const keys = { w: false, a: false, s: false, d: false };
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2(0, 0);

const SPEED = 5.0;
const FRICTION = 8.0;
let interactables = [];
let hoveredObj = null;
let onClickCb = null;
let onHoverCb = null;
let locked = false;

export function initControls(camera, domElement) {
  controls = new PointerLockControls(camera, domElement);

  controls.addEventListener('lock', () => {
    locked = true;
    document.getElementById('hud').classList.add('active');
    document.getElementById('click-prompt').classList.remove('visible');
  });
  controls.addEventListener('unlock', () => {
    locked = false;
    document.getElementById('hud').classList.remove('active');
    document.getElementById('click-prompt').classList.add('visible');
  });

  document.addEventListener('keydown', e => {
    const k = e.key.toLowerCase();
    if (k in keys) keys[k] = true;
  });
  document.addEventListener('keyup', e => {
    const k = e.key.toLowerCase();
    if (k in keys) keys[k] = false;
  });

  domElement.addEventListener('click', () => {
    if (!locked) {
      try { controls.lock(); } catch(_) {}
    } else if (hoveredObj && onClickCb) {
      onClickCb(hoveredObj);
    }
  });

  return controls;
}

export function setInteractables(objs) { interactables = objs; }
export function onInteract(cb) { onClickCb = cb; }
export function onHover(cb) { onHoverCb = cb; }

export function updateControls(delta, camera, bounds) {
  if (!locked) return;

  // WASD movement
  direction.set(0, 0, 0);
  if (keys.w) direction.z -= 1;
  if (keys.s) direction.z += 1;
  if (keys.a) direction.x -= 1;
  if (keys.d) direction.x += 1;
  direction.normalize();

  const camDir = new THREE.Vector3();
  camera.getWorldDirection(camDir);
  camDir.y = 0;
  camDir.normalize();
  const right = new THREE.Vector3().crossVectors(camDir, new THREE.Vector3(0, 1, 0)).normalize();

  velocity.x += (camDir.x * -direction.z + right.x * direction.x) * SPEED * delta;
  velocity.z += (camDir.z * -direction.z + right.z * direction.x) * SPEED * delta;

  // Friction
  velocity.x -= velocity.x * FRICTION * delta;
  velocity.z -= velocity.z * FRICTION * delta;

  // Apply movement
  const nextX = camera.position.x + velocity.x * delta;
  const nextZ = camera.position.z + velocity.z * delta;

  // Wall collision
  if (bounds) {
    camera.position.x = THREE.MathUtils.clamp(nextX, bounds.minX, bounds.maxX);
    camera.position.z = THREE.MathUtils.clamp(nextZ, bounds.minZ, bounds.maxZ);
  } else {
    camera.position.x = nextX;
    camera.position.z = nextZ;
  }

  camera.position.y = 1.6;

  // Raycaster hover detection
  raycaster.setFromCamera(mouse, camera);
  const hits = raycaster.intersectObjects(interactables, false);

  const newHover = hits.length > 0 ? hits[0].object : null;
  if (newHover !== hoveredObj) {
    if (onHoverCb) onHoverCb(newHover, hoveredObj);
    hoveredObj = newHover;
  }
}

export function isLocked() { return locked; }
