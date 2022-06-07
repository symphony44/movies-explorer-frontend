import PopupMobileMenu from '../Popups/PopupMobileMenu/PopupMobileMenu';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import icon from '../../images/account_icon.svg';
import './Navigation.css';

function Navigation({ type }, props) {
  const setActiveMenuLink = ({ isActive }) => isActive ? `navigation-${type}__link-active` : `navigation-${type}__link`;

  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  React.useEffect(() => {
    setMenuIsOpen(false);
  }, [props.loggedIn])

  const handleClick = () => {
    if (!menuIsOpen) {
      setMenuIsOpen(true);
    } else {
      setMenuIsOpen(false);
    }
  }

  return (
    <nav className={`navigation-${type}`}>
      {type === 'header' ?  
       <ul className='navigation-header__list'>
          <Logo />
          <li className='navigation-header__list-item navigation-header__movies'>
            <Link className='navigation-header__link' to='/movies'>Фильмы</Link>
            <Link className='navigation-header__link' to='/saved-movies'>Сохранённые фильмы</Link>
          </li>
          <button className='header__menu-btn' onClick={handleClick} type='button'></button>
          {menuIsOpen && <PopupMobileMenu handleClick={handleClick} />}
          <li className='navigation-header__list-item navigation-header__list-item_with-btn'>
            <Link className='navigation-header__profile-btn' to='/profile'>
              <p className='navigation__profile-text'>Аккаунт</p>
              <div className='navigation__profile-icon-container'>
                <img className='navigation__profile-icon' src={icon} alt='#' />
              </div>  
            </Link>
          </li>
        </ul>
        :
        <ul className='navigation-menu__list'>
          <li className='navigation-menu__list-item'>
            <NavLink className={setActiveMenuLink} to='/'>Главная</NavLink>
          </li>
          <li className='navigation-menu__list-item'>
            <NavLink className={setActiveMenuLink} to='/movies'>Фильмы</NavLink>
          </li>
          <li className='navigation-menu__list-item'>
            <NavLink className={setActiveMenuLink} to='/saved-movies' >Сохранённые фильмы</NavLink>
          </li>
          <li className='navigation-menu__list-item'>
            <Link className='navigation-menu__profile-btn' to='/profile'>
              <p className='navigation__profile-text'>Аккаунт</p>
              <div className='navigation__profile-icon-container'>
                <img className='navigation__profile-icon' src={icon} alt='#' />
              </div>
            </Link>
          </li>
        </ul>} 
    </nav>
  );
}

export default Navigation;