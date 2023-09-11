import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from './axios'
import requests from './request'

function Banner() {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return requests;
        }

        fetchData();
    }, [])

    function turncate(string,n){
        if(string?.length>n){
            return string.substr(0,n-1)+'...'
        }else{
            return string
        }
    }

    console.log(movie)
    return (
        <header className='banner' style={
            {
                backgroundSize: "cover",
                backgroundImage: `url('http://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
                backgroundPosition: "center center"
            }
        }>
            <div className='banner_content'>
                <h1 className='banner_title'>{movie.name}</h1>
                <div>
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>MYLIST</button>
                    <h1 className='banner_desc'>{turncate(movie.overview,150)}</h1>
                </div>
            </div>
            <div className='banner_fadeBottom'>
            </div>
        </header>
    )
}

export default Banner
