import { Promo } from './Promo/Promo';
import { About } from './About/About';
import { Technologies } from './Technologies/Technologies';
import { Student } from './Student/Student';

function Main(props) {
  return (
    <div className='main'>
      <Promo />
      <About />
      <Technologies />
      <Student />
    </div>
  );
}

export default Main;