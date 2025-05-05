import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EditorNavbar from '../components/EditorNavbar';
import MonacoEditor from '@monaco-editor/react';
import { MdLightMode } from 'react-icons/md';
import { FaExpandAlt } from 'react-icons/fa';

function Editor() {
  const { projectName } = useParams();

  const [istab, setIsTab] = useState('html');
  const [isLightMode, setIsLightMode] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const defaultCode = {
    html: `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>${projectName}</title></head><body><h1>${projectName}</h1></body></html>`,
    css: `body { font-family: Arial, sans-serif; background-color: #f4f4f4; color: #333; }`,
    javascript: `console.log('Editing: ${projectName}');`,
  };

  const [htmlContent, setHtmlContent] = useState(() =>
    localStorage.getItem(`${projectName}-html`) || defaultCode.html
  );
  const [cssContent, setCssContent] = useState(() =>
    localStorage.getItem(`${projectName}-css`) || defaultCode.css
  );
  const [jsContent, setJsContent] = useState(() =>
    localStorage.getItem(`${projectName}-js`) || defaultCode.javascript
  );

  const [editorContent, setEditorContent] = useState(() => {
    if (istab === 'html') return htmlContent;
    if (istab === 'css') return cssContent;
    if (istab === 'javascript') return jsContent;
    return '';
  });

  const changeTheme = () => {
    setIsLightMode(!isLightMode);
    document.body.style.backgroundColor = !isLightMode ? '#fff' : '#000';
    document.body.style.color = !isLightMode ? '#000' : '#fff';
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleEditorChange = (value = '') => {
    setEditorContent(value);

    if (istab === 'html') {
      setHtmlContent(value);
      localStorage.setItem(`${projectName}-html`, value);
    }
    if (istab === 'css') {
      setCssContent(value);
      localStorage.setItem(`${projectName}-css`, value);
    }
    if (istab === 'javascript') {
      setJsContent(value);
      localStorage.setItem(`${projectName}-js`, value);
    }
  };

  const updateIframe = () => {
    const iframe = document.getElementById('output');
    if (!iframe) return;

    const fullHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <style>${cssContent}</style>
      </head>
      <body>
        ${htmlContent}
        <script>${jsContent}<\/script>
      </body>
      </html>
    `;

    const doc = iframe.contentWindow.document;
    doc.open();
    doc.write(fullHtml);
    doc.close();
  };

  useEffect(() => {
    if (istab === 'html') setEditorContent(htmlContent);
    if (istab === 'css') setEditorContent(cssContent);
    if (istab === 'javascript') setEditorContent(jsContent);
  }, [istab]);

  return (
    <div>
      <EditorNavbar />
      <div className="flex h-screen">
        {/* Editor Panel */}
        <div className={`${isExpanded ? 'w-full' : 'w-[50%]'} bg-black text-white`}>
          {/* Top Controls */}
          <div className="flex items-center justify-between w-full bg-[#1A1919] h-[50px] px-[40px]">
            {/* Language Tabs */}
            <div className="flex items-center gap-2">
              {['html', 'css', 'javascript'].map((tab) => (
                <div
                  key={tab}
                  onClick={() => setIsTab(tab)}
                  className={`tab text-white cursor-pointer px-2 py-1 rounded ${
                    istab === tab ? 'bg-[#D98C4C]' : ''
                  }`}
                >
                  {tab.toUpperCase()}
                </div>
              ))}
            </div>

            {/* Run & Tools */}
            <div className="flex items-center gap-3">
              <button
                onClick={updateIframe}
                className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm"
              >
                Run
              </button>
              <MdLightMode className="cursor-pointer text-xl" onClick={changeTheme} />
              <FaExpandAlt className="cursor-pointer text-xl" onClick={toggleExpand} />
            </div>
          </div>

          {/* Monaco Editor */}
          <MonacoEditor
            height="86vh"
            theme={isLightMode ? 'vs-light' : 'vs-dark'}
            language={istab}
            value={editorContent}
            onChange={handleEditorChange}
            options={{
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
            }}
          />
        </div>

        {/* Output Panel */}
        {!isExpanded && (
          <iframe
            id="output"
            title="Live Preview"
            className="w-[50%] min-h-[89vh] bg-white"
          ></iframe>
        )}
      </div>
    </div>
  );
}

export default Editor;
