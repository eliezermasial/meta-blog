import { useContext } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import smallImg from '../../assets/small.png?url';
import { ThemeContext } from '../../utils/Context/ThemeContext';


function HeroImage () {

    const { theme } = useContext(ThemeContext);

    return (
       
        <section className="relative capitalize">
            <div>
                <img src="/Image.png" loading="lazy" className="w-full h-[450px] object-cover rounded-md" alt="hero image"/>
            </div>
            <div className={`absolute -bottom-8 md:-bottom-12 left-1/2 md:left-[40%] lg:left-[30%] xl:left-[25%] ${theme === 'dark' ? 'bg-[#181A2A] border-[#242535] text-white ' : 'bg-white border-[#E8E8EA] text-[#181A2A]'}
                transform -translate-x-1/2 border rounded-md px-4 py-6 shadow-lg w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[32rem]`}
            >
                <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="mb-2 text-sm font-['Work_Sans'] text-white font-medium bg-[#4B6BFB] px-3 py-1 rounded">
                    Technologie
                </motion.button>
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

export default HeroImage;