import { useContext } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import logoDarkFooter from '../../assets/logoFooterDark.png';
import logoLightFooter from '../../assets/Copyright Info.png';
import { ThemeContext } from '../../utils/Context/ThemeContext';


function Footer () {

    const { theme } = useContext(ThemeContext);

    return (
        <motion.footer initial={false} animate={{backgroundColor: theme === 'dark' ? '#141624' : '#F6F6F7',}} transition={{ type: 'spring', stiffness: 400, damping: 30,}}
         className={`overflow-x-hidden transition-all duration-200 font-['Plus_Jakarta_Sans'] tracking-normal`}>
            <div className="container mx-auto max-md:px-4 md:px-4 lg:px-4 xl:px-4  py-8 text-[#181A2A] space-y-8">
                <div className="flex flex-col md:flex-row justify-between gap-8">
                    <div className={`max-w-sm ${theme === 'dark' ? 'text-[#97989F]' : 'text-[#3B3C4A]'}`}>
                        <h3 className={`font-semibold ${theme === 'dark' ? 'text-white':'text-[#181A2A]'} mb-2 text-lg`} >About</h3>
                        <p className="text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className=" ${theme === 'dark' ? 'text-white':'text-[#181A2A]'} mt-4 space-y-1 text-sm">
                            <p><span className={`font-semibold ${theme === 'dark' ? 'text-white':'text-[#181A2A]'}`}>Email:</span> info@jstemplate.net</p>
                            <p><span className={`font-semibold ${theme === 'dark' ? 'text-white':'text-[#181A2A]'}`}>Phone:</span> 880 123 456 789</p>
                        </div>
                    </div>
                    <div className="flex gap-12">
                        <div>
                            <h3 className={`font-semibold ${theme === 'dark' ? 'text-white':'text-[#181A2A]'} mb-2 text-lg`}>Quick Link</h3>
                            <ul className={`space-y-1 text-sm ${theme === 'dark' ? 'text-[#97989F]' : 'text-[#3B3C4A]'}`}>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/archived">Archived</Link></li>
                                <li><Link to="/author">Author</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className={`font-semibold ${theme === 'dark' ? 'text-white':'text-[#181A2A]'} mb-2 text-lg`}>Category</h3>
                            <ul className={`space-y-1 text-sm ${theme === 'dark' ? 'text-[#97989F]' : 'text-[#3B3C4A]'}`}>
                                <li><Link to="/lifestyle">Lifestyle</Link></li>
                                <li><Link to="/travel">Travel</Link></li>
                                <li><Link to="/technology">Technology</Link></li>
                                <li><Link to="/business">Business</Link></li>
                                <li><Link to="/sports">Sports</Link></li>
                            </ul>
                        </div>
                    </div>
                    <motion.div initial={false} animate={{backgroundColor: theme === 'dark' ? '#242535' : '#FFFF',}} transition={{ type: 'spring', stiffness: 400, damping: 30,}}
                    className={`max-w-md border transition-all duration-200 ${theme === 'dark' ? ' border-[#242535] ' : ''} rounded-sm p-5 shadow space-y-4`}>
                        <div className="text-center">
                            <h3 className={`font-semibold ${theme === 'dark' ? 'text-white':'text-[#181A2A]'} mb-2 text-lg`}>Weekly Newsletter</h3>
                            <span className="text-sm text-[#696A75]">Get blog articles and offers via email</span>
                        </div>
                        <div>
                            <div className="relative">
                                <input type="email" placeholder="Your email"
                                    className={`w-full border ${theme === 'dark' ? 'bg-[#141624]' : 'bg-[#F6F6F7]'} border-gray-300 rounded px-5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                />
                                <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className={`absolute w-6 h-6 right-3 top-1 -translate-y-1/2 pointer-events-none p-1 rounded ${theme === 'dark' ? 'text-[#696A75]' : 'text-[#181a2a9c]'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5
                                            1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                                        />
                                    </svg>
                                </motion.div>
                            </div>
                            <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                                Subscribe
                            </motion.button>
                        </div>
                    </motion.div>
                </div>

                <hr className="border-gray-300" />

                <div className="flex  justify-between items-center gap-4 text-sm">
                    <div>
                        <img src={(theme === 'dark' ? logoDarkFooter : logoLightFooter)} alt="Footer logo" className="w-32 sm:w-40 md:w-52 lg:w-80" />
                    </div>
                    <ul className={`flex max-md:gap-2 gap-4 ${theme === 'dark' ? 'text-[#97989F]' : 'text-[#3B3C4A]'}`}>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Cookie Policy</a></li>
                    </ul>
                </div>
            </div>
        </motion.footer>             
    )
}

export default Footer;