import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
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
        <h2 className="text-xl mb-10">{language.intro}</h2>

        <h3 className="text-lg font-semibold mb-8">{language.hooksSummary}</h3>

        <div className="[&>ul]:list-disc [&>ul]:list-inside [&_li]:mb-4 [&>h3]:mb-4 [&>h3]:text-xl bg-emerald-50 p-3 rounded mb-8 drop-shadow-lg border-2 border-teal-300">
          <ReactMarkdown
            components={{
              code: ({ node, ...props }) => (
                <code className="text-pink-500" {...props} />
              ),
              li: ({ node, ...props }) => (
                <li className="hover:text-blue-700" {...props} />
              ),
              a: ({ node, ...props }) => <Link to={props.href} {...props} />,
            }}
          >
            {language.basicHooksSummary}
          </ReactMarkdown>
        </div>

        <div className="[&>ul]:list-disc [&>ul]:list-inside [&_li]:mb-4 [&>h3]:mb-4 [&>h3]:text-xl bg-emerald-100 p-3 rounded mb-8 drop-shadow-lg border-2 border-teal-300">
          <ReactMarkdown
            components={{
              code: ({ node, ...props }) => (
                <code className="text-pink-500" {...props} />
              ),
              li: ({ node, ...props }) => (
                <li className="hover:text-blue-700" {...props} />
              ),
              a: ({ node, ...props }) => <Link to={props.href} {...props} />,
            }}
          >
            {language.additionalHooksSummary}
          </ReactMarkdown>
        </div>

        <div className="[&>ul]:list-disc [&>ul]:list-inside [&_li]:mb-4 [&>h3]:mb-4 [&>h3]:text-xl bg-emerald-200 p-3 rounded mb-8 drop-shadow-lg border-2 border-teal-300">
          <ReactMarkdown
            components={{
              code: ({ node, ...props }) => (
                <code className="text-pink-500" {...props} />
              ),
              li: ({ node, ...props }) => (
                <li className="hover:text-blue-700" {...props} />
              ),
              a: ({ node, ...props }) => <Link to={props.href} {...props} />,
            }}
          >
            {language.additionalHooksSummary}
          </ReactMarkdown>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
