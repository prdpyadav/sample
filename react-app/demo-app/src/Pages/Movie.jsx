import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../components/Card';

const Movie = () => {

    const [movie, setMovie] = useState([]);

    console.log(movie)
    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/trending/all/week?api_key=a8048c88841d1947ea18a343448e4679')
        .then((res)=>setMovie(res.data.results))
    },[])
  return (
    <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  p-4 gap-4 m-4">
            {movie.map((el) => {
                return (
                    <div key={el.id} className="border p-8 m-5  cursor-pointer">
                        
                        <Card value='movie' image={el.poster_path == null ? "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019": `https://image.tmdb.org/t/p/w500/${el.poster_path}`} type={el.media_type} name={el.title}  />
                        <p className={`${el.vote_average.toFixed(1)>7?('text-green-500'):('text-yellow-400')} font-bold`}> {el.vote_average.toFixed(1)} / 10</p>
                    </div>
                );
            })}
        </div>
  )
}

export default Movie