import macmoji from '../assets/mac 1.png';
import Codewriter from './CodeWriter';

function Banner() {
  return (
    <div className="flex h-96 align-bottom items-center justify-around">
      <div className="grid grid-cols-5 gap-2 w-full">
        <div className="col-start-3">
          <img src={macmoji} className='w-36 absolute' alt="helisson on mac"/>
          <h1 className="text-gray-200 text-6xl ml-24 mt-10 font-bold">Helisson</h1>
        </div>
        <div className="row-auto grid grid-cols-2">
          <div className="col-start-2">
            <Codewriter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
