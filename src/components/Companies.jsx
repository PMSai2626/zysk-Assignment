import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';
import logo6 from '../assets/logo6.png';
import Features from './Features';

const Companies = () => {
  return (
    <>
    <div className="text-center p-8 mt-20">
      <h3 className="text-2xl text-gray-700 font-bold mb-8">Join 4,000+ companies already growing</h3>
      <div className="overflow-x-auto">
        <ul className="flex justify-center gap-6">
          <li className="flex items-center mr-10 w-32 p-4">
            <img src={logo1} alt="Boltshift" className="max-w-full max-h-full mb-2" />
            <span className="text-lg font-bold md:text-2xl ml-0">Boltshift</span>
          </li>
          <li className="flex items-center ml-10 w-32 p-4">
            <img src={logo2} alt="Lightbox" className="max-w-full max-h-full mb-2" />
            <span className="text-lg md:text-2xl font-bold ml-2">Lightbox</span>
          </li>
          <li className="flex items-center ml-10 w-32 p-4">
            <img src={logo3} alt="FeatherDev" className="max-w-full max-h-full mb-2" />
            <span className="text-lg md:text-2xl font-bold ml-2">FeatherDev</span>
          </li>
          <li className="flex items-center ml-20 w-32 p-4">
            <img src={logo4} alt="Spherule" className="max-w-full max-h-full mb-2" />
            <span className="text-lg md:text-2xl font-bold ml-2">Spherule</span>
          </li>
          <li className="flex items-center ml-10 w-32 p-4">
            <img src={logo5} alt="GlobalBank" className="max-w-full max-h-full mb-2" />
            <span className="text-lg md:text-2xl  font-bold ml-2">GlobalBank</span>
          </li>
          <li className="flex items-center ml-20 w-32 p-4">
            <img src={logo6} alt="Nietzsche" className="max-w-full max-h-full mb-2" />
            <span className="text-lg md:text-2xl font-bold ml-2">Nietzsche</span>
          </li>
        </ul>
      </div>
    </div>
    <Features />
    </>
  );
};

export default Companies;
