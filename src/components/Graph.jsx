import { useEffect, useRef } from 'react';
import { FaUser, FaChartLine, FaComments, FaCog, FaBell, FaEnvelope, FaTasks } from 'react-icons/fa';
import { HiOutlineUserCircle } from 'react-icons/hi';
import Chart from 'chart.js/auto';
import '../index.css'
import Companies from './Companies';

const Graph = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (chartRef.current.chartInstance) {
      chartRef.current.chartInstance.destroy();
    }

    chartRef.current.chartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['jul 3', 'jul 7', 'jul 15', 'jul 20', 'jul 23', 'jul 25', 'Jul 31'],
        datasets: [
          {
            label: 'Line 1',
            data: [500, 250, 300, 350, 400, 300, 600],
            borderColor: 'blue',
            borderWidth: 1,
            fill: false
          },
          {
            label: 'Line 2',
            data: [400, 300, 200, 350, 200, 500, 350],
            borderColor: 'green',
            borderWidth: 1,
            fill: false
          },
          {
            label: 'Line 3',
            data: [300, 300, 200, 350, 200, 500, 300],
            borderColor: 'red',
            borderWidth: 1,
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            max: 1000,
            ticks: {
              stepSize: 200,
              callback: function (value) {
                return value === 0 || value === 1000 || value === 800 || value === 600 || value === 400 || value === 200 ? value : '';
              }
            }
          }
        }
      }
    });
  }, []);



  return (
    <>
    <div className="container  mx-auto mt-20 border-8 border-gray-800 rounded-lg p-6 flex flex-wrap">
      <div className="flex-1 pr-4 w-full md:w-2/3 xl:w-3/4">
        <div className="flex justify-between items-center">
          <HiOutlineUserCircle className="text-4xl text-blue-300" />
          <h1 className="text-3xl font-bold">Stats for Olivia Rhya</h1>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md">Message</button>
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg shadow-md">Edit</button>
          </div>
        </div>

        <div className="flex mt-4">
          <div className="flex flex-col mr-6">
            <FaUser className="text-4xl text-blue-300" />
            <FaChartLine className="text-4xl text-blue-300 mt-4" />
            <FaComments className="text-4xl text-blue-300 mt-4" />
            <FaCog className="text-4xl text-blue-300 mt-4" />
            <FaBell className="text-4xl text-blue-300 mt-4" />
            <FaEnvelope className="text-4xl text-blue-300 mt-4" />
            <FaTasks className="text-4xl text-blue-300 mt-4" />
          </div>

          <div className="flex-grow">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">Profile Views</h2>
              <div className="flex items-center space-x-4">
                <button className="text-gray-600">12 Months</button>
                <button className="text-gray-600">30 Days</button>
                <button className="text-gray-600">7 Days</button>
              </div>
            </div>

            <div className="mt-6">
      <div className="relative chart-container">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>

            <div className="mt-8 flex flex-wrap justify-between">
              {/* Biggest Fans Section */}
              <div className="w-full lg:w-1/2 px-2">
                <h2 className="text-lg font-bold mb-4">Biggest Fans</h2>
                <div className="grid justify-between items-center mt-4">
                  {/* First Fan */}
                  <div className="flex items-center p-4 border border-gray-200 rounded-lg mb-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div> {/* Replace with icons */}
                    <div className="ml-4">
                      <h1 className="font-bold text-gray-800">Andi Lane</h1>
                      <h2 className="text-sm text-gray-600">@andi_lane</h2>
                    </div>
                    <div className="ml-auto">
                      <h1 className="font-semibold text-blue-500">23 Likes</h1> {/* Different number of likes */}
                    </div>
                  </div>
                  {/* Second Fan */}
                  <div className="flex items-center p-4 border border-gray-200 rounded-lg">
                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div> {/* Replace with icons */}
                    <div className="ml-4">
                      <h2 className="font-bold text-gray-800">Andi Lane</h2>
                      <h2 className="text-sm text-gray-600">@andi_lane</h2>
                    </div>
                    <div className="ml-20">
                      <h1 className="font-semibold text-blue-500">35 Likes</h1> {/* Different number of likes */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Favorite Designers Section */}
              <div className="w-full lg:w-1/2 px-2">
                <h2 className="text-lg font-bold mb-4">Favorite Designers</h2>
                <div className="grid justify-between items-center mt-4">
                  {/* First Designer */}
                  <div className="flex items-center p-4 border border-gray-200 rounded-lg mb-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div> {/* Replace with icons */}
                    <div className="ml-4">
                      <h2 className="font-bold text-gray-800">Andi Lane</h2>
                      <h2 className="text-sm text-gray-600">@andi_lane</h2>
                    </div>
                    <div className="ml-auto">
                      <h1 className="font-semibold text-blue-500">45 Likes</h1> {/* Different number of likes */}
                    </div>
                  </div>
                  {/* Second Designer */}
                  <div className="flex items-center p-4 border border-gray-200 rounded-lg">
                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div> {/* Replace with icons */}
                    <div className="ml-4">
                      <h2 className="font-bold text-gray-800">Andi Lane</h2>
                      <h2 className="text-sm text-gray-600">@andi_lane</h2>
                    </div>
                    <div className="ml-20">
                      <h1 className="font-semibold text-blue-500">27 Likes</h1> {/* Different number of likes */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-2 pl-1 w-full md:w-1/3 xl:w-1/4">
        <div className="h-full flex flex-col justify-between">
          <h2 className="text-lg font-bold">Anita Crus <br /> <span className="text-semibold font-light text-sm">Ackland, New Zealand </span></h2>

          <div className="flex items-center mt-1 justify-end">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <p className="ml-2 text-right text-white p-2 rounded-lg bg-blue-500">I will have a more thorough read and get back to you by tomorrow. Is that okay?</p>
          </div>

          <div className="flex items-center mt-1 justify-start">
            <div className="w-3 h-3 rounded-full bg-gray-400"></div>
            <p className="ml-2 text-left text-white p-2 rounded-lg bg-gray-500">Sounds perfect, thanks</p>
          </div>

          <div className="flex items-center mt-1 justify-end">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <p className="ml-2 text-right text-white p-2 rounded-lg bg-blue-500">Hey Anita, I have read through and made some notes:</p>
          </div>
        </div>
      </div>
    </div>
    <Companies />
    </>
  );
};

export default Graph;
