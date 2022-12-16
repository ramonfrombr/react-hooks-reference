import React from "react";

const ExampleButtons = ({
  exampleNumbers,
  exampleNumber,
  setExampleNumber,
}) => {
  return (
    <div className="flex items-center mb-4">
      {exampleNumbers.map((n) => (
        <button
          key={n}
          className={exampleNumber === n ? "bg-slate-400" : undefined}
          onClick={() => setExampleNumber(n)}
        >
          Example {n}
        </button>
      ))}
    </div>
  );
};

export default ExampleButtons;
