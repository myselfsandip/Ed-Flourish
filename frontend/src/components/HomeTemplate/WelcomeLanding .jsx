import React, { useState, useEffect } from "react";

const WelcomeLanding = () => {
  const [activeTab, setActiveTab] = useState("python");
  const [currentLine, setCurrentLine] = useState(0);

  const codeSnippets = {
    python: [
      { code: "# Welcome to Ed-Flourish", color: "text-gray-400" },
      { code: "def greet():", color: "text-sky-400" },
      {
        code: '    message = "Foster your knowledge"',
        color: "text-green-400",
      },
      {
        code: '    journey = "Start your journey with us"',
        color: "text-green-400",
      },
      { code: "", color: "text-white" },
      {
        code: "    print('Welcome to Ed-Flourish 🚀')",
        color: "text-purple-400",
      },
      { code: "    print(f'{message} 🔥')", color: "text-purple-400" },
      { code: "    print(f'{journey} ⭐')", color: "text-purple-400" },
      { code: "", color: "text-white" },
      { code: "if __name__ == '__main__':", color: "text-sky-400" },
      { code: "    greet()", color: "text-orange-400" },
    ],
    javascript: [
      { code: "// Welcome to Ed-Flourish", color: "text-gray-400" },
      { code: "const welcomeMessage = () => {", color: "text-sky-400" },
      {
        code: '  const message = "Foster your knowledge";',
        color: "text-green-400",
      },
      {
        code: '  const journey = "Start your journey with us";',
        color: "text-green-400",
      },
      { code: "", color: "text-white" },
      {
        code: "  console.log('Welcome to Ed-Flourish 🚀');",
        color: "text-purple-400",
      },
      { code: "  console.log(`${message} 🔥`);", color: "text-purple-400" },
      { code: "  console.log(`${journey} ⭐`);", color: "text-purple-400" },
      { code: "}", color: "text-sky-400" },
      { code: "", color: "text-white" },
      { code: "welcomeMessage();", color: "text-orange-400" },
    ],
    java: [
      { code: "// Welcome to Ed-Flourish", color: "text-gray-400" },
      { code: "public class Welcome {", color: "text-sky-400" },
      {
        code: "    public static void main(String[] args) {",
        color: "text-purple-400",
      },
      {
        code: '        String message = "Foster your knowledge";',
        color: "text-green-400",
      },
      {
        code: '        String journey = "Start your journey with us";',
        color: "text-green-400",
      },
      { code: "", color: "text-white" },
      {
        code: '        System.out.println("Welcome to Ed-Flourish 🚀");',
        color: "text-orange-400",
      },
      {
        code: '        System.out.println(message + " 🔥");',
        color: "text-orange-400",
      },
      {
        code: '        System.out.println(journey + " ⭐");',
        color: "text-orange-400",
      },
      { code: "    }", color: "text-purple-400" },
      { code: "}", color: "text-sky-400" },
    ],
  };

  const languages = {
    python: { name: "Python", color: "bg-yellow-500" },
    javascript: { name: "JavaScript", color: "bg-yellow-400" },
    java: { name: "Java", color: "bg-red-500" },
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLine(
        (prev) => (prev + 1) % (codeSnippets[activeTab].length + 1)
      );
    }, 800);
    return () => clearInterval(timer);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#0f1319] p-8 flex flex-col items-center justify-center">
      {/* Welcome Header */}
      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4 mt-md-2">
          Welcome to Ed-Flourish
        </h1>
        <p className="text-lg text-gray-300">Start your journey with us</p>
      </div>

      <div className="w-full max-w-4xl bg-[#1a1e24] rounded-xl shadow-2xl overflow-hidden">
        {/* Top Bar */}
        <div className="bg-[#2a2e35] p-4 flex items-center justify-between">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-gray-400 text-sm">Ed-Flourish IDE</div>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          </div>
        </div>

        {/* Tab Bar */}
        <div className="flex bg-[#2a2e35] border-b border-gray-700">
          {Object.entries(languages).map(([key, lang]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 text-sm font-medium transition-all duration-300 ${
                activeTab === key
                  ? "bg-[#1a1e24] text-white border-t-2 border-blue-400"
                  : "text-gray-400 hover:bg-[#1a1e24] hover:text-gray-300"
              }`}
            >
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${lang.color}`}></div>
                <span>{lang.name}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Code Area */}
        <div className="p-6 font-mono text-sm">
          <div className="flex">
            <div className="pr-4 text-gray-600 select-none border-r border-gray-700">
              {codeSnippets[activeTab].map((_, index) => (
                <div key={index} className="py-1">
                  {(index + 1).toString().padStart(2, "0")}
                </div>
              ))}
            </div>

            <div className="pl-4 flex-1">
              {codeSnippets[activeTab].map((line, index) => (
                <div
                  key={index}
                  className={`py-1 transition-all duration-500 ${
                    index <= currentLine
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4"
                  }`}
                >
                  <span className={line.color}>{line.code}</span>
                </div>
              ))}
              <div className="h-4 w-2 bg-blue-400 animate-pulse inline-block"></div>
            </div>
          </div>
        </div>

        {/* Output Section */}
        <div className="bg-[#2a2e35] p-4 border-t border-gray-700">
          <div className="font-mono text-sm">
            <div className="text-white mb-1">Output:</div>
            <div className="text-green-400">Welcome to Ed-Flourish 🚀</div>
            <div className="text-blue-400">Forge your knowledge 🔥</div>
            <div className="text-purple-400">Start your journey with us ⭐</div>
          </div>
        </div>
      </div>

      {/* Terminal */}
      <div className="w-full max-w-4xl mt-6 bg-[#1a1e24] rounded-xl shadow-2xl overflow-hidden">
        <div className="bg-[#2a2e35] px-4 py-2 flex justify-between items-center">
          <span className="text-gray-400 text-sm">Terminal</span>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-gray-400 text-sm">Ready</span>
          </div>
        </div>
        <div className="p-4 font-mono text-sm">
          <div className="text-green-400">
            <div className="flex items-center">
              <span className="text-blue-400">$</span>
              <span className="ml-2">Running welcome script...</span>
            </div>
            <div className="mt-2">
              Initializing Ed-Flourish environment... ⚡
            </div>
            <div className="mt-1">Loading learning modules... ✓</div>
            <div className="mt-1 text-emerald-400">
              Ready to start coding! 🚀
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeLanding;
