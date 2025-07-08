import { useContext } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import HeroImage from '../../components/HeroImage';
import Lastpost from '../../components/LastPost';
import {useFetch} from '../../utils/Hooks';
import { ThemeContext } from '../../utils/Context/ThemeContext';


function Home() {
  const { theme } = useContext(ThemeContext);
  const apiUrl = `${import.meta.env.VITE_API_URL}/posts`;
  const {data, loading, error} = useFetch(apiUrl);

  return (
    <div>
      {loading && <div class="flex items-center justify-center h-screen">
         <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: 'linear',
        }}
        className={`w-44 h-44 border-[10px] 
          ${theme === 'dark' ? 'border-blue-600' : 'border-[#181A2A]'} 
          border-t-transparent rounded-full`}
      />
        </div>
      }
      {!loading && !error && (
        <>
          <HeroImage />
          <Lastpost data={data} />
        </>
      )}
      
    </div>
  )
}

export default Home
