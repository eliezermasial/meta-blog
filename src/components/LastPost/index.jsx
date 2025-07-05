import { useContext } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import smallImg from '../../assets/SmallImg.png';
import imgTry from '../../assets/Rectangle 38.png';
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from '../../utils/Context/ThemeContext';


function Lastpost () {

    const location = useLocation();
    const { theme } = useContext(ThemeContext);

    return (
        <section className={`mt-20 py-4 ${theme === 'dark' ? 'text-white' : 'text-[#181A2A]'}`}>

            { location.pathname==='/' && (
                <h2 className={`font-['Work_Sans'] font-bold text-2xl leading-6 mb-6`}>Last Post</h2>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(9)].map((_, i) => (
                <div className="overflow-hidden p-2"> {/* <- wrapper pour garder la forme */}
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="transform origin-center">
                        <Link key={i} to={`/singlepost/${i}`}>
                            <motion.div initial={false} animate={{ backgroundColor: theme === 'dark' ? '#181A2A' : '#FFFF', }}
                                transition={{ type: 'spring', stiffness: 400, damping: 30, }} className={`flex flex-col gap-4 p-4 transition-all duration-200 max-w-full 
                                ${theme === 'dark' ? 'border-[#242535]' : 'border-[#E8E8EA]'} border rounded-md`}
                            >
                                <div>
                                    <img src={imgTry} className="w-full" alt="try image" />
                                </div>
                                <div className="text-[#181A2A]">
                                    <button className="mb-2 text-sm font-['Work_Sans'] text-[#4B6BFB] font-medium bg-[#4B6BFB0D] px-3 py-1 rounded">
                                        Technologie
                                    </button>
                                    <p className={`mb-4 font-['Work_Sans'] ${theme === 'dark' ? 'text-white' : 'text-[#181A2A]'} font-semibold text-xl`}>
                                        The Impact of Technology on the Workplace: How Technology is Changing
                                    </p>
                                    <div className="flex items-center text-[#97989F] gap-2">
                                        <img src={smallImg} alt="petit image" className="w-8 h-8 rounded-full" />
                                        <span className="text-sm font-['Work_Sans'] leading-5">Jason Francisco</span>
                                        <span className="text-sm font-['Work_Sans'] leading-5">August 20, 2022</span>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    </motion.div>
                </div>
                ))}
            </div>
        </section>

    )
}

export default Lastpost;