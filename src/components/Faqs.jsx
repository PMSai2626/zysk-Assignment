import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import Blogs from './Blogs';


const FAQ = () => {
  const faqData = [
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
    },
    {
      question: 'Can I change my plan later??',
      answer: 'Yes, you can change your plan at any time. Just contact our support team, and they\'ll assist you with the process.'
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'Yes, you can change your plan at any time. Just contact our support team, and they\'ll assist you with the process.'
    },
    {
      question: 'Can other info be added to an invoice?',
      answer: 'Yes, you can change your plan at any time. Just contact our support team, and they\'ll assist you with the process.'
    },
    {
      question: 'How does billing work?',
      answer: 'Yes, you can change your plan at any time. Just contact our support team, and they\'ll assist you with the process.'
    },
    {
      question: 'How do I change my account email?',
      answer: 'Yes, you can change your plan at any time. Just contact our support team, and they\'ll assist you with the process.'
    },
  
  ];


  const [expandedItems, setExpandedItems] = useState([]);

  const toggleExpand = (index) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter((item) => item !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  return (
    <>
    <div className="max-w-lg mx-auto text-center mt-20">
      <h6 className="text-blue-600 text-4xl pt-10 font-bold">Frequently Asked Questions</h6>
      <p className="text-gray-600">Everything you need to know about the product and billing.</p>

      <div className="mt-10">
        <ul className="text-left">
          {faqData.map((faq, index) => (
            <li key={index} className="mb-8">
              <div className="flex justify-between items-center">
                <h3 className='text-lg'>{faq.question}</h3>
                <button onClick={() => toggleExpand(index)} className="focus:outline-none">
                  {expandedItems.includes(index) ? <FaMinus className="text-gray-600" /> : <FaPlus className="text-gray-600" />}
                </button>
              </div>
              {expandedItems.includes(index) && (
                <p className="text-gray-600 mt-2">
                  {faq.answer}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="max-w-lg mx-auto text-center mt-10">
      <div className="flex items-center justify-center">
        <FaUser className="text-5xl md:text-6xl lg:text-7xl text-gray-600" />
      </div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-4">Still have questions?</h1>
      <p className="text-base md:text-lg lg:text-xl text-gray-600 mt-4">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
      <button className="mt-6 px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">Get in touch</button>
    </div>
    <Blogs />
    </>
  );
};



export default FAQ
