import React from "react";
import { useContext } from 'react';
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion , AnimatePresence } from 'framer-motion';
import { ThemeContext } from '../../utils/Context/ThemeContext';


function SearchResults({ results, query, onClear }) {

  const { theme } = useContext(ThemeContext);
  if (results === null) return null;

  return (
    <section className=" mt-20 py-4">
      <div className="flex items-center justify-between dark:bg-[#1f1f2a] rounded shadow mt-6 mb-10 p-4">
        <h2 className={`font-['Work_Sans'] font-bold text-lg md:text-2xl dark:text-white text-gray-800 leading-6`}>
          <span>{results.length}</span> Résultats pour « {query} »
        </h2>
        {typeof onClear === "function" && (
          <button onClick={onClear} aria-label="Effacer la recherche"
            className="text-sm text-gray-500 hover:underline ml-3"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>
      
      {Array.isArray(results) && results.length === 0 ? (
        <div className="py-6 text-gray-600 dark:text-gray-300">
          <p>Aucun résultat trouvé pour « {query} »</p>
        </div>
        ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-wrap p-2 gap-6 mt-10">
          {results.map((post, index) => (
            <div key={index} className="p-4 h-full max-md:min-h-[430px] dark:bg-[#1f1f2a] border border-[#E8E8EA]
             dark:border-[#242535] bg-white rounded shadow md:w-full flex flex-col justify-between md:flex-row gap-6"
            >
                <div className="md:flex md:gap-6">
                  <img src="assets/rectangle.png" loading="lazy" className="w-full md:w-52 max-md:mb-6 rounded" alt="try image"/>
                  <Link to={`/singlepost/${index}`} aria-label={`Voir le post ${post.title}`}>
                    <p className={`font-['Work_Sans'] md:w-80 pt-6 font-semibold text-lg
                      md:text-xl line-clamp-2 ${theme === 'dark' ? 'text-white' : 'text-[#181A2A]'}`}>
                      {post.title}
                    </p>
                  </Link>
                </div>
                <div className="flex items-center text-[#8588a3] gap-3 max-md:mt-auto md:px-3">
                  <img src="/assets/small.png" loading="lazy" alt="petit image" className="w-8 h-8 rounded-full"/>
                  <span className="text-sm font-['Work_Sans']">August 20, 2022</span>
                </div>
            </div>
          ))}
        </div>
        )
      }
    </section>
  );
}

export default SearchResults;