import re

with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# We need to replace the builder-mode section
start_marker = "/* ===== WEBSITE BUILDER UPDATES ===== */"
end_marker = "/* ===== FILES VIEW ===== */"

if start_marker in css:
    before = css.split(start_marker)[0]
    after = css.split(end_marker)[1] if end_marker in css else ""
    
    new_css = """/* ===== WEBSITE BUILDER UPDATES (IDE MODE) ===== */
.builder-panel { display: none; width: 50%; border-left: 1px solid var(--panel-border); background: #0f111a; flex-direction: column; overflow: hidden; z-index: 50; }
body.builder-mode .builder-panel { display: flex; }
body.builder-mode .chat-area { width: 50%; max-width: 50%; }

/* Navbar */
.builder-navbar { height: 48px; border-bottom: 1px solid var(--panel-border); display: flex; align-items: center; justify-content: space-between; padding: 0 12px; background: #1a1d27; flex-shrink: 0; }
.builder-nav-controls, .builder-nav-actions { display: flex; gap: 8px; align-items: center; }
.nav-btn { width: 32px; height: 32px; border-radius: 6px; border: none; background: transparent; color: var(--text-muted); cursor: pointer; display: grid; place-items: center; transition: all 0.2s; }
.nav-btn:hover { background: rgba(255,255,255,0.08); color: #fff; }

.builder-address-bar { display: flex; align-items: center; gap: 8px; background: rgba(0,0,0,0.3); padding: 6px 12px; border-radius: 6px; font-size: 0.8rem; color: var(--text-muted); border: 1px solid rgba(255,255,255,0.05); min-width: 250px; justify-content: center; }
.builder-address-bar span { color: #fff; opacity: 0.8; }
#builder-url-path { opacity: 1; font-weight: 500; }

/* Body */
.builder-body { display: flex; flex: 1; overflow: hidden; }

/* Sidebar */
.builder-sidebar { width: 200px; border-right: 1px solid var(--panel-border); background: #161925; display: flex; flex-direction: column; flex-shrink: 0; }
.sidebar-section-title { padding: 12px 16px 8px; font-size: 0.75rem; font-weight: 600; color: var(--text-muted); letter-spacing: 0.5px; }
.builder-file-list { padding: 8px; display: flex; flex-direction: column; gap: 2px; }
.builder-file-item { display: flex; align-items: center; gap: 8px; padding: 6px 10px; border-radius: 6px; font-size: 0.85rem; font-weight: 500; color: var(--text-muted); background: transparent; cursor: pointer; transition: all 0.2s; }
.builder-file-item:hover { background: rgba(255,255,255,0.05); color: var(--text-main); }
.builder-file-item.active { background: rgba(96, 165, 250, 0.15); color: #60a5fa; }

/* Main Area */
.builder-main { flex: 1; display: flex; flex-direction: column; overflow: hidden; background: #0f111a; }

/* Editor Header */
.builder-editor-header { height: 44px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--panel-border); background: #1a1d27; padding-right: 12px; }
.editor-tabs { display: flex; height: 100%; }
.editor-tab { display: flex; align-items: center; gap: 8px; padding: 0 16px; font-size: 0.85rem; color: var(--text-muted); cursor: pointer; transition: all 0.2s; border-right: 1px solid var(--panel-border); border-top: 2px solid transparent; }
.editor-tab:hover { background: rgba(255,255,255,0.03); color: var(--text-main); }
.editor-tab.active { background: #0f111a; color: #fff; border-top-color: #60a5fa; }

/* Device Toggles */
.builder-devices { display: flex; gap: 4px; }

/* Content Area */
.builder-content-area { flex: 1; position: relative; overflow: hidden; }
.builder-view { position: absolute; inset: 0; display: none; overflow: auto; }
.builder-view.active { display: flex; }

/* Code View */
.code-view { background: #0f111a; padding: 0; }
.code-view pre { margin: 0; padding: 20px; min-height: 100%; font-family: 'JetBrains Mono', monospace; font-size: 0.9rem; line-height: 1.5; color: #d4d4d4; }
.code-view code.hljs { background: transparent; padding: 0; }

/* Preview View */
.preview-view { align-items: center; justify-content: center; background: radial-gradient(circle at center, #1a1d27 0%, #0f111a 100%); padding: 20px; }
.iframe-container { background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.3); transition: all 0.3s cubic-bezier(0.2,0.8,0.2,1); margin: 0 auto; display: flex; flex-direction: column; width: 100%; height: 100%; border: 1px solid rgba(255,255,255,0.1); }
.iframe-container iframe { width: 100%; height: 100%; border: none; flex: 1; background: #fff; }
.iframe-container.tablet { width: 768px; height: 1024px; max-height: 100%; border-radius: 12px; }
.iframe-container.mobile { width: 375px; height: 812px; max-height: 100%; border-radius: 24px; border: 8px solid #333; }

/* Scrollbars */
.builder-sidebar::-webkit-scrollbar, .code-view::-webkit-scrollbar { width: 8px; height: 8px; }
.builder-sidebar::-webkit-scrollbar-track, .code-view::-webkit-scrollbar-track { background: transparent; }
.builder-sidebar::-webkit-scrollbar-thumb, .code-view::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 4px; }
.builder-sidebar::-webkit-scrollbar-thumb:hover, .code-view::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }

/* Remove old files view styles */
.files-view { display: none !important; }
"""
    
    with open('styles.css', 'w', encoding='utf-8') as f:
        f.write(before + start_marker + "\n" + new_css + "\n" + end_marker + after)

