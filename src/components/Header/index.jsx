import { useContext, useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import {useMediaQuery} from '../../utils/Hooks';
import { NavLink } from "react-router-dom";
import { useSearch } from '../../utils/Hooks';
import { ThemeContext }  from "../../utils/Context/ThemeContext";
import { useLocation } from "react-router-dom";


function Header () {

    const { toggleTheme, theme } = useContext(ThemeContext);
    const location = useLocation();

    const [ btnMobile, setBtnMobile] = useState(false);
    const isMediumScreen = useMediaQuery('(min-width: 768px)');

    const {scrollYProgress} = useScroll();
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 400,
        damping: 30,
        restDelta: 0.001,
    });

    const { query, setQuery, setResults, setLoading, setError } = useSearch();


    const handleChange = (e) => setQuery(e.target.value);
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!query.trim() && !query) return;

        setLoading (true);
        setError (null);

        try {
            const URL = `${import.meta.env.VITE_API_URL}/posts?title_like=${encodeURIComponent(query)}`;
            const response = await fetch(URL);

            if(!response.ok) throw new Error(`HTTP ${response.status}`);

            const json = await response.json();
            setResults(json);

        } catch (error) {
            setError(error.message || "Une erreur est survenue");
            setResults([]);

        } finally {
            setLoading(false);
        }
    };

    // Handle the scroll progress bar
    useEffect(() => {
        if (btnMobile) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [btnMobile]);

    useEffect(() => {
        if (isMediumScreen) {
            setBtnMobile(false);
        }
    }, [isMediumScreen]);
    
    
    return (
        <motion.header initial={false} animate={{backgroundColor: theme === 'dark' ? '#242535' : '#FFFF',}} transition={{ type: 'spring', stiffness: 400, damping: 30,}}
            className={`fixed overflow-x-hidden z-10 w-full  shadow-md transition-all duration-200 `}
        >
            <motion.div id="scroll-indicator" style={{scaleX: smoothProgress,transformOrigin: "left",}}
                className="top-0 left-0 right-0 h-[8px] bg-[#4b6bfbc0] origin-left"
            />
           <nav className="container mx-auto flex items-center justify-between gap-4 max-md:px-4 md:px-4 lg:px-4 xl:px-4 py-6">
                <a href="/">
                    <img src={(theme === 'dark' ? '/assets/logoDark.png' : '/assets/Logo1.svg')} width={150} height={18} alt="Logo" />
                </a>
                <ul className={`hidden md:flex flex-wrap justify-center items-center gap-8 ${theme === 'dark' ? 'text-[#FFFFFF]':'text-[#3B3C4A]'} font-['Work_Sans'] text-base font-normal leading-6 tracking-normal`}>
                    <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                        <NavLink to="/" className={({ isActive }) => isActive ? "border border-[#4B6BFB] rounded-sm p-1" : ""}>Home</NavLink>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                        <NavLink to="/blog" className={({ isActive }) => isActive ? "border border-[#4B6BFB] rounded-sm p-1" : ""}>Blog</NavLink>
                    </motion.li>
                    {location.pathname.startsWith('/singlepost') && (
                        <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                            <NavLink to="/singlePost" className={({ isActive }) => isActive ? "border border-[#4B6BFB] rounded-sm p-1" : ""}>Single Post</NavLink>
                        </motion.li>
                    )}
                    <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                        <NavLink to="/pages" className={({ isActive }) => isActive ? "border border-[#4B6BFB] rounded-sm p-1" : ""}>Pages</NavLink>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? "border border-[#4B6BFB] rounded-sm p-1" : ""}>Contact</NavLink>
                    </motion.li>
                </ul>
                <div className="flex items-center gap-4 max-sm:hidden">
                    <form className="relative" onSubmit={handleSubmit}>

                        <input value={query} onChange={handleChange} placeholder="Search a post"
                            className= {`w-[166px] h-[36px] px-3 pr-8 rounded-md text-sm outline-none border
                                ${theme === 'dark' ? 'bg-[#24253570] border-[#f4f4f579]' : 'bg-[#f4f4f5] caret-[#24253570] border-[#24253570]'}
                            `}
                        />
                        
                        <svg className="absolute right-3 top-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" >
                            <path d="M6.90906 2C5.93814 2 4.98903 2.28791 4.18174 2.82733C3.37444 3.36674 2.74524 4.13343 2.37368 5.03045C2.00213 5.92746 1.90491 6.91451 2.09433 7.86677C2.28375 8.81904 2.75129 9.69375 3.43783 10.3803C4.12438 11.0668 4.99909 11.5344 5.95135 11.7238C6.90362 11.9132 7.89067 11.816 8.78768 11.4444C9.6847 11.0729 10.4514 10.4437 10.9908 9.63639C11.5302 8.8291 11.8181 7.87998 11.8181 6.90906C11.818 5.60712 11.3008 4.35853 10.3802 3.43792C9.45959 2.51731 8.211 2.00008 6.90906 2Z"
                                stroke="#52525B" strokeWidth="1.5"
                            />
                            <path d="M10.5718 10.5716L14.0002 14" stroke="#52525B" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </form>
                    {/* Theme toggle button */}
                    <motion.button onClick={()=> toggleTheme()} initial={false} animate={{backgroundColor: theme === 'dark' ? '#4B6BFB' : '#F4F4F5',}} transition={{ type: 'spring', stiffness: 400, damping: 20,}}
                        className={`btn-theme max-md:hidden items-center transition-all duration-300 px-1 w-10 flex rounded-full font-semibold outline-none ${theme === 'dark' ? 'justify-end ' : 'bg-[#F4F4F5] justify-start'}`}
                    >
                        <motion.div layout transition={{ type: "spring", stiffness: 200, damping: 30, }} >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 bg-white h-4 rounded-full p-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                            </svg>
                        </motion.div>
                    </motion.button>
                </div>

                <div className="max-md:flex hidden items-center gap-4 ">
                    <motion.button onClick={() => setBtnMobile(!btnMobile)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-mobile border-[2px] bg-[#F4F4F5] border-[#3636389f] hover:border-[#3b83f6a8] p-1 rounded-md transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#363638a4" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                        </svg>
                    </motion.button>

                    <motion.button onClick={()=> toggleTheme()} initial={false} animate={{backgroundColor: theme === 'dark' ? '#4B6BFB' : '#F4F4F5',}} transition={{ type: 'spring', stiffness: 400, damping: 20,}}
                        className={`btn-theme items-center transition-all duration-300 px-1 w-10 flex rounded-full font-semibold ${theme === 'dark' ? 'justify-end ' : 'bg-[#F4F4F5] justify-start'}`}
                    >
                        <motion.div layout transition={{ type: "spring", stiffness: 200, damping: 30, }} >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 bg-white h-4 rounded-full p-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                            </svg>
                        </motion.div>
                    </motion.button>
                </div>

            </nav>
            <AnimatePresence>
                {btnMobile && (
                    <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 1.1, ease: "easeInOut" }}
                        className={`container fixed top-23 left-0 pt-4 right-0 ${theme === 'dark'? 'bg-[#242535fa]' : 'bg-white' } w-full h-full px-4 md:hidden z-20`}
                    >
                        <ul className="flex gap-4 p-5 flex-col space-y-2 text-white font-medium">
                        {[
                            { label: "Home", href: "/" },
                            { label: "Blog", href: "/blog" },
                            { label: "Page", href: "/page" },
                            { label: "Contact", href: "/contact" },
                        ].map(({ label, href }, i) => (
                            <motion.li key={i} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                className=" bg-[#f4f4f5a4] rounded-sm shadow-sm w-full" style={{display: "block",transformOrigin: "center",willChange: "transform",}}
                            >
                                <a href={href} className={`block w-full px-4 py-2 transition-colors duration-200 font-bold text-black rounded-sm shadow shadow-[#a4accf]`}>
                                    {label}
                                </a>
                            </motion.li>
                        ))}
                            <form className="relative " onSubmit={handleSubmit}>

                            <input value={query} onChange={handleChange} placeholder="Search a post"
                                className= {`w-full h-[36px] px-3 pr-8 rounded-md text-sm outline-none border
                                    ${theme === 'dark' ? 'bg-[#24253570] border-[#f4f4f579]' : 'bg-[#f4f4f5] caret-[#24253570] border-[#24253570]'}
                                `}
                            />
                            
                            <svg className="absolute right-3 top-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" >
                                <path d="M6.90906 2C5.93814 2 4.98903 2.28791 4.18174 2.82733C3.37444 3.36674 2.74524 4.13343 2.37368 5.03045C2.00213 5.92746 1.90491 6.91451 2.09433 7.86677C2.28375 8.81904 2.75129 9.69375 3.43783 10.3803C4.12438 11.0668 4.99909 11.5344 5.95135 11.7238C6.90362 11.9132 7.89067 11.816 8.78768 11.4444C9.6847 11.0729 10.4514 10.4437 10.9908 9.63639C11.5302 8.8291 11.8181 7.87998 11.8181 6.90906C11.818 5.60712 11.3008 4.35853 10.3802 3.43792C9.45959 2.51731 8.211 2.00008 6.90906 2Z"
                                    stroke="#52525B" strokeWidth="1.5"
                                />
                                <path d="M10.5718 10.5716L14.0002 14" stroke="#52525B" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </form>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}

export default Header;