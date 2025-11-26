import { useContext, useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import HeroImage from '../../components/HeroImage';
import Lastpost from '../../components/LastPost';
import { useFetch, usePostsWithAuthor } from '../../utils/Hooks';
import { ThemeContext } from '../../utils/Context/ThemeContext';


function Home() {
  
  const { theme } = useContext(ThemeContext);
  const limit = 6;
  const [page,setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [initialLoading, setInitialLoading] = useState(false);

  const apiUrl = `${import.meta.env.VITE_API_URL}/posts?_limit=${limit}&_page=${page}`;
  const apiUrlUsers = `${import.meta.env.VITE_API_URL}/users`;
  
  const {data:users} = useFetch(apiUrlUsers);
  const {data: pageData, loading, error} = useFetch(apiUrl);
  const postsWithAuthor = usePostsWithAuthor(pageData, users);

  useEffect(() => {
    if(Array.isArray(pageData) && pageData.length > 0) {
      setPosts((prev) => {
        const existingIds = new Set(prev.map(p => p.id));
        const newPosts =  postsWithAuthor.filter(p => !existingIds.has(p.id));
        return [...prev, ...newPosts];
      });
      setInitialLoading(true);
    }else if (!pageData && !loading && !initialLoading) {
      setInitialLoading(true);
    }
  },[pageData,postsWithAuthor, loading, initialLoading]);

  const hasMore = Array.isArray(pageData)? pageData.length === limit : false ;
  const handleLoadMore = () => {
    if(hasMore && !loading)
    {
      setPage((prev) => prev + 1);
    }
  }

  return (
    <div>
      {!initialLoading && loading && <div class="flex items-center justify-center h-screen">
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

      {initialLoading && !error && (
        <>
          <HeroImage />
          <Lastpost data={posts} />
          <div className="flex justify-center my-8">
            { hasMore ? (
                <button onClick={handleLoadMore} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                  { loading ? 'chargement..' : 'load more'}
                </button>
            ) : (
              <p>No more posts to load.</p>
            )}
          </div>
        </>
      )}
      
    </div>
  )
}

export default Home