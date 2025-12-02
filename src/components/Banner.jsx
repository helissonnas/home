import macmoji from '../assets/mac 1.png';
import Codewriter from './CodeWriter';

function Banner() {
  return (
    <div className="flex h-64 md:h-96 align-bottom items-center justify-center md:justify-around">
      <div className="flex flex-col md:grid md:grid-cols-5 gap-2 w-full items-center">
        <div className="md:col-start-3 flex flex-col items-center md:block relative">
          <img src={macmoji} className='w-24 md:w-36 md:absolute' alt="helisson on mac"/>
          <h1 className="text-gray-200 text-4xl md:text-6xl md:ml-24 md:mt-10 font-bold text-center md:text-left">Helisson</h1>
        </div>
        <div className="md:row-auto md:grid md:grid-cols-2 mt-2 md:mt-0">
          <div className="md:col-start-2">
            <Codewriter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
