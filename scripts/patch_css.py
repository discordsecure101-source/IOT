with open('styles.css', 'a', encoding='utf-8') as f:
    f.write('''

/* ===== FILES VIEW ===== */
.files-view {
  flex-direction: row;
  background: var(--bg-chat);
  width: 100%;
  height: 100%;
}
.files-view-sidebar {
  width: 200px;
  border-right: 1px solid var(--panel-border);
  display: flex;
  flex-direction: column;
  background: rgba(0,0,0,0.1);
}
.files-view-title {
  padding: 16px 20px;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid var(--panel-border);
}
.files-view-tree {
  padding: 12px;
  flex: 1;
  overflow-y: auto;
}
.tree-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 6px;
  color: var(--text-muted);
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s;
}
.tree-item:hover {
  background: rgba(255,255,255,0.05);
  color: var(--text-main);
}
.tree-item svg {
  opacity: 0.7;
}
.files-view-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 24px;
  overflow-y: auto;
}
.files-grid-header {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-main);
  margin-bottom: 20px;
}
.files-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 16px;
}
.file-card {
  background: var(--panel-bg);
  border: 1px solid var(--panel-border);
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.2,0.8,0.2,1);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.file-card:hover {
  transform: translateY(-4px);
  border-color: var(--primary-color);
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
}
.file-card-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(255,255,255,0.05);
  display: grid;
  place-items: center;
  color: var(--primary-color);
}
.file-card-name {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-main);
  text-align: center;
  word-break: break-all;
}
.file-card-type {
  font-size: 0.7rem;
  color: var(--text-muted);
  text-transform: uppercase;
}
'''
    )
