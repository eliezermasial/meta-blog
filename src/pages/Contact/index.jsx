import { useContext } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ThemeContext } from '../../utils/Context/ThemeContext';

function Contact () {
    const { theme } = useContext(ThemeContext);

    return (
        <div>
            <div class="max-w-5xl mx-auto flex flex-col gap-10 pt-5">
                <h2 className={`font-semibold text-xl md:text-2xl ${theme === 'dark' ? 'text-white' : 'text-[#181A2A]'}`}>Contactez-nous</h2>
                <form>
                    <div className="mb-4">
                        <label for="username" className={`font-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#181A2A]'} `}>Nom d'utilisateur</label>
                        <input type="text" id="username" className="w-full py-4 px-4 rounded-lg bg-[#F4F4F5] outline-none " />
                    </div>
                    <div className="mb-4">
                        <label for="mail" className={`font-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#181A2A]'} `}>Adresse mail</label>
                        <input type="text" id="mail" className="w-full py-4 px-4 rounded-lg bg-[#F4F4F5] outline-none "/>
                    </div>
                    <div className="mb-4">
                        <label for="subject" className={`font-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#181A2A]'} `}>Object du message</label>
                        <input type="text" id="subject" className="w-full py-4 px-4 rounded-lg bg-[#F4F4F5] outline-none "/>
                    </div>
                    <div className="mb-4">
                        <label for="message" className={`font-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#181A2A]'} `}>Message</label>
                        <textarea id="message" cols="30" rows="10" className="w-full py-4 px-4 rounded-lg bg-[#F4F4F5] outline-none "></textarea>
                    </div>
                    <div className="flex justify-center">
                        <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} type="submit" className="w-52 text-center font-medium  hover:bg-blue-700 transition bg-[#4B6BFB] px-4 py-1 rounded text-white">
                            Envoyer
                        </motion.button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;