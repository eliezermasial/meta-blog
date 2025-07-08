import { useContext } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import {useFetch, usePostsWithAuthor} from '../../utils/Hooks';
import HeroBlog from "../../components/HeroBlog";
import Lastpost from "../../components/LastPost";
import { ThemeContext } from '../../utils/Context/ThemeContext';


function Blog () {
    
    const { theme } = useContext(ThemeContext);
    const apiUrl = `${import.meta.env.VITE_API_URL}/posts`;
    const apiUrlUsers = `${import.meta.env.VITE_API_URL}/users`;

    const {data:users} = useFetch(apiUrlUsers);
    const {data, loading, error} = useFetch(apiUrl);
    const postsWithAuthor = usePostsWithAuthor(data, users);

    return (
        <div>
        {loading && <div className="flex items-center justify-center h-screen">
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
                <HeroBlog />
                <Lastpost data={postsWithAuthor} />
            </>
        )}
        </div>
    )
}

export default Blog