import './Student.css';
import Title from '../../Title/Title';
import photo from '../../../images/my_photo.jpg';
import Portfolio from '../Portfolio/Portfolio';

export function Student() {
  return (
    <section className='student root__container' id='student'>
      <Title title='Студент' />
      <div className='student__biography-container'>
        <div className='student__biography-container-inner'>
          <div className='student__biography'>
            <h3 className='student__name'>Антон</h3>
            <p className='student__about'>Фронтенд-разработчик, 25 лет</p>
            <p className='student__description'>Я родился в Кировске, Мурманская Область. Живу в Нью-Йорке. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами, но с постоянной работы ещё не ушёл.</p>
          </div>
          <div className='student__social-links'>
            <a className='student__social-link' href='https://www.instagram.com/anthonyrichiee/' rel='noopener noreferrer' target='_blank'>Instagram</a>
            <a className='student__social-link' href='https://github.com/symphony44' rel='noopener noreferrer' target='_blank'>Github</a>
          </div>
        </div>
        <img className='student__photo' src={photo} alt='#' />
      </div>
      <Portfolio />
    </section>
  )
}