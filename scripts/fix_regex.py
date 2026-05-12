import re

with open('app.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix regex for extracting code blocks
content = content.replace(
    'text.match(/```html\\\\n([\\s\\S]*?)```/i)',
    'text.match(/```html\\n([\\s\\S]*?)```/i)'
)
content = content.replace(
    'text.match(/```css\\\\n([\\s\\S]*?)```/i)',
    'text.match(/```css\\n([\\s\\S]*?)```/i)'
)
content = content.replace(
    'text.match(/```(?:javascript|js)\\\\n([\\s\\S]*?)```/i)',
    'text.match(/```(?:javascript|js)\\n([\\s\\S]*?)```/i)'
)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(content)
