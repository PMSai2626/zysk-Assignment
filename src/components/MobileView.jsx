import FAQ from "./Faqs";
import all from '../assets/all.jpg';
import { FaInbox, FaComments, FaChartBar} from 'react-icons/fa';


const MobileView = () => {
  const features = [
    {
      icon: <FaInbox className="text-4xl text-gray-600 mb-2 mx-auto" />,
      title: 'Share team inboxes',
      description: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.'
    },
    {
      icon: <FaComments className="text-4xl text-gray-600 mb-2 mx-auto" />,
      title: 'Deliver instant answers',
      description: 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.'
    },
    {
      icon: <FaChartBar className="text-4xl text-gray-600 mb-2 mx-auto" />,
      title: 'Manage your team with reports',
      description: 'Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.'
    },
    
  ];
  return (
    <>
     <div className="relative grid   bg-center bg-cover">
  {/* Content with the graph */}
  <div className="text-center py-24">
    <h2 className="text-2xl text-blue-800">Features</h2>
    <h1 className="text-5xl font-bold">Cutting-edge features for advanced analytics</h1>
    <p className="text-gray-800 pt-5">Powerful, self-serve product and growth analytics to help you convert, <br />
      engage, and retain more users. Trusted by over 4,000 startups.</p>
  </div>
  <div className="grid justify-center items-center">
    <img src={all} alt="Mobile View" className="object-cover w-100 h-90" /> {/* Adjust the width and height here */}
  </div>
</div>
<ul className="grid md:grid-cols-3 gap-8 mt-10">
        {features.map((feature, index) => (
          <li key={index} className="text-center">
            {feature.icon}
            <h1 className="text-xl font-bold mb-2">{feature.title}</h1>
            <p className="text-sm md:text-base">{feature.description}</p>
          </li>
        ))}
      </ul>

      <FAQ />
    </>
  );
}

export default MobileView;
