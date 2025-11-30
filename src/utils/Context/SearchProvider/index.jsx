import React, { useState } from "react";
import { SearchContext } from "../ThemeContext";

    
export const  SearchProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null); // null = pas de recherche, [] = recherche ok mais rien trouvé
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const clearSearch = () => {
    setQuery("");
    setResults(null);
    setError(null);
    setLoading(false);
  };

  return (
    <SearchContext.Provider value={{
        query, setQuery,
        results, setResults,
        loading, setLoading,
        error, setError,
        clearSearch
        }}
    >
      {children}
    </SearchContext.Provider>
  );
}