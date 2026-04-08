import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

export let composer;
let particles;

export function initPostProcessing(renderer, scene, camera) {
  composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));

  const bloom = new UnrealBloomPass(
    new THREE.Vector2(innerWidth, innerHeight),
    0.4,   // strength
    0.6,   // radius
    0.85   // threshold
  );
  composer.addPass(bloom);

  window.addEventListener('resize', () => {
    composer.setSize(innerWidth, innerHeight);
  });

  createParticles(scene);
  return composer;
}

function createParticles(scene) {
  const count = 300;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  const orangeR = 252 / 255, orangeG = 131 / 255, orangeB = 55 / 255;
  const purpleR = 139 / 255, purpleG = 92 / 255, purpleB = 246 / 255;

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 22;
    positions[i * 3 + 1] = Math.random() * 4.2 + 0.3;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 14;

    if (Math.random() > 0.5) {
      colors[i * 3] = orangeR;
      colors[i * 3 + 1] = orangeG;
      colors[i * 3 + 2] = orangeB;
    } else {
      colors[i * 3] = purpleR;
      colors[i * 3 + 1] = purpleG;
      colors[i * 3 + 2] = purpleB;
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const mat = new THREE.PointsMaterial({
    size: 0.03,
    vertexColors: true,
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    sizeAttenuation: true,
  });

  particles = new THREE.Points(geo, mat);
  scene.add(particles);
}

export function updateParticles(time) {
  if (!particles) return;
  const pos = particles.geometry.attributes.position.array;
  for (let i = 0; i < pos.length; i += 3) {
    pos[i + 1] += Math.sin(time + i) * 0.0003;
    pos[i] += Math.cos(time * 0.7 + i * 0.5) * 0.0002;
  }
  particles.geometry.attributes.position.needsUpdate = true;
}

export function handleHoverGlow(newObj, oldObj) {
  if (oldObj && oldObj.material) {
    if (oldObj._origEmissive !== undefined) {
      oldObj.material.emissive?.setHex(oldObj._origEmissive);
      oldObj.material.emissiveIntensity = 0;
    }
    if (oldObj._origOpacity !== undefined) {
      oldObj.material.opacity = oldObj._origOpacity;
    }
  }
  if (newObj && newObj.material) {
    if (newObj.material.emissive) {
      newObj._origEmissive = newObj.material.emissive.getHex();
      newObj.material.emissive.setHex(0xFC8337);
      newObj.material.emissiveIntensity = 0.3;
    }
    if (newObj.material.transparent) {
      newObj._origOpacity = newObj.material.opacity;
      newObj.material.opacity = Math.min(1, newObj.material.opacity + 0.15);
    }
  }
}
