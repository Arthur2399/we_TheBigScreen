import { useState } from 'react';
import { MovieCard } from '../components';
import { Modal } from '../../../components/Modal';
import { useModal } from '../../../hooks';
import { MovieUpdate } from '../components/MovieUpdate';
import './MovieCards.css';

export const MovieCards = ({cardsMovies}) => {
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [movieId, setMovieId] = useState();



  return (
    <div className="cards-container ">
      {cardsMovies.map((movie) => (
        <MovieCard key={movie.id} {...movie} openModal={openModal} setMovieId={setMovieId} />
      ))}
      <Modal isOpen={isOpenModal} closeModal={closeModal} title="Actualizar pelicula" x={"80%"} y={"580px"}>
        <MovieUpdate movieId={movieId} />
      </Modal>
    </div>
  )
}
