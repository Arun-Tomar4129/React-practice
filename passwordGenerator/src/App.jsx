import { useState, useCallback, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "tailwindcss";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*(){}=+-`~";

    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);
  const copyPasswordTOClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
  }, [password]); // Fix: Dependency should be an array, not an object
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow rounded-[30px] px-4 my-8 text-orange-500 bg-gray-500">
        <h1 className="text-white text-center my-3 "><u>Password Generator</u></h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 py-3 ">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bf bg-white"
            placeholder="password"
            ref={passwordRef}
            readOnly
          />
          <button
            onClick={copyPasswordTOClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-1 ">
          <div className="flex text-sm gap-x-1 ">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer bg-amber-400"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label> Length:{length}</label>
          </div>
          <div className="flex text-sm gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className="flex text-sm gap-x-1 ">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="characterInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
