import { useState } from 'react'

function Home() {
    const [text, setText] = useState('')
    async function fetchIcons(e){
        e.preventDefault()
        const data = await fetch(`${import.meta.env.VITE_FETCH_URL || "http://localhost:3000/"}/api/sickons`, {
        method : "POST",
        headers: {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({iconReq : text.replace(/\s/g, "").toSmallCaps()})
    }) 
    const blob = await data.blob()
    const url = URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = 'icons.zip'
    a.click()

    URL.revokeObjectURL(url)
    }
    return(
    <>
    <div className="font-[Geist] w-full h-fit flex flex-col">
        <header className="w-full fixed h-12 border-b-1 border-[#cecece] flex items-center justify-between px-4">
            <img class="object-contain h-6" src="/zipicon_logo.png" alt="" />
            <ul className="flex gap-6 items-center">
                <li><a href="https://x.com/itsudodi" className="text-[#cecece]">Built by Udodi</a></li>
                <li className="text-white bg-black px-2 rounded-sm py-1"><a href="https://github.com/udodi-n/zipicon" target="_blank" rel="noopener noreferrer">Star on GitHub</a></li>
            </ul>
        </header>
        <section className="order-[#] mt-10 pb-20 lg:h-[900px] flex flex-col justify-center items-center" id="hero">
            <div className="w-full h-[400px] flex flex-col items-center text-center justify-center gap-4  lg:gap-8">
                <h1 className="lg:w-120 font-semibold text-5xl lg:text-6xl">
                    For developers too <span className="bg-black text-white px-2 py-">lazy</span> to learn about icon libraries
                </h1>
                <p>And designers too.</p>
            </div>
            <form className="flex w-full gap-3 justify-center " action="" onSubmit={fetchIcons}> 
                <input placeholder="google, facebook, instagram" onChange={(e) => setText(e.target.value)} value={text} className="border focus:outline-none rounded-sm w-70 lg:w-90 px-2 border-[#cecece]" type="text" />
                <button className="border  px-4 py-2 rounded-sm" type="submit">
                Zip</button> 
            </form> 
            </section>
            <section id="how-to-use" className="border-b-1 flex justify-center border-t-1  py-8 border-[#cecece]">
            <div className="w-[600px] h-[300px] flex flex-col justify-center text-left gap-2 px-7 py-4">
                <p className="font-bold mb-1">NOTE: ZipIcon is only for social media icons</p>

                <h2 className="font-semibold text-md text-[#cecece]">How To Use:</h2>
                <ol className="list-decimal list-inside text-sm flex flex-col gap-2">
                    <li>Enter the list of icons you want to download separated by commas (e.g., facebook, x, instagram)</li>
                    <li>Click the "Zip" button to download a zip file containing the requested icons.</li>
                    <li>Extract the zip file to access your icons.</li>
                    <li>Sorry there's no search bar. I'll be adding more features soon : )</li>
                </ol>
            </div>
            </section>
            <footer className="h-fit w-full flex justify-center items-center gap-2 text-sm text-[#cecece] py-4">
       
            <p className="">Made with Energy Drink Overdose by <a href="https://x.com/itsudodi" target="_blank" rel="noopener noreferrer" className="text-black underline">Udodi</a></p>
            <p>Star on <a href="https://github.com/udodi-n/zipicon" target="_blank" rel="noopener noreferrer" className="text-black underline">GitHub</a></p>
            </footer>
    </div>
    </>
    )
}

export default Home