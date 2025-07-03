import { NavLink } from "react-router-dom";
import imgHeroBlog from "../../assets/Image.png";
import smallImg from "../../assets/SmallImg.png";


function HeroBlog () {

    return (
        <section className="relative capitalize">
            <div className=" flex flex-col justify-center items-center py-4 my-5 font-['Work_Sans]">
                <h1 className="mb-3 font-semibold leading-5 tex-[30px] ">page titre</h1>
                <ul className="flex gap-4 font-normal">
                    <li><NavLink to="/" className="text-[#3B3C4A] leading-5 hover:border hover:border-[#3B3C4A] hover:p-1 ">home</NavLink></li>
                    <small>|</small>
                    <li><NavLink to="/blog" className={({isActive}) => isActive ? "text-[#696A75] tex-[16px]" : "" }>Blog</NavLink></li>
                </ul>
            </div>
            <div>
                <img src={imgHeroBlog} className="w-full h-[450px] object-cover rounded-md" alt="hero image"/>
            </div>
            <div className="absolute -bottom-10 left-1/4 max-w-md transform -translate-x-1/2 -translate-y-1/2 text-[#FFFF] shadow-lg ">
                <button className="mb-2 text-sm font-['Work_Sans'] text-white font-medium bg-[#4B6BFB] px-3 py-1 rounded">Technologie</button>
                <p className="mb-4 font-['Work_Sans'] font-semibold text-xl ">The Impact of Technology on the Workplace: How Technology is Changing</p>
                <div className="flex items-center text-[#97989F] gap-2">
                    <img src={smallImg} alt="petit image" className="w-8 h-8 rounded-full" />
                    <span className="text-sm font-['Work_Sans'] leading-5">Jason Francisco</span>
                    <span className="text-sm font-['Work_Sans'] leading-5">August 20, 2022</span>
                </div>
            </div>
        </section>
    )
}

export default HeroBlog;