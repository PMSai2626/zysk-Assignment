import Footer from "./Footer";

const Trail = () => {
    return (
        <>
      <div className="max-w-md mx-auto text-center mt-20">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Start Your Free Trial</h1>
        <p className="text-gray-600 mb-6">Join over 4,000+ startups already growing with Untitled.</p>
        <div className="flex justify-center space-x-4">
          <button className="px-6 py-3 border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none">Learn More</button>
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">Get Started</button>
        </div>
      </div>
      <Footer />
      </>
    )
  }
  
  export default Trail;
  