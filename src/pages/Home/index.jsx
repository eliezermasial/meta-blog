import { useContext, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Lastpost from '../../components/LastPost';
import HeroImage from '../../components/HeroImage';
import SearchResults from '../../components/SearchResults';
import { ThemeContext } from '../../utils/Context/ThemeContext';
import { useFetch, useLoadMore, usePostsWithAuthor, useSearch } from '../../utils/Hooks';


function Home() {
  
  const { theme } = useContext(ThemeContext);
  const limit = 6;
  const [page,setPage] = useState(1);

  const apiUrl = `${import.meta.env.VITE_API_URL}/posts?_limit=${limit}&_page=${page}`;
  const apiUrlUsers = `${import.meta.env.VITE_API_URL}/users`;
  
  const {data:users} = useFetch(apiUrlUsers);
  const {data: pageData, loading, error} = useFetch(apiUrl);
  const postsWithAuthor = usePostsWithAuthor(pageData, users);

  const { posts, initialLoading, hasMore, handleLoadMore} = useLoadMore({
    pageData,
    postsWithAuthor,
    loading,
    limit,
    setPage,
  });

  const { results, query, clearSearch } = useSearch();


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
          {results != null &&
            <SearchResults results={results} query={query} onClear={clearSearch} />
          }

          {results == null &&
            <>
              <Lastpost data={posts} />
              <div className="flex justify-center my-8">
                { hasMore ? (
                  <button onClick={handleLoadMore} disabled={loading}
                    className="px-4 py-2 bg-[#4b6bfbc0] text-white rounded flex items-center justify-center gap-2 hover:bg-blue-700
                    transition disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {loading ? <span className="loader"></span> : 'load more'}
                  </button>
                ) : (
                  <p>No more posts to load.</p>
                )}
              </div>
            </>
          }
        </>
      )}
    </div>
  )
}

export default Home

