import './Form.css';
import Logo from '../Logo/Logo';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Form(props) {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [formValidity, setFormValidity] = useState({
    emailValid: true,
    passwordValid: true
  });

  const { name, email, password } = formValues;

  const { emailValid, passwordValid } = formValidity;

  const location = useLocation();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prevState => ({ ...prevState, [name]: value }));
  }
  
  return (
    <section className='register root__container'>
      <Logo />
      <h1 className='register__title'>{location.pathname === '/signup' ? 'Добро пожаловать!' : 'Рады видеть!'}</h1>
      <form className='register__form'>
        {location.pathname === '/signup' &&
          <label className='register__label'>
            Имя
            <input className='register__input' placeholder='Vitaly' type='text' name='name' value={name} onChange={handleInputChange} />
          </label>
        }
        <label className='register__label'>
          E-mail
          <input className='register__input' placeholder='Vitaly@vinnitsya.ua' type='email' name='email' value={email} onChange={handleInputChange} />
        </label>
        <label className='register__label'>
          Пароль
          <input className='register__input' placeholder='Password' type='password' name='password' minLength={8} value={password} onChange={handleInputChange} />
        </label>
        <p className={`register__error ${!(emailValid & passwordValid) && 'register__error_visible'}`} >Что-то пошло не так...</p>
      </form>
      {location.pathname === '/signup' ? 
        <> <button className='register__signup'>Зарегистрироваться</button>
        <span className='register__caption'>Уже зарегистрированы?<Link className='register__link' to='/signin'>Войти</Link></span> </>
        : 
        <> <button className='register__signin'>Войти</button>
        <span className='register__caption'>Ещё не зарегистрированы?<Link className='register__link' to='/signup'>Регистрация</Link></span> </>
      }
    </section>
  );
}

export default Form;