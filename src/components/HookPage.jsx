import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import ExampleButtons from "../components/ExampleButtons";
import CodeSnippet from "./CodeSnippet";

const HookPage = ({ hookName, hookExplanation, exampleComponents }) => {
  const [exampleNumber, setExampleNumber] = useState(1);

  const exampleNumbers = [
    ...Array.from({ length: exampleComponents.length }, (_, i) => i + 1),
  ];

  return (
    <div>
      <h1>{hookName}</h1>

      <div>
        <ReactMarkdown>{hookExplanation}</ReactMarkdown>
      </div>

      <ExampleButtons
        exampleNumbers={exampleNumbers}
        exampleNumber={exampleNumber}
        setExampleNumber={setExampleNumber}
      />

      <div className="bg-slate-100 rounded p-3 mb-5">
        {exampleComponents[exampleNumber - 1].component}
      </div>

      <div>
        <CodeSnippet
          exampleNumber={exampleNumber}
          snippets={exampleComponents[exampleNumber - 1].snippets}
        />
      </div>
    </div>
  );
};

export default HookPage;
