import sys
import re

with open('app.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add color variables to appSettings default
if 'themeColor: ' not in content:
    content = content.replace("theme: 'dark',", "theme: 'dark',\n  themeColor: '#60a5fa',\n  themeRgb: '96,165,250',")

# 2. Add DOM elements for color buttons and files view
content = content.replace('animToggle: #anim-toggle,', 'animToggle: #anim-toggle,\n  colorBtns: (".color-btn"),')
content = content.replace('builderFilesTab: #builder-files-tab,', 'builderFilesTab: #builder-files-tab,\n  builderFilesView: #builder-files-view,\n  filesGrid: #files-grid,')

# 3. Add Settings listener for color buttons
settings_init = '''
  DOM.colorBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      DOM.colorBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      appSettings.themeColor = btn.dataset.color === 'blue' ? '#60a5fa' : btn.style.getPropertyValue('--c').trim();
      appSettings.themeRgb = btn.dataset.rgb;
      applyThemeColor();
    });
  });
  applyThemeColor();
'''
# I need to insert this into initSettingsAndDocs() if it exists.
# Wait, let's just append it to the init function or create a function.
content = content.replace('function initCustomSelect() {', '''
function applyThemeColor() {
  document.documentElement.style.setProperty('--primary-color', appSettings.themeColor || '#60a5fa');
  document.documentElement.style.setProperty('--primary-rgb', appSettings.themeRgb || '96, 165, 250');
  
  DOM.colorBtns.forEach(btn => {
    btn.classList.toggle("active", btn.style.getPropertyValue('--c').replace(/ /g,'') === (appSettings.themeColor||'').replace(/ /g,'') || (btn.dataset.color==='blue' && !appSettings.themeColor));
  });
}
function initCustomSelect() {
''')

content = content.replace('initSettingsAndDocs();', 'initSettingsAndDocs();\\n  applyThemeColor();\\n')
# Also add the event listener to initSettingsAndDocs if I can find it, otherwise just at the end of init.
content = content.replace('DOM.docsBtn?.addEventListener("click", () => DOM.docsModal?.classList.add("active"));', '''
  DOM.docsBtn?.addEventListener("click", () => DOM.docsModal?.classList.add("active"));
  DOM.colorBtns?.forEach(btn => {
    btn.addEventListener("click", () => {
      DOM.colorBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      appSettings.themeColor = btn.style.getPropertyValue('--c').trim();
      appSettings.themeRgb = btn.dataset.rgb;
      applyThemeColor();
      // Assume saveSettings() is called later
    });
  });
''')

# 4. Update Files Tab Logic
files_tab_old = '''  DOM.builderFilesTab.addEventListener("click", () => {
    DOM.builderFilesTab.classList.toggle("active");
    DOM.builderSidebar.classList.toggle("collapsed");
  });'''
  
files_tab_new = '''  DOM.builderFilesTab.addEventListener("click", () => {
    DOM.builderFilesTab.classList.add("active");
    DOM.builderPreviewTab.classList.remove("active");
    DOM.builderCodeTab.classList.remove("active");
    if(DOM.builderFilesView) DOM.builderFilesView.classList.add("active");
    DOM.builderPreviewView.classList.remove("active");
    DOM.builderCodeView.classList.remove("active");
    updateFilesGrid();
  });'''
content = content.replace(files_tab_old, files_tab_new)

# Update Preview/Code tab logic to remove files view active
content = content.replace('DOM.builderPreviewView.classList.add("active");', 'DOM.builderPreviewView.classList.add("active");\\n    if(DOM.builderFilesView) DOM.builderFilesView.classList.remove("active");')
content = content.replace('DOM.builderCodeView.classList.add("active");', 'DOM.builderCodeView.classList.add("active");\\n    if(DOM.builderFilesView) DOM.builderFilesView.classList.remove("active");')

# 5. function updateFilesGrid()
files_grid_func = '''
function updateFilesGrid() {
  if (!DOM.filesGrid) return;
  DOM.filesGrid.innerHTML = '';
  Object.keys(builderProject.files).forEach(filename => {
    if (!builderProject.files[filename] && filename !== 'index.html') return;
    
    const ext = filename.split('.').pop();
    const isHtml = ext === 'html';
    const isCss = ext === 'css';
    const isJs = ext === 'js';
    
    let iconPath = '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>';
    
    const card = document.createElement('div');
    card.className = 'file-card';
    card.innerHTML = 
      <div class="file-card-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"></svg>
      </div>
      <div class="file-card-info" style="text-align:center;">
        <div class="file-card-name"></div>
        <div class="file-card-type"> File</div>
      </div>
    ;
    
    card.addEventListener('click', () => {
      builderProject.activeFile = filename;
      DOM.builderCodeTab.click();
      updateBuilder();
    });
    
    DOM.filesGrid.appendChild(card);
  });
}
'''
content = content + "\\n" + files_grid_func

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(content)
