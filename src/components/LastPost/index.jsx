import { useContext } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import smallImg from '../../assets/SmallImg.png';
import imgTry from '../../assets/Rectangle 38.png';
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from '../../utils/Context/ThemeContext';


function Lastpost ({data}) {

    const location = useLocation();
    const { theme } = useContext(ThemeContext);

    return (
        <section className={`mt-20 py-4 ${theme === 'dark' ? 'text-white' : 'text-[#181A2A]'}`}>

            { location.pathname==='/' && (
                <h2 className={`font-['Work_Sans'] font-bold text-2xl leading-6 mb-6`}>Last Post</h2>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.isArray(data) && data.map((post, index) => (
                <div key={index} className="p-2">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="transform origin-center h-full"
                    >
                        <Link to={`/singlepost/${index}`}>
                            <motion.div initial={false} transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                animate={{
                                    backgroundColor: theme === 'dark' ? '#181A2A' : '#FFFF',
                                }}
                            
                                className={`flex flex-col justify-between h-full p-4 transition-all duration-200 border rounded-md 
                                    ${theme === 'dark' ? 'border-[#242535]' : 'border-[#E8E8EA]'} 
                                    min-h-[430px]`}
                            >
                                <div>
                                    <img src={imgTry} className="w-full mb-3" alt="try image" />
                                    <button className="mb-2 text-sm font-['Work_Sans'] text-[#4B6BFB] font-medium bg-[#4B6BFB0D] px-3 py-1 rounded">
                                        Technologie
                                    </button>
                                    <p className={`mb-4 font-['Work_Sans'] ${theme === 'dark' ? 'text-white' : 'text-[#181A2A]'} font-semibold text-xl line-clamp-2`}>
                                        {post.title}
                                    </p>
                                </div>
                                <div className="flex items-center text-[#97989F] gap-2 mt-auto">
                                    <img src={smallImg} alt="petit image" className="w-8 h-8 rounded-full" />
                                    <span className="text-sm font-['Work_Sans'] leading-5">Jason Francisco</span>
                                    <span className="text-sm font-['Work_Sans'] leading-5">August 20, 2022</span>
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