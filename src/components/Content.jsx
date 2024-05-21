import { FaArrowRight, FaPlay } from 'react-icons/fa';
import Graph from './Graph';

const NewFeature = () => {
  return (
    <>
    <div className="flex flex-col items-center mt-6 space-y-4 px-4 sm:px-6 lg:px-8">
      <div className="bg-gray-100 p-0 rounded-3xl shadow-md flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
        <h3 className="text-blue-600 bg-white p-0 rounded-2xl border-2 border-gray-400">New feature</h3>
        <h3 className="text-blue-600">Check out the team dashboard</h3>
        <FaArrowRight className="text-blue-600" />
      </div>

      <div className="text-center max-w-lg mx-auto">
      <div className="flex justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 whitespace-nowrap">Beautiful analytics to grow smarter</h1>
        </div>
        <p className="text-gray-600 mt-4 sm:mt-6">
          Powerful, self-serve product and growth analytics to help you convert, 
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        <div className="mt-4 sm:mt-6 space-x-2 flex flex-col sm:flex-row justify-center">
          <button className="bg-white text-blue-500 border border-blue-500 px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 flex items-center justify-center space-x-2 mb-2 sm:mb-0">
            <FaPlay className="text-blue-500" />
            <span>Demo</span>
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">Sign up</button>
        </div>
      </div>
    </div>
    <Graph />
    </>
  );
};

export default NewFeature;
