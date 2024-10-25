const BASE_URL = "https://api.themoviedb.org/3/";
const OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzFiNjVlYzk3NjZjNTkyMWIwOTgyMTA5ZDEzYTRlZCIsIm5iZiI6MTcyNjk0MzUyNC40ODE1NDEsInN1YiI6IjY2ZWUyMDA1OTJkMzk2ODUzODNhZThiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O4serx7hQhrRQcLbB3dApJ1r88ZJpGhjeUi5ovSKi84'
  }
};

/*-------------------------------------------------------
# Get a movies list filtered by name
---------------------------------------------------------*/
export const getMovieList = async (query) => {
  const SEARCH_STRING = `${BASE_URL}/search/movie?query=${query}`;
  try {
    const RESPONSE = await fetch(SEARCH_STRING, OPTIONS); 
    const LIST = await RESPONSE.json();
    return (LIST.results);
  } catch (error) {
    console.error(error)
  }
}