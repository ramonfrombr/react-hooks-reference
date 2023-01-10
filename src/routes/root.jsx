import React, { useState } from "react";
import { Outlet, Link, ScrollRestoration } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
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
  "useLayoutEffect",
  /*"useImperativeHandle",
  "useDebugValue",
  "useDeferredValue",
  "useTransition",
  "useId",*/
];

//const libraryHooks = ["useSyncExternal", "useInsertionEffect"];

const customHooks = [
  "useToggle",
  "useTimeout",
  "useDebounce",
  /*"useUpdateEffect" - This hook does not work correctly on React v18. In the example, the alert runs before the value is updated on the screen*/
  "useArray",
  "usePrevious",
  "useStateWithHistory",
  "useStorage",
  "useAsync",
  "useFetch",
];

const Root = () => {
  const [currentLanguage, setCurrentLanguage] = useState(englishLanguage);

  console.log("testing github actions");

  return (
    <LanguageContext.Provider value={currentLanguage}>
      <div className="flex flex-row max-w-screen min-h-screen">
        <ScrollRestoration />
        <div className="bg-gray-100 flex flex-col p-5 min-w-[200px]">
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
          <Link
            className="mb-4 text-2xl hover:text-slate-400 items-center flex"
            to={""}
          >
            <AiFillHome className="mr-2" /> Home
          </Link>
          <h5 className="text-xl my-2">{currentLanguage.basicHooks}</h5>
          {basicHooks.map((hook, idx) => (
            <Link className="hover:text-slate-400" key={idx} to={hook}>
              {hook}
            </Link>
          ))}
          <h5 className="text-xl my-2">{currentLanguage.additionalHooks}</h5>
          {additionalHooks.map((hook, idx) => (
            <Link className="hover:text-slate-400" key={idx} to={hook}>
              {hook}
            </Link>
          ))}
          {/*  <h5 className="text-xl my-2">Library Hooks</h5>
        {libraryHooks.map((hook, idx) => (
          <Link  className="hover:text-slate-400"  key={idx} to={hook}>
            {hook}
          </Link>
        ))}    */}

          <h5 className="text-xl my-2">{currentLanguage.customHooks}</h5>
          {customHooks.map((hook, idx) => (
            <Link className="hover:text-slate-400" key={idx} to={hook}>
              {hook}
            </Link>
          ))}
        </div>

        <div className="bg-white p-12 max-w-[85%]">
          <Outlet />
        </div>
      </div>
    </LanguageContext.Provider>
  );
};

export default Root;
