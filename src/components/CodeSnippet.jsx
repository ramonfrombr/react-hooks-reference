import React, { useEffect, useState } from "react";
import ShowCodeButton from "./ShowCodeButton";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeSnippet = ({ exampleNumber, snippets }) => {
  const [showCode, setShowCode] = useState(true);

  /* 
  // Hides code after selecting another example
  useEffect(() => {
    return () => {
      setShowCode(false);
    };
  }, [exampleNumber]); */

  return (
    <>
      <ShowCodeButton showCode={showCode} setShowCode={setShowCode} />
      {showCode && (
        <>
          {snippets.map((snippet) => (
            <div key={snippet.fileName} className="mb-5">
              <h4>{snippet.fileName}</h4>
              <SyntaxHighlighter
                wrapLongLines
                showLineNumbers
                language="javascript"
                style={atomOneDark}
              >
                {snippet.fileContent}
              </SyntaxHighlighter>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default CodeSnippet;
