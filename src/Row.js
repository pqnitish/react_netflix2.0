import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "./axios";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movieData, setMovieData] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchMovieData() {
      const request = await axios.get(fetchUrl);
      setMovieData(request.data.results);
      return request;
    }
    fetchMovieData();
  }, [fetchUrl]);
  //console.log(movieData);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movieData.map((movie) => 
           ( (isLargeRow && movie.poster_path) ||
            (!isLargeRow && movie.backdrop_path)) &&(
                <img
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
         
        )}
      </div>
    </div>
  );
}

export default Row;
