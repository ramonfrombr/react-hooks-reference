import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import reactHookLogo from "../static/images/react-hooks-logo.png";

const Homepage = () => {
  const language = useContext(LanguageContext);
  return (
    <div>
      <header className="flex items-center mb-10">
        <img className="w-12 h-12 mr-5" src={reactHookLogo} alt="" />
        <h1 className="text-5xl m-0">React Hooks Reference</h1>
      </header>
      <main>
        <p className="text-xl">{language.intro}</p>
      </main>
    </div>
  );
};

export default Homepage;
