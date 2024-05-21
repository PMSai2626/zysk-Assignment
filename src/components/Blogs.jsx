import blog1 from '../assets/blog1.png';
import blog2 from '../assets/blog2.png';
import blog3 from '../assets/blog3.png';
import Trail from './Trail';

const Blogs = () => {
  return (
    <>
    <div className="max-w-6xl mx-auto mt-20 px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-xl font-semibold text-gray-600">Our Blogs</h2>
        <h1 className="text-3xl font-bold">Latest Blog Posts</h1>
        <p className="text-gray-500">Tools and strategies modern teams need to help their companies grow.</p>
      </div>
     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <img src={blog1} alt="Blog 1" className="w-full h-auto mb-4 rounded-lg" />
          <h2 className="text-lg font-semibold text-blue-500 mb-2">Design</h2>
          <h1 className="text-2xl font-bold mb-4">UX Review Presentations</h1>
          <p className="text-gray-600 mb-4">How do you create compelling presentations that wow your colleagues and impress your managers?</p>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            <div className="ml-4">
              <h2 className="font-bold text-gray-800">Andi Lane</h2>
              <h2 className="text-sm text-gray-600">19 Jan 2024</h2>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <img src={blog2} alt="Blog 2" className="w-full h-auto mb-4 rounded-lg" />
          <h2 className="text-lg font-semibold text-blue-500 mb-2">Design</h2>
          <h1 className="text-2xl font-bold mb-4">UX Review Presentations</h1>
          <p className="text-gray-600 mb-4">How do you create compelling presentations that wow your colleagues and impress your managers?</p>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            <div className="ml-4">
              <h2 className="font-bold text-gray-800">Andi Lane</h2>
              <h2 className="text-sm text-gray-600">18 Jan 2024</h2>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <img src={blog3} alt="Blog 3" className="w-full h-auto mb-4 rounded-lg" />
          <h2 className="text-lg font-semibold text-blue-500 mb-2">Design</h2>
          <h1 className="text-2xl font-bold mb-4">UX Review Presentations</h1>
          <p className="text-gray-600 mb-4">How do you create compelling presentations that wow your colleagues and impress your managers?</p>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            <div className="ml-4">
              <h2 className="font-bold text-gray-800">Andi Lane</h2>
              <h2 className="text-sm text-gray-600">20 Jan 2024</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Trail />
    </>
  );
};

export default Blogs;
