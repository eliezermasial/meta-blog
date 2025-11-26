import { useEffect, useMemo, useState, useCallback } from "react";
import  awaitingLOading  from "../../lib/req";



// Ce hook permet de récupérer des données depuis une URL donnée
// Il gère les états de chargement, d'erreur, et stocke les données reçues
// Il simule un délai de chargement de 2 secondes avant de faire la requête réelle
export const useFetch = (url) => {

    const [loading, setLoading] = useState(true);
    const [error, setError] =useState(null);
    const [data, setData] = useState();

    useEffect(() => {

        async function fetchdata() {
            try {

                setLoading(true);
                const cachedData = JSON.parse(localStorage.getItem(url));

                if(cachedData) {
                    setData(cachedData);
                    setLoading(false);

                    return;
                }

                await awaitingLOading(2000);

                const response = await fetch(url);
                const dataJson = await response.json();

                setData(dataJson);

                localStorage.setItem(url, JSON.stringify(dataJson));// Stocke les données dans le localStorage
                
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchdata();

    }, [url]);

    return{loading, error, data};
}

/**
 * useLoadMore
 * @param {Object} params
 * @param {Array|undefined} params.pageData - données brutes de la page courante (from useFetch)
 * @param {Array|undefined} params.postsWithAuthor - données enrichies (pageData transformé)
 * @param {boolean} params.loading - loading flag from useFetch
 * @param {number} params.limit - limite par page (ex: 6)
 * @param {Function} params.setPage - setter de la page (from parent useState)
 *
 * @returns {Object} { posts, initialLoading, hasMore, handleLoadMore, resetPosts }
 */
export const useLoadMore = ({ pageData, postsWithAuthor, loading, limit, setPage }) => {
    const [posts, setPosts] = useState([]);
    const [initialLoading, setInitialLoading] = useState(false);

    // Met à jour les posts lorsque pageData ou postsWithAuthor changent.
    useEffect(() => {
        if(Array.isArray(pageData) && pageData.length > 0) {
            setPosts((prev) => {
                const existingIds = new Set(prev.map(p => p.id));
                const newPosts = Array.isArray(postsWithAuthor) ?
                postsWithAuthor.filter(p => !existingIds.has(p.id)) : [];

                return [...prev, ...newPosts];
            })

            if(!initialLoading) setInitialLoading(true);

        } else if (!pageData && !loading && !initialLoading) {
            setInitialLoading(true);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageData, postsWithAuthor, loading]);

    const hasMore = Array.isArray(pageData)  ? pageData.length === limit : false ;
    
    // Mémorise la fonction handleLoadMore pour éviter les recréations inutiles
    const handleLoadMore = useCallback(() => {
        if(hasMore && !loading) {
            setPage((prev) => prev + 1);
        }
    }, [hasMore, loading, setPage]);

    // Fonction pour réinitialiser les posts (utile si on veut recharger depuis le début)
    const resetPosts = useCallback(() => {
        setPosts([]);
        setInitialLoading(false);
    }, []);

    return { posts, initialLoading, hasMore, handleLoadMore, resetPosts };
}

// Ce hook transforme un tableau de posts en y ajoutant les informations de l'auteur
// Pour chaque post, il cherche dans la liste des utilisateurs l'auteur correspondant via userId
// Puis ajoute les propriétés authorName et authorEmail au post
// Si aucun auteur n'est trouvé, il met "Inconnu" par défaut
// useMemo est utilisé pour ne recalculer le tableau que si posts ou users changent
export const usePostsWithAuthor = (posts, users) => {
    return useMemo(() => {
        if (!posts || !users) return [];

        return posts.map(post => {
            const author = users.find(user => user.id === post.userId);
            return {
                ...post,
                authorName: author?.name || "unkown",
                authorEmail: author?.email || "unkown"
            };
        });
    }, [posts, users]);
};

/**
 * useMediaQuery
 * @param {string} query - media query string (e.g., '(max-width: 600px)')
 * @returns {boolean} - true if the media query matches, false otherwise
 */
export const useMediaQuery = (query) => {
    
    // Initialise l'état matches avec la correspondance actuelle du query passé en paramètre
    const [matches, setMatches] = useState(() => window.matchMedia(query).matches);
    
    useEffect(() => {
        const mediaQueryList = window.matchMedia(query); // Crée un MediaQueryList pour le query passé en paramètre
        const handleChange = (e) => {setMatches(e.matches);}; // Met à jour l'état matches lorsque la correspondance change

        mediaQueryList.onchange = handleChange; // Ajoute un écouteur d'événement pour les changements de correspondance
        return () => {
            mediaQueryList.onchange = null; // Clean up the event listener
        };
    }, [query]);

    return matches;
}