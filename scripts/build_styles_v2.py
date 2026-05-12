import re

with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Replace the builder-navbar with the new layout styles
new_navbar_css = """/* Navbar */
.builder-navbar { height: 48px; border-bottom: 1px solid var(--panel-border); display: flex; align-items: center; justify-content: space-between; padding: 0 12px; background: #1a1d27; flex-shrink: 0; }
.builder-nav-controls, .builder-nav-actions { display: flex; gap: 8px; align-items: center; }
.nav-btn { width: 32px; height: 32px; border-radius: 6px; border: none; background: transparent; color: var(--text-muted); cursor: pointer; display: grid; place-items: center; transition: all 0.2s; }
.nav-btn:hover { background: rgba(255,255,255,0.08); color: #fff; }

.main-tabs { display: flex; background: rgba(0,0,0,0.3); border-radius: 6px; padding: 4px; margin-left: 8px; }
.main-tab { padding: 4px 16px; border-radius: 4px; border: none; background: transparent; color: var(--text-muted); font-size: 0.85rem; font-weight: 500; cursor: pointer; transition: all 0.2s; }
.main-tab:hover { color: #fff; }
.main-tab.active { background: #333642; color: #fff; box-shadow: 0 1px 3px rgba(0,0,0,0.3); }

.builder-address-bar { display: flex; align-items: center; gap: 8px; background: rgba(0,0,0,0.3); padding: 6px 12px; border-radius: 6px; font-size: 0.8rem; color: var(--text-muted); border: 1px solid rgba(255,255,255,0.05); min-width: 250px; justify-content: center; }
.builder-address-bar span { color: #fff; opacity: 0.8; }
#builder-url-path { opacity: 1; font-weight: 500; }"""

css = re.sub(r'/\* Navbar \*/.*?/\* Body \*/', new_navbar_css + '\n\n/* Body */', css, flags=re.DOTALL)

# Add textarea overlay styles
overlay_css = """/* Code View */
.code-view { background: #0f111a; padding: 0; }
.code-editor-container { position: relative; width: 100%; height: 100%; overflow: hidden; background: #0f111a; }
#builder-code-input, #builder-code-content { margin: 0; padding: 20px; border: none; width: 100%; height: 100%; font-family: 'JetBrains Mono', monospace; font-size: 0.9rem; line-height: 1.5; outline: none; white-space: pre; tab-size: 2; overflow: auto; box-sizing: border-box; }
#builder-code-input { position: absolute; inset: 0; background: transparent; color: transparent; caret-color: #fff; z-index: 2; resize: none; overflow: auto; }
#builder-code-content { position: absolute; inset: 0; z-index: 1; pointer-events: none; overflow: hidden; color: #d4d4d4; }
.code-view code.hljs { background: transparent; padding: 0; display: inline; }"""

css = re.sub(r'/\* Code View \*/.*?/\* Preview View \*/', overlay_css + '\n\n/* Preview View */', css, flags=re.DOTALL)

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

