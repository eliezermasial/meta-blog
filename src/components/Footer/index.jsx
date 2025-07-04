import { Link } from "react-router-dom";
import imgFooter from '../../assets/Copyright Info.png';


function Footer () {
    return (
        <footer className="bg-[#F6F6F7] overflow-x-hidden font-['Plus_Jakarta_Sans'] tracking-normal">
            <div className="container mx-auto max-md:px-4 md:px-4 lg:px-4 xl:px-4  py-8 text-[#181A2A] space-y-8">
                <div className="flex flex-col md:flex-row justify-between gap-8">
                    <div className="max-w-sm">
                        <h3 className="font-semibold mb-2 text-lg">About</h3>
                        <p className="text-sm text-[#3B3C4A]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="mt-4 space-y-1 text-sm">
                            <p><span className="font-semibold">Email:</span> info@jstemplate.net</p>
                            <p><span className="font-semibold">Phone:</span> 880 123 456 789</p>
                        </div>
                    </div>
                    <div className="flex gap-12">
                        <div>
                            <h3 className="font-semibold mb-2 text-lg">Quick Link</h3>
                            <ul className="space-y-1 text-sm text-[#3B3C4A]">
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/archived">Archived</Link></li>
                                <li><Link to="/author">Author</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2 text-lg">Category</h3>
                            <ul className="space-y-1 text-sm text-[#3B3C4A]">
                                <li><Link to="/lifestyle">Lifestyle</Link></li>
                                <li><Link to="/travel">Travel</Link></li>
                                <li><Link to="/technology">Technology</Link></li>
                                <li><Link to="/business">Business</Link></li>
                                <li><Link to="/sports">Sports</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="max-w-md bg-white rounded-sm p-5 shadow border space-y-4">
                        <div className="text-center">
                            <h3 className="text-xl font-semibold mb-1">Weekly Newsletter</h3>
                            <span className="text-sm text-[#696A75]">Get blog articles and offers via email</span>
                        </div>
                        <div>
                            <div className="relative">
                                <input type="email" placeholder="Your email"
                                    className="w-full border border-gray-300 rounded px-5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <svg className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none"
                                    xmlns="http://www.w3.org/2000/svg"fill="none" viewBox="0 0 24 24"strokeWidth="1.5"stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25..."/>
                                </svg>
                            </div>
                            <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <hr className="border-gray-300" />

                <div className="flex  justify-between items-center gap-4 text-sm">
                    <div>
                        <img src={imgFooter} alt="Footer logo" className="w-32 sm:w-40 md:w-52 lg:w-80" />
                    </div>
                    <ul className="flex max-md:gap-2 gap-4 text-[#3B3C4A]">
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Cookie Policy</a></li>
                    </ul>
                </div>
            </div>
        </footer>             
    )
}

export default Footer;