import React, { useEffect, useState } from 'react'
import './Row.css'
import requests from './request';
import axios from './axios'

function Row({title, fetchUrl, isLargeRow=false}) {
    const [movies, setMovies] = useState([]);
    const base_url = "http://image.tmdb.org/t/p/original/"

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request;
        }

        fetchData();
    },[fetchUrl])
    
    console.log(movies)


  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row_posters'>
      {movies?.map(
        (movie)=>
        
        
        (
            

            <img 
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            key={movie.id}
            src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
            }`} alt={movie.name}/>
        )
      )}
      </div>
    </div>
  )
}

export default Row
