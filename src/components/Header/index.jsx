import { Form, NavLink } from "react-router-dom";
import logo from '../../assets/Logo1.svg';


function Header () {
    return (
        <header className=" fixe z-10 w-full shadow-md">
            <nav className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 py-6">
                <a href="/">
                    <img src={logo} width={150} height={18} alt="Logo" />
                </a>

                <ul className="flex flex-wrap justify-center items-center gap-8 text-[#3B3C4A] font-['Work_Sans'] text-base font-normal leading-6 tracking-normal">
                    <li className=" hover:p-1 hover:bg-[#F4F4F5] hover:rounded-md "> <NavLink to="/" className={({ isActive }) => isActive ? "bg-[#F4F4F5] p-1" : ""}>Home</NavLink> </li>
                    <li className=" hover:p-1 hover:bg-[#F4F4F5] hover:rounded-md "> <NavLink to="/blog">Blog</NavLink> </li>
                    <li className=" hover:p-1 hover:bg-[#F4F4F5] hover:rounded-md "> <NavLink to="/siglePost">Single Post</NavLink> </li>
                    <li className=" hover:p-1 hover:bg-[#F4F4F5] hover:rounded-md "> <NavLink to="/pages">Pages</NavLink> </li>
                    <li className=" hover:p-1 hover:bg-[#F4F4F5] hover:rounded-md "> <NavLink to="/contact">Contact</NavLink> </li>
                </ul>

                <div className="flex items-center gap-4">
                    <div className="relative">
                        <input type="text" placeholder="Search"
                            className="bg-[#F4F4F5] outline-none w-[166px] h-[36px] px-3 pr-8 rounded-md text-sm"
                        />
                        <svg className="absolute right-3 top-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" >
                            <path d="M6.90906 2C5.93814 2 4.98903 2.28791 4.18174 2.82733C3.37444 3.36674 2.74524 4.13343 2.37368 5.03045C2.00213 5.92746 1.90491 6.91451 2.09433 7.86677C2.28375 8.81904 2.75129 9.69375 3.43783 10.3803C4.12438 11.0668 4.99909 11.5344 5.95135 11.7238C6.90362 11.9132 7.89067 11.816 8.78768 11.4444C9.6847 11.0729 10.4514 10.4437 10.9908 9.63639C11.5302 8.8291 11.8181 7.87998 11.8181 6.90906C11.818 5.60712 11.3008 4.35853 10.3802 3.43792C9.45959 2.51731 8.211 2.00008 6.90906 2Z"
                                stroke="#52525B" strokeWidth="1.5"
                            />
                            <path d="M10.5718 10.5716L14.0002 14" stroke="#52525B" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </div>
                    <button className="bg-[#F4F4F5] px-1 w-10 text-start rounded-full font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 bg-white h-4 rounded-full p-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                        </svg>

                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header;