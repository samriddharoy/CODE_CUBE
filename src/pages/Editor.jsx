import React, { useState, useEffect } from 'react';
import EditorNavbar from '../components/EditorNavbar';
import MonacoEditor from '@monaco-editor/react';
import { MdLightMode } from "react-icons/md";
import { FaExpandAlt } from "react-icons/fa";

function Editor() {
  const [istab, setIsTab] = useState("html");
  const [isLightMode, setIsLightMode] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const defaultCode = {
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Preview</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is a basic HTML page.</p>
</body>
</html>`,
    css: `body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  color: #333;
}

h1 {
  color: #D98C4C;
}`,
    javascript: `console.log('Hello from JavaScript!');
function greet() {
  alert('Welcome to the editor!');
}
greet();`
  };

  const [htmlContent, setHtmlContent] = useState(defaultCode.html);
  const [cssContent, setCssContent] = useState(defaultCode.css);
  const [jsContent, setJsContent] = useState(defaultCode.javascript);
  const [editorContent, setEditorContent] = useState(defaultCode.html);

  const changeTheme = () => {
    setIsLightMode(!isLightMode);
    document.body.style.backgroundColor = !isLightMode ? "#fff" : "#000";
    document.body.style.color = !isLightMode ? "#000" : "#fff";
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleEditorChange = (value = "") => {
    setEditorContent(value);
    if (istab === "html") setHtmlContent(value);
    if (istab === "css") setCssContent(value);
    if (istab === "javascript") setJsContent(value);
  };

  const updateIframe = () => {
    const iframe = document.getElementById("output");
    if (!iframe) return;

    const doc = iframe.contentWindow.document;
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
    doc.open();
    doc.write(fullHtml);
    doc.close();
  };

  useEffect(() => {
    updateIframe();
  }, [htmlContent, cssContent, jsContent]);

  useEffect(() => {
    if (istab === "html") setEditorContent(htmlContent);
    if (istab === "css") setEditorContent(cssContent);
    if (istab === "javascript") setEditorContent(jsContent);
  }, [istab]);

  return (
    <div>
      <EditorNavbar />
      <div className="flex">
        {/* Left Editor Panel */}
        <div className={`${isExpanded ? "w-full" : "w-[50%]"} bg-black text-white`}>
          {/* Tabs and Icons */}
          <div className="flex items-center justify-between w-full bg-[#1A1919] h-[50px] px-[40px]">
            <div className="flex items-center gap-2">
              <div onClick={() => setIsTab("html")} className={`tab text-white cursor-pointer px-2 py-1 ${istab === "html" ? "bg-[#D98C4C]" : ""}`}>HTML</div>
              <div onClick={() => setIsTab("css")} className={`tab text-white cursor-pointer px-2 py-1 ${istab === "css" ? "bg-[#D98C4C]" : ""}`}>CSS</div>
              <div onClick={() => setIsTab("javascript")} className={`tab text-white cursor-pointer px-2 py-1 ${istab === "javascript" ? "bg-[#D98C4C]" : ""}`}>JavaScript</div>
            </div>
            <div className="flex items-center gap-2">
              <MdLightMode className="cursor-pointer" onClick={changeTheme} />
              <FaExpandAlt className="cursor-pointer" onClick={toggleExpand} />
            </div>
          </div>

          {/* Monaco Editor */}
          <MonacoEditor
            height="86vh"
            theme={isLightMode ? "vs-light" : "vs-dark"}
            language={istab}
            value={editorContent}
            onChange={handleEditorChange}
            options={{
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
            }}
          />
        </div>

        {/* Right Preview Panel */}
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
