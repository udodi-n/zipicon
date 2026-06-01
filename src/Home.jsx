    import { useState } from "react";
    import { nanoid } from "nanoid";

    function Home() {
    const [text, setText] = useState("");
    async function fetchIcons(e) {
        e.preventDefault();
        const data = await fetch(
        `${import.meta.env.VITE_FETCH_URL || "http://localhost:3000/"}api/sickons`,
        {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            iconReq: text.replace(/\s/g, "").toLowerCase(),
            }),
        },
        );
        const id = nanoid(3);
        const blob = await data.blob();
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = `zipicons_${id}.zip`;
        a.click();

        URL.revokeObjectURL(url);
    }
    return (
        <>
        <div className="px-5 lg:px-20 font-[Geist] py-5 flex flex-col gap-5">
            <main className="h-screen w-full flex flex-col text-sm lg:text-xl ">
            <header className="flex items-center justify-between lg:p-4">
                <img src="/zipicon_logo.png" className="h-8 lg:h-10" alt="ZipIcon logo" />
                <nav>
                    <ul className="flex gap-4 lg:gap-12">
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#how-to-use">How to use</a>
                        </li>
                    </ul>
                </nav>
                <a
                    href="https://github.com/udodi-n/zipicon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 lg:px-8 py-3 bg-black rounded-full text-white rounded hover:bg-gray-700 transition"
                    >
                    Star on GitHub
                </a>
            </header>
            <section className="gap-12 flex flex-col justify-center lg:justify-end flex-1" id="hero">
                <div>
                <h1 className="text-5xl lg:text-8xl lg:leading-20">
                    For devs too lazy <br /> to learn about <br /> icon libraries
                </h1>
                </div>
                <div className="w-full rounded-2xl bg-center flex  items-end pb-10 lg:pb-20 justify-center lg:h-150"
                style={{
                    backgroundImage: "url('/bg_hero.jpg')",
                    backgroundSize: "cover"
                }}>
                    <form action="" className="flex pr-3 w-4/5 mt-10 lg:h-40 justify-between items-start py-5 lg:w-2/5 bg-white rounded-md" onSubmit={fetchIcons}>
                    <textarea
                        className="px-5 flex flex-1 focus:outline-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden h-full"
                        placeholder="google, facebook, instagram"
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                        type="text"
                    ></textarea>
                    <div className="flex h-full items-end"><button className="bg-black flex justify-center items-center rounded-full aspect-square h-13" type="submit"><img className="invert h-7" src="/zipper.png" alt="" /></button></div>
                    </form>
                </div>
            </section>
            </main>
            <aside className="bg-[#f5332c] lg:p-4 py-10 lg:h-40 lg:flex lg:flex-row flex flex-col justify-center items-center gap-10 lg:gap-20 rounded-4xl">
                <div className="text-white flex flex-col items-center">
                <h2 className="text-7xl font-[Instrument_Serif]">100+</h2>
                <p>icons</p>
                </div>
                <div className="text-white flex flex-col items-center">
                <h2 className="text-7xl font-[Instrument_Serif]">30+</h2>
                <p>hours of sleep sacrificed</p>
                </div>
                <div className="text-white flex flex-col items-center">
                <h2 className="text-7xl font-[Instrument_Serif]">0.000</h2>
                <p>happy users</p>
                </div>
            </aside>
            
                {/* how to use thingy */}

            <section className="bg-[#1c1c1c] text-white rounded-4xl h-fit py-9 lg:p-0 lg:h-screen flex flex-col justify-center" id="how-to-use">
            <div className="lg:flex lg:flex-row flex flex-col w-full justify-center items-center lg:items-start gap-12 h-fit">
                {/* First box and contents */}
                <div className="h-fit flex flex-col justify-start w-4/5 lg:w-7/20">
                    <div className="flex flex-col gap-5">
                        <h2 className="text-6xl lg:text-7xl ">How to use</h2>
                        <div className="aspect-square lg:w-full rounded-4xl"
                        style={{
                    backgroundImage: "url('/use_1.png')",
                    backgroundSize: "cover"
                }}></div>
                        <div>
                        <h3 className="font-semibold font-[Instrument_Serif] text-5xl">1.</h3>
                        <p className="lg:w-6/10 text-xl">Enter the list of icons you want to download separated by commas (e.g., facebook, x, instagram)</p>
                    </div>
                    </div>
                </div>
                {/* 2nd box and contents */}
                <div className="h-full flex flex-col justify-end w-4/5 lg:w-7/20">
                    <div className="flex flex-col gap-5"> 
                        <div className="lg:flex lg:flex-col hidden">
                        <h3 className="font-semibold font-[Instrument_Serif] text-5xl">2.</h3>
                        <p className="lg:w-3/10 text-xl">Zip</p>
                    </div>
                        <div className="aspect-square lg:w-full rounded-4xl"
                        style={{
                    backgroundImage: "url('/use_2.png')",
                    backgroundSize: "cover"
                }}></div>
                        <div className="lg:hidden">
                        <h3 className="font-semibold font-[Instrument_Serif] text-5xl">2.</h3>
                        <p className="lg:w-3/10 text-xl">Zip</p>
                    </div>
                    </div>
                </div>

            </div> 
            </section>
            {/* About Secton */}
            <section id="about" className="lg:flex lg:pb-20 lg:flex-row flex flex-col h-screen justify-center gap-6 text-white">
                {/* first flex */}
                <div className="text-xl flex justify-center items-center flex-col lg:w-1/2 h-full rounded-2xl mt-20 gap-10 lg:gap-20"
                style={{
                    backgroundImage: "url('/bg_eh.jpg')",
                    backgroundSize: "cover"
                }}>
                    <h4 className="text-5xl font-semibold font-[Instrument_Serif] text-center">About <br /> Zipicon</h4>
                    <div className=" flex justify-center items-center rounded-4xl px-2"><img src="/zipicon_logo.png" className="invert h-20 lg:h-30 " alt="" /></div>
                </div>
                {/* second flex */}
                <div className="rounded-4xl text-xl flex justify-center items-center flex-col lg:w-1/2 h-full text-black gap-20">
                    <div className="flex flex-col h-fit w-full lg:max-w-110">
                        <div className="lg:w-fit flex flex-col gap-4">
                            <p>I built ZipIcon because it'd look cool on my LinkedIn profile... and it was a tool I needed, of course</p>
                            <p>Follow me on <a href="https://www.linkedin.com/in/udodi-david-4b41473a2/" target="_blank" rel="noopener noreferrer" className="underline text-[#f5332c]">LinkedIn</a> if you wanna see more cool shit</p>
                        </div>
                        <button className="border overflow-hidden text-white mt-10 rounded-[12px] flex flex-col items-center text-left gap-4 w-fit lg:w-fit h-fit"
                        style={{
                            boxShadow:" 0 4px 6px rgba(0, 0, 0, 0.1)",
                        }}>
                            <div className="flex gap-4 px-4 py-6">
                                <div className="aspect-3/3.5 bg-center saturate-0 h-30 lg:h-45"
                                style={{
                                    backgroundImage: "url('https://pbs.twimg.com/profile_images/2055046741922050048/j6V0pls5_400x400.jpg')",
                                    backgroundSize: "cover"
                                }}></div>
                                <div className="">
                                    {/* <p classname="text-sm ">Copywriter & Web Dev</p> */}
                                    <p className="text-5xl font-bold text-[#f5332c]">UDODI</p>
                                    <div className="w-full flex  gap-4 h-full">
                                        <div className="">
                                            <div className="flex flex-col ">
                                                <p className="text-[15px] font-semibold text-[#1b1b1b] text-sm">PRONOUNS</p>
                                                <p className=" text-[#1b1b1b] text-sm">Serial/marketer</p>
                                            </div>
                                            <div className="flex flex-col ">
                                                <p className="text-[15px] font-semibold text-[#1b1b1b] text-sm">DATE OF BIRTH</p>
                                                <p className=" text-[#1b1b1b] text-sm">17/03/2099</p>
                                            </div>
                                            <div className="flex flex-col items-start">
                                                <p className="text-[15px] font-semibold text-[#1b1b1b] text-sm">Signature</p>
                                                <img className="h-8 object-contain" src="/signature-2.png" alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex flex-col ">
                                                <p className="text-[15px] font-semibold text-[#1b1b1b] text-sm">OCCUPATION</p>
                                                <p className=" text-[#1b1b1b] text-sm">Copywriter/Web Dev</p>
                                            </div>
                                            <div className="flex flex-col ">
                                                <p className="text-[15px] font-semibold text-[#1b1b1b] text-sm">WEIGHT</p>
                                                <p className=" text-[#1b1b1b] text-sm">Ripped(ish)</p>
                                            </div>
                                
                                        </div>
                                    </div>
                                    {/* <p className="text-[#1b1b1b] text-sm">Click here to view my profile</p> */}
                                </div>
                            </div>
                            <div className="w-full bg-[#f5332c] h-5"></div>
                        </button>
                    </div>
                </div>
            </section>
            <footer className="w-full flex flex-col lg:h-150 pb-5 justify-center items-center  text-white rounded-2xl bg-[#f5332c]">
                <div className="flex flex-1 items-center justify-center invert"><img className="lg:h-90 h-30" src="/zipicon_text.png" alt="" /></div>
            <div className="flex flex-col items-center">
                <p>
                    Made with Energy Drink Overdose by{" "}
                    <a
                    href="https://x.com/itsudodi"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Udodi
                    </a>
                </p>
                <p>
                    Star on{" "}
                    <a
                    href="https://github.com/udodi-n/zipicon"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    GitHub
                    </a>
                </p>
            </div>
            </footer>
        </div>
        </>
    );
    }

    export default Home;
