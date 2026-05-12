import re

with open('styles.css', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the duplicate builder-tabs issue
# We want .builder-tabs to have a background
content = content.replace(
    '.builder-tabs { display: flex; gap: 8px; }',
    '.builder-tabs { display: flex; gap: 8px; background: rgba(0,0,0,0.2); padding: 4px; border-radius: 8px; }'
)

# And builder-tab active box shadow
content = content.replace(
    '.builder-tab.active { color: #fff; background: rgba(255,255,255,0.1); }',
    '.builder-tab.active { color: #fff; background: rgba(255,255,255,0.15); box-shadow: 0 2px 8px rgba(0,0,0,0.2); }'
)

# Fix the file card background
content = content.replace(
    '.file-card {\n  background: var(--panel-bg);',
    '.file-card {\n  background: rgba(255, 255, 255, 0.03);'
)

# Ensure builder-file-item has a normal background initially
content = content.replace(
    '.builder-file-item { display: flex; align-items: center; gap: 10px; padding: 8px 12px; border-radius: 6px; font-size: 0.85rem; font-weight: 500; color: var(--text-muted); cursor: pointer; transition: all 0.2s ease; border-left: 3px solid transparent; }',
    '.builder-file-item { display: flex; align-items: center; gap: 10px; padding: 8px 12px; border-radius: 6px; font-size: 0.85rem; font-weight: 500; color: var(--text-muted); background: rgba(255, 255, 255, 0.02); cursor: pointer; transition: all 0.2s ease; border-left: 3px solid transparent; }'
)

# Files view normal background
content = content.replace(
    '.files-view {\n  flex-direction: row;\n  background: var(--bg-chat);\n  width: 100%;\n  height: 100%;\n}',
    '.files-view {\n  flex-direction: row;\n  background: var(--bg-chat);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  inset: 0;\n}'
)

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(content)
