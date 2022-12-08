import React from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const ShowCodeButton = ({ showCode, setShowCode }) => {
  return (
    <>
      <button
        className="flex items-center"
        onClick={() => setShowCode(!showCode)}
      >
        {showCode ? (
          <>
            <AiFillEyeInvisible />
            <span className="ml-2">Hide Code</span>
          </>
        ) : (
          <>
            <AiFillEye />
            <span className="ml-2">Show Code</span>
          </>
        )}
      </button>
    </>
  );
};

export default ShowCodeButton;
