import { useState} from "react";
import SearchIcon from "./search.svg"
import './App.css';
import MovieCard from "./MovieCard";
const API_URL = 'http://www.omdbapi.com?apikey=aa05218f';


const App = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');
    const searchMovie = async (title) => {
        const response = await fetch(API_URL + '&s=' + title);
        const data = await response.json();

        setMovies(data.Search);
    }
    return (
        <div className="app">
            <h1>Movies</h1>
            <div className="search">
                <input
                    placeholder="Search for movies"
                    value = {search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <img src={SearchIcon} 
                alt = "Search"
                onClick={() => searchMovie(search)}
                />
            </div>

            {movies?.length > 0 
                ?(
                    <div className="container">
                        {movies.map((movie)=> (
                            <MovieCard movie = {movie} />
                        ))}
                    </div>
                ) :
                (   <div className="empty">
                        <h2> No Movies found </h2>
                    </div>
                ) }
           

        </div>
    );
}

export default App