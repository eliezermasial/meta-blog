import Header from '../Header';
import Footer from '../Footer';
import { useContext } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from '../../utils/Context/ThemeContext';


function Layout() {

  const {theme} = useContext(ThemeContext);

  return (
    <motion.div initial={false} animate={{backgroundColor: theme === 'dark' ? '#242535' : '#FFFF',}}
      transition={{ type: 'spring', stiffness: 400, damping: 30,}} className='transition-all duration-200'
      >
        <Header />

        <motion.main className="container mx-auto font-normal overflow-x-hidden
          leading-6 tracking-normal max-md:px-4 md:px-4 lg:px-4 xl:px-4 py-24"
        >
          <Outlet />
        </motion.main>

        <Footer />
    </motion.div>
  )
}

export default Layout
