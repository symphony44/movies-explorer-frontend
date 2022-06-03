import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../Movies/SearchForm/SearchForm';

function SavedMovies({ savedMovies }) {
  return (
    <>
      <Navigation type='header'/>
      <SearchForm />
      <MoviesCardList movies={savedMovies} />
    </>
  );
}

export default SavedMovies;