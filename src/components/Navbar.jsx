import  { useState } from 'react';
import { FaReact } from 'react-icons/fa'; 
import { FaUserCircle } from 'react-icons/fa';
import Content from './Content';


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
    <nav className="p-4 text-blue-600">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <FaReact size={30} className="mr-2" />
            <span className="text-2xl font-bold">Untitled UI</span>
          </div>
          <ul className="hidden md:flex space-x-6 items-center">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li>
              <select className="bg-white text-blue-600 hover:underline focus:outline-none" onChange={(e) => window.location.href = e.target.value}>
                <option value="#" disabled selected>Products</option>
                <option value="#">Product 1</option>
                <option value="#">Product 2</option>
                <option value="#">Product 3</option>
              </select>
            </li>
            <li>
              <select className="bg-white text-blue-600 hover:underline focus:outline-none" onChange={(e) => window.location.href = e.target.value}>
                <option value="#" disabled selected>Resources</option>
                <option value="#">Resource 1</option>
                <option value="#">Resource 2</option>
                <option value="#">Resource 3</option>
              </select>
            </li>
            <li><a href="/" className="hover:underline">Pricing</a></li>
          </ul>
        </div>
        <div className="flex items-center md:hidden">
          <button onClick={handleMenuToggle} className="focus:outline-none mr-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <FaUserCircle size={30} className="text-blue-600" />
        </div>
        <div className="hidden md:flex items-center">
          <FaUserCircle size={30} className="text-blue-600" />
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <ul className="space-y-4 mt-4">
            <li><a href="/" className="hover:underline block">Home</a></li>
            <li>
              <select className="bg-white text-blue-600 hover:underline focus:outline-none w-full" onChange={(e) => window.location.href = e.target.value}>
                <option value="#" disabled selected>Products</option>
                <option value="#">Product 1</option>
                <option value="#">Product 2</option>
                <option value="#">Product 3</option>
              </select>
            </li>
            <li>
              <select className="bg-white text-blue-600 hover:underline focus:outline-none w-full" onChange={(e) => window.location.href = e.target.value}>
                <option value="#" disabled selected>Resources</option>
                <option value="#">Resource 1</option>
                <option value="#">Resource 2</option>
                <option value="#">Resource 3</option>
              </select>
            </li>
            <li><a href="/" className="hover:underline block">Pricing</a></li>
          </ul>
        </div>
      )}
    </nav>
   
    <Content />
    </>
    
  );
};

export default Navbar;
