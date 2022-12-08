import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { useContext } from "react";
import { US, BR } from "country-flag-icons/react/3x2";
import { LanguageContext } from "../LanguageContext.js";
import { englishLanguage } from "../languages/english";
import { portugueseLanguage } from "../languages/portuguese";

const basicHooks = ["useState", "useEffect", "useContext"];

const additionalHooks = [
  "useReducer",
  "useCallback",
  "useMemo",
  "useRef",
  "useImperativeHandle",
  "useLayoutEffect",
  "useDebugValue",
  "useDeferredValue",
  "useTransition",
  "useId",
];

const libraryHooks = ["useSyncExternal", "useInsertionEffect"];

const Root = () => {
  const [currentLanguage, setCurrentLanguage] = useState(englishLanguage);

  return (
    <LanguageContext.Provider value={currentLanguage}>
      <div className="flex flex-row max-w-screen min-h-screen">
        <div className="bg-gray-100 flex flex-col p-5 min-w-[15%]">
          <div className="flex mb-3">
            <US
              onClick={() => setCurrentLanguage(englishLanguage)}
              className="w-6 h-6 hover:cursor-pointer mr-2"
            />
            <BR
              onClick={() => setCurrentLanguage(portugueseLanguage)}
              className="w-6 h-6 hover:cursor-pointer"
            />
          </div>

          <Link className="mb-4" to={""}>
            <AiFillHome className="text-3xl hover:text-slate-400" />
          </Link>
          <h5 className="text-xl my-2">{currentLanguage.basicHooks}</h5>
          {basicHooks.map((hook, idx) => (
            <Link className="hover:text-slate-400" key={idx} to={hook}>
              {hook}
            </Link>
          ))}
          {/*

        <h5 className="text-xl my-2">Additional Hooks</h5>
        {additionalHooks.map((hook, idx) => (
          <Link key={idx} to={hook}>
            {hook}
          </Link>
        ))}
              

        <h5 className="text-xl my-2">Library Hooks</h5>
        {libraryHooks.map((hook, idx) => (
          <Link key={idx} to={hook}>
            {hook}
          </Link>
        ))}   */}
        </div>

        <div className="bg-white p-12 max-w-[80%]">
          <Outlet />
        </div>
      </div>
    </LanguageContext.Provider>
  );
};

export default Root;
