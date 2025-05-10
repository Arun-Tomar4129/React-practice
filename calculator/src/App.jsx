import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => {
      if (prev === "Error") {
        return value === "=" ? "" : value;
      }

      if (value === "=") {
        try {
          return eval(prev).toString();
        } catch {
          return "Enter by vaild rule";
        }
      }

      return prev + value;
    });
  };

  const buttons = [
    "%", "C", "<", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "+/-", "0", ".", "=",
  ];

  return (
    <div className="bg-gradient-to-r from-red-400 via-blue-500 to-green-600 flex items-center justify-center min-h-screen">
      <div className="bg-blue-500 p-4 rounded-2xl shadow-[0px_0px_20px_5px_rgba(0,0,255,0.5)] w-[290px]">
        <div className="h-[50px] bg-amber-300 rounded-t-2xl mb-2 p-1">
          <input
            type="text"
            value={input}
            readOnly
            className="h-[40px] w-full bg-amber-200 rounded-2xl outline-none textfield px-2"
          />
        </div>

        <div className="grid grid-cols-4 gap-2">
          {buttons.map((but) => (
            <button
              key={but}
              onClick={() => {
                if (but === "C") {
                  setInput("");
                } else if (but === "<") {
                  setInput((prev) => prev.slice(0, -1));
                } else if (but === "+/-") {
                  setInput((prev) =>
                    prev.charAt(0) === "" ? prev.slice(1) : "" + prev
                  );
                } else {
                  handleClick(but);
                }
              }}
              className="bg-green-300 h-[50px] w-[60px] rounded-[10px] drop-shadow-[0px_0px_2px_black]"
            >
              {but}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
