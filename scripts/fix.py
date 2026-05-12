import re

with open('app.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix DOM missing keys
content = content.replace(
    'builderSidebar: $("#builder-sidebar")\n};',
    'builderSidebar: $("#builder-sidebar"),\n  builderFilesView: $("#builder-files-view"),\n  filesGrid: $("#files-grid")\n};'
)
content = content.replace(
    'builderSidebar: $("#builder-sidebar")\r\n};',
    'builderSidebar: $("#builder-sidebar"),\n  builderFilesView: $("#builder-files-view"),\n  filesGrid: $("#files-grid")\n};'
)

# Remove the duplicate builderFilesTab listener in initSettingsAndDocs
content = re.sub(
    r'DOM\.builderFilesTab\?\.addEventListener\("click", \(\) => \{\s*\$\$\("\.builder-tab"\)\.forEach\(t => t\.classList\.remove\("active"\)\);\s*DOM\.builderFilesTab\.classList\.add\("active"\);\s*DOM\.builderSidebar\.classList\.toggle\("collapsed"\);\s*\}\);',
    '',
    content
)

# Fix updateBuilder for the preview
new_update_iframe = """  // Update Iframe Preview
  let finalHtml = builderProject.files['index.html'] || '';
  
  let cssFiles = Object.keys(builderProject.files).filter(f => f.endsWith('.css'));
  let jsFiles = Object.keys(builderProject.files).filter(f => f.endsWith('.js'));
  
  cssFiles.forEach(cssFile => {
    let content = builderProject.files[cssFile];
    if (content) {
      let cssRegex = new RegExp(`<link[^>]*${cssFile.replace('.', '\\\\.')}[^>]*>`, 'i');
      if (cssRegex.test(finalHtml)) {
        finalHtml = finalHtml.replace(cssRegex, `<style>${content}</style>`);
      } else {
        if (finalHtml.includes('</head>')) {
          finalHtml = finalHtml.replace('</head>', `<style>${content}</style></head>`);
        } else {
          finalHtml += `<style>${content}</style>`;
        }
      }
    }
  });

  jsFiles.forEach(jsFile => {
    let content = builderProject.files[jsFile];
    if (content) {
      let jsRegex = new RegExp(`<script[^>]*${jsFile.replace('.', '\\\\.')}[^>]*><\\\\/script>`, 'i');
      if (jsRegex.test(finalHtml)) {
        finalHtml = finalHtml.replace(jsRegex, `<script>${content}</script>`);
      } else {
        if (finalHtml.includes('</body>')) {
          finalHtml = finalHtml.replace('</body>', `<script>${content}</script></body>`);
        } else {
          finalHtml += `<script>${content}</script>`;
        }
      }
    }
  });

  DOM.builderIframe.srcdoc = finalHtml;
}"""

content = re.sub(
    r'// Update Iframe Preview[\s\S]*?DOM\.builderIframe\.srcdoc = finalHtml;\s*\}',
    new_update_iframe,
    content
)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(content)
