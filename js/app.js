// ============================================================
//  UMK3 — APP LOGIC
// ============================================================

const BTN_CLASS = { GA:'btn-ga', GB:'btn-gb', PA:'btn-pa', PB:'btn-pb', BL:'btn-bl', CR:'btn-cr' };
const DIRS = new Set(['↑','↓','←','→','↗','↘','↙','↖']);

const EXTRA_LABELS = {
  brutality:  { label: 'Brutality',  color: '#c8001a' },
  animality:  { label: 'Animality',  color: '#e68a00' },
  friendship: { label: 'Friendship', color: '#4caf50' },
  babality:   { label: 'Babality',   color: '#e91e8c' },
  mercy:      { label: 'Mercy',      color: '#5b8fff' },
};

// Grid layout for select screen (row, col, id)
// null = empty cell
const SELECT_GRID = [
  ['scorpion',  'liukang',   'kunglao',       'kano',      'subzero'     ],
  ['nightwolf', 'sonya',     'jax',            'kitana',    'jade'        ],
  ['mileena',   'ermac',     'stryker',        'sindel',    'cyrax'       ],
  ['sektor',    'sheeva',    'kabal',          'shangtsung','reptile'     ],
  ['smoke',     'classicsubzero', 'rain',      'noobsaibot','humansmoke' ],
];
const BOSS_ROW = [null, 'motaro', 'shaokahn', null, null];

// ── KEY RENDERING ─────────────────────────────────
function renderKey(tok) {
  if (tok === '+')     return `<span class="key plus">+</span>`;
  if (BTN_CLASS[tok])  return `<span class="key ${BTN_CLASS[tok]}">${tok}</span>`;
  if (DIRS.has(tok))   return `<span class="key dir">${tok}</span>`;
  return `<span class="key misc">${tok}</span>`;
}
function renderSeq(seq) { return seq.map(renderKey).join(''); }

// ── MOVE CARDS ─────────────────────────────────────
function renderMoveCard(m, type) {
  const gifHtml = m.gif
    ? `<div class="move-gif-wrap">
         <img class="move-gif" src="assets/moves/${m.gif}" alt="${m.name}"
              onerror="this.parentElement.style.display='none'">
       </div>` : '';
  return `
    <div class="move-card ${type}">
      ${gifHtml}
      <div class="move-info">
        <div class="move-name">${m.name}</div>
        ${m.note ? `<div class="move-note">${m.note}</div>` : ''}
      </div>
      <div class="move-input">${renderSeq(m.seq)}</div>
    </div>`;
}

function renderExtraCard(m) {
  const meta = EXTRA_LABELS[m.type] || { label: m.type, color: '#888' };
  const gifHtml = m.gif
    ? `<div class="move-gif-wrap">
         <img class="move-gif" src="assets/moves/${m.gif}" alt="${m.name}"
              onerror="this.parentElement.style.display='none'">
       </div>` : '';
  return `
    <div class="move-card extra">
      ${gifHtml}
      <div class="move-info">
        <div class="move-name">
          <span class="extra-badge" style="background:${meta.color}22;border-color:${meta.color};color:${meta.color}">${meta.label}</span>
          ${m.name}
        </div>
        ${m.note ? `<div class="move-note">${m.note}</div>` : ''}
      </div>
      <div class="move-input">${renderSeq(m.seq)}</div>
    </div>`;
}

// ── CHARACTER DETAIL ──────────────────────────────
function renderChar(char) {
  let html = `
    <div class="char-detail">
      <div class="char-hero">
        <div class="char-sprite-wrap">
          <img class="char-sprite-lg" src="${char.sprite}" alt="${char.name}"
               onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
          <div class="char-sprite-fallback" style="display:none">${char.emoji}</div>
        </div>
        <div class="char-hero-info">
          <div class="char-hero-name">${char.name}${char.boss ? '<span class="boss-badge">BOSS</span>' : ''}</div>
          <div class="char-hero-subtitle">${char.type}</div>
          <div class="char-hero-desc">${char.desc}</div>
        </div>
      </div>`;

  if (char.specials?.length) {
    html += `<div class="section-label specials">⚡ Movimientos Especiales</div>`;
    char.specials.forEach(m => { html += renderMoveCard(m, 'special'); });
  }
  if (char.combos?.length) {
    html += `<div class="section-label combos">🔗 Combos</div>`;
    char.combos.forEach(m => { html += renderMoveCard(m, 'combo'); });
  }
  if (char.fatalities?.length) {
    html += `<div class="section-label fatalities">💀 Fatalities</div>`;
    char.fatalities.forEach(m => { html += renderMoveCard(m, 'fatality'); });
  }
  if (char.extras?.length) {
    html += `<div class="section-label extras">🔥 Extras</div>`;
    char.extras.forEach(m => { html += renderExtraCard(m); });
  }
  html += `</div>`;
  return html;
}

// ── SECRETS ───────────────────────────────────────
function renderSecrets() {
  let html = `<div class="secrets-page">
    <div class="secrets-header">
      <div class="secrets-title">🔓 Trucos y Secretos</div>
      <div class="secrets-sub">Fuente verificada: mortal-kombat.org</div>
    </div>`;
  SECRETS.forEach(section => {
    html += `<div class="secret-section">
      <div class="secret-section-title">${section.icon} ${section.title}</div>
      ${section.desc ? `<div class="secret-section-desc">${section.desc}</div>` : ''}
      <div class="secret-items">`;
    section.items.forEach(item => {
      const isKode = /^\d{3}-\d{3}$/.test(item.name);
      html += `<div class="secret-item ${isKode ? 'kode-item' : ''}">
        <div class="secret-item-name ${isKode ? 'kode-number' : ''}">${item.name}</div>
        <div class="secret-item-desc">${item.desc}</div>
      </div>`;
    });
    html += `</div></div>`;
  });
  return html + `</div>`;
}

// ── SELECT SCREEN ─────────────────────────────────
function buildSelectScreen() {
  const grid = document.getElementById('selectGrid');

  // Main rows
  SELECT_GRID.forEach(row => {
    row.forEach(id => {
      const cell = document.createElement('div');
      if (!id) {
        cell.className = 'select-cell empty';
      } else {
        const char = CHARACTERS.find(c => c.id === id);
        cell.className = 'select-cell' + (char?.boss ? ' boss-cell' : '');
        cell.dataset.id = id;
        cell.innerHTML = `
          <img src="assets/faces/${id}.png" alt="${char?.name || id}"
               onerror="this.outerHTML='<div style=font-size:18px;text-align:center;padding-top:8px>${char?.emoji||'?'}</div>'">
          <div class="select-cell-name">${char?.name || id}</div>`;
        cell.addEventListener('click', () => enterCharacter(id));
      }
      grid.appendChild(cell);
    });
  });

  // Boss row - only render non-empty cells
  const bossRow = document.createElement('div');
  bossRow.className = 'select-boss-row';
  BOSS_ROW.forEach(id => {
    if (!id) return; // skip empty slots
    const cell = document.createElement('div');
    if (false) {
      // never empty
    } else {
      const char = CHARACTERS.find(c => c.id === id);
      cell.className = 'select-cell boss-cell';
      cell.dataset.id = id;
      cell.innerHTML = `
        <img src="assets/faces/${id}.png" alt="${char?.name || id}"
             onerror="this.outerHTML='<div style=font-size:18px;text-align:center;padding-top:8px>${char?.emoji||'?'}</div>'">
        <div class="select-cell-name">${char?.name || id}</div>`;
      cell.addEventListener('click', () => enterCharacter(id));
    }
    bossRow.appendChild(cell);
  });
  grid.appendChild(bossRow);

  // Secrets button
  const secretsBtn = document.createElement('button');
  secretsBtn.className = 'select-secrets-btn';
  secretsBtn.textContent = '🔓 Trucos & Secretos';
  secretsBtn.addEventListener('click', () => {
    showAppScreen();
    document.getElementById('mainPanel').innerHTML = renderSecrets();
    // highlight secrets in sidebar
    document.querySelectorAll('.char-btn').forEach(b => b.classList.remove('active'));
    const sb = document.querySelector('.char-btn[data-id="__secrets__"]');
    if (sb) sb.classList.add('active');
  });
  grid.parentElement.appendChild(secretsBtn);
}

// ── SIDEBAR ───────────────────────────────────────
function buildSidebar() {
  const list = document.getElementById('charList');

  // Secrets btn
  const secretsBtn = document.createElement('button');
  secretsBtn.className = 'char-btn secrets-nav-btn';
  secretsBtn.dataset.id = '__secrets__';
  secretsBtn.innerHTML = `
    <div class="char-thumb-fallback" style="background:#1a1400;border-color:#c8960a">🔓</div>
    <div class="char-btn-info">
      <div class="char-btn-name" style="color:#c8960a">Trucos</div>
      <div class="char-btn-type">Secretos y Kodes</div>
    </div>`;
  list.appendChild(secretsBtn);

  const divider = document.createElement('div');
  divider.className = 'sidebar-divider';
  divider.textContent = '— Luchadores —';
  list.appendChild(divider);

  CHARACTERS.forEach(char => {
    const btn = document.createElement('button');
    btn.className = 'char-btn' + (char.boss ? ' is-boss' : '');
    btn.dataset.id = char.id;
    btn.innerHTML = `
      <div class="char-face-sm">
        <img src="assets/faces/${char.id}.png" alt="${char.name}"
             onerror="this.parentElement.outerHTML='<div class=char-thumb-fallback>${char.emoji}</div>'">
      </div>
      <div class="char-btn-info">
        <div class="char-btn-name">${char.name}</div>
        <div class="char-btn-type">${char.type.split('—')[0].trim()}</div>
      </div>
      ${char.boss ? '<span class="boss-pip">BOSS</span>' : ''}`;
    list.appendChild(btn);
  });
}

// ── NAVIGATION ────────────────────────────────────
function showSelectScreen() {
  document.getElementById('selectScreen').classList.remove('hidden');
  document.getElementById('appScreen').classList.add('hidden');
}

function showAppScreen() {
  document.getElementById('selectScreen').classList.add('hidden');
  document.getElementById('appScreen').classList.remove('hidden');
}

function enterCharacter(id) {
  showAppScreen();
  const panel = document.getElementById('mainPanel');
  const char = CHARACTERS.find(c => c.id === id);
  if (!char) return;
  panel.innerHTML = renderChar(char);
  panel.scrollTop = 0;

  // Sync sidebar active state
  document.querySelectorAll('.char-btn').forEach(b => b.classList.remove('active'));
  const btn = document.querySelector(`.char-btn[data-id="${id}"]`);
  if (btn) {
    btn.classList.add('active');
    btn.scrollIntoView({ block: 'nearest' });
  }
}

// ── INIT ──────────────────────────────────────────
function init() {
  buildSelectScreen();
  buildSidebar();

  const panel = document.getElementById('mainPanel');
  const list  = document.getElementById('charList');

  // Sidebar clicks
  list.addEventListener('click', e => {
    const btn = e.target.closest('.char-btn');
    if (!btn) return;
    document.querySelectorAll('.char-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const id = btn.dataset.id;
    if (id === '__secrets__') {
      panel.innerHTML = renderSecrets();
    } else {
      const char = CHARACTERS.find(c => c.id === id);
      if (char) panel.innerHTML = renderChar(char);
    }
    panel.scrollTop = 0;
    if (window.innerWidth < 768) panel.scrollIntoView({ behavior: 'smooth' });
  });

  // Back buttons
  document.getElementById('backToSelect').addEventListener('click', showSelectScreen);
  document.getElementById('backBtn').addEventListener('click', showSelectScreen);
}

document.addEventListener('DOMContentLoaded', init);
