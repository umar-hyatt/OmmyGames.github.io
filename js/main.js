import { scene, camera, renderer, clock, ROOM, initScene, buildRoom, addLighting } from './studio3d.js';
import { initControls, controls, setInteractables, onInteract, onHover, updateControls } from './controls.js';
import { createGameWall, createServicePanels, createAboutArea, createContactTerminal, updateObjects, getInteractables } from './objects.js';
import { initPostProcessing, composer, updateParticles, handleHoverGlow } from './postprocessing.js';

const loadingScreen = document.getElementById('loading-screen');
const clickPrompt = document.getElementById('click-prompt');

const bounds = {
  minX: -ROOM.W / 2 + 0.6,
  maxX: ROOM.W / 2 - 0.6,
  minZ: -ROOM.D / 2 + 0.6,
  maxZ: ROOM.D / 2 - 0.6
};

let detailOverlay = null;
let postComposer = null;

function init() {
  try {
    const canvas = document.getElementById('canvas3d');
    initScene(canvas);
    buildRoom();
    addLighting();

    createGameWall(scene, null);
    createServicePanels(scene);
    createAboutArea(scene);
    createContactTerminal(scene);

    initControls(camera, renderer.domElement);
    setInteractables(getInteractables());

    try {
      postComposer = initPostProcessing(renderer, scene, camera);
    } catch (e) {
      console.warn('Post-processing unavailable, using standard renderer:', e);
    }

    onHover((newObj, oldObj) => {
      handleHoverGlow(newObj, oldObj);
      const prompt = document.getElementById('interact-prompt');
      if (newObj) {
        const type = newObj.userData.type;
        if (type === 'game') prompt.textContent = '[Click] View Game';
        else if (type === 'service') prompt.textContent = '[Click] View Service';
        else if (type === 'contact') prompt.textContent = '[Click] Open Contact';
        else if (type === 'about') prompt.textContent = '[Click] About Studio';
        else prompt.textContent = '';
        prompt.classList.add('visible');
      } else {
        prompt.classList.remove('visible');
      }
    });

    onInteract(obj => {
      const d = obj.userData;
      if (d.type === 'game') showGameDetail(d.data);
      else if (d.type === 'contact') showContactOverlay();
      else if (d.type === 'about') showAboutOverlay();
      else if (d.type === 'service') showServiceDetail(d.data);
    });

    // Click-prompt: hide overlay so next click reaches the canvas for pointer lock
    clickPrompt.addEventListener('click', (e) => {
      if (e.target.id === 'switch-to-2d') return;
      clickPrompt.classList.remove('visible');
      // Try to lock immediately; if browser rejects it, the canvas click handler will catch the next click
      try { if (controls) controls.lock(); } catch(_) {}
    });

    // Hide loading screen
    loadingScreen.classList.add('hidden');
    clickPrompt.classList.add('visible');

    // Signal success to the fallback timer
    window.__3d_ready = true;

    animate();
    console.log('3D Studio initialized successfully');

  } catch (err) {
    console.error('3D initialization failed:', err);
    fallbackTo2D();
  }
}

function fallbackTo2D() {
  document.getElementById('site-3d').style.display = 'none';
  document.getElementById('site-2d').style.display = '';
  loadingScreen.style.display = 'none';
}

function animate() {
  requestAnimationFrame(animate);
  const delta = Math.min(clock.getDelta(), 0.05);
  const time = clock.getElapsedTime();

  updateControls(delta, camera, bounds);
  updateObjects(time);
  updateParticles(time);

  if (postComposer) {
    postComposer.render();
  } else if (renderer && camera) {
    renderer.render(scene, camera);
  }
}

function showGameDetail(game) {
  showOverlay(`
    <div class="detail-header">
      <span class="detail-tag ${game.tag === 'VR' ? 'vr' : ''}">${game.tag}</span>
      ${game.rating ? `<span class="detail-rating">★ ${game.rating}</span>` : ''}
    </div>
    <h2>${game.title}</h2>
    <p>${game.desc}</p>
    <div class="detail-store">${game.link}</div>
  `);
}

function showServiceDetail(svc) {
  showOverlay(`
    <span class="detail-label">SERVICE</span>
    <h2>${svc.title}</h2>
    <p>${svc.desc}</p>
  `);
}

function showAboutOverlay() {
  showOverlay(`
    <span class="detail-label">ABOUT</span>
    <h2>Ommy Games</h2>
    <p>Founded in 2020. A 10-person team with 100+ completed projects across 5 platforms. We specialize in mobile and VR game development, shipping titles across Android, iOS, and Meta Quest.</p>
    <p style="margin-top:0.75rem;color:#b0b0b8">We help clients bring their visions to life through full-cycle development, marketing collaboration, and live ops support.</p>
  `);
}

function showContactOverlay() {
  showOverlay(`
    <span class="detail-label">CONTACT</span>
    <h2>Get in Touch</h2>
    <div class="terminal-info">
      <p>📧 <a href="mailto:info@ommygames.com" style="color:#00ff88">info@ommygames.com</a></p>
      <p>🔗 <a href="https://www.linkedin.com/company/ommy-games" target="_blank" style="color:#00ff88">LinkedIn — Ommy Games</a></p>
      <p>📍 Lahore, Pakistan</p>
    </div>
    <a href="#contact" class="detail-cta" onclick="document.getElementById('site-3d').style.display='none';document.getElementById('site-2d').style.display='';document.getElementById('site-2d').querySelector('#contact').scrollIntoView();return false;">Open Full Contact Form →</a>
  `);
}

function showOverlay(html) {
  removeOverlay();
  detailOverlay = document.createElement('div');
  detailOverlay.className = 'detail-overlay';
  detailOverlay.innerHTML = `
    <div class="detail-card">
      <button class="detail-close" onclick="this.parentElement.parentElement.remove()">✕</button>
      ${html}
    </div>
  `;
  document.body.appendChild(detailOverlay);
  detailOverlay.addEventListener('click', e => {
    if (e.target === detailOverlay) removeOverlay();
  });
  document.addEventListener('keydown', function esc(e) {
    if (e.key === 'Escape') { removeOverlay(); document.removeEventListener('keydown', esc); }
  });
}

function removeOverlay() {
  if (detailOverlay) { detailOverlay.remove(); detailOverlay = null; }
}

init();
