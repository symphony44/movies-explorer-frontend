import FilterCheckbox from '../../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm({ handleSearchButton, handleSearchQuery, searchQuery, isLoading, switchShortMovie, isActiveCheckbox }) {

  return (
    <div className='search-form root__container' >
      <div className='search-form__container '>
        <form className='search-form__form' onSubmit={handleSearchButton}>
          <input className='search-form__input' value={searchQuery} onChange={handleSearchQuery} placeholder={'Фильм'}></input>
          <button className='search-form__submit' disabled={isLoading || !searchQuery}>
            <span className='search-form__icon'></span>
          </button>
        </form>
        <FilterCheckbox switchShortMovie={switchShortMovie} label='Короткометражки' isActive={isActiveCheckbox}/>
        <div className='search-form__checkbox'>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;