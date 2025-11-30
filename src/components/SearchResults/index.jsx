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
    <section className="bg-white mt-20 py-4">
      
      <div className="flex items-center justify-between dark:bg-[#1f1f2a] rounded shadow mt-6 mb-10 p-4">
        <h2 className={`font-['Work_Sans'] font-bold text-2xl text-gray-800 leading-6`}>
          <span>{results.length}</span> Résultats pour « {query} »
        </h2>
        {typeof onClear === "function" && (
          <button onClick={onClear} aria-label="Effacer la recherche"
            className="text-sm text-gray-500 hover:underline ml-3"
          >
            Effacer
          </button>
        )}
      </div>
      
      {Array.isArray(results) && results.length === 0 ? (
        <div className="py-6 text-gray-600 dark:text-gray-300">
          <p>Aucun résultat trouvé pour « {query} »</p>
        </div>
        ) : (
          <div className="flex flex-wrap p-2 gap-6 mt-10 bg-red">
            {results.map((post, index) => (
              <div key={index} className="p-2 dark:bg-[#1f1f2a] rounded shadow  flex justify-between w-full" >
                <div className="flex justify-around gap-6">
                  <img src="assets/rectangle.png" loading='lazy' className="w-52 " alt="try image" />
                  <p className={`mt-4 w-72 font-['Work_Sans'] ${theme === 'dark' ? 'text-white' : 'text-[#181A2A]'} font-semibold text-xl line-clamp-2`}>
                    {post.title}
                  </p>
                </div>
                <div className="flex items-center text-[#97989F] gap-2 pr-8">
                  <img src="/assets/small.png" loading='lazy' alt="petit image" className="w-8 h-8 rounded-full" />
                  <span className="text-sm font-['Work_Sans'] leading-5">{post.authorName || "Auteur inconnu"}</span>
                  <span className="text-sm font-['Work_Sans'] leading-5">August 20, 2022</span>
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