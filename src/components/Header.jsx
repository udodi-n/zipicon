    import { useState, useEffect } from "react";
    import axios from "axios";
    import { nanoid } from "nanoid";
import { renderToReadableStream } from "react-dom/server";

    function Header(objects) {
    const [selected, setSelected] = useState(false)
    const [container, setContainer] = useState(objects || {});
    const containerCopy = { ...(objects || {}) }

    function deleteObject(name) {
        const next = { ...containerCopy };
        delete next[name];
        setContainer(next);
        localStorage.setItem("container", JSON.stringify(next));
    }

    async function sendContainer(e) {
    }
    return (
      <>
        <header className="flex lg:w-3/5 p-4 z-999 mt-10 rounded-xl border items-center fixed justify-between bg-white">
          <div className="flex items-end h-fit gap-2">
            <img src="/zipicon_logo.png" className="h-8" alt="ZipIcon logo" />
            <p className="text-xl font-light">Zipicon</p>
          </div>
          <div>
            <ul className="font-light lg:text-xl flex lg:gap-6">
                <li>Docs</li> 
                <li>Contact</li> 
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <div className="aspect-square h-7 w-7 rounded-full fill-[#E73F1E] flex justify-center items-center relative">
              {/* start of the dropdown thingy */}
              <div
                className={`absolute top-full  mt-9  flex-col justify-center items-center gap-2 ${selected ? "flex dropdown-combo" : "hidden"}`}
              >
                <div className="h-fit max-h-[70vh] pt-10 w-[min(95vw,20rem)] px-2 pt-5 flex flex-col items-center overflow-y-auto noscroll rounded-2xl bg-white">
                  {Object.keys(containerCopy).map((key) => {
                    return (
                      <div
                        key={key}
                        className="flex justify-between items-center w-full hover:bg-gray-100 rounded-md transition ease-in text-3xl font-light gap-2 p-2"
                      >
                        <div
                          className="flex gap-2 aspect-square h-14 items-center p-2"
                          dangerouslySetInnerHTML={{
                            __html: containerCopy[key],
                          }}
                        ></div>
                        <p className="text-xl max-w-35 text-gray-700 flex">
                          {[key]}
                        </p>
                        <div
                          className="w-5 h-5 cursor-pointer"
                          onClick={() => deleteObject(key)}
                        >
                          <img
                            src="/close.svg"
                            className="h-full w-full"
                            alt=""
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
                <button
                  onClick={sendContainer}
                  className="mt-4 bg-[#E73F1E] text-white w-full py-4 text-xl gap-5 flex items-center justify-center gap-2 rounded-full"
                >
                  Zip <img className="invert" src="/folder_zip.svg" alt="" />
                </button>
              </div>
              <svg
                onClick={() => setSelected(!selected)}
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Development Containers</title>
                <path d="M10.31.615a4.5 4.5 0 0 1 3.382 0l8.998 3.648A2.1 2.1 0 0 1 24 6.208v11.584a2.1 2.1 0 0 1-1.311 1.946l-8.998 3.648a4.5 4.5 0 0 1-3.382 0l-8.998-3.648A2.1 2.1 0 0 1 0 17.792V6.208a2.1 2.1 0 0 1 1.311-1.946Zm2.705 1.668a2.7 2.7 0 0 0-2.028 0l-9 3.647a.3.3 0 0 0-.187.278v11.584a.3.3 0 0 0 .187.278l8.999 3.648a2.7 2.7 0 0 0 2.028 0l8.999-3.648a.3.3 0 0 0 .187-.278V6.208a.3.3 0 0 0-.187-.278ZM6.019 6.658 12 8.928l5.98-2.27c1.122-.427 1.762 1.256.64 1.683l-5.72 2.17V17.1c0 1.2-1.8 1.2-1.8 0v-6.59L5.38 8.34c-1.122-.426-.482-2.109.64-1.683" />
              </svg>
            </div>
            <a
              href="https://github.com/udodi-n/zipicon"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 lg:flex lg:px-8 py-3 bg-brownOrange border-1 border-black rounded-md text-white"
            >
              Star on GitHub
            </a>
          </div>
        </header>
      </>
    );
    }

    export default Header;
