import { useState } from 'react'
import Header from './Header'

export default function IconCard({selectState = false, selectedIcon, selectedName, action}){
  const [container, setContainer] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('container')) || null;
    } catch {
      return null;
    }
  });
  const containerSet = { ...container };

  function downloadSVG(e) {
      e.preventDefault();
      const svgString = selectedIcon;
      const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const downloadLink = document.createElement("a");
      downloadLink.href = url;
      downloadLink.download = `${selectedName}.svg`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(url);
  }

  return(
    <>
    <div
        style={{ boxShadow: "0px 3px 5px #0000001e" }}
        className={`bg-white border-1 border-[#cccccc] rounded-2xl max-h-55 h-fit max-w-90 w-80 bottom-0 right-0 mr-5 mb-5 overflow-hidden fixed card-element ${selectState ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-0 pointer-events-none"}`}
      >
        <div className="flex flex-col h-full w-full">
          <div
            id="header"
            className="h-5 bg-[#E73F1E] w-full flex justify-end items-center gap-2 px-4"
          >
            <div className="h-1 w-5 bg-white"></div>
          </div>
          <div
            className="flex  justify-between flex-1 w-full items-center"
            id="top"
          >
            <div className="left w-1/2 h-full flex justify-center items-center p-4">
              <div
                className="aspect-square h-8"
                dangerouslySetInnerHTML={{ __html: selectedIcon }}
              ></div>
            </div>
            <div className="right py-4 flex flex-col justify-center h-full ">
              <div>
                <p className="font-bold">Name:</p>
                <p className="font-light">{selectedName}</p>
              </div>
              <div>
                <p className="font-bold">Marital Status:</p>
                {(() => {
                  const status = [
                    "single",
                    "married",
                    "divorced",
                    "widowed",
                    "crazy",
                    "trying",
                  ];
                  return (
                    <p>{status[Math.floor(Math.random() * status.length)]}</p>
                  );
                })()}
              </div>
              <div>
                <p className="font-bold">Actions:</p>
                <p className="font-light">
                  <a href="" onClick={action} className="underline">
                    add to container
                  </a>{" "}
                  /{" "}
                  <a href="" onClick={downloadSVG} className="hover:underline">
                    download
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}