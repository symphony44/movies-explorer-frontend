import './FilterCheckbox.css';

function FilterCheckbox({ onChange, label, defaultChecked }) {
  return (
    <label className='filter-checkbox'>
      <p className='filter-checkbox__label'>{label}</p>
      <input className='filter-checkbox__input' type='checkbox' onChange={onChange} defaultChecked={defaultChecked} />
      <span className='filter-checkbox__switch' />
    </label>
  );
}

export default FilterCheckbox;