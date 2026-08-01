function Header(){
return (
    <>
    <header className="flex w-full p-4 items-center fixed justify-between bg-white">
        <div className="flex items-end h-fit gap-2">
            <img src="/zipicon_logo.png" className="h-8" alt="ZipIcon logo" />
            <p className="text-2xl font-bold">Zipicon</p>
        </div>
        <a
            href="https://github.com/udodi-n/zipicon"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 lg:flex lg:px-8 py-3 bg-black rounded-full text-white"
        >
            Star on GitHub
        </a>
    </header>
    </>
);
}

export default Header