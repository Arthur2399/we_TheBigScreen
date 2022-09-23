import './MovieCards.css';
import { MovieCard } from '../components';
import { useGetMoviesList } from '../hooks/useGetMovies';
import { useEffect, useState } from 'react';

export const MovieCards = () => {
  const [cardsMovies, setCardsMovies] = useState([])

  useEffect(() => {
      async function fetchData() {
          const respMov = await useGetMoviesList();
          setCardsMovies(respMov)
      }
      fetchData();
  }, [])

  return (
    <div className="cards-container ">
      {cardsMovies.map((movie)=>(
        <MovieCard key={movie.id} {...movie}/>
      ))  }
  </div>
  )
}
