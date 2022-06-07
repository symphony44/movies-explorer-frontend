import './FilterCheckbox.css';

function FilterCheckbox({ switchShortMovie, label, isActive }) {
  return (
    <label className='filter-checkbox'>
      <p className='filter-checkbox__label'>{label}</p>
      <input className='filter-checkbox__input' type='checkbox' checked={isActive} onChange={switchShortMovie} />
      <span className='filter-checkbox__switch' />
    </label>
  );
}

export default FilterCheckbox;