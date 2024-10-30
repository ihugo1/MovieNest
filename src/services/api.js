const BASE_URL = "https://api.themoviedb.org/3/";
const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzFiNjVlYzk3NjZjNTkyMWIwOTgyMTA5ZDEzYTRlZCIsIm5iZiI6MTcyNjk0MzUyNC40ODE1NDEsInN1YiI6IjY2ZWUyMDA1OTJkMzk2ODUzODNhZThiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O4serx7hQhrRQcLbB3dApJ1r88ZJpGhjeUi5ovSKi84",
  },
};

/*-------------------------------------------------------
# Get a movies list filtered by name
---------------------------------------------------------*/
export const getMovieList = async (query) => {
  const SEARCH_STRING = `${BASE_URL}/search/movie?query=${query}`;
  try {
    const RESPONSE = await fetch(SEARCH_STRING, OPTIONS);
    const LIST = await RESPONSE.json();
    return LIST.results;
  } catch (error) {
    seterr
  }
};
/*-------------------------------------------------------
# Get Trending Movies
---------------------------------------------------------*/
export const getPopularMovies = async () => {
  const SEARCH_STRING = `${BASE_URL}/movie/popular`;
  try {
    const RESPONSE = await fetch(SEARCH_STRING, OPTIONS);
    const LIST = await RESPONSE.json();
    return LIST.results;
  } catch (error) {
    console.error(error);
  }
};
/*-------------------------------------------------------
# Get Top Rated
---------------------------------------------------------*/
export const getTopRatedMovies = async () => {
  const SEARCH_STRING = `${BASE_URL}/movie/top_rated`;
  try {
    const RESPONSE = await fetch(SEARCH_STRING, OPTIONS);
    const LIST = await RESPONSE.json();
    return LIST.results;
  } catch (error) {
    console.error(error);
  }
};
/*-------------------------------------------------------
# Get Movie Info
---------------------------------------------------------*/
export const getMovieInfo = async (id) => {
  const SEARCH_STRING = `${BASE_URL}/movie/${id}`;
  try {
    const RESPONSE = await fetch(SEARCH_STRING, OPTIONS);
    const MOVIE = await RESPONSE.json();
    return MOVIE;
  } catch (error) {
    console.error(error);
  }
};
/*-------------------------------------------------------
# Get Movie Images
---------------------------------------------------------*/
export const getMovieVideos = async (id) => {
  const SEARCH_STRING = `${BASE_URL}movie/${id}/videos`;
  try {
    const RESPONSE = await fetch(SEARCH_STRING, OPTIONS);
    const IMAGES = await RESPONSE.json();
    return IMAGES;
  } catch (error) {
    console.error(error);
  }
};