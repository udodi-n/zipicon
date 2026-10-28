import { useState, useRef, useEffect } from "react";
import { nanoid } from "nanoid";
import Header from "./components/Header";
import Hero from './components/Hero'
import Form from './components/Form'
import IconResults from "./components/IconResults";

function Home() {
    const [container, setContainer] = useState(() => {
      try {
        return JSON.parse(localStorage.getItem('container')) || null;
      } catch {
        return null;
      }
    })

return (
  <>
    <div className="font-[SF_UI_Display] flex flex-col ">
      <main className="h-screen w-full flex flex-col text-sm items-center">
        <Header objects={container || { hey: "add to container" }} />
        <Hero />
      </main>
      {/* form start */}
      <div className="w-full h-fit">
        <Form />
      </div>
      {/* form end */}
    </div>
  </>
);
}

export default Home;
