// ── State ──────────────────────────────────────────────────────────────────
let currentModule = null;
const done = new Set(JSON.parse(localStorage.getItem('pdc-done') || '[]'));

// ── DOM Refs ────────────────────────────────────────────────────────────────
const sidebar     = document.getElementById('sidebar');
const sidebarNav  = document.getElementById('sidebar-nav');
const main        = document.getElementById('main');
const welcome     = document.getElementById('welcome-screen');
const contentArea = document.getElementById('content-area');
const breadcrumb  = document.getElementById('breadcrumb');
const progressBar = document.getElementById('progress-bar');
const progressTxt = document.getElementById('progress-text');
const markDoneBtn = document.getElementById('mark-done-btn');
const menuToggle  = document.getElementById('menu-toggle');

// ── Build Sidebar Nav ───────────────────────────────────────────────────────
function buildSidebar() {
  sidebarNav.innerHTML = '';
  MODULES.forEach(mod => {
    const btn = document.createElement('button');
    btn.className = 'nav-item' + (done.has(mod.id) ? ' done' : '');
    btn.id = `nav-${mod.id}`;
    btn.innerHTML = `
      <div class="nav-num">${mod.id}</div>
      <div class="nav-label">${mod.title}</div>
      ${done.has(mod.id) ? '<span class="nav-check">✓</span>' : ''}
    `;
    btn.addEventListener('click', () => loadModule(mod.id));
    sidebarNav.appendChild(btn);
  });
  updateProgress();
}

// ── Build Welcome Grid ──────────────────────────────────────────────────────
function buildWelcome() {
  const grid = document.getElementById('welcome-grid');
  grid.innerHTML = '';
  MODULES.forEach(mod => {
    const card = document.createElement('div');
    card.className = 'welcome-card';
    card.innerHTML = `
      <div class="wc-num">${mod.tag}</div>
      <div class="wc-title">${mod.title}</div>
      <div class="wc-count">${mod.sections.length} sections</div>
    `;
    card.addEventListener('click', () => loadModule(mod.id));
    grid.appendChild(card);
  });
}

// ── Progress ────────────────────────────────────────────────────────────────
function updateProgress() {
  const pct = (done.size / MODULES.length) * 100;
  progressBar.style.width = pct + '%';
  progressTxt.textContent = `${done.size} / ${MODULES.length} modules`;
}

// ── Render Helpers ──────────────────────────────────────────────────────────
function renderConcept(c) {
  return `<div class="concept-block"><h4>${c.heading}</h4><div>${c.body}</div></div>`;
}

function renderAnalogy(a) {
  return `<div class="analogy-box">
    <div class="analogy-icon">${a.icon}</div>
    <div class="analogy-content">
      <strong>${a.label}</strong>
      <p>${a.text}</p>
    </div>
  </div>`;
}

function renderTable(t) {
  const ths = t.headers.map(h => `<th>${h}</th>`).join('');
  const trs = t.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('');
  return `<div style="overflow-x:auto"><table class="comparison-table"><thead><tr>${ths}</tr></thead><tbody>${trs}</tbody></table></div>`;
}

function renderCommands(cmds) {
  return cmds.map(group => `
    <div class="cmd-block">
      <div class="cmd-header">
        <span class="dot dot-r"></span>
        <span class="dot dot-y"></span>
        <span class="dot dot-g"></span>
        <span style="margin-left:8px">${group.label}</span>
      </div>
      <div class="cmd-body">
        ${group.lines.map(l => `
          <div class="cmd-line">
            <div class="cmd-prompt">$</div>
            <div>
              <div class="cmd-text">${l.cmd}</div>
              <div class="cmd-explain">${l.explain}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function renderFlow(steps) {
  const items = steps.map(s => `
    <div class="flow-step"><div class="fs-num">Step ${s.num}</div><div class="fs-label">${s.label}</div></div>
    ${steps.indexOf(s) < steps.length - 1 ? '<div class="flow-arrow">→</div>' : ''}
  `).join('');
  return `<div class="flow-diagram">${items}</div>`;
}

function renderSection(sec) {
  let html = `<div class="section">
    <div class="section-title"><span class="s-icon">${sec.icon}</span>${sec.title}</div>`;

  if (sec.analogy) html += renderAnalogy(sec.analogy);
  if (sec.flow)    html += renderFlow(sec.flow);
  if (sec.concepts) html += sec.concepts.map(renderConcept).join('');
  if (sec.commands) html += renderCommands(sec.commands);
  if (sec.table)   html += renderTable(sec.table);

  html += `</div>`;
  return html;
}

// ── Load Module ──────────────────────────────────────────────────────────────
function loadModule(id) {
  const mod = MODULES.find(m => m.id === id);
  if (!mod) return;
  currentModule = mod;

  // Update nav
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  const navEl = document.getElementById(`nav-${id}`);
  if (navEl) navEl.classList.add('active');

  breadcrumb.textContent = `${mod.tag} — ${mod.title}`;
  markDoneBtn.style.display = 'inline-block';
  markDoneBtn.textContent = done.has(id) ? '✓ Completed' : '✓ Mark Done';

  // Show content
  welcome.classList.add('hidden');
  contentArea.classList.remove('hidden');

  // Render
  const prevId = id > 1 ? id - 1 : null;
  const nextId = id < MODULES.length ? id + 1 : null;

  contentArea.innerHTML = `
    <div class="mod-header">
      <div class="mod-tag">${mod.tag}</div>
      <div class="mod-title">${mod.title}</div>
      <div class="mod-intro">${mod.intro}</div>
    </div>
    ${mod.sections.map(renderSection).join('')}
    <div class="module-nav">
      <button class="nav-btn" ${!prevId ? 'disabled' : ''} id="btn-prev">← Previous</button>
      <button class="nav-btn" ${!nextId ? 'disabled' : ''} id="btn-next">Next →</button>
    </div>
  `;

  if (prevId) document.getElementById('btn-prev').addEventListener('click', () => loadModule(prevId));
  if (nextId) document.getElementById('btn-next').addEventListener('click', () => loadModule(nextId));

  contentArea.scrollTop = 0;
  window.scrollTo(0, 0);

  // Close sidebar on mobile
  if (window.innerWidth <= 768) sidebar.classList.remove('open');
}

// ── Mark Done ────────────────────────────────────────────────────────────────
markDoneBtn.addEventListener('click', () => {
  if (!currentModule) return;
  const id = currentModule.id;
  if (done.has(id)) {
    done.delete(id);
    markDoneBtn.textContent = '✓ Mark Done';
  } else {
    done.add(id);
    markDoneBtn.textContent = '✓ Completed';
  }
  localStorage.setItem('pdc-done', JSON.stringify([...done]));
  buildSidebar();
});

// ── Sidebar Toggle ────────────────────────────────────────────────────────────
menuToggle.addEventListener('click', () => {
  if (window.innerWidth <= 768) {
    sidebar.classList.toggle('open');
  } else {
    sidebar.classList.toggle('collapsed');
    main.classList.toggle('full');
  }
});

// ── Init ──────────────────────────────────────────────────────────────────────
buildSidebar();
buildWelcome();
