/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_MOVIE_API_TOKEN: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmRkYmE5NGRhMjdjOGE1NWYyNTcwNzJlNTk0MzFjZCIsIm5iZiI6MTcyMzczOTc4MS4wMTEzMzIsInN1YiI6IjY2YmEzOTI1MjlhZDFhMGVhOTFhZDdmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ApDThnBaoGmGPj-0n7zIh-ADlFk2uCIImLo-HHj2s0s`,
        NEXT_PUBLIC_MOVIE_POPULAR_API_URL: `https://api.themoviedb.org/3/movie/popular`,
        NEXT_PUBLIC_MOVIE_GENRES_API_URL: `https://api.themoviedb.org/3/genre/movie/list`,
        NEXT_PUBLIC_MOVIE_COMING_SOON_API_URL: `https://api.themoviedb.org/3/movie/upcoming`,
        NEXT_PUBLIC_MOVIE_TOPRATED_API_URL: `https://api.themoviedb.org/3/movie/top_rated`,
        NEXT_PUBLIC_SERIALS_POPULAR_API_URL: `https://api.themoviedb.org/3/tv/popular`,
        NEXT_PUBLIC_SERIALS_GENRES_API_URL: `https://api.themoviedb.org/3/genre/tv/list`,
        NEXT_PUBLIC_SERIALS_COMING_SOON_API_URL: `https://api.themoviedb.org/3/tv/on_the_air`,
        NEXT_PUBLIC_SERIALS_TOPRATED_API_URL: `https://api.themoviedb.org/3/tv/top_rated`,
        NEXT_PUBLIC_GAMES_API_TOKEN: `466f377663d04575ab5dba926d5d00be`,
        NEXT_PUBLIC_GAMES_URL: `https://api.rawg.io/api/games`,
        NEXT_PUBLIC_GAMES_GENRES_URL: `https://api.rawg.io/api/genres`,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.tmdb.org'
            },
            {
                protocol: 'https',
                hostname: 'via.placeholder.com'
            },
            {
                protocol: 'https',
                hostname: 'media.rawg.io'
            }
        ],
    },
};

export default nextConfig;