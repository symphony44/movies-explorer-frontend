import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';


function MoviesCard({ image, title, duration, trailerLink }) {

  const location = useLocation().pathname;

  const [saved, setSaved] = useState(false);
  const [imageHovered, setImageHovered] = useState(false);

  const calcDuration = (min) => {
    const hour = Math.floor(min / 60);
    const minute = Math.floor(min % 60);
    return `${hour === 0 ? "" : `${hour}ч`} ${minute}м`;
  }

  const handleMouseEnter = () => setImageHovered(true);
  const handleMouseLeave = () => setImageHovered(false);

  return (
    <article className='movie'>
      <a className='movie__link' href={trailerLink} target='_blank' rel='noopener noreferrer' >
        <img className='movie__image' src={image} alt={`Эпизод из фильма ${title}`}
            />
      </a>
      {
        location === '/movies' ?
      <div className='movie__info'>
        <div className='movie__details'>
          <h2 className='movie__title'>{title}</h2>
          <span className='movie__duration'>{calcDuration(duration)}</span>
        </div>  
          <button className={`movie__btn ${saved && 'movie__btn_type_saved'} ${!saved && 'movie__btn_type_save'}`}
            type='button' onClick={() => setSaved(!saved)} ></button>
      </div>
          :
      <div className='movie__info'  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className='movie__details' >
          <h2 className='movie__title'>{title}</h2>
          <span className='movie__duration'>{calcDuration(duration)}</span>
        </div>
        <button className={`movie__btn ${imageHovered && 'movie__btn_type_remove'}`}
            type='button' onClick={() => console.log('Фильм удалён')}></button>
      </div>
      }
      
    </article >
  );
}

export default MoviesCard;