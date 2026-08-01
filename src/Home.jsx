    import { useState, useRef, useEffect } from "react";
    import { nanoid } from "nanoid";
    import axios from "axios"
    import Header from "./Header"

    function Home() {
    const containerSet = {}
    const [text, setText] = useState("");
    const [results, setResults] = useState([]);
    const [selectedName, setSelectedName] = useState("")
    const [selectedIcon, setSelectedIcon] = useState("")
    const [selectState, setSelectState] = useState(false)
    const [container, setContainer] = useState({})
    async function fetchIcons(e) {
    e.preventDefault();
    const data = axios.get(`${import.meta.env.VITE_FETCH_URL || "http://localhost:3000/"}search`, {
    params: {
        query: text.toLowerCase().replaceAll(' ', ''),
    },
    })
    .then((res) => {
    setResults(res.data);
    console.log(res.data);
    })
    .catch((err) => console.error(err));
    }
    const cont = JSON.parse(localStorage.getItem("container"))
    function addtoContainer(e){
        e.preventDefault()
        const existence = localStorage.getItem("container");
        existence ? (
            cont[selectedName] = { name: selectedName, data: selectedIcon },
            localStorage.setItem("container", JSON.stringify(cont))

        ) : (
        containerSet[selectedName] = {name: selectedName, data: selectedIcon},
        localStorage.setItem("container", JSON.stringify(containerSet))
        )
    }

    function downloadSVG(e){
        e.preventDefault()
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
    function displayIcons(){
    console.log('hella')
    const data = axios.get(`${import.meta.env.VITE_FETCH_URL || "http://localhost:3000/"}search`, {
    params: {
        query: "arr",
    },
    })
    .then((res) => {
    setResults(res.data);
    console.log(res.data);
    })
    .catch((err) => console.error(err));
    }

    return () => displayIcons()
    }, [])

    return (
    <>
    <div className="font-[SF_UI_Display] flex flex-col">
    <main className="h-screen w-full flex flex-col text-sm">
    <Header objects={JSON.parse(localStorage.getItem("container"))}/>
    <section
    className="gap-12 flex flex-col justify-center flex-1"
    id="hero"
    style={{
    backgroundImage: "url(/bg_2.jpg)",
    }}
    >
    <div className="w-full h-full bg-black/50 p-8 gap-12 px-5 flex flex-col justify-end flex-1">
    <div className="flex flex-col gap-6 w-fit lg:pb-20">
        <h1
        className="text-5xl text-white lg:text-8xl text-left lg:leading-20"
        style={{ position: "relative" }}
        >
        For lazy devs that don't <br /> use icon libraries
        </h1>
        {/* <p className="text-lg text-gray-300 font-light">
        UNDER CONSTRUCTION
        </p> */}
        <p className="text-lg text-gray-300 font-light">
        Find the perfect icon for your project in seconds. Zip it and
        Ship it!
        </p>
        <div className=" font-light h-15 w-full flex gap-6 justify-start items-center">
        <div className="h-full flex w-fit justify-between items-center gap-4">
            {/* div wrapper */}
            <div className="max-w-7 fill-white">
            <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            </div>
            <p className="text-white">Star on GitHub</p>
        </div>
        <div className="h-4/5 px-5 w-45 bg-[#E73F1E]  rounded-full flex justify-center gap-4 items-center">
            {/* div wrapper */}
            <div className="max-w-7 invert">
            <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M10.4883 14.651L15.25 21H22.25L14.3917 10.5223L20.9308 3H18.2808L13.1643 8.88578L8.75 3H1.75L9.26086 13.0145L2.31915 21H4.96917L10.4883 14.651ZM16.25 19L5.75 5H7.75L18.25 19H16.25Z" />
            </svg>
            </div>
            <p className="text-white">Follow on X</p>
        </div>
        </div>
    </div>
    </div>
    </section>
    </main>
    {/* form start */}
    <section className="flex flex-col px-6 gap-8">
    <form
        action=""
        style={{ boxShadow: "0px 3px 4px #0000001e" }}
        className="flex w-full rounded-full mt-15 h-12 lg:w-full py-2 px-2 border-[#cccccc] border-1"
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
    {/* form end */}
    <div
    style={{
        gridAutoColumns: "minmax(0, 1fr)",
        gridTemplateColumns: "repeat(auto-fill, minmax(5rem, 1fr))",
        display: "grid",
        alignItems: "top",
    }}
    >
    {results.map((result) => {
        return (
            <div key={result.name} className="rounded-md">
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
                onClick={() => {setSelectedName(result.name); setSelectedIcon(result.svg); setSelectState(true)}}
                className="h-3/10 hover:scale-110 transition-all cursor-pointer w-3/10 flex justify-center items-center"
                dangerouslySetInnerHTML={{ __html: result.svg }}
                />
                <p className="text-gray-500 mt-2 text-sm font-light">{result.name.slice(0, 7) + "..."}</p>
            </div>
            </div>
        );
    })}
    </div>
    </section>
    <div  style={{ boxShadow: "0px 3px 5px #0000001e" }} className= {`bg-white border-1 border-[#cccccc] rounded-2xl max-h-50 lg:h-60 bottom-0 right-0 mr-5 mb-5 overflow-hidden fixed card-element ${selectState ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-0 pointer-events-none'}`}>
    <div className="flex flex-col h-full w-full">
        <div id="header" className="h-5 bg-[#E73F1E] w-full flex justify-end items-center gap-2 px-4">
            <div onClick={() => setSelectState(false)} className="h-1 w-5 bg-white"></div>
        </div>
        <div id="rest" className=" flex flex-1 flex-col h-full">
            <div className="flex py-4 h-full w-full" id="top">
                <div className="left p-10 " dangerouslySetInnerHTML={{ __html: selectedIcon }}>
                </div>
                <div className="right  flex flex-col justify-center h-full w-full">
                    <div>
                        <p className="font-bold">Name:</p>
                        <p className="font-light">{selectedName}</p>
                    </div>
                    <div>
                        <p className="font-bold">Marital Status:</p>
                        <p className="font-light">{(() => {
                            const status = ["single", "married", "divorced", "widowed", "crazy", "trying"];
                            return <p>{status[Math.floor(Math.random() * status.length)]}</p>;
                        })()}</p>
                    </div>
                    <div>
                        <p className="font-bold">Actions:</p>
                        <p className="font-light"><a href="" onClick={addtoContainer} className="underline">add to container</a> / <a href="" onClick={downloadSVG} className="hover:underline">download</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    </>
    );
    }

    export default Home;