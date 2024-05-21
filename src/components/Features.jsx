import { FaInbox, FaComments, FaChartBar, FaUserFriends, FaTools, FaUsers } from 'react-icons/fa';
import Sisyphus from './Sisyphus';

const Features = () => {
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
    {
      icon: <FaUserFriends className="text-4xl text-gray-600 mb-2 mx-auto" />,
      title: 'Connect with customers',
      description: 'Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.'
    },
    {
      icon: <FaTools className="text-4xl text-gray-600 mb-2 mx-auto" />,
      title: 'Connect the tools you already use',
      description: 'Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.'
    },
    {
      icon: <FaUsers className="text-4xl text-gray-600 mb-2 mx-auto" />,
      title: 'Our people make the difference',
      description: 'We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.'
    }
  ];

  return (

    <>
    <div className="text-center mt-10 md:mt-20">
      <h6 className="text-blue-600 font-bold pt-3 md:pt-5">Features</h6>
      <h1 className="text-black text-3xl font-bold">Analytics that feels like it’s from the future</h1>
      <p className="text-gray-600">Powerful, self-serve product and growth analytics to help you convert, engage, <br className="hidden md:inline" />
       and retain more users. Trusted by over 4,000 startups.</p>

      <ul className="grid md:grid-cols-3 gap-8 mt-10">
        {features.map((feature, index) => (
          <li key={index} className="text-center">
            {feature.icon}
            <h1 className="text-xl font-bold mb-2">{feature.title}</h1>
            <p className="text-sm md:text-base">{feature.description}</p>
          </li>
        ))}
      </ul>
    </div>

    <Sisyphus />
    </>
  );
};

export default Features;
