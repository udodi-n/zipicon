import { useState } from 'react'
import IconCard  from './IconCard'

export default function IconResults({result=[]}){
          const [selectedName, setSelectedName] = useState("");
          const [selectedIcon, setSelectedIcon] = useState("");
          const [selectState, setSelectState] = useState(false);

  function addToContainer() {
    if (!selectedName || !selectedIcon) return;
    try {
      const existing = JSON.parse(localStorage.getItem("container")) || {};
      const next = { ...existing, [selectedName]: selectedIcon };
      localStorage.setItem("container", JSON.stringify(next));
    } catch (e) {
      console.error("addToContainer", e);
    }
  }
   
  return (
    <>
      <div
          style={{
            gridAutoColumns: "minmax(0, 1fr)",
            gridTemplateColumns: "repeat(auto-fill, minmax(5rem, 1fr))",
            display: "grid",
            alignItems: "top",
          }}
        >
          {result.map((result) => {
            return (
              <div key={result.persistentName} className="rounded-md">
                <div
                  className=""
                  style={{
                    aspectRatio: "1/1",
                    width: "calc(6rem + 1vh)",
                    placeItems: "center",

                    placeContent: "center",
                  }}
                >
                  <div
                    onClick={() => {
                      setSelectedName(result.persistentName);
                      setSelectedIcon(result.svg);
                      setSelectState(true);
                    }}
                    className="h-3/10 hover:scale-110 transition-all cursor-pointer w-3/10 flex justify-center items-center"
                    dangerouslySetInnerHTML={{ __html: result.svg }}
                  />
                  <p className="text-gray-500 mt-2 text-sm font-light">
                    {result.persistentName.length <= 6
                      ? result.persistentName
                      : result.persistentName.slice(0, 6) + "..."}
                  </p>
                </div>
              </div>
            );
          })}
            <IconCard selectState={selectState} selectedIcon={selectedIcon} selectedName={selectedName} action={addToContainer}/>
        </div>
    </>
  )
}