import * as THREE from 'three';

const loader = new THREE.TextureLoader();
const interactiveObjects = [];

const GAMES = [
  { title:'PunchVRX — Boxing', img:'images/punchvrx.webp', tag:'VR', rating:'4.5', desc:'Realistic VR boxing with multiplayer mode.', link:'Meta Quest' },
  { title:'Thunder Gladiator', img:'images/thunder-gladiator.webp', tag:'VR', rating:'4.3', desc:'Intense gladiator combat in immersive VR.', link:'Meta Quest' },
  { title:'Bow Saber', img:'images/bow-saber.webp', tag:'VR', rating:'4.2', desc:'Fast-paced bow and saber wave defense.', link:'Meta Quest' },
  { title:'Prankster Cat', img:'images/prankster-cat.webp', tag:'Mobile', rating:'', desc:'Physics-driven comedy sandbox mayhem.', link:'itch.io' },
  { title:'Escape the Nanny', img:'images/escape-the-nanny.webp', tag:'Mobile', rating:'4.1', desc:'Stealth-comedy sneaking and distractions.', link:'Google Play' },
  { title:'Grocery Store Tycoon', img:'images/grocery-store-tycoon.webp', tag:'Mobile', rating:'4.0', desc:'Run your own supermarket empire.', link:'Google Play' },
  { title:'Idle Farm Factory', img:'images/idle-farm.webp', tag:'Mobile', rating:'4.2', desc:'Farm, factory, and town merge tycoon.', link:'Google Play' },
  { title:'Idle Pizza Production', img:'images/idle-pizza.webp', tag:'Mobile', rating:'', desc:'Build and optimize your pizza empire.', link:'Google Play' },
  { title:'Prison Breakout', img:'images/prison-breakout.webp', tag:'Mobile', rating:'', desc:'Solve puzzles to escape prison.', link:'Google Play' },
  { title:'Screw Puzzle', img:'images/screw-puzzle.webp', tag:'Mobile', rating:'4.3', desc:'Relaxing ASMR puzzle game.', link:'Google Play' },
  { title:'Cat Sudoku', img:'images/cat-sudoku.webp', tag:'Mobile', rating:'4.4', desc:'Daily brain training with streak rewards.', link:'Google Play' },
  { title:'Asphalt Parking', img:'images/asphalt-parking.webp', tag:'Mobile', rating:'3.9', desc:'Realistic parking challenges.', link:'Google Play' },
];

const SERVICES = [
  { title: 'Full-Cycle Development', desc: 'From concept art to store submission — we handle the entire game pipeline.' },
  { title: 'Marketing & UA', desc: 'ASO, ad production, user acquisition and A/B testing to maximize reach.' },
  { title: 'Maintenance & Live Ops', desc: 'Bug fixes, SDK updates, OS patches, content drops and optimization.' },
  { title: 'Cross-Platform Porting', desc: 'Port between Android, iOS, WebGL and Meta Quest VR.' },
  { title: 'QA & Testing', desc: 'Device testing, performance profiling, crash analytics and regression testing.' },
  { title: 'Game Design Consulting', desc: 'Mechanics, monetization, player psychology and market positioning.' },
];

function createTextCanvas(text, opts = {}) {
  const w = opts.width || 512;
  const h = opts.height || 256;
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = opts.bg || '#0a0a14';
  ctx.fillRect(0, 0, w, h);

  if (opts.border) {
    ctx.strokeStyle = opts.border;
    ctx.lineWidth = 3;
    ctx.strokeRect(2, 2, w - 4, h - 4);
  }

  ctx.fillStyle = opts.color || '#f0f0f2';
  ctx.textAlign = opts.align || 'left';
  const x = opts.align === 'center' ? w / 2 : opts.px || 24;
  let y = opts.py || 40;

  if (opts.label) {
    ctx.font = `bold ${opts.labelSize || 11}px Inter, sans-serif`;
    ctx.fillStyle = opts.labelColor || '#FC8337';
    ctx.fillText(opts.label, x, y);
    y += opts.labelGap || 28;
  }

  ctx.font = opts.font || 'bold 22px Inter, sans-serif';
  ctx.fillStyle = opts.color || '#f0f0f2';
  const titleLines = wrapText(ctx, text, w - 48);
  titleLines.forEach(line => {
    ctx.fillText(line, x, y);
    y += parseInt(ctx.font) * 1.4;
  });

  if (opts.body) {
    y += 8;
    ctx.font = opts.bodyFont || '15px Inter, sans-serif';
    ctx.fillStyle = opts.bodyColor || '#b0b0b8';
    const bodyLines = wrapText(ctx, opts.body, w - 48);
    bodyLines.forEach(line => {
      ctx.fillText(line, x, y);
      y += 20;
    });
  }

  if (opts.tag) {
    y += 12;
    const tagW = ctx.measureText(opts.tag).width + 20;
    ctx.font = 'bold 12px Inter, sans-serif';
    const tagX = opts.align === 'center' ? (w - tagW) / 2 : (opts.px || 24);
    ctx.fillStyle = opts.tag === 'VR' ? 'rgba(139,92,246,0.25)' : 'rgba(252,131,55,0.25)';
    ctx.beginPath();
    if (ctx.roundRect) {
      ctx.roundRect(tagX, y - 12, tagW, 20, 10);
    } else {
      ctx.rect(tagX, y - 12, tagW, 20);
    }
    ctx.fill();
    ctx.fillStyle = opts.tag === 'VR' ? '#a78bfa' : '#FC8337';
    ctx.fillText(opts.tag, tagX + 10, y + 2);
  }

  if (opts.rating) {
    ctx.font = 'bold 13px Inter, sans-serif';
    ctx.fillStyle = '#fbbf24';
    const rX = opts.align === 'center' ? w / 2 + 40 : w - 70;
    ctx.fillText('★ ' + opts.rating, rX, (opts.py || 40) + (opts.labelGap || 28) - 8);
  }

  return new THREE.CanvasTexture(canvas);
}

function wrapText(ctx, text, maxW) {
  const words = text.split(' ');
  const lines = [];
  let cur = '';
  words.forEach(word => {
    const test = cur ? cur + ' ' + word : word;
    if (ctx.measureText(test).width > maxW && cur) {
      lines.push(cur);
      cur = word;
    } else {
      cur = test;
    }
  });
  if (cur) lines.push(cur);
  return lines;
}

export function createGameWall(scene, loadingManager) {
  const texLoader = new THREE.TextureLoader(loadingManager);

  GAMES.forEach((game, i) => {
    const side = i < 6 ? -1 : 1;
    const idx = i < 6 ? i : i - 6;
    const row = idx < 3 ? 0 : 1;
    const col = idx % 3;

    const z = -4.5 + col * 4;
    const y = row === 0 ? 3.0 : 1.3;
    const x = side * 11.95;

    // Monitor frame
    const frameMat = new THREE.MeshStandardMaterial({ color: 0x111120, roughness: 0.6, metalness: 0.3 });
    const frame = new THREE.Mesh(new THREE.BoxGeometry(0.12, 1.85, 2.95), frameMat);
    frame.position.set(x, y, z);
    scene.add(frame);

    // Screen with game thumbnail
    const screenGeo = new THREE.PlaneGeometry(2.7, 1.6);
    const screenMat = new THREE.MeshBasicMaterial({ color: 0x222233 });
    const screen = new THREE.Mesh(screenGeo, screenMat);
    screen.position.set(x + side * 0.07, y, z);
    screen.rotation.y = side === -1 ? Math.PI / 2 : -Math.PI / 2;
    scene.add(screen);

    texLoader.load(game.img, tex => {
      tex.colorSpace = THREE.SRGBColorSpace;
      screen.material = new THREE.MeshBasicMaterial({ map: tex });
    });

    // Label plate below monitor
    const labelTex = createTextCanvas(game.title, {
      width: 512, height: 128,
      font: 'bold 28px Inter, sans-serif',
      bg: '#0a0a14', color: '#f0f0f2',
      py: 48, px: 24,
      tag: game.tag,
      rating: game.rating,
      align: 'left'
    });
    const label = new THREE.Mesh(
      new THREE.PlaneGeometry(2.7, 0.5),
      new THREE.MeshBasicMaterial({ map: labelTex })
    );
    label.position.set(x + side * 0.07, y - 1.05, z);
    label.rotation.y = side === -1 ? Math.PI / 2 : -Math.PI / 2;
    scene.add(label);

    // Make screen interactive
    screen.userData = { type: 'game', data: game, label };
    interactiveObjects.push(screen);
  });
}

export function createServicePanels(scene) {
  SERVICES.forEach((svc, i) => {
    const row = i < 3 ? 0 : 1;
    const col = i % 3;
    const x = -4 + col * 4;
    const z = -2.5 + row * 2.5;
    const y = 2.0 + Math.sin(i * 1.3) * 0.15;

    const tex = createTextCanvas(svc.title, {
      width: 512, height: 320,
      font: 'bold 26px Inter, sans-serif',
      bg: 'rgba(10,10,20,0.0)',
      color: '#f0f0f2',
      body: svc.desc,
      bodyFont: '16px Inter, sans-serif',
      bodyColor: '#b0b0b8',
      label: 'SERVICE',
      labelColor: '#FC8337',
      labelSize: 13,
      py: 40, px: 28,
      border: 'rgba(252,131,55,0.3)'
    });

    const panel = new THREE.Mesh(
      new THREE.PlaneGeometry(2.4, 1.5),
      new THREE.MeshBasicMaterial({
        map: tex,
        transparent: true,
        opacity: 0.85,
        side: THREE.DoubleSide,
        depthWrite: false
      })
    );
    panel.position.set(x, y, z);
    panel.userData = { type: 'service', data: svc, baseY: y, phase: i * 1.1 };
    scene.add(panel);
    interactiveObjects.push(panel);

    // Glow plane behind
    const glow = new THREE.Mesh(
      new THREE.PlaneGeometry(2.6, 1.7),
      new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0xFC8337 : 0x8b5cf6,
        transparent: true,
        opacity: 0.06,
        side: THREE.DoubleSide,
        depthWrite: false
      })
    );
    glow.position.set(x, y, z - 0.05);
    scene.add(glow);
    panel.userData.glow = glow;
  });
}

export function createAboutArea(scene) {
  const hD = 8;

  // Large "About" screen on back wall
  const aboutTex = createTextCanvas('Ommy Games', {
    width: 1024, height: 512,
    font: 'bold 48px Inter, sans-serif',
    bg: '#080812',
    color: '#f0f0f2',
    py: 70, px: 50,
    label: 'ABOUT THE STUDIO',
    labelColor: '#FC8337',
    labelSize: 16,
    labelGap: 50,
    body: 'Founded in 2020. 100+ projects completed across 5 platforms. A 10-person team building immersive mobile and VR games for players worldwide. We specialize in full-cycle game development, marketing collaboration, and live ops support.',
    bodyFont: '20px Inter, sans-serif',
    bodyColor: '#b0b0b8',
    border: 'rgba(139,92,246,0.3)'
  });

  const aboutScreen = new THREE.Mesh(
    new THREE.PlaneGeometry(6, 3),
    new THREE.MeshBasicMaterial({ map: aboutTex })
  );
  aboutScreen.position.set(0, 2.5, -hD + 0.05);
  scene.add(aboutScreen);

  // Frame
  const frameMat = new THREE.MeshStandardMaterial({ color: 0x111120, roughness: 0.6, metalness: 0.3 });
  const frame = new THREE.Mesh(new THREE.BoxGeometry(6.2, 3.2, 0.1), frameMat);
  frame.position.set(0, 2.5, -hD + 0.02);
  scene.add(frame);

  aboutScreen.userData = { type: 'about' };
  interactiveObjects.push(aboutScreen);

  // Timeline on back wall (below about screen)
  const timelineTex = createTextCanvas('2020 → 2021 → 2022 → 2024 → Now', {
    width: 1024, height: 128,
    font: 'bold 24px Inter, sans-serif',
    bg: '#080812',
    color: '#FC8337',
    py: 50,
    align: 'center',
    body: 'Founded    First Mobile Games    VR Expansion    100+ Projects    Open for Partners',
    bodyFont: '14px Inter, sans-serif',
    bodyColor: '#6e6e7a'
  });
  const timeline = new THREE.Mesh(
    new THREE.PlaneGeometry(6, 0.7),
    new THREE.MeshBasicMaterial({ map: timelineTex })
  );
  timeline.position.set(0, 0.7, -hD + 0.05);
  scene.add(timeline);

  // Team photos (left and right of about screen)
  const teamData = [
    { name: 'Umar Hyatt', role: 'CEO & Founder', img: 'images/umar-hyatt.webp', x: -5 },
    { name: 'Nimra Sardar', role: 'COO', img: 'images/nimra-sardar.webp', x: 5 },
  ];

  teamData.forEach(member => {
    const texLoader = new THREE.TextureLoader();
    const photoGeo = new THREE.PlaneGeometry(1.4, 1.4);
    const photoMat = new THREE.MeshBasicMaterial({ color: 0x222233 });
    const photo = new THREE.Mesh(photoGeo, photoMat);
    photo.position.set(member.x, 2.8, -hD + 0.05);
    scene.add(photo);

    texLoader.load(member.img, tex => {
      tex.colorSpace = THREE.SRGBColorSpace;
      photo.material = new THREE.MeshBasicMaterial({ map: tex });
    });

    const nameTex = createTextCanvas(member.name, {
      width: 256, height: 96,
      font: 'bold 20px Inter, sans-serif',
      bg: '#080812', color: '#f0f0f2',
      py: 32, px: 16,
      body: member.role,
      bodyFont: 'bold 13px Inter, sans-serif',
      bodyColor: '#FC8337'
    });
    const nameplate = new THREE.Mesh(
      new THREE.PlaneGeometry(1.4, 0.5),
      new THREE.MeshBasicMaterial({ map: nameTex })
    );
    nameplate.position.set(member.x, 1.9, -hD + 0.05);
    scene.add(nameplate);

    // Photo frame
    const pFrame = new THREE.Mesh(
      new THREE.BoxGeometry(1.55, 1.55, 0.06),
      new THREE.MeshStandardMaterial({ color: 0x111120, roughness: 0.6, metalness: 0.3 })
    );
    pFrame.position.set(member.x, 2.8, -hD + 0.01);
    scene.add(pFrame);
  });
}

export function createContactTerminal(scene) {
  // Terminal desk
  const deskMat = new THREE.MeshStandardMaterial({ color: 0x111120, roughness: 0.5, metalness: 0.4 });
  const desk = new THREE.Mesh(new THREE.BoxGeometry(2.5, 0.9, 1.2), deskMat);
  desk.position.set(9, 0.45, 5.5);
  desk.castShadow = true;
  scene.add(desk);

  // Terminal screen (angled)
  const screenTex = createTextCanvas('Contact Terminal', {
    width: 512, height: 384,
    font: 'bold 30px Inter, sans-serif',
    bg: '#060612',
    color: '#00ff88',
    py: 50, px: 30,
    label: '> OMMY GAMES // CONTACT',
    labelColor: '#FC8337',
    labelSize: 13,
    labelGap: 40,
    body: '■ Email: info@ommygames.com\n■ LinkedIn: Ommy Games\n■ Location: Lahore, Pakistan\n\n[ Click to open contact form ]',
    bodyFont: '16px monospace',
    bodyColor: '#88ffbb',
    border: 'rgba(0,255,136,0.3)'
  });

  const termScreen = new THREE.Mesh(
    new THREE.PlaneGeometry(2.2, 1.6),
    new THREE.MeshBasicMaterial({ map: screenTex })
  );
  termScreen.position.set(9, 1.8, 5.2);
  termScreen.rotation.x = -0.15;
  scene.add(termScreen);

  // Screen frame
  const sFrame = new THREE.Mesh(
    new THREE.BoxGeometry(2.35, 1.75, 0.08),
    new THREE.MeshStandardMaterial({ color: 0x0a0a18, roughness: 0.5, metalness: 0.5 })
  );
  sFrame.position.set(9, 1.8, 5.15);
  sFrame.rotation.x = -0.15;
  scene.add(sFrame);

  // Glow behind terminal
  const tGlow = new THREE.PointLight(0x00ff88, 0.8, 6);
  tGlow.position.set(9, 2, 5);
  scene.add(tGlow);

  termScreen.userData = { type: 'contact' };
  interactiveObjects.push(termScreen);
}

export function updateObjects(time) {
  interactiveObjects.forEach(obj => {
    if (obj.userData.type === 'service') {
      const d = obj.userData;
      obj.position.y = d.baseY + Math.sin(time * 0.8 + d.phase) * 0.08;
      obj.rotation.y = Math.sin(time * 0.3 + d.phase) * 0.05;
      if (d.glow) {
        d.glow.position.y = obj.position.y;
        d.glow.rotation.y = obj.rotation.y;
      }
    }
  });
}

export function getInteractables() { return interactiveObjects; }
