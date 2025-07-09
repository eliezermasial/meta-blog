import { useContext } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { NavLink } from "react-router-dom";
import imgHeroBlog from "../../assets/Image.png?url";
import smallImg from "../../assets/small.png?url";
import { ThemeContext } from "../../utils/Context/ThemeContext";


function HeroBlog () {

    const { theme } = useContext(ThemeContext);

    return (
        <section className="relative capitalize">
            <div className=" flex flex-col justify-center items-center py-4 my-5 font-['Work_Sans]">
                <h1 className={`mb-3 font-semibold leading-5 tex-[30px] ${theme === 'dark' ? 'text-white':'text-#141624'} `} >page titre</h1>
                <ul className="flex gap-4 font-normal">
                    <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}><NavLink to="/" className="text-[#3B3C4A] leading-5 hover:border hover:border-[#3B3C4A] hover:text-white hover:p-1">home</NavLink></motion.li>
                    <small className="text-[#696A75]">|</small>
                    <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}><NavLink to="/blog" className={`hover:border hover:border-[#3B3C4A] hover:p-1 ${({isActive}) => isActive ? "text-[#696A75] tex-[16px]" : ""}`}>Blog</NavLink></motion.li>
                </ul>
            </div>
            <div>
                <img src={imgHeroBlog} className="w-full h-[450px] object-cover rounded-md" alt="hero image"/>
            </div>

            <div className="absolute -bottom-1  left-1/2 md:left-[40%] text-[#FFFF] lg:left-[30%] xl:left-[25%] transform -translate-x-1/2 py-6 
                w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[32rem]"
            >
                <button className="mb-2 text-sm font-['Work_Sans'] text-white font-medium bg-[#4B6BFB] px-3 py-1 rounded">
                    Technologie
                </button>
                <p className="mb-4 font-['Work_Sans'] font-semibold text-base sm:text-lg md:text-xl">The Impact of Technology on the Workplace: How Technology is Changing</p>
                <div className="flex items-center text-[#97989F] gap-2 flex-wrap">
                    <img src={smallImg} alt="petit image" className="w-8 h-8 rounded-full" />
                    <span className="text-sm font-['Work_Sans'] leading-5">Jason Francisco</span>
                    <span className="text-sm font-['Work_Sans'] leading-5">August 20, 2022</span>
                </div>
            </div>
        </section>
    )
}

export default HeroBlog;