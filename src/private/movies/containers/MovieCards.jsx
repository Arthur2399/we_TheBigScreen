import { MovieCard } from '../components';
import { Modal } from '../../../components/Modal';
import { useModal } from '../../../hooks';
import { useGetMoviesList } from '../hooks/useGetMovies';
import { useEffect, useState } from 'react';
import { MovieUpdate } from '../components/MovieUpdate';
import './MovieCards.css';

export const MovieCards = () => {
  const [cardsMovies, setCardsMovies] = useState([])
  const [isOpenModal,openModal,closeModal] = useModal(false);
 const [movieId, setMovieId] = useState()

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
        <MovieCard key={movie.id} {...movie} openModal={openModal} setMovieId={setMovieId}/>
      ))}
      <Modal isOpen={isOpenModal} closeModal={closeModal} title="Actualizar pelicula" x={"80%"} y={"580px"}>
        <MovieUpdate movieId={movieId}/>
      </Modal>
  </div>
  )
}
