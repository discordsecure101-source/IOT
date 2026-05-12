const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

if (typeof mermaid !== 'undefined') {
  mermaid.initialize({
    startOnLoad: false,
    theme: 'dark',
    securityLevel: 'loose',
    fontFamily: 'Inter'
  });
}

const DOM = {
  app: $("#app"),
  sidebar: $("#sidebar"),
  overlay: $("#sidebar-overlay"),
  collapseBtn: $("#sidebar-collapse-btn"),
  openBtn: $("#sidebar-open-btn"),
  newChatBtn: $("#new-chat-btn"),
  newChatTopBtn: $("#new-chat-topbar-btn"),
  historyEl: $("#sidebar-history"),
  searchInput: $("#search-chats"),
  clearAllBtn: $("#clear-all-btn"),
  exportBtn: $("#export-chat-btn"),
  settingsBtn: $("#settings-btn"),
  docsBtn: $("#docs-btn"),
  topbarTitle: $("#topbar-title"),
  hero: $("#hero"),
  messages: $("#messages"),
  form: $("#chat-form"),
  input: $("#user-input"),
  sendBtn: $("#send-btn"),
  fileInput: $("#file-input"),
  attachmentPreview: $("#attachment-preview"),
  modelSelect: $("#model-select"),
  searchToggle: $("#search-toggle"),
  clearModal: $("#clear-modal"),
  clearConfirmBtn: $("#clear-confirm-btn"),
  clearCancelBtn: $("#clear-cancel-btn"),
  deleteChatModal: $("#delete-chat-modal"),
  deleteChatDesc: $("#delete-chat-desc"),
  deleteChatConfirmBtn: $("#delete-chat-confirm-btn"),
  deleteChatCancelBtn: $("#delete-chat-cancel-btn"),
  spyOsintBtn: $("#spy-osint-btn"),
  osintView: $("#osint-view"),
  osintResults: $("#osint-results"),
  osintSearchInput: $("#osint-search-input"),
  osintTypeSelect: $("#osint-type-select"),
  osintSearchBtn: $("#osint-search-btn"),
  osintFilterToggle: $("#osint-filter-toggle"),
  osintFiltersPanel: $("#osint-filters-panel"),
  osintSuggestions: $("#osint-suggestions"),
  osintHistoryDropdown: $("#osint-history"),
  osintResultsContainer: $("#osint-results-container"),
  drawer: $("#file-drawer"),
  drawerOverlay: $("#drawer-overlay"),
  drawerClose: $("#drawer-close-btn"),
  drawerCopy: $("#drawer-copy-btn"),
  drawerCode: $("#drawer-code"),
  drawerName: $("#drawer-filename"),
  drawerType: $("#drawer-filetype"),
  drawerSize: $("#drawer-filesize"),
  drawerLines: $("#drawer-lines"),
  drawerSearch: $("#drawer-search-input"),
  drawerDownload: $("#drawer-download-btn"),
  plusBtn: $("#plus-btn"),
  plusMenu: $("#plus-menu"),
  charCount: $("#char-count"),
  voiceBtn: $("#voice-btn"),
  screenshareBtn: $("#screenshare-btn"),
  screenshareFloating: $("#screenshare-floating"),
  screenshareVideo: $("#screenshare-video"),
  screenshareCanvas: $("#screenshare-canvas"),
  screenshareStopBtn: $("#screenshare-stop-btn"),
  screenshareSnapshotLabel: $("#screenshare-snapshot-label"),
  builderPanel: $("#builder-panel"),
  builderPreviewTab: $("#builder-preview-tab"),
  builderCodeTab: $("#builder-code-tab"),
  builderPreviewView: $("#builder-preview-view"),
  builderCodeView: $("#builder-code-view"),
  builderIframe: $("#builder-iframe"),
  builderCodeContent: $("#builder-code-content"),
  iframeContainer: $("#iframe-container"),
  deviceBtns: $$(".device-btn"),
  builderRefreshBtn: $("#builder-refresh-btn"),
  builderDownloadBtn: $("#builder-download-btn"),
  builderFileList: $("#builder-file-list"),
  builderFilenameDisplay: $("#builder-filename-display"),
  builderFilesTab: $("#builder-files-tab"),
  builderSidebar: $("#builder-sidebar"),
  builderFilesView: $("#builder-files-view"),
  filesGrid: $("#files-grid"),
  settingsModal: $("#settings-modal"),
  settingsCloseBtn: $("#settings-close-btn"),
  settingsNavBtns: $$(".settings-nav-btn"),
  settingsPanes: $$(".settings-pane"),
  settingsTitleDisplay: $("#settings-title-display"),
  themeCards: $$(".theme-card"),
  colorBtns: $$("#color-grid .color-btn"),
  fontSizeSlider: $("#font-size-slider"),
  animToggle: $("#anim-toggle"),
  tempSlider: $("#temp-slider"),
  contextLimit: $("#context-limit"),
  chatBubbleStyle: $("#chat-bubble-style"),
  soundToggle: $("#sound-toggle"),
  autosaveToggle: $("#autosave-toggle"),
  systemPromptInput: $("#system-prompt-input"),
  searchLimit: $("#search-limit"),
  contrastToggle: $("#contrast-toggle"),
  sendBehavior: $("#send-behavior"),
  resetSettingsBtn: $("#reset-settings-btn"),
  deleteDataBtn: $("#delete-data-btn"),
  apiKeyInput: $("#api-key-input"),
  systemPromptInput: $("#system-prompt-input"),
  settingsSaveBtn: $("#settings-save-btn"),
  settingsBtn: $("#settings-btn"),
  docsModal: $("#docs-modal"),
  docsBtn: $("#docs-btn"),
  docsCloseBtn: $("#docs-close-btn"),
  builderSidebar: $("#builder-sidebar"),
  builderFileList: $("#builder-file-list"),
  mainTabCode: $("#main-tab-code"),
  mainTabPreview: $("#main-tab-preview"),
  builderEditorHeader: $("#builder-editor-header"),
  builderPreviewView: $("#builder-preview-view"),
  builderCodeView: $("#builder-code-view"),
  builderIframe: $("#builder-iframe"),
  builderCodeInput: $("#builder-code-input"),
  builderCodeContent: $("#builder-code-content"),
  iframeContainer: $("#iframe-container"),
  deviceBtns: $$(".device-btn"),
  builderRefreshBtn: $("#builder-refresh-btn"),
  builderDownloadBtn: $("#builder-download-btn"),
  builderFilenameDisplay: $("#builder-filename-display"),
  builderUrlPath: $("#builder-url-path"),
  imageViewerDownloadBtn: $("#image-viewer-download-btn"),
  imageViewerImg: $("#image-viewer-img"),
  imageViewerModal: $("#image-viewer-modal"),
  imageViewerCloseBtn: $("#image-viewer-close-btn")
};

window.copyCode = function (btn) {
  const code = btn.closest("pre").querySelector("code").textContent;
  navigator.clipboard.writeText(code).then(() => { 
    const oldText = btn.textContent;
    btn.textContent = "Copied!"; 
    setTimeout(() => btn.textContent = oldText, 1500); 
  });
};

window.previewCode = function (btn) {
  const pre = btn.closest("pre");
  if (!pre) return;
  const codeEl = pre.querySelector("code");
  if (!codeEl) return;
  const code = codeEl.textContent;

  let lang = 'code';
  const headerSpan = pre.querySelector(".code-header > span");
  if (headerSpan) {
    lang = headerSpan.textContent.trim().toLowerCase();
  } else {
    const langClass = Array.from(codeEl.classList).find(c => c.startsWith('language-'));
    if (langClass) lang = langClass.replace('language-', '');
  }

  const extMap = {
    'javascript': 'js', 'js': 'js', 'typescript': 'ts', 'ts': 'ts',
    'python': 'py', 'py': 'py', 'html': 'html', 'css': 'css',
    'json': 'json', 'bash': 'sh', 'shell': 'sh', 'sh': 'sh',
    'lua': 'lua', 'cpp': 'cpp', 'c++': 'cpp', 'c': 'c',
    'java': 'java', 'csharp': 'cs', 'cs': 'cs', 'ruby': 'rb',
    'php': 'php', 'go': 'go', 'rust': 'rs', 'swift': 'swift',
    'kotlin': 'kt', 'sql': 'sql', 'xml': 'xml', 'yaml': 'yaml',
    'yml': 'yml', 'markdown': 'md', 'md': 'md', 'code': 'txt'
  };
  const ext = extMap[lang] || lang;
  openFileDrawer(`generated.${ext}`, code);
};


const STORAGE_KEY = "IOT_conversations_v3";
let conversations = [];
let activeId = null;
let pendingFiles = [];
let searchEnabled = false;
let screenShareStream = null;
let screenShareActive = false;
let pendingDeleteId = null;
async function initAuth() {
  try {
    const res = await fetch('/api/auth/status');
    const data = await res.json();
    if (!data.authenticated) {
      document.getElementById('auth-modal').classList.add('active');
      initAuthUI();
    }
  } catch (err) {
    console.error('Auth check failed:', err);
    document.getElementById('auth-modal').classList.add('active');
    initAuthUI();
  }
}
initAuth();

function initAuthUI() {
  const sessionId = crypto.randomUUID().split('-').slice(0, 2).join('');
  const sessionEl = document.getElementById('auth-session-id');
  if (sessionEl) sessionEl.textContent = sessionId;

  const fpEl = document.getElementById('auth-fingerprint');
  if (fpEl) {
    const hex = Array.from({ length: 32 }, () => Math.floor(Math.random() * 256).toString(16).padStart(2, '0')).join(' ');
    fpEl.textContent = hex;
  }

  spawnAuthParticles();

  const tabs = document.querySelectorAll('.auth-tab');
  const loginForm = document.getElementById('auth-login-form');
  const registerForm = document.getElementById('auth-register-form');
  const indicator = document.getElementById('auth-tab-indicator');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      if (tab.dataset.tab === 'login') {
        loginForm.classList.add('active');
        registerForm.classList.remove('active');
        indicator.style.transform = 'translateX(0)';
      } else {
        registerForm.classList.add('active');
        loginForm.classList.remove('active');
        indicator.style.transform = 'translateX(100%)';
      }
    });
  });

  setupEyeToggle('auth-login-eye', 'auth-login-password');
  setupEyeToggle('auth-reg-eye', 'auth-reg-password');

  const regPassword = document.getElementById('auth-reg-password');
  regPassword?.addEventListener('input', () => updatePasswordStrength(regPassword.value));

  let keyValidationTimeout;
  const inviteInput = document.getElementById('auth-reg-invite');
  inviteInput?.addEventListener('input', () => {
    clearTimeout(keyValidationTimeout);
    const code = inviteInput.value.trim();
    if (code.length < 4) {
      hideKeyStatus();
      return;
    }
    showKeySpinner();
    keyValidationTimeout = setTimeout(() => validateInviteKey(code), 600);
  });

  loginForm?.addEventListener('submit', handleLogin);

  registerForm?.addEventListener('submit', handleRegister);

  animateAuthRing();
}

function setupEyeToggle(btnId, inputId) {
  const btn = document.getElementById(btnId);
  const input = document.getElementById(inputId);
  if (!btn || !input) return;

  btn.addEventListener('click', () => {
    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';
    btn.classList.toggle('active', !isPassword);
  });
}

function updatePasswordStrength(password) {
  const fill = document.getElementById('auth-strength-fill');
  const label = document.getElementById('auth-strength-label');
  if (!fill || !label) return;

  let score = 0;
  if (password.length >= 6) score++;
  if (password.length >= 10) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  const levels = [
    { width: '0%', color: 'transparent', text: '' },
    { width: '20%', color: '#ef4444', text: 'Weak' },
    { width: '40%', color: '#f97316', text: 'Fair' },
    { width: '60%', color: '#eab308', text: 'Good' },
    { width: '80%', color: '#22c55e', text: 'Strong' },
    { width: '100%', color: '#10b981', text: 'Excellent' }
  ];

  const level = levels[score] || levels[0];
  fill.style.width = level.width;
  fill.style.background = level.color;
  label.textContent = level.text;
  label.style.color = level.color;
}

async function validateInviteKey(code) {
  try {
    const res = await fetch('/api/auth/validate-key', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ inviteCode: code })
    });
    const data = await res.json();
    const statusEl = document.getElementById('auth-key-status');
    const infoEl = document.getElementById('auth-key-info');

    if (data.valid) {
      statusEl.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>';
      statusEl.className = 'auth-key-status valid';
      infoEl.innerHTML = `<span class="auth-key-valid">✓ ${data.label}</span><span class="auth-key-meta">${data.tier.toUpperCase()} tier • ${data.remaining} uses left${data.expiresAt ? ' • Expires ' + new Date(data.expiresAt).toLocaleDateString() : ''}</span>`;
      infoEl.className = 'auth-key-info visible';
    } else {
      statusEl.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
      statusEl.className = 'auth-key-status invalid';
      infoEl.innerHTML = `<span class="auth-key-invalid">✗ ${data.reason}</span>`;
      infoEl.className = 'auth-key-info visible';
    }
  } catch (err) {
    hideKeyStatus();
  }
}

function showKeySpinner() {
  const statusEl = document.getElementById('auth-key-status');
  statusEl.innerHTML = '<div class="auth-key-spinner"></div>';
  statusEl.className = 'auth-key-status checking';
}

function hideKeyStatus() {
  const statusEl = document.getElementById('auth-key-status');
  const infoEl = document.getElementById('auth-key-info');
  statusEl.innerHTML = '';
  statusEl.className = 'auth-key-status';
  infoEl.innerHTML = '';
  infoEl.className = 'auth-key-info';
}

async function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('auth-login-email').value;
  const password = document.getElementById('auth-login-password').value;
  const errorEl = document.getElementById('auth-login-error');
  const submitBtn = document.getElementById('auth-login-submit');
  const loader = document.getElementById('auth-login-loader');

  submitBtn.classList.add('loading');
  errorEl.textContent = '';

  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();

    if (res.ok) {
      submitBtn.classList.remove('loading');
      submitBtn.classList.add('success');
      submitBtn.querySelector('.auth-submit-text').textContent = 'Access Granted';

      const attemptsBar = document.getElementById('auth-attempts-bar');
      if (attemptsBar) attemptsBar.style.display = 'none';

      setTimeout(() => {
        document.getElementById('auth-modal').classList.remove('active');
      }, 800);
    } else {
      submitBtn.classList.remove('loading');
      errorEl.textContent = data.error || 'Authentication failed.';

      if (data.attemptsRemaining !== undefined) {
        const attemptsBar = document.getElementById('auth-attempts-bar');
        const attemptsFill = document.getElementById('auth-attempts-fill');
        const attemptsText = document.getElementById('auth-attempts-text');
        attemptsBar.style.display = 'flex';
        const pct = (data.attemptsRemaining / 5) * 100;
        attemptsFill.style.width = pct + '%';
        attemptsFill.style.background = pct > 40 ? '#eab308' : '#ef4444';
        attemptsText.textContent = `${data.attemptsRemaining} attempts remaining`;
      }

      if (data.locked) {
        submitBtn.disabled = true;
        const mins = Math.ceil(data.retryAfter / 60);
        errorEl.textContent = `Account locked. Try again in ${mins} minute${mins > 1 ? 's' : ''}.`;
        setTimeout(() => { submitBtn.disabled = false; }, data.retryAfter * 1000);
      }

      submitBtn.classList.add('shake');
      setTimeout(() => submitBtn.classList.remove('shake'), 500);
    }
  } catch (err) {
    submitBtn.classList.remove('loading');
    errorEl.textContent = 'Connection error. Try again.';
  }
}

async function handleRegister(e) {
  e.preventDefault();
  const displayName = document.getElementById('auth-reg-name').value;
  const email = document.getElementById('auth-reg-email').value;
  const password = document.getElementById('auth-reg-password').value;
  const inviteCode = document.getElementById('auth-reg-invite').value;
  const errorEl = document.getElementById('auth-reg-error');
  const submitBtn = document.getElementById('auth-reg-submit');

  submitBtn.classList.add('loading');
  errorEl.textContent = '';

  try {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, inviteCode, displayName })
    });
    const data = await res.json();

    if (res.ok) {
      submitBtn.classList.remove('loading');
      submitBtn.classList.add('success');
      submitBtn.querySelector('.auth-submit-text').textContent = 'Account Created';

      setTimeout(() => {
        document.getElementById('auth-modal').classList.remove('active');
      }, 800);
    } else {
      submitBtn.classList.remove('loading');
      errorEl.textContent = data.error || 'Registration failed.';
      submitBtn.classList.add('shake');
      setTimeout(() => submitBtn.classList.remove('shake'), 500);
    }
  } catch (err) {
    submitBtn.classList.remove('loading');
    errorEl.textContent = 'Connection error. Try again.';
  }
}

function spawnAuthParticles() {
  const container = document.getElementById('auth-particles');
  if (!container) return;
  container.innerHTML = '';

  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'auth-particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.top = Math.random() * 100 + '%';
    p.style.width = p.style.height = (Math.random() * 3 + 1) + 'px';
    p.style.animationDelay = (Math.random() * 6) + 's';
    p.style.animationDuration = (Math.random() * 8 + 6) + 's';
    p.style.opacity = Math.random() * 0.5 + 0.1;
    container.appendChild(p);
  }
}

function animateAuthRing() {
  const ring = document.getElementById('auth-ring-progress');
  if (!ring) return;
  const circumference = 2 * Math.PI * 56;
  ring.style.strokeDasharray = circumference;
  ring.style.strokeDashoffset = circumference;
  setTimeout(() => {
    ring.style.transition = 'stroke-dashoffset 1.5s ease-out';
    ring.style.strokeDashoffset = circumference * 0.25;
  }, 300);
}

let builderProject = {
  activeFile: 'index.html',
  files: {
    'index.html': '',
    'style.css': '',
    'script.js': ''
  }
};

let appSettings = {
  theme: 'dark',
  themeColor: '#60a5fa',
  themeRgb: '96,165,250',
  fontSize: 14,
  animations: true,
  temperature: 30,
  contextLimit: 10,
  searchLimit: 3,
  highContrast: false,
  sendBehavior: 'enter',
  chatBubbleStyle: 'rounded',
  soundEffects: true,
  autoSaveHistory: true,
  bgAnimation: 'none',
  logoColor: 'default',
  logoSkin: 'none'
};

/* =====================================================
   BACKGROUND ANIMATION ENGINE + HERO TYPING EFFECT
   ===================================================== */

const bgAnimCanvas = document.getElementById('bg-animation-canvas');
const bgAnimCtx = bgAnimCanvas ? bgAnimCanvas.getContext('2d') : null;
let bgAnimFrame = null;
let bgAnimType = 'none';
let bgAnimData = {};

function resizeBgCanvas() {
  if (!bgAnimCanvas) return;
  const parent = bgAnimCanvas.parentElement;
  if (!parent) return;
  bgAnimCanvas.width = parent.clientWidth;
  bgAnimCanvas.height = parent.clientHeight;
}

function initBgAnimation(type) {
  bgAnimType = type;
  if (bgAnimFrame) cancelAnimationFrame(bgAnimFrame);
  bgAnimFrame = null;
  bgAnimData = {};
  resizeBgCanvas();
  if (!bgAnimCtx) return;
  bgAnimCtx.clearRect(0, 0, bgAnimCanvas.width, bgAnimCanvas.height);

  if (type === 'none') return;

  const w = bgAnimCanvas.width;
  const h = bgAnimCanvas.height;

  // Initialize data per type
  if (type === 'waves') {
    bgAnimData.time = 0;
  }
  if (type === 'lines') {
    bgAnimData.lines = [];
    for (let i = 0; i < 30; i++) {
      bgAnimData.lines.push({
        x: Math.random() * w,
        y: Math.random() * h,
        len: Math.random() * 120 + 40,
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.005 + 0.002,
        drift: Math.random() * 0.3 + 0.1
      });
    }
    bgAnimData.time = 0;
  }
  if (type === 'particles') {
    bgAnimData.particles = [];
    for (let i = 0; i < 60; i++) {
      bgAnimData.particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 2 + 1
      });
    }
  }
  if (type === 'matrix') {
    const cols = Math.floor(w / 16);
    bgAnimData.drops = new Array(cols).fill(0).map(() => Math.floor(Math.random() * h / 16));
    bgAnimData.chars = '01アイウエオカキクケコサシスセソタチツテトIOT';
  }
  if (type === 'constellation') {
    bgAnimData.stars = [];
    for (let i = 0; i < 100; i++) {
      bgAnimData.stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4
      });
    }
  }
  if (type === 'aurora') {
    bgAnimData.time = 0;
    bgAnimData.bands = [];
    for (let i = 0; i < 5; i++) {
      bgAnimData.bands.push({
        yOffset: 0.3 + Math.random() * 0.4,
        amplitude: 30 + Math.random() * 50,
        freq: 0.003 + Math.random() * 0.004,
        speed: 0.005 + Math.random() * 0.01,
        hue: Math.random() * 60 + 160,
        opacity: 0.06 + Math.random() * 0.08
      });
    }
  }
  if (type === 'grid') {
    bgAnimData.time = 0;
    bgAnimData.spacing = 40;
    bgAnimData.pulses = [];
    for (let i = 0; i < 3; i++) {
      bgAnimData.pulses.push({
        x: Math.random() * w,
        y: Math.random() * h,
        radius: 0,
        maxRadius: Math.max(w, h) * 0.6,
        speed: 1 + Math.random() * 2
      });
    }
  }

  drawBgAnimation();
}

function drawBgAnimation() {
  if (!bgAnimCtx || bgAnimType === 'none') return;
  const w = bgAnimCanvas.width;
  const h = bgAnimCanvas.height;
  const ctx = bgAnimCtx;

  ctx.clearRect(0, 0, w, h);

  const rgb = '220,220,220';

  // WAVES
  if (bgAnimType === 'waves') {
    bgAnimData.time += 0.015;
    for (let wave = 0; wave < 3; wave++) {
      ctx.beginPath();
      const yBase = h * (0.35 + wave * 0.14);
      const amp = 25 + wave * 10;
      const freq = 0.008 - wave * 0.001;
      const phase = bgAnimData.time * (1.2 - wave * 0.2);
      ctx.moveTo(0, h);
      for (let x = 0; x <= w; x += 3) {
        const y = yBase + Math.sin(x * freq + phase) * amp + Math.sin(x * freq * 2.5 + phase * 1.5) * (amp * 0.3);
        ctx.lineTo(x, y);
      }
      ctx.lineTo(w, h);
      ctx.closePath();
      ctx.fillStyle = `rgba(${rgb}, ${Math.max(0.01, 0.05 - wave * 0.006)})`;
      ctx.fill();

      ctx.beginPath();
      for (let x = 0; x <= w; x += 3) {
        const y = yBase + Math.sin(x * freq + phase) * amp + Math.sin(x * freq * 2.5 + phase * 1.5) * (amp * 0.3);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = `rgba(${rgb}, ${Math.max(0.03, 0.18 - wave * 0.02)})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }
  }

  // LINES
  if (bgAnimType === 'lines') {
    bgAnimData.time += 0.01;
    bgAnimData.lines.forEach(line => {
      line.angle += line.speed;
      const x1 = line.x + Math.cos(line.angle) * line.len * 0.5;
      const y1 = line.y + Math.sin(line.angle) * line.len * 0.5;
      const x2 = line.x - Math.cos(line.angle) * line.len * 0.5;
      const y2 = line.y - Math.sin(line.angle) * line.len * 0.5;
      line.x += Math.sin(bgAnimData.time + line.drift) * 0.3;
      line.y += Math.cos(bgAnimData.time + line.drift * 2) * 0.2;
      if (line.x < -50) line.x = w + 50;
      if (line.x > w + 50) line.x = -50;
      if (line.y < -50) line.y = h + 50;
      if (line.y > h + 50) line.y = -50;

      const grad = ctx.createLinearGradient(x1, y1, x2, y2);
      grad.addColorStop(0, `rgba(${rgb}, 0)`);
      grad.addColorStop(0.5, `rgba(${rgb}, 0.2)`);
      grad.addColorStop(1, `rgba(${rgb}, 0)`);
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1;
      ctx.stroke();
    });
  }

  // PARTICLES
  if (bgAnimType === 'particles') {
    const p = bgAnimData.particles;
    p.forEach(pt => {
      pt.x += pt.vx;
      pt.y += pt.vy;
      if (pt.x < 0) pt.x = w;
      if (pt.x > w) pt.x = 0;
      if (pt.y < 0) pt.y = h;
      if (pt.y > h) pt.y = 0;
    });
    // Draw connections
    for (let i = 0; i < p.length; i++) {
      for (let j = i + 1; j < p.length; j++) {
        const dx = p[i].x - p[j].x;
        const dy = p[i].y - p[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p[i].x, p[i].y);
          ctx.lineTo(p[j].x, p[j].y);
          ctx.strokeStyle = `rgba(${rgb}, ${(1 - dist / 120) * 0.15})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    // Draw dots
    p.forEach(pt => {
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, pt.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${rgb}, 0.5)`;
      ctx.fill();
    });
  }

  // MATRIX
  if (bgAnimType === 'matrix') {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, w, h);
    ctx.font = '14px JetBrains Mono, monospace';
    const chars = bgAnimData.chars;
    bgAnimData.drops.forEach((drop, i) => {
      const char = chars[Math.floor(Math.random() * chars.length)];
      const x = i * 16;
      const y = drop * 16;
      ctx.fillStyle = `rgba(${rgb}, ${0.6 + Math.random() * 0.4})`;
      ctx.fillText(char, x, y);
      if (y > h && Math.random() > 0.975) {
        bgAnimData.drops[i] = 0;
      }
      bgAnimData.drops[i]++;
    });
    bgAnimFrame = requestAnimationFrame(drawBgAnimation);
    return; // Matrix uses its own fade technique
  }

  // CONSTELLATION (Now Network Nodes)
  if (bgAnimType === 'constellation') {
    bgAnimData.stars.forEach(s => {
      s.x += s.vx;
      s.y += s.vy;
      if (s.x < 0) s.x = w;
      if (s.x > w) s.x = 0;
      if (s.y < 0) s.y = h;
      if (s.y > h) s.y = 0;
    });
    // Lines
    const stars = bgAnimData.stars;
    for (let i = 0; i < stars.length; i++) {
      for (let j = i + 1; j < stars.length; j++) {
        const dx = stars[i].x - stars[j].x;
        const dy = stars[i].y - stars[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(stars[i].x, stars[i].y);
          ctx.lineTo(stars[j].x, stars[j].y);
          ctx.strokeStyle = `rgba(${rgb}, ${(1 - dist / 130) * 0.25})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
    // Nodes
    stars.forEach(s => {
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${rgb}, 0.8)`;
      ctx.fill();
      // Tech ring
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r * 2.5, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${rgb}, 0.3)`;
      ctx.lineWidth = 0.5;
      ctx.stroke();
    });
  }

  // AURORA
  if (bgAnimType === 'aurora') {
    bgAnimData.time += 0.008;
    bgAnimData.bands.forEach(band => {
      ctx.beginPath();
      for (let x = 0; x <= w; x += 4) {
        const baseY = h * band.yOffset;
        const y = baseY + Math.sin(x * band.freq + bgAnimData.time * band.speed * 60) * band.amplitude + Math.sin(x * band.freq * 3 + bgAnimData.time * band.speed * 40) * band.amplitude * 0.3;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.lineTo(w, h);
      ctx.lineTo(0, h);
      ctx.closePath();
      const grad = ctx.createLinearGradient(0, 0, w, 0);
      grad.addColorStop(0, `hsla(${band.hue}, 80%, 60%, 0)`);
      grad.addColorStop(0.3, `hsla(${band.hue}, 80%, 60%, ${band.opacity})`);
      grad.addColorStop(0.7, `hsla(${band.hue + 30}, 70%, 50%, ${band.opacity * 0.8})`);
      grad.addColorStop(1, `hsla(${band.hue + 60}, 80%, 60%, 0)`);
      ctx.fillStyle = grad;
      ctx.fill();
    });
  }

  // GRID
  if (bgAnimType === 'grid') {
    bgAnimData.time += 0.02;
    const sp = bgAnimData.spacing;
    // Update pulses
    bgAnimData.pulses.forEach(pulse => {
      pulse.radius += pulse.speed;
      if (pulse.radius > pulse.maxRadius) {
        pulse.radius = 0;
        pulse.x = Math.random() * w;
        pulse.y = Math.random() * h;
      }
    });
    // Draw grid
    for (let x = 0; x < w; x += sp) {
      for (let y = 0; y < h; y += sp) {
        let brightness = 0.04;
        bgAnimData.pulses.forEach(pulse => {
          const dx = x - pulse.x;
          const dy = y - pulse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const ringDist = Math.abs(dist - pulse.radius);
          if (ringDist < 40) {
            brightness += (1 - ringDist / 40) * 0.2;
          }
        });
        ctx.fillStyle = `rgba(${rgb}, ${Math.min(brightness, 0.4)})`;
        ctx.fillRect(x, y, 1, 1);
      }
    }
    // Grid lines
    ctx.strokeStyle = `rgba(${rgb}, 0.03)`;
    ctx.lineWidth = 0.5;
    for (let x = 0; x < w; x += sp) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 0; y < h; y += sp) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }
  }

  bgAnimFrame = requestAnimationFrame(drawBgAnimation);
}

window.addEventListener('resize', () => {
  resizeBgCanvas();
  if (bgAnimType !== 'none') initBgAnimation(bgAnimType);
});

/* ===== HERO TYPING EFFECT ===== */
const heroTypingPhrases = [
  'What can I help you build today?',
  'Ask me anything — no limits.',
  'Ready to architect your next project.',
  'Code, create, and conquer.',
  'Powered by Tronikolos Intelligence.',
  'Your unrestricted AI companion.',
  'From concept to deployment in seconds.',
  'Security audits, code review, and more.'
];
let heroTypingIndex = 0;
let heroTypingCharIndex = 0;
let heroTypingIsDeleting = false;
let heroTypingTimer = null;

function heroTypingLoop() {
  const el = document.getElementById('hero-typing-text');
  if (!el) return;
  const current = heroTypingPhrases[heroTypingIndex];

  if (!heroTypingIsDeleting) {
    el.textContent = current.substring(0, heroTypingCharIndex + 1);
    heroTypingCharIndex++;
    if (heroTypingCharIndex >= current.length) {
      heroTypingIsDeleting = true;
      heroTypingTimer = setTimeout(heroTypingLoop, 2200);
      return;
    }
    heroTypingTimer = setTimeout(heroTypingLoop, 45 + Math.random() * 35);
  } else {
    el.textContent = current.substring(0, heroTypingCharIndex);
    heroTypingCharIndex--;
    if (heroTypingCharIndex < 0) {
      heroTypingIsDeleting = false;
      heroTypingCharIndex = 0;
      heroTypingIndex = (heroTypingIndex + 1) % heroTypingPhrases.length;
      heroTypingTimer = setTimeout(heroTypingLoop, 500);
      return;
    }
    heroTypingTimer = setTimeout(heroTypingLoop, 25);
  }
}

// Start typing effect
heroTypingLoop();

/* =====================================================
   LOGO COLOR & SKIN ANIMATION ENGINE
   ===================================================== */

const logoSkinCanvas = document.getElementById('logo-skin-canvas');
const logoSkinCtx = logoSkinCanvas ? logoSkinCanvas.getContext('2d') : null;
let logoSkinFrame = null;
let logoSkinType = 'none';
let logoSkinData = {};

const logoColorMap = {
  'default': 'none',
  'blue': 'brightness(0) saturate(100%) invert(61%) sepia(44%) saturate(700%) hue-rotate(190deg)',
  'purple': 'brightness(0) saturate(100%) invert(40%) sepia(80%) saturate(500%) hue-rotate(250deg)',
  'green': 'brightness(0) saturate(100%) invert(60%) sepia(70%) saturate(500%) hue-rotate(100deg)',
  'red': 'brightness(0) saturate(100%) invert(30%) sepia(90%) saturate(700%) hue-rotate(340deg)',
  'orange': 'brightness(0) saturate(100%) invert(50%) sepia(90%) saturate(600%) hue-rotate(10deg)',
  'pink': 'brightness(0) saturate(100%) invert(40%) sepia(80%) saturate(600%) hue-rotate(300deg)',
  'cyan': 'brightness(0) saturate(100%) invert(70%) sepia(50%) saturate(500%) hue-rotate(160deg)',
  'gold': 'brightness(0) saturate(100%) invert(70%) sepia(80%) saturate(500%) hue-rotate(20deg)',
  'black': 'brightness(0)',
  'rainbow': 'none' // Handled via CSS animation
};

function applyLogoColor(color) {
  const logo = document.getElementById('hero-logo');
  const wrap = document.getElementById('hero-logo-wrap');
  const canvas = document.getElementById('logo-skin-canvas');
  if (!logo || !wrap) return;

  wrap.setAttribute('data-logo-color', color);

  if (color === 'rainbow') {
    logo.style.filter = ''; // Clear inline filter so CSS animation works
    if (canvas) canvas.style.filter = '';
    return;
  }

  const filter = logoColorMap[color] || 'none';
  logo.style.filter = filter === 'none' ? 'brightness(2)' : filter;
  if (canvas) canvas.style.filter = filter === 'none' ? 'none' : filter;
}

function resizeLogoSkinCanvas() {
  if (!logoSkinCanvas) return;
  const wrap = document.getElementById('hero-logo-wrap');
  if (!wrap) return;
  logoSkinCanvas.width = wrap.offsetWidth;
  logoSkinCanvas.height = wrap.offsetHeight;
}

function initLogoSkin(type) {
  logoSkinType = type;
  if (logoSkinFrame) cancelAnimationFrame(logoSkinFrame);
  logoSkinFrame = null;
  logoSkinData = {};
  resizeLogoSkinCanvas();
  const wrap = document.getElementById('hero-logo-wrap');
  if (wrap) wrap.setAttribute('data-skin', type);
  if (!logoSkinCtx) return;
  logoSkinCtx.clearRect(0, 0, logoSkinCanvas.width, logoSkinCanvas.height);
  if (type === 'none' || type === 'pulse') return; // pulse is pure CSS

  const w = logoSkinCanvas.width;
  const h = logoSkinCanvas.height;
  const cx = w / 2;
  const cy = h / 2;

  if (type === 'spots') {
    logoSkinData.spots = [];
    for (let i = 0; i < 12; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 15 + Math.random() * 20;
      logoSkinData.spots.push({
        x: cx + Math.cos(angle) * dist,
        y: cy + Math.sin(angle) * dist,
        r: 2 + Math.random() * 4,
        speed: 0.005 + Math.random() * 0.01,
        angle: angle,
        dist: dist,
        phase: Math.random() * Math.PI * 2
      });
    }
    logoSkinData.time = 0;
  }
  if (type === 'zebra') {
    logoSkinData.offset = 0;
  }
  if (type === 'rainbow') {
    logoSkinData.hue = 0;
  }
  if (type === 'fire') {
    logoSkinData.flames = [];
    for (let i = 0; i < 20; i++) {
      logoSkinData.flames.push({
        x: cx + (Math.random() - 0.5) * 40,
        y: cy + 10 + Math.random() * 20,
        r: 3 + Math.random() * 5,
        speed: 0.5 + Math.random() * 1.5,
        life: Math.random()
      });
    }
  }
  if (type === 'orbit') {
    logoSkinData.angle1 = 0;
    logoSkinData.angle2 = Math.PI * 0.66;
    logoSkinData.angle3 = Math.PI * 1.33;
  }
  if (type === 'hologram') {
    logoSkinData.scanY = 0;
  }

  drawLogoSkin();
}

function drawLogoSkin() {
  if (!logoSkinCtx || logoSkinType === 'none' || logoSkinType === 'pulse') return;
  const w = logoSkinCanvas.width;
  const h = logoSkinCanvas.height;
  const ctx = logoSkinCtx;
  const cx = w / 2;
  const cy = h / 2;
  const r = Math.min(w, h) / 2;

  ctx.clearRect(0, 0, w, h);

  // We do NOT clip to a circle anymore.
  // The CSS mask takes care of making it exactly the logo shape!

  // SPLOTS (Spots)
  if (logoSkinType === 'spots') {
    logoSkinData.time += 0.02;
    
    logoSkinData.spots.forEach((s, i) => {
      s.angle += s.speed * 0.5;
      const wobble = Math.sin(logoSkinData.time + s.phase) * 10;
      s.x = cx + Math.cos(s.angle) * (s.dist + wobble);
      s.y = cy + Math.sin(s.angle) * (s.dist + wobble);
      
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r * 2.5, 0, Math.PI * 2);
      
      const hue = (i * 30 + logoSkinData.time * 20) % 360;
      ctx.fillStyle = `hsl(${hue}, 80%, 60%)`;
      ctx.fill();
    });
  }

  // ZEBRA
  if (logoSkinType === 'zebra') {
    logoSkinData.offset += 1;
    
    const stripeW = 8;
    ctx.lineWidth = 8;
    for (let x = -h; x < w + h; x += stripeW * 2) {
      ctx.beginPath();
      ctx.moveTo(x + logoSkinData.offset % (stripeW * 2), 0);
      ctx.lineTo(x + logoSkinData.offset % (stripeW * 2) - h, h);
      ctx.strokeStyle = '#000'; 
      ctx.stroke();
    }
  }

  // RAINBOW
  if (logoSkinType === 'rainbow') {
    logoSkinData.hue = (logoSkinData.hue + 2) % 360;
    const grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, `hsl(${logoSkinData.hue}, 90%, 55%)`);
    grad.addColorStop(0.5, `hsl(${(logoSkinData.hue + 120) % 360}, 90%, 55%)`);
    grad.addColorStop(1, `hsl(${(logoSkinData.hue + 240) % 360}, 90%, 55%)`);
    ctx.fillStyle = grad;
    // For rainbow, we always fill the base since the whole thing is the gradient
    ctx.fillRect(0, 0, w, h);
  }

  // FIRE
  if (logoSkinType === 'fire') {
    
    logoSkinData.flames.forEach(f => {
      f.y -= f.speed * 1.5;
      f.life -= 0.02;
      f.x += (Math.random() - 0.5) * 2;
      if (f.life <= 0 || f.y < -10) {
        f.x = cx + (Math.random() - 0.5) * 40;
        f.y = h + Math.random() * 10;
        f.life = 0.7 + Math.random() * 0.3;
      }
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.r * f.life * 1.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 0, ${f.life})`;
      ctx.fill();
    });
  }

  // ORBIT
  if (logoSkinType === 'orbit') {
    
    logoSkinData.angle1 += 0.02;
    logoSkinData.angle2 += 0.03;
    logoSkinData.angle3 += 0.015;

    const drawOrbitDot = (angle, orbitR, tilt, color) => {
      const ox = cx + Math.cos(angle) * orbitR;
      const oy = cy + Math.sin(angle) * orbitR * tilt;
      
      ctx.beginPath();
      ctx.ellipse(cx, cy, orbitR, orbitR * tilt, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      
      ctx.beginPath();
      ctx.arc(ox, oy, 4, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    };

    drawOrbitDot(logoSkinData.angle1, r * 0.85, 0.35, '#38bdf8');
    drawOrbitDot(logoSkinData.angle2, r * 0.6, 0.5, '#f472b6');
    drawOrbitDot(logoSkinData.angle3, r * 0.95, 0.25, '#34d399');
  }

  // HOLOGRAM
  if (logoSkinType === 'hologram') {
    
    logoSkinData.scanY = (logoSkinData.scanY + 1.5) % h;
    // Solid scan lines
    for (let y = 0; y < h; y += 4) {
      ctx.fillStyle = `rgba(34, 211, 238, 0.2)`;
      ctx.fillRect(0, y, w, 1);
    }
    // Solid moving scan bar
    ctx.fillStyle = 'rgba(34, 211, 238, 0.8)';
    ctx.fillRect(0, logoSkinData.scanY - 5, w, 10);
    // Glitch flicker
    if (Math.random() > 0.9) {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.fillRect(0, Math.random() * h, w, 2 + Math.random() * 6);
    }
  }

  logoSkinFrame = requestAnimationFrame(drawLogoSkin);
}

(function init() {
  loadConversations();
  if (!conversations.length) createNewChat(true);
  else setActiveChat(conversations[0].id);

  DOM.collapseBtn?.addEventListener("click", toggleSidebar);
  DOM.openBtn?.addEventListener("click", toggleSidebar);
  DOM.newChatBtn?.addEventListener("click", () => createNewChat());
  DOM.newChatTopBtn?.addEventListener("click", () => createNewChat());
  DOM.overlay?.addEventListener("click", closeSidebar);
  DOM.clearAllBtn?.addEventListener("click", () => DOM.clearModal?.classList.add("active"));
  DOM.clearCancelBtn?.addEventListener("click", () => DOM.clearModal?.classList.remove("active"));
  DOM.clearConfirmBtn?.addEventListener("click", clearAllChats);
  DOM.exportBtn?.addEventListener("click", exportChat);

  DOM.deleteChatCancelBtn?.addEventListener("click", () => { pendingDeleteId = null; DOM.deleteChatModal?.classList.remove("active"); });
  DOM.deleteChatConfirmBtn?.addEventListener("click", () => { if (pendingDeleteId) confirmDeleteChat(pendingDeleteId); });
  DOM.deleteChatModal?.addEventListener("click", (e) => { if (e.target === DOM.deleteChatModal) { pendingDeleteId = null; DOM.deleteChatModal?.classList.remove("active"); } });
  
  DOM.settingsBtn?.addEventListener("click", () => DOM.settingsModal?.classList.add("active"));
  
  DOM.docsBtn?.addEventListener("click", () => DOM.docsModal?.classList.add("active"));
  DOM.colorBtns?.forEach(btn => {
    btn.addEventListener("click", () => {
      DOM.colorBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      appSettings.themeColor = btn.style.getPropertyValue('--c').trim();
      appSettings.themeRgb = btn.dataset.rgb;
      applyThemeColor();
      localStorage.setItem("IOT_app_settings", JSON.stringify(appSettings));
    });
  });

  
  DOM.form?.addEventListener("submit", onSubmit);
  DOM.input?.addEventListener("input", onInputChange);
  DOM.input?.addEventListener("keydown", onKeyDown);
  DOM.input?.addEventListener("paste", onPaste);
  DOM.fileInput?.addEventListener("change", onFileSelect);
  
  document.body.addEventListener("dragover", onDragOver);
  document.body.addEventListener("dragleave", onDragLeave);
  document.body.addEventListener("drop", onDrop);
  DOM.searchToggle?.addEventListener("click", toggleSearch);
  DOM.searchInput?.addEventListener("input", renderSidebar);
  
  document.getElementById('logout-btn')?.addEventListener('click', async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      window.location.reload();
    } catch (err) {
      console.error('Logout failed:', err);
    }
  });
  initCustomSelect();
  initBuilderControls();
  initSettingsAndDocs();
  initOsint();
  applyThemeColor();


  $$(".suggestion-card").forEach((btn) => {
    btn.addEventListener("click", () => {
      DOM.input.value = btn.dataset.prompt;
      onInputChange();
      DOM.input.focus();
    });
  });

  DOM.drawerClose?.addEventListener("click", closeFileDrawer);
  DOM.drawerOverlay?.addEventListener("click", closeFileDrawer);
  DOM.drawerCopy?.addEventListener("click", () => {
    const code = DOM.drawerCode.textContent;
    navigator.clipboard.writeText(code).then(() => {
      const span = DOM.drawerCopy.querySelector("span");
      const old = span.textContent;
      span.textContent = "Copied!";
      setTimeout(() => span.textContent = old, 1500);
    });
  });

  DOM.drawerSearch?.addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    if (!term) { renderCodeWithNumbers(currentFileContent); return; }
    searchInCode(term);
  });

  DOM.drawerDownload?.addEventListener("click", () => {
    const blob = new Blob([currentFileContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = DOM.drawerName.textContent;
    a.click();
    URL.revokeObjectURL(url);
  });

  DOM.plusBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    DOM.plusMenu.classList.toggle("active");
  });

  document.addEventListener("click", () => DOM.plusMenu?.classList.remove("active"));

  document.getElementById('auth-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('auth-email').value;
    const password = document.getElementById('auth-password').value;
    const inviteCode = document.getElementById('auth-invite').value;
    const errorEl = document.getElementById('auth-error');
    
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, inviteCode })
      });
      const data = await res.json();
      if (res.ok) {
        document.getElementById('auth-modal').classList.remove('active');
        errorEl.textContent = '';
      } else {
        errorEl.textContent = data.error || 'Authentication failed';
      }
    } catch (err) {
      errorEl.textContent = 'Connection error. Try again.';
    }
  });

  $("#build-website-btn")?.addEventListener("click", () => {
    const creativeOpt = Array.from($$(".cms-option")).find(o => o.dataset.value === "IOT-creative");
    if (creativeOpt) creativeOpt.click();
    
    DOM.input.value = "Architect a premium, modern, and high-performance website for me. Implement a sleek UI using semantic HTML5, advanced CSS3 with animations, and robust JavaScript logic.";
    onInputChange();
    DOM.form.requestSubmit();
    DOM.plusMenu.classList.remove("active");
  });

  $("#summarize-btn")?.addEventListener("click", () => {
    DOM.input.value = "Conduct a deep synthesis of our current session. Identify critical insights, key technical points, and provide a high-level summary of all intelligence gathered.";
    onInputChange();
    DOM.form.requestSubmit();
    DOM.plusMenu.classList.remove("active");
  });

  $("#analyze-security-btn")?.addEventListener("click", () => {
    DOM.input.value = "Perform a comprehensive security audit on the provided code. Identify potential vulnerabilities, logical flaws, or exploitation vectors, and suggest advanced mitigation strategies.";
    onInputChange();
    DOM.form.requestSubmit();
    DOM.plusMenu.classList.remove("active");
  });

  $("#explain-code-btn")?.addEventListener("click", () => {
    DOM.input.value = "Execute a step-by-step logic deconstruction of this code. Explain the underlying architecture, data flow, and functional components in deep detail.";
    onInputChange();
    DOM.form.requestSubmit();
    DOM.plusMenu.classList.remove("active");
  });

  $("#generate-viz-btn")?.addEventListener("click", () => {
    DOM.input.value = "Analyze the provided data or context and generate a high-quality data visualization using Chart.js. Return a JSON configuration object wrapped in a ```chart code block. Include relevant labels, datasets, and modern styling matching our dark theme.";
    onInputChange();
    DOM.form.requestSubmit();
    DOM.plusMenu.classList.remove("active");
  });

  let recognition;
  if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      console.log("Voice recognition started");
      DOM.voiceBtn.classList.add("recording");
    };

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      console.log("Voice result:", text);
      DOM.input.value += (DOM.input.value ? " " : "") + text;
      onInputChange();
      DOM.voiceBtn.classList.remove("recording");
    };

    recognition.onerror = (event) => {
      console.error("Voice error:", event.error);
      DOM.voiceBtn.classList.remove("recording");
      if (event.error === 'not-allowed') alert("Microphone access denied. Please check your browser settings.");
    };

    recognition.onend = () => {
      console.log("Voice recognition ended");
      DOM.voiceBtn.classList.remove("recording");
    };
  }

  const cachedPrompt = localStorage.getItem("IOT_system_prompt");
  if (cachedPrompt && (cachedPrompt.includes("2023") || cachedPrompt.includes("cutoff"))) {
    console.log("Cleaning outdated system prompt...");
    localStorage.removeItem("IOT_system_prompt");
  }

  DOM.voiceBtn.addEventListener("click", () => {
    if (!recognition) {
      alert("Voice recognition is not supported in your browser.");
      return;
    }
    if (DOM.voiceBtn.classList.contains("recording")) {
      recognition.stop();
    } else {
      try {
        recognition.start();
      } catch (e) {
        console.error("Start failed:", e);
        recognition.stop();
      }
    }
  });

  DOM.screenshareBtn.addEventListener("click", toggleScreenShare);
  DOM.screenshareStopBtn.addEventListener("click", stopScreenShare);
  DOM.imageViewerCloseBtn.addEventListener("click", closeImageViewer);
  DOM.imageViewerModal.addEventListener("click", (e) => { if (e.target === DOM.imageViewerModal) closeImageViewer(); });
})();


let currentFileContent = "";


function toggleSidebar() {
  const isMobile = window.innerWidth <= 768;
  if (isMobile) {
    DOM.app.classList.toggle("sidebar-open");
    DOM.overlay.classList.toggle("visible");
  } else {
    DOM.app.classList.toggle("sidebar-collapsed");
  }
}
function closeSidebar() {
  DOM.app.classList.remove("sidebar-open");
  DOM.overlay.classList.remove("visible");
}

function toggleSearch() {
  searchEnabled = !searchEnabled;
  DOM.searchToggle.classList.toggle("active", searchEnabled);
  DOM.input.placeholder = searchEnabled ? "Search the web..." : "Message IOT...";
}

async function toggleScreenShare() {
  if (screenShareActive) {
    stopScreenShare();
    return;
  }

  try {
    const stream = await navigator.mediaDevices.getDisplayMedia({
      video: { 
        cursor: "always",
        width: { ideal: 1920 },
        height: { ideal: 1080 }
      },
      audio: false
    });

    screenShareStream = stream;
    screenShareActive = true;

    DOM.screenshareVideo.srcObject = stream;
    DOM.screenshareFloating.classList.add("active");
    DOM.screenshareBtn.classList.add("screensharing");
    DOM.screenshareBtn.title = "Stop sharing screen";
    DOM.screenshareSnapshotLabel.textContent = "AI can see your screen";

    stream.getVideoTracks()[0].addEventListener("ended", () => {
      stopScreenShare();
    });

  } catch (err) {
    console.error("Screen share failed:", err);
    if (err.name !== "NotAllowedError" && err.name !== "AbortError") {
      alert("Screen sharing is not available. Please make sure you're using a supported browser.");
    }
  }
}

function stopScreenShare() {
  if (screenShareStream) {
    screenShareStream.getTracks().forEach(track => track.stop());
    screenShareStream = null;
  }
  screenShareActive = false;

  DOM.screenshareVideo.srcObject = null;
  DOM.screenshareFloating.classList.remove("active");
  DOM.screenshareBtn.classList.remove("screensharing");
  DOM.screenshareBtn.title = "Share screen with AI";
}

function captureScreenshot() {
  if (!screenShareStream || !DOM.screenshareVideo.videoWidth) return null;

  const video = DOM.screenshareVideo;
  const canvas = DOM.screenshareCanvas;

  const maxW = 1280;
  const scale = Math.min(1, maxW / video.videoWidth);
  canvas.width = Math.round(video.videoWidth * scale);
  canvas.height = Math.round(video.videoHeight * scale);

  const ctx = canvas.getContext("2d");
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  return canvas.toDataURL("image/jpeg", 0.8);
}


function loadConversations() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) conversations = JSON.parse(raw);
  } catch { conversations = []; }
}

function saveConversations() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(conversations));
}

function getActive() {
  return conversations.find((c) => c.id === activeId);
}

function createNewChat(silent = false) {
  const conv = { id: crypto.randomUUID(), title: "New Chat", messages: [], createdAt: Date.now(), updatedAt: Date.now() };
  conversations.unshift(conv);
  saveConversations();
  document.body.classList.remove("builder-mode");
  builderProject.files = { 'index.html': '', 'style.css': '', 'script.js': '' };
  builderProject.activeFile = 'index.html';
  exitOsintMode();
  setActiveChat(conv.id);
  if (!silent) closeSidebar();
}

function setActiveChat(id) {
  activeId = id;
  const conv = getActive();
  if (!conv) return;
  DOM.topbarTitle.textContent = conv.title;
  DOM.messages.innerHTML = "";
  document.body.classList.remove("builder-mode");
  exitOsintMode();
  if (conv.messages.length) {
    document.body.classList.add("has-messages");
    conv.messages.forEach((m) => renderMessage(m.role, m.text, m.kind, m.attachments, false));
  } else {
    document.body.classList.remove("has-messages");
  }
  renderSidebar();
  scrollToBottom();
}

function deleteChat(id) {
  const conv = conversations.find((c) => c.id === id);
  const title = conv ? conv.title : "this chat";
  pendingDeleteId = id;
  DOM.deleteChatDesc.textContent = `Are you sure you want to delete "${title.length > 40 ? title.slice(0,37) + '...' : title}"? This action cannot be undone.`;
  DOM.deleteChatModal.classList.add("active");
}

function confirmDeleteChat(id) {
  const deleted = conversations.find((c) => c.id === id);
  const deletedTitle = deleted ? deleted.title : "Chat";
  conversations = conversations.filter((c) => c.id !== id);
  saveConversations();
  if (id === activeId) {
    if (conversations.length) setActiveChat(conversations[0].id);
    else createNewChat(true);
  } else {
    renderSidebar();
  }
  pendingDeleteId = null;
  DOM.deleteChatModal.classList.remove("active");
  showToast(`"${deletedTitle.length > 30 ? deletedTitle.slice(0,27) + '...' : deletedTitle}" deleted`, "success");
}

function showToast(message, type = "info", duration = 3000) {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.style.cssText = "position:fixed;bottom:24px;left:50%;transform:translateX(-50%);z-index:9999;display:flex;flex-direction:column-reverse;gap:10px;align-items:center;pointer-events:none;";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `IOT-toast IOT-toast-${type}`;

  const icons = {
    success: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    error: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
    info: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>'
  };

  toast.innerHTML = `<span class="toast-icon">${icons[type] || icons.info}</span><span class="toast-msg">${escapeHTML(message)}</span>`;
  container.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add("visible"));

  setTimeout(() => {
    toast.classList.remove("visible");
    toast.classList.add("exiting");
    toast.addEventListener("animationend", () => toast.remove());
  }, duration);
}

function renameChat(id, newTitle) {
  const conv = conversations.find((c) => c.id === id);
  if (conv) { conv.title = newTitle; conv.updatedAt = Date.now(); saveConversations(); renderSidebar(); if (id === activeId) DOM.topbarTitle.textContent = newTitle; }
}

function clearAllChats() {
  conversations = [];
  saveConversations();
  createNewChat(true);
  DOM.clearModal.classList.remove("active");
}

function renderSidebar() {
  const query = DOM.searchInput.value.toLowerCase().trim();
  const filtered = query ? conversations.filter((c) => c.title.toLowerCase().includes(query)) : conversations;

  const groups = {};
  const now = new Date();
  filtered.forEach((c) => {
    const d = new Date(c.updatedAt);
    const diff = (now - d) / 86400000;
    let label = diff < 1 ? "Today" : diff < 2 ? "Yesterday" : diff < 7 ? "Previous 7 Days" : diff < 30 ? "Previous 30 Days" : "Older";
    if (!groups[label]) groups[label] = [];
    groups[label].push(c);
  });

  DOM.historyEl.innerHTML = "";
  Object.entries(groups).forEach(([label, items]) => {
    const g = document.createElement("div");
    g.className = "history-group";
    g.innerHTML = `<div class="history-group-label">${label}</div>`;
    items.forEach((c) => {
      const btn = document.createElement("button");
      btn.className = `history-item${c.id === activeId ? " active" : ""}`;
      btn.innerHTML = `<span class="item-title">${escapeHTML(c.title)}</span>
        <span class="item-actions">
          <span class="item-action-btn rename-btn" title="Rename"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg></span>
          <span class="item-action-btn delete-btn" title="Delete"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg></span>
        </span>`;
      btn.addEventListener("click", (e) => {
        if (e.target.closest(".rename-btn")) { startRename(c.id, btn); return; }
        if (e.target.closest(".delete-btn")) { deleteChat(c.id); return; }
        setActiveChat(c.id);
        closeSidebar();
      });
      g.appendChild(btn);
    });
    DOM.historyEl.appendChild(g);
  });
}

function startRename(id, btnEl) {
  const conv = conversations.find((c) => c.id === id);
  if (!conv) return;
  const titleEl = btnEl.querySelector(".item-title");
  const input = document.createElement("input");
  input.className = "rename-input";
  input.value = conv.title;
  titleEl.replaceWith(input);
  input.focus();
  input.select();
  const finish = () => { const v = input.value.trim() || "New Chat"; renameChat(id, v); };
  input.addEventListener("blur", finish);
  input.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); finish(); } if (e.key === "Escape") renderSidebar(); });
}

function onInputChange() {
  DOM.input.style.height = "auto";
  DOM.input.style.height = Math.min(DOM.input.scrollHeight, 200) + "px";
  const val = DOM.input.value;
  DOM.charCount.textContent = val.length;
  DOM.sendBtn.classList.toggle("active", val.trim().length > 0 || pendingFiles.length > 0);
}

function onKeyDown(e) {
  const behavior = appSettings.sendBehavior || 'enter';
  if (behavior === 'enter') {
    if (e.key === "Enter" && !e.shiftKey) { 
      e.preventDefault(); 
      DOM.form.requestSubmit(); 
    }
  } else {
    if (e.key === "Enter" && e.shiftKey) {
    }
    if (e.key === "Enter" && e.ctrlKey) {
       e.preventDefault();
       DOM.form.requestSubmit();
    }
  }
}

function onDragOver(e) { e.preventDefault(); document.body.style.opacity = "0.7"; }
function onDragLeave(e) { e.preventDefault(); document.body.style.opacity = "1"; }
function onDrop(e) {
  e.preventDefault();
  document.body.style.opacity = "1";
  handleFiles(e.dataTransfer.files);
}

function onFileSelect(e) {
  handleFiles(e.target.files);
}

function onPaste(e) {
  const items = (e.clipboardData || e.originalEvent?.clipboardData).items;
  const files = [];
  for (const item of items) {
    if (item.kind === 'file') {
      const file = item.getAsFile();
      if (file) files.push(file);
    }
  }
  if (files.length > 0) handleFiles(files);
}

function handleFiles(files) {
  Array.from(files || []).forEach(async (f) => {
    const isImage = f.type.startsWith("image/");
    if (isImage) {
      const r = new FileReader();
      r.onload = () => { pendingFiles.push({ type: "image", src: r.result, name: f.name }); renderPreviews(); onInputChange(); };
      r.readAsDataURL(f);
    } else {
      const text = await f.text();
      pendingFiles.push({ type: "text", content: text, name: f.name });
      renderPreviews();
      onInputChange();
    }
  });
  DOM.fileInput.value = "";
}

function renderPreviews() {
  DOM.attachmentPreview.innerHTML = "";
  pendingFiles.forEach((file, i) => {
    const tile = document.createElement("div");
    tile.className = "preview-tile";
    if (file.type === "image") {
      tile.innerHTML = `<img src="${file.src}" alt="${file.name}" title="${file.name}" />`;
      tile.querySelector("img").addEventListener("click", () => openImageViewer(file.src));
    } else {
      const snippet = file.content.split('\n').slice(0, 4).join('\n');
      tile.innerHTML = `<div class="file-chip">
        <div class="file-chip-top">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
          <div class="file-chip-info">
            <span class="file-chip-name" title="${file.name}">${file.name}</span>
          </div>
        </div>
        <div class="file-chip-preview hljs">${snippet}</div>
      </div>`;
      const preview = tile.querySelector('.file-chip-preview');
      preview.removeAttribute('data-highlighted');
      try { hljs.highlightElement(preview); } catch (e) {}
      tile.addEventListener("click", () => openFileDrawer(file.name, file.content));
    }
    tile.innerHTML += `<button type="button" class="preview-remove">x</button>`;
    tile.querySelector(".preview-remove").addEventListener("click", (e) => { e.stopPropagation(); pendingFiles.splice(i, 1); renderPreviews(); onInputChange(); });
    DOM.attachmentPreview.appendChild(tile);
  });
}

function openFileDrawer(name, content) {
  if (!content) return;
  currentFileContent = content;
  
  DOM.drawerName.textContent = name;
  const ext = name.split('.').pop().toUpperCase();
  DOM.drawerType.textContent = (ext === name.toUpperCase() ? 'Code' : ext);
  
  const size = (new TextEncoder().encode(content).length / 1024).toFixed(1);
  DOM.drawerSize.textContent = size + " KB";
  const lines = content.split('\n');
  DOM.drawerLines.textContent = lines.length + " lines";
  
  DOM.drawerSearch.value = "";
  renderCodeWithNumbers(content);

  DOM.drawer.classList.add("active");
  DOM.drawerOverlay.classList.add("active");
}

function renderCodeWithNumbers(content) {
  DOM.drawerCode.innerHTML = "";
  DOM.drawerCode.textContent = content;
  DOM.drawerCode.className = "hljs";
  DOM.drawerCode.removeAttribute('data-highlighted');
  try { hljs.highlightElement(DOM.drawerCode); } catch (e) {}

  const lines = content.split('\n');
  const lineNumbers = lines.map((_, i) => i + 1).join('\n');
  const pre = DOM.drawerCode.parentElement;
  let ln = pre.querySelector('.line-numbers-rows');
  if (!ln) {
    ln = document.createElement('span');
    ln.className = 'line-numbers-rows';
    pre.insertBefore(ln, DOM.drawerCode);
  }
  ln.textContent = lineNumbers;
}

function searchInCode(term) {
  const code = currentFileContent;
  const escapedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(escapedTerm, 'gi');
  
  const highlighted = code.replace(regex, match => `<span class="hljs-search-match">${match}</span>`);
  DOM.drawerCode.innerHTML = highlighted;
}



function closeFileDrawer() {
  DOM.drawer.classList.remove("active");
  DOM.drawerOverlay.classList.remove("active");
}

function openImageViewer(src) {
  DOM.imageViewerImg.src = src;
  DOM.imageViewerDownloadBtn.href = src;
  DOM.imageViewerModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeImageViewer() {
  DOM.imageViewerModal.classList.remove("active");
  document.body.style.overflow = "";
}


async function onSubmit(e) {
  e.preventDefault();
  let text = DOM.input.value.trim();
  if (!text && !pendingFiles.length) return;

  const conv = getActive();
  if (!conv) return;

  let screenshotBase64 = null;
  if (screenShareActive && screenShareStream) {
    try {
      screenshotBase64 = captureScreenshot();
      if (screenshotBase64) {
        pendingFiles.push({ type: "image", src: screenshotBase64, name: "screenshot.png" });
        DOM.screenshareSnapshotLabel.textContent = "Screenshot captured ✓";
        setTimeout(() => { DOM.screenshareSnapshotLabel.textContent = "AI can see your screen"; }, 2000);
      }
    } catch (err) {
      console.error("Screenshot capture error:", err);
    }
  }

  const textFiles = pendingFiles.filter(f => f.type === "text");
  if (textFiles.length > 0) {
    const combinedContext = textFiles.map(f => `File: ${f.name}\n\`\`\`\n${f.content}\n\`\`\``).join("\\n\\n");
    text = (text ? text + "\\n\\n" : "") + "--- File Context Provided ---\\n" + combinedContext;
  }
  
  const images = pendingFiles.filter(f => f.type === "image").map(f => f.src);
  const userMsgText = DOM.input.value.trim() || (pendingFiles.length ? "(Attached files)" : "");

  const userMsg = { role: "user", text: text, displayText: userMsgText, kind: "", attachments: images, fileNames: pendingFiles.map(f=>f.name), ts: Date.now() };
  conv.messages.push(userMsg);
  document.body.classList.add("has-messages");
  
  renderMessage("user", userMsgText, "", userMsg.attachments, false, [], userMsg.fileNames);

  if (conv.messages.length === 1 && userMsgText) {
    conv.title = userMsgText.length > 50 ? userMsgText.slice(0, 47) + "..." : userMsgText;
    DOM.topbarTitle.textContent = conv.title;
  }
  conv.updatedAt = Date.now();
  saveConversations();
  renderSidebar();

  DOM.input.value = "";
  pendingFiles = [];
  DOM.fileInput.value = "";
  DOM.attachmentPreview.innerHTML = "";
  onInputChange();

  const typing = addTypingIndicator(searchEnabled, userMsgText);
  scrollToBottom();

  try {
    const res = await requestChat(text, conv.messages.slice(-(appSettings.contextLimit + 1)), images);
    typing.remove();
    const reply = await res.json();
    const botMsg = { role: "bot", text: reply.text || reply.reply, kind: reply.kind || "safe", attachments: [], ts: Date.now(), sources: reply.sources || [] };
    conv.messages.push(botMsg);
    saveConversations();
    renderMessage("bot", botMsg.text, botMsg.kind, [], true, botMsg.sources);
  } catch {
    typing.remove();
    const fallback = getOfflineReply(text);
    const botMsg = { role: "bot", text: fallback.text, kind: fallback.kind, attachments: [], ts: Date.now(), sources: [] };
    conv.messages.push(botMsg);
    saveConversations();
    renderMessage("bot", botMsg.text, botMsg.kind, [], true, []);
  }
}

async function requestChat(message, history = [], images = []) {
  const endpoints = ["/api/chat"];
  if (window.location.port !== "3000") endpoints.push("http://localhost:3000/api/chat");
  let lastErr;
  
  const customApiKey = localStorage.getItem("IOT_api_key") || null;
  const customSystemPrompt = localStorage.getItem("IOT_system_prompt") || null;

  for (const ep of endpoints) {
    try {
      const r = await fetch(ep, { 
        method: "POST", 
        headers: { 
          "Content-Type": "application/json"
        }, 
        body: JSON.stringify({ 
          message, 
          history, 
          model: DOM.modelSelect.value, 
          sessionId: activeId, 
          search: searchEnabled,
          customApiKey,
          customSystemPrompt,
          temperature: appSettings.temperature,
          searchLimit: appSettings.searchLimit,
          images
        }) 
      });
      if (!r.ok) throw new Error(r.status);
      return r;
    } catch (err) { lastErr = err; }
  }
  throw lastErr;
}

function renderMessage(role, text, kind, attachments, animate, sources, fileNames) {
  const row = document.createElement("div");
  row.className = `msg-row ${role}${kind === "blocked" ? " blocked" : ""}`;
  if (animate && role === "bot") row.classList.add("bot-entrance");

  const avatar = document.createElement("div");
  avatar.className = `msg-avatar ${role === "user" ? "user-av" : "bot-av"}`;
  if (role === "user") {
    avatar.textContent = "Y";
  } else {
    avatar.innerHTML = '<svg width="18" height="18" viewBox="0 0 256 256" fill="none"><path d="M128 38L201 80V166L128 208L55 166V80L128 38Z" stroke="#fff" stroke-width="14" stroke-linejoin="round"/><path d="M128 38V124L201 166" stroke="#fff" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/><path d="M128 124L55 166" stroke="#fff" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }

  const body = document.createElement("div");
  body.className = "msg-body";

  if (sources && sources.length) {
    const label = document.createElement("div");
    label.className = "search-label";
    label.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg> Searched the web';
    body.appendChild(label);
  }

  if (role === "user" && fileNames && fileNames.length) {
    const filesWrap = document.createElement("div");
    filesWrap.className = "message-files-wrap";
    fileNames.forEach(fn => {
      const chip = document.createElement("div");
      chip.className = "message-file-chip";
      chip.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg> ${fn}`;
      filesWrap.appendChild(chip);
    });
    body.appendChild(filesWrap);
  }

  const contentDiv = document.createElement("div");
  if (role === "bot") {
    const nameLabel = document.createElement("div");
    nameLabel.className = "msg-bot-name";
    nameLabel.textContent = "IOT";
    body.appendChild(nameLabel);
  }
  body.appendChild(contentDiv);

  if (animate && role === "bot") {
    let i = 0;
    const speed = 10;
    const chunkSize = 5;
    const type = () => {
      if (i < text.length) {
        contentDiv.innerHTML = parseMarkdown(text.substring(0, i)) + '<span class="typing-cursor"></span>';
        i += chunkSize;
        scrollToBottom();
        setTimeout(type, speed);
      } else {
        contentDiv.innerHTML = parseMarkdown(text);
        processMessageContent(contentDiv);
        if (actionsPanel) actionsPanel.classList.add("visible");
        if (sourcesPanel) sourcesPanel.classList.add("visible");
        scrollToBottom();
      }
    };
    setTimeout(type, 100); 
  } else {
    contentDiv.innerHTML = parseMarkdown(text);
    processMessageContent(contentDiv);
  }

  row.appendChild(avatar);
  row.appendChild(body);

  if (attachments && attachments.length) {
    const wrap = document.createElement("div");
    wrap.className = "message-attachments";
    attachments.forEach((src) => { 
      const img = document.createElement("img"); 
      img.src = src; 
      img.alt = "attachment"; 
      img.addEventListener("click", () => openImageViewer(src));
      wrap.appendChild(img); 
    });
    body.appendChild(wrap);
  }

  if (sources && sources.length) {
    const panel = document.createElement("div");
    panel.className = "search-sources";
    let html = '<div class="search-sources-title">Sources</div>';
    sources.forEach((s, i) => {
      html += '<div class="search-source-item"><span>' + (i+1) + '.</span> <a href="' + escapeHTML(s.url) + '" target="_blank" rel="noopener">' + escapeHTML(s.title || s.url) + '</a></div>';
    });
    panel.innerHTML = html;
    body.appendChild(panel);
    sourcesPanel = panel;
    if (animate && role === "bot") panel.classList.add("delayed-reveal");
  }

  let actionsPanel;
  let sourcesPanel;

  if (role === "bot") {
    const actions = document.createElement("div");
    actions.className = "msg-actions";
    const copyBtn = document.createElement("button");
    copyBtn.className = "msg-action-btn";
    copyBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg> Copy';
    copyBtn.addEventListener("click", async () => {
      try { await navigator.clipboard.writeText(text); copyBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Copied'; setTimeout(() => copyBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg> Copy', 1500); } catch {}
    });
    actions.appendChild(copyBtn);
    body.appendChild(actions);
    actionsPanel = actions;
    if (animate && role === "bot") actions.classList.add("delayed-reveal");

    if (document.body.classList.contains("builder-mode") || document.body.dataset.model === "IOT-creative") {
      const htmlMatch = text.match(/```html\s*([\s\S]*?)```/i);
      const cssMatch = text.match(/```css\s*([\s\S]*?)```/i);
      const jsMatch = text.match(/```(?:javascript|js)\s*([\s\S]*?)```/i);

      let foundCode = false;
      if (htmlMatch) { builderProject.files['index.html'] = htmlMatch[1]; foundCode = true; }
      if (cssMatch)  { builderProject.files['style.css'] = cssMatch[1]; foundCode = true; }
      if (jsMatch)   { builderProject.files['script.js'] = jsMatch[1]; foundCode = true; }

      if (!foundCode) {
        const rawHtml = text.match(/<!DOCTYPE html>[\s\S]*/i) || text.match(/<html[\s\S]*<\/html>/i);
        if (rawHtml) { builderProject.files['index.html'] = rawHtml[0]; foundCode = true; }
      }

      if (foundCode) {
        document.body.classList.add("builder-mode");
        updateBuilder();
        switchBuilderTab('preview');
      }
    }
  }



  DOM.messages.appendChild(row);
  scrollToBottom();
}

function processMessageContent(el) {
  el.querySelectorAll('pre code').forEach((block) => {
    const lang = Array.from(block.classList).find(c => c.startsWith('language-'))?.replace('language-','') || 'code';
    
    if (lang === 'mermaid' && typeof mermaid !== 'undefined') {
      const content = block.textContent;
      const pre = block.parentElement;
      const id = 'mermaid-' + Math.random().toString(36).substr(2, 9);
      const container = document.createElement('div');
      container.className = 'mermaid-container';
      container.innerHTML = `<div class="mermaid" id="${id}">${content}</div>`;
      pre.replaceWith(container);
      try {
        mermaid.init(undefined, container.querySelector('.mermaid'));
      } catch (err) {
        console.error('Mermaid render error:', err);
        container.innerHTML = `<div class="visualization-error">Diagram error: ${err.message}</div>`;
      }
      return;
    }

    if (lang === 'chart' && typeof Chart !== 'undefined') {
      const content = block.textContent;
      const pre = block.parentElement;
      try {
        const config = JSON.parse(content);
        const container = document.createElement('div');
        container.className = 'chart-container';
        container.style.cssText = "position:relative; height:300px; width:100%; margin: 15px 0; background:rgba(0,0,0,0.2); border-radius:8px; padding:15px;";
        const canvas = document.createElement('canvas');
        container.appendChild(canvas);
        pre.replaceWith(container);
        new Chart(canvas, config);
      } catch (err) {
        console.error('Chart.js render error:', err);
      }
      return;
    }

    if (lang === 'map' && typeof L !== 'undefined') {
      const content = block.textContent;
      const pre = block.parentElement;
      try {
        const data = JSON.parse(content);
        const container = document.createElement('div');
        container.className = 'map-container';
        container.style.cssText = "height:350px; width:100%; margin: 15px 0; border-radius:12px; overflow:hidden; z-index:1;";
        pre.replaceWith(container);
        const map = L.map(container).setView(data.center || [0, 0], data.zoom || 2);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);
        if (data.markers) {
          data.markers.forEach(m => L.marker(m.pos || m.coords).addTo(map).bindPopup(m.label || ""));
        }
        if (data.geojson) {
          L.geoJSON(data.geojson).addTo(map);
        }
        setTimeout(() => map.invalidateSize(), 200);
      } catch (err) {
        console.error('Leaflet render error:', err);
      }
      return;
    }

    if (lang === 'timeline') {
      const content = block.textContent;
      const pre = block.parentElement;
      try {
        const items = JSON.parse(content);
        const container = document.createElement('div');
        container.className = 'timeline-viz';
        let html = '<div class="timeline-viz-track">';
        items.forEach(item => {
          html += `<div class="timeline-viz-item">
            <div class="timeline-viz-dot"></div>
            <div class="timeline-viz-content">
              <span class="timeline-viz-date">${item.date || ''}</span>
              <span class="timeline-viz-title">${item.title || ''}</span>
              <p class="timeline-viz-desc">${item.description || ''}</p>
            </div>
          </div>`;
        });
        html += '</div>';
        container.innerHTML = html;
        pre.replaceWith(container);
      } catch (err) {
        console.error('Timeline render error:', err);
      }
      return;
    }

    if (lang === 'table') {
      const content = block.textContent;
      const pre = block.parentElement;
      try {
        const data = JSON.parse(content);
        const container = document.createElement('div');
        container.className = 'table-viz-wrapper';
        let html = '<table class="table-viz"><thead><tr>';
        const keys = Object.keys(data[0] || {});
        keys.forEach(k => html += `<th>${k}</th>`);
        html += '</tr></thead><tbody>';
        data.forEach(row => {
          html += '<tr>';
          keys.forEach(k => html += `<td>${row[k]}</td>`);
          html += '</tr>';
        });
        html += '</tbody></table>';
        container.innerHTML = html;
        pre.replaceWith(container);
      } catch (err) {
        console.error('Table render error:', err);
      }
      return;
    }

    hljs.highlightElement(block);
    const pre = block.parentElement;
    if(!pre.querySelector('.code-actions')) {
       const hdr = document.createElement('div');
       hdr.className = "code-header";
       hdr.innerHTML = `<span>${lang}</span><div class="code-actions">
         <button class="preview-code-btn" onclick="previewCode(this)">Preview</button>
         <button class="copy-code-btn" onclick="copyCode(this)">Copy</button>
       </div>`;
       pre.insertBefore(hdr, block);
    }
  });
}

function addTypingIndicator(isSearching = false, userText = "") {
  const row = document.createElement("div");
  row.className = "typing-indicator";
  const botAvatarSVG = '<svg width="18" height="18" viewBox="0 0 256 256" fill="none"><path d="M128 38L201 80V166L128 208L55 166V80L128 38Z" stroke="#fff" stroke-width="14" stroke-linejoin="round"/><path d="M128 38V124L201 166" stroke="#fff" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/><path d="M128 124L55 166" stroke="#fff" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  if (isSearching) {
    row.innerHTML = `<div class="msg-avatar bot-av">${botAvatarSVG}</div>
      <div class="search-thinking">
        <div class="search-thinking-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
        </div>
        <div class="search-thinking-text">
          <span class="search-status-label">Okay, the user...</span>
          <div class="at-marquee-container">
            <span class="search-status-sources">is asking about "${userText ? (userText.length > 80 ? userText.slice(0, 80) + '...' : userText) : 'this'}". <span class="search-progress-text">Looking through multiple sources...</span></span>
          </div>
        </div>
        <div class="search-spinner"></div>
      </div>`;
    const msgs = ["Searching DuckDuckGo...", "Searching Google...", "Reading pages...", "Extracting content...", "Analyzing sources...", "Generating answer..."];
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % msgs.length;
      const el = row.querySelector(".search-progress-text");
      if (el) el.textContent = msgs[idx];
      else clearInterval(interval);
    }, 2000);
    row._searchInterval = interval;
    const origRemove = row.remove.bind(row);
    row.remove = () => { clearInterval(interval); origRemove(); };
  } else {
    row.innerHTML = `<div class="msg-avatar bot-av">${botAvatarSVG}</div>
      <div class="advanced-thinking">
        <div class="at-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
          </svg>
        </div>
        <div class="at-text">
          <span class="at-title">Okay, the user...</span>
          <div class="at-marquee-container">
            <span class="at-sub">is asking about "${userText ? (userText.length > 80 ? userText.slice(0, 80) + '...' : userText) : 'this'}", let me think about how to respond...</span>
          </div>
        </div>
        <div class="at-spinner"></div>
      </div>`;
  }
  DOM.messages.appendChild(row);
  return row;
}

function scrollToBottom() {
  requestAnimationFrame(() => DOM.messages.scrollTop = DOM.messages.scrollHeight);
}

function parseMarkdown(text) {
  if (!text) return "";
  
  const processedText = text.replace(/\\n/g, "\n");

  if (typeof marked !== 'undefined') {
    return marked.parse(processedText, { breaks: true });
  }

  let html = escapeHTML(processedText);

  html = html.replace(/```(\w*)\s*([\s\S]*?)```/g, (_, lang, code) => {
    const l = lang || "code";
    return `<pre><code class="language-${l}">${code.trim()}</code></pre>`;
  });

  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/^[-*] (.+)$/gm, "<li>$1</li>");
  html = html.replace(/(<li>.*<\/li>)/s, "<ul>$1</ul>");
  html = html.replace(/\n\n+/g, "</p><p>");
  html = "<p>" + html + "</p>";
  html = html.replace(/\n/g, "<br>");
  return html;
}

function escapeHTML(str) {
  const d = document.createElement("div");
  d.textContent = str;
  return d.innerHTML;
}


function exportChat() {
  const conv = getActive();
  if (!conv || !conv.messages.length) return;
  const lines = conv.messages.map((m) => `[${new Date(m.ts).toLocaleString()}] ${m.role.toUpperCase()}: ${m.text}`);
  const blob = new Blob([lines.join("\\n\\n")], { type: "text/plain;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `IOT-${conv.title.replace(/\s+/g, "_")}-${Date.now()}.txt`;
  a.click();
}

function getOfflineReply(text) {
  return { kind: "safe", text: "Offline mode. I'm IOT, your AI assistant! I can help with coding, learning, and debugging." };
}


function applyThemeColor() {
  document.documentElement.style.setProperty('--primary-color', appSettings.themeColor || '#60a5fa');
  document.documentElement.style.setProperty('--primary-rgb', appSettings.themeRgb || '96, 165, 250');
  
  DOM.colorBtns.forEach(btn => {
    btn.classList.toggle("active", btn.style.getPropertyValue('--c').replace(/ /g,'') === (appSettings.themeColor||'').replace(/ /g,'') || (btn.dataset.color==='blue' && !appSettings.themeColor));
  });
}
function initCustomSelect() {

  const customSelect = $("#custom-model-selector");
  const trigger = $("#cms-trigger");
  const options = $$(".cms-option");
  const activeTitle = $("#cms-active-title");
  const activeSub = $("#cms-active-sub");
  const hiddenSelect = $("#model-select");

  if (!customSelect || !trigger) return;

  trigger.addEventListener("click", (e) => {
    e.stopPropagation();
    customSelect.classList.toggle("open");
  });

  options.forEach(opt => {
    opt.addEventListener("click", (e) => {
      e.stopPropagation();
      options.forEach(o => o.classList.remove("active"));
      opt.classList.add("active");
      
      const val = opt.dataset.value;
      activeTitle.textContent = opt.dataset.title;
      activeSub.textContent = opt.dataset.sub;
      
      hiddenSelect.value = val;
      customSelect.classList.remove("open");

      if (val === "IOT-creative") {
        document.body.dataset.model = "IOT-creative";
      } else {
        document.body.classList.remove("builder-mode");
        delete document.body.dataset.model;
      }
    });
  });

  document.addEventListener("click", (e) => {
    if (!customSelect.contains(e.target)) {
      customSelect.classList.remove("open");
    }
  });
}

function switchBuilderTab(tab) {
  const panePreview = document.getElementById('pane-preview');
  const paneCode    = document.getElementById('pane-code');
  const tabPreview  = DOM.mainTabPreview;
  const tabCode     = DOM.mainTabCode;

  if (tab === 'preview') {
    panePreview.classList.remove('hidden');
    paneCode.classList.add('hidden');
    tabPreview.classList.add('active');
    tabCode.classList.remove('active');
    updateBuilderIframe();
  } else {
    paneCode.classList.remove('hidden');
    panePreview.classList.add('hidden');
    tabCode.classList.add('active');
    tabPreview.classList.remove('active');
  }
}

function initBuilderControls() {
  DOM.mainTabPreview?.addEventListener('click', () => switchBuilderTab('preview'));
  DOM.mainTabCode?.addEventListener('click', () => switchBuilderTab('code'));

  DOM.builderRefreshBtn?.addEventListener('click', () => {
    updateBuilderIframe();
    switchBuilderTab('preview');
  });

  DOM.builderDownloadBtn?.addEventListener('click', downloadProject);

  DOM.builderCodeInput?.addEventListener('input', (e) => {
    builderProject.files[builderProject.activeFile] = e.target.value;
    syncHighlight(e.target.value);
  });

  DOM.builderCodeInput?.addEventListener('scroll', (e) => {
    const pre = DOM.builderCodeContent?.parentElement;
    if (pre) {
      pre.scrollTop  = e.target.scrollTop;
      pre.scrollLeft = e.target.scrollLeft;
    }
  });

  DOM.deviceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      DOM.deviceBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (DOM.iframeContainer) {
        DOM.iframeContainer.className = `iframe-container ${btn.dataset.device}`;
      }
    });
  });
}

function syncHighlight(code) {
  if (!DOM.builderCodeContent) return;
  DOM.builderCodeContent.textContent = code;
  DOM.builderCodeContent.removeAttribute('data-highlighted');
  try { hljs.highlightElement(DOM.builderCodeContent); } catch (e) {}
}

function updateBuilderIframe() {
  if (!DOM.builderIframe) return;
  let html = builderProject.files['index.html'] || '';
  if (!html.trim()) return;

  Object.keys(builderProject.files).filter(f => f.endsWith('.css')).forEach(f => {
    const css = builderProject.files[f];
    if (!css) return;
    const linkRx = new RegExp(`<link[^>]*${f.replace('.', '\\.')}[^>]*>`, 'i');
    if (linkRx.test(html)) {
      html = html.replace(linkRx, `<style>${css}</style>`);
    } else {
      html = html.includes('</head>')
        ? html.replace('</head>', `<style>${css}</style></head>`)
        : html + `<style>${css}</style>`;
    }
  });

  Object.keys(builderProject.files).filter(f => f.endsWith('.js')).forEach(f => {
    const js = builderProject.files[f];
    if (!js) return;
    const scriptRx = new RegExp(`<script[^>]*${f.replace('.', '\\.')}[^>]*></script>`, 'i');
    if (scriptRx.test(html)) {
      html = html.replace(scriptRx, `<script>${js}<\/script>`);
    } else {
      html = html.includes('</body>')
        ? html.replace('</body>', `<script>${js}<\/script></body>`)
        : html + `<script>${js}<\/script>`;
    }
  });

  DOM.builderIframe.srcdoc = html;
}

function downloadProject() {
    const html = builderProject.files['index.html'];
    const css = builderProject.files['style.css'];
    const js = builderProject.files['script.js'];
    
    let combined = html;
    if (css) combined = combined.replace('</head>', `<style>${css}</style></head>`);
    if (js) combined = combined.replace('</body>', `<script>${js}</script></body>`);
    
    const blob = new Blob([combined], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `IOT-project-${Date.now()}.html`;
    a.click();
    URL.revokeObjectURL(url);
}

function updateBuilder() {
  if (!DOM.builderFileList) return;

  DOM.builderFileList.innerHTML = '';
  Object.keys(builderProject.files).forEach(filename => {
    const hasContent = !!builderProject.files[filename];
    if (!hasContent && filename !== 'index.html') return;

    const item = document.createElement('div');
    item.className = `builder-file-item${builderProject.activeFile === filename ? ' active' : ''}`;

    let iconColor = '#9ca3af';
    if (filename.endsWith('.js'))   iconColor = '#facc15';
    if (filename.endsWith('.css'))  iconColor = '#60a5fa';
    if (filename.endsWith('.html')) iconColor = '#fb923c';

    item.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="${iconColor}" stroke-width="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>
      <span>${filename}</span>`;

    item.addEventListener('click', () => {
      builderProject.activeFile = filename;
      switchBuilderTab('code');
      updateBuilder();
    });

    DOM.builderFileList.appendChild(item);
  });

  const code = builderProject.files[builderProject.activeFile] || '';
  if (DOM.builderCodeInput)    DOM.builderCodeInput.value = code;
  if (DOM.builderFilenameDisplay) DOM.builderFilenameDisplay.textContent = builderProject.activeFile;
  syncHighlight(code);

  updateBuilderIframe();
}

function initSettingsAndDocs() {
  // Background animation grid
  const bgAnimGrid = document.getElementById('bg-anim-grid');
  if (bgAnimGrid) {
    bgAnimGrid.querySelectorAll('.bg-anim-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        bgAnimGrid.querySelectorAll('.bg-anim-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        appSettings.bgAnimation = btn.dataset.anim;
        initBgAnimation(btn.dataset.anim);
        localStorage.setItem('IOT_app_settings', JSON.stringify(appSettings));
      });
    });
  }

  // Logo color grid
  const logoColorGrid = document.getElementById('logo-color-grid');
  if (logoColorGrid) {
    logoColorGrid.querySelectorAll('.color-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        logoColorGrid.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        appSettings.logoColor = btn.dataset.color;
        applyLogoColor(btn.dataset.color);
        localStorage.setItem('IOT_app_settings', JSON.stringify(appSettings));
      });
    });
  }

  // Logo skin grid
  const logoSkinGrid = document.getElementById('logo-skin-grid');
  if (logoSkinGrid) {
    logoSkinGrid.querySelectorAll('.bg-anim-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        logoSkinGrid.querySelectorAll('.bg-anim-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        appSettings.logoSkin = btn.dataset.skin;
        initLogoSkin(btn.dataset.skin);
        localStorage.setItem('IOT_app_settings', JSON.stringify(appSettings));
      });
    });
  }

  if (!DOM.settingsModal) return;

  loadSettings();

  DOM.fontSizeSlider.addEventListener("input", (e) => {
    appSettings.fontSize = parseInt(e.target.value);
    applyTheme();
    localStorage.setItem("IOT_app_settings", JSON.stringify(appSettings));
  });
  
  DOM.animToggle.addEventListener("change", (e) => {
    appSettings.animations = e.target.checked;
    applyTheme();
    localStorage.setItem("IOT_app_settings", JSON.stringify(appSettings));
  });
  
  DOM.contrastToggle.addEventListener("change", (e) => {
    appSettings.highContrast = e.target.checked;
    applyTheme();
    localStorage.setItem("IOT_app_settings", JSON.stringify(appSettings));
  });
  
  DOM.resetSettingsBtn?.addEventListener("click", () => {
    if (confirm("Are you sure you want to reset all settings to their defaults?")) {
      localStorage.removeItem("IOT_settings_v3");
      window.location.reload();
    }
  });

  DOM.deleteDataBtn?.addEventListener("click", () => {
    if (confirm("WARNING: This will permanently delete ALL chats, files, and settings. Are you sure?")) {
      localStorage.removeItem("IOT_conversations_v3");
      localStorage.removeItem("IOT_settings_v3");
      window.location.reload();
    }
  });

  DOM.settingsCloseBtn.addEventListener("click", () => DOM.settingsModal.classList.remove("active"));
  DOM.docsCloseBtn.addEventListener("click", () => DOM.docsModal.classList.remove("active"));
  
  DOM.settingsModal.addEventListener("click", (e) => {
    if (e.target === DOM.settingsModal) DOM.settingsModal.classList.remove("active");
  });
  DOM.docsModal.addEventListener("click", (e) => {
    if (e.target === DOM.docsModal) DOM.docsModal.classList.remove("active");
  });  
  DOM.settingsNavBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      DOM.settingsNavBtns.forEach(b => b.classList.remove("active"));
      DOM.settingsPanes.forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      const target = btn.dataset.tab;
      document.getElementById(target).classList.add("active");
      DOM.settingsTitleDisplay.textContent = btn.querySelector('span').textContent;
    });
  });

  DOM.themeCards.forEach(card => {
    card.addEventListener('click', () => {
      DOM.themeCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      appSettings.theme = card.dataset.theme;
      applyTheme();
      localStorage.setItem("IOT_app_settings", JSON.stringify(appSettings));
    });
  });

  DOM.resetSettingsBtn.addEventListener('click', () => {
    if (confirm("Reset all settings to default?")) {
      localStorage.removeItem("IOT_app_settings");
      location.reload();
    }
  });

  DOM.deleteDataBtn.addEventListener('click', () => {
    if (confirm("DANGER: This will delete ALL your conversations and settings. Continue?")) {
      localStorage.clear();
      location.reload();
    }
  });

  DOM.settingsSaveBtn.addEventListener("click", () => {
    saveSettings();
    const oldText = DOM.settingsSaveBtn.textContent;
    DOM.settingsSaveBtn.textContent = "Applied!";
    setTimeout(() => {
      DOM.settingsSaveBtn.textContent = oldText;
      DOM.settingsModal.classList.remove("active");
    }, 1000);
  });
}

function applyTheme() {
  document.body.classList.remove('theme-light', 'theme-matrix', 'theme-contrast');
  if (appSettings.theme !== 'dark') {
    document.body.classList.add(`theme-${appSettings.theme}`);
  }
  if (appSettings.highContrast) {
    document.body.classList.add('theme-contrast');
  }
  document.documentElement.style.setProperty('--fs-chat', `${appSettings.fontSize}px`);
  if (!appSettings.animations) {
    document.body.classList.add('no-animations');
  } else {
    document.body.classList.remove('no-animations');
  }
  document.body.setAttribute('data-bubble-style', appSettings.chatBubbleStyle || 'rounded');
}

function saveSettings() {
  const prompt = DOM.systemPromptInput.value.trim();
  
  if (prompt) localStorage.setItem("IOT_system_prompt", prompt);
  else localStorage.removeItem("IOT_system_prompt");

  appSettings.fontSize = parseInt(DOM.fontSizeSlider.value);
  appSettings.animations = DOM.animToggle.checked;
  appSettings.temperature = parseInt(DOM.tempSlider.value);
  appSettings.contextLimit = parseInt(DOM.contextLimit.value);
  appSettings.searchLimit = parseInt(DOM.searchLimit.value);
  appSettings.highContrast = DOM.contrastToggle.checked;
  appSettings.sendBehavior = DOM.sendBehavior.value;
  appSettings.chatBubbleStyle = DOM.chatBubbleStyle.value;
  appSettings.soundEffects = DOM.soundToggle.checked;
  appSettings.autoSaveHistory = DOM.autosaveToggle.checked;
  // bgAnimation is already saved per-click in the grid handler

  localStorage.setItem("IOT_app_settings", JSON.stringify(appSettings));
  applyTheme();
}

function loadSettings() {
  const savedPrompt = localStorage.getItem("IOT_system_prompt");
  const savedSettings = localStorage.getItem("IOT_app_settings");

  if (savedPrompt) DOM.systemPromptInput.value = savedPrompt;

  if (savedSettings) {
    const parsed = JSON.parse(savedSettings);
    appSettings = { ...appSettings, ...parsed };
    
    DOM.themeCards.forEach(c => {
      c.classList.toggle('active', c.dataset.theme === appSettings.theme);
    });
    DOM.fontSizeSlider.value = appSettings.fontSize;
    DOM.animToggle.checked = appSettings.animations;
    DOM.tempSlider.value = appSettings.temperature;
    DOM.contextLimit.value = appSettings.contextLimit;
    DOM.searchLimit.value = appSettings.searchLimit;
    DOM.contrastToggle.checked = appSettings.highContrast;
    DOM.sendBehavior.value = appSettings.sendBehavior;
    DOM.chatBubbleStyle.value = appSettings.chatBubbleStyle;
    DOM.soundToggle.checked = appSettings.soundEffects;
    DOM.autosaveToggle.checked = appSettings.autoSaveHistory;

    // Restore bg animation selection
    if (appSettings.bgAnimation) {
      const bgAnimGrid = document.getElementById('bg-anim-grid');
      if (bgAnimGrid) {
        bgAnimGrid.querySelectorAll('.bg-anim-btn').forEach(b => {
          b.classList.toggle('active', b.dataset.anim === appSettings.bgAnimation);
        });
      }
      initBgAnimation(appSettings.bgAnimation);
    }

    // Restore logo color
    if (appSettings.logoColor) {
      const logoColorGrid = document.getElementById('logo-color-grid');
      if (logoColorGrid) {
        logoColorGrid.querySelectorAll('.color-btn').forEach(b => {
          b.classList.toggle('active', b.dataset.color === appSettings.logoColor);
        });
      }
      applyLogoColor(appSettings.logoColor);
    }

    // Restore logo skin
    if (appSettings.logoSkin) {
      const logoSkinGrid = document.getElementById('logo-skin-grid');
      if (logoSkinGrid) {
        logoSkinGrid.querySelectorAll('.bg-anim-btn').forEach(b => {
          b.classList.toggle('active', b.dataset.skin === appSettings.logoSkin);
        });
      }
      initLogoSkin(appSettings.logoSkin);
    }
    
    applyTheme();
    applyThemeColor();
  }
}


function updateFilesGrid() {
  if (!DOM.filesGrid) return;
  DOM.filesGrid.innerHTML = '';
  Object.keys(builderProject.files).forEach(filename => {
    if (!builderProject.files[filename] && filename !== 'index.html') return;
    
    const ext = filename.split('.').pop();
    let iconPath = '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>';
    
    const card = document.createElement('div');
    card.className = 'file-card';
    card.innerHTML = '<div class="file-card-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' + iconPath + '</svg></div><div class="file-card-info" style="text-align:center;"><div class="file-card-name">' + filename + '</div><div class="file-card-type">' + ext.toUpperCase() + ' File</div></div>';
    
    card.addEventListener('click', () => {
      builderProject.activeFile = filename;
      DOM.builderCodeTab.click();
      updateBuilder();
    });
    
    DOM.filesGrid.appendChild(card);
  });
}

function initOsint() {
  const searchInput = document.getElementById("dox-search-input");
  const searchBtn = document.getElementById("dox-search-btn");
  const chatFeed = document.getElementById("dox-chat-feed");
  const clearBtn = document.getElementById("dox-clear-btn");
  const hero = document.getElementById("dox-hero");

  DOM.spyOsintBtn?.addEventListener("click", () => {
    if (document.body.classList.contains("osint-mode")) {
      exitOsintMode();
    } else {
      enterOsintMode();
    }
  });

  document.querySelectorAll(".dox-chip[data-query]").forEach(chip => {
    chip.addEventListener("click", () => {
      const type = chip.dataset.query;
      const hints = {
        email: "Enter an email address...",
        username: "Enter a username...",
        phone: "Enter a phone number...",
        name: "Enter a full name...",
        ip: "Enter an IP address..."
      };
      if (searchInput) {
        searchInput.placeholder = hints[type] || "Search databreaches...";
        searchInput.focus();
      }
    });
  });

  searchBtn?.addEventListener("click", () => doxSubmit());

  searchInput?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") doxSubmit();
  });

  clearBtn?.addEventListener("click", () => {
    if (chatFeed) chatFeed.innerHTML = "";
    if (hero) { hero.style.display = ""; hero.style.opacity = "1"; }
    document.body.classList.remove("osint-searching");
  });

  async function doxSubmit() {
    if (!searchInput) return;
    const query = searchInput.value.trim();
    if (!query) return;

    if (hero && hero.style.display !== "none") {
      hero.style.opacity = "0";
      setTimeout(() => { hero.style.display = "none"; }, 300);
    }
    document.body.classList.add("osint-searching");

    addDoxMessage("user", query);
    searchInput.value = "";
    searchInput.placeholder = "Search databreaches...";

    const thinkingEl = addDoxThinking();

    searchInput.disabled = true;
    searchBtn.disabled = true;

    try {
      const customApiKey = localStorage.getItem("IOT_api_key") || null;
      const res = await fetch("/api/dox", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, customApiKey })
      });

      const data = await res.json();

      thinkingEl?.remove();

      if (data.response) {
        addDoxMessage("assistant", data.response);
      } else if (data.error) {
        addDoxMessage("assistant", `**Error:** ${data.error}`);
      } else {
        addDoxMessage("assistant", "No results found. Try a different search term.");
      }
    } catch (err) {
      thinkingEl?.remove();
      addDoxMessage("assistant", "**Connection error.** Failed to reach the DOX engine. Please try again.");
    } finally {
      searchInput.disabled = false;
      searchBtn.disabled = false;
      searchInput.focus();
    }
  }

  function addDoxMessage(role, content) {
    if (!chatFeed) return;

    const msg = document.createElement("div");
    msg.className = `dox-msg dox-msg-${role}`;

    if (role === "user") {
      msg.innerHTML = `<div class="dox-msg-bubble dox-user-bubble">${escapeHTML(content)}</div>`;
    } else {
      const formatted = parseMarkdown(content);
      msg.innerHTML = `
        <div class="dox-msg-label">zasender</div>
        <div class="dox-msg-bubble dox-ai-bubble">${formatted}</div>
      `;
    }

    chatFeed.appendChild(msg);
    msg.scrollIntoView({ behavior: "smooth", block: "end" });
    return msg;
  }

  function addDoxThinking() {
    if (!chatFeed) return null;

    const msg = document.createElement("div");
    msg.className = "dox-msg dox-msg-assistant";
    msg.innerHTML = `
      <div class="dox-thinking">
        <div class="dox-thinking-dots">
          <span></span><span></span><span></span>
        </div>
        <span>Searching databases...</span>
      </div>
    `;
    chatFeed.appendChild(msg);
    msg.scrollIntoView({ behavior: "smooth", block: "end" });
    return msg;
  }
}

function enterOsintMode() {
  document.body.classList.add("osint-mode");
  DOM.spyOsintBtn?.classList.add("active");
  DOM.topbarTitle.textContent = "IOT DOX";
  document.querySelectorAll(".history-item").forEach(i => i.classList.remove("active"));
  setTimeout(() => document.getElementById("dox-search-input")?.focus(), 100);
}

function exitOsintMode() {
  document.body.classList.remove("osint-mode");
  document.body.classList.remove("osint-searching");
  DOM.spyOsintBtn?.classList.remove("active");
}
