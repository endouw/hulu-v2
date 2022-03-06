const API_KEY = process.env.API_KEY;


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    fetchTrending: {
        title:'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },

    fetchTopRatedMovies: {
        title:"Top Rated",
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    },

    fetchHorrorMovies: {
        title:"Horror",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    },

    fetchRomanceMovies: {
        title:"Romance",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    },

    fetchMysteryMovies: {
        title:"Mystery",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    },

    fetchSciFiMovies: {
        title:"Sci-Fi",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    },

    fetchWesternMovies: {
        title:"Western",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
    },

    fetchAnimationMovies: {
        title:"Animation",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    },

    fetchTVSeries: {
        title:"TV-Series",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
    },

};