import { FaUser } from 'react-icons/fa';
import MobileView from './MobileView';

const Sisyphus = () => {
  return (
    <>
    <div className="text-center mt-20 md:mt-20">
      <h6 className="text-blue-600 font-bold pt-5 md:pt-5">Sisyphus</h6>
      <h1 className="text-black text-5xl font-semibold">We’ve been using Untitled to kick start every <br className="hidden md:inline" /> new project and can’t imagine working without it.</h1>
      <div className="grid justify-center items-center mt-4">
        <FaUser className="text-3xl ml-10 text-blue-600 mr-2" /> <br/>
        <h1 className="text-black text-lg font-semibold">Candice Wu</h1> 
      </div>
      <h6 className="text-gray-600">Product Manager, Sisyphus</h6>
    </div>
    <MobileView />
    </>
  );
};

export default Sisyphus;
