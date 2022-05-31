import Preloader from '../Preloader/Preloader';
import Navigation from '../Navigation/Navigation';
import MoreButton from './MoreButton/MoreButton';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';

function Movies({ movies }) {
  return (
    <>
      <Navigation type='header'/>
      <SearchForm />
      {/* <Preloader /> */}
      <MoviesCardList movies={movies} />
      <MoreButton />
    </>
  );
}

export default Movies;