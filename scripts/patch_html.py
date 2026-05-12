import sys

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

color_html = '''
          <div class="setting-group">
            <label class="settings-label">Button Color</label>
            <div class="color-grid" id="color-grid">
              <button class="color-btn active" data-color="blue" style="--c: #60a5fa" data-rgb="96,165,250" title="Blue"></button>
              <button class="color-btn" data-color="purple" style="--c: #a855f7" data-rgb="168,85,247" title="Purple"></button>
              <button class="color-btn" data-color="green" style="--c: #22c55e" data-rgb="34,197,94" title="Green"></button>
              <button class="color-btn" data-color="violet" style="--c: #8b5cf6" data-rgb="139,92,246" title="Violet"></button>
              <button class="color-btn" data-color="red" style="--c: #ef4444" data-rgb="239,68,68" title="Red"></button>
              <button class="color-btn" data-color="orange" style="--c: #f97316" data-rgb="249,115,22" title="Orange"></button>
              <button class="color-btn" data-color="pink" style="--c: #ec4899" data-rgb="236,72,153" title="Pink"></button>
              <button class="color-btn" data-color="teal" style="--c: #14b8a6" data-rgb="20,184,166" title="Teal"></button>
            </div>
          </div>
'''
content = content.replace('<div class="setting-group">\n            <label class="settings-label">Interface Theme</label>', color_html + '\n          <div class="setting-group">\n            <label class="settings-label">Interface Theme</label>')

files_view = '''
          <div class="builder-view files-view" id="builder-files-view">
            <div class="files-view-sidebar">
              <div class="files-view-title">Project Map</div>
              <div class="files-view-tree">
                <div class="tree-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg> src</div>
                <div class="tree-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg> public</div>
                <div class="tree-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg> assets</div>
              </div>
            </div>
            <div class="files-view-main">
              <div class="files-grid-header">All Files</div>
              <div class="files-grid" id="files-grid">
                <!-- Dynamically populated -->
              </div>
            </div>
          </div>
'''
content = content.replace('<div class="builder-view code-view" id="builder-code-view">', files_view + '\n          <div class="builder-view code-view" id="builder-code-view">')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
