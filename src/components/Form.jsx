import IconResults from './IconResults'
import axios from "axios";
import { useState, useEffect } from 'react'

export default function Form(action){
  const [results, setResults] = useState([]);
  const [text, setText] = useState("")
    const [selectedName, setSelectedName] = useState("");
      const [selectedIcon, setSelectedIcon] = useState("");
      const [selectState, setSelectState] = useState(false);
  const [container, setContainer] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("container")) || null;
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

  useEffect(() => {
function displayIcons() {
    console.log("hella");
    const data = axios
    .get(
        `${import.meta.env.VITE_FETCH_URL || "http://localhost:3000/"}search`,
        {
        params: {
            query: "arr",
        },
        },
    )
    .then((res) => {
        setResults(res.data);
    })
    .catch((err) => console.error(err));
}

return () => displayIcons();
}, []);

  async function fetchIcons(e) {
    e.preventDefault();
    const data = axios
      .get(
        `${import.meta.env.VITE_FETCH_URL || "http://localhost:3000/"}search`,
        {
          params: {
            query: text.toLowerCase().replaceAll(" ", ""),
          },
        },
      )
      .then((res) => {
        setResults(res.data);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  }
  return (
    <>
      <section className="flex flex-col px-6 gap-8">
        <form
          action=""
          style={{ boxShadow: "0px 3px 4px #0000001e" }}
          className="flex w-full rounded-md mt-15 h-12 lg:w-full py-2 px-2 border-[#cccccc] border-1"
          onSubmit={fetchIcons}
        >
          {/* search button start */}
          <div className="flex h-full items-end">
            <button
              className="flex justify-center items-center rounded-full aspect-square h-full"
              type="submit"
            >
              <svg
                className="lucide opacity-60 lucide-search"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m21 21-4.34-4.34" />
                <circle cx="11" cy="11" r="8" />
              </svg>
            </button>
          </div>
          {/* search buttoon end */}

          {/* the search input */}
          <input
            className="px-5 pt flex flex-1 font-light focus:outline-none"
            placeholder="google, facebook, instagram"
            onChange={(e) => setText(e.target.value)}
            value={text}
            type="text"
          />
          {/* search input ends here */}
        </form>
      </section>
    </>
  );
}