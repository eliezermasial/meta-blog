import { useContext } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Post from '../../components/Post';
import { useFetch } from '../../utils/Hooks';
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../../utils/Context/ThemeContext';


function SinglePost () {
    const { theme } = useContext(ThemeContext);
    const postId = useParams();

    const apiUrl = `${import.meta.env.VITE_API_URL}/posts/${postId.i}`;
    const { data, loading, error } = useFetch(apiUrl);
    
    const userApi = data?.userId? `${import.meta.env.VITE_API_URL}/users/${data.userId}`: null;
    const { data: userData } = useFetch(userApi);
    console.log("autheur",userData);
    
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
                    className={`w-32 h-32 border-[10px] 
                    ${theme === 'dark' ? 'border-blue-600' : 'border-[#181A2A]'} 
                     border-t-transparent rounded-full`}
                />
                </div>
            }
            {!loading && !error && (
                <>
                    <Post data={data} author={userData} />
                </>
            )}
        </div>
    )
}

export default SinglePost;