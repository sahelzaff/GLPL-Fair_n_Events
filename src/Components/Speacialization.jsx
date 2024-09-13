import React from 'react';
import './Components.css';
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaBuilding } from 'react-icons/fa';

const Card = ({ icon, title, description, items }) => {
  return (
    <div  className="card py-6 shadow-lg">
      <div className="card-content">
        <div className="flex justify-center items-center card-icon z-10 pb-10">
          {icon}
        </div>
        <ul className="card-items z-10 text-start ">
          {items.map((item, index) => (
            <li key={index} className='font-poppins font-normal text-[14px]'>{item}</li>
          ))}
        </ul>
      </div>
      <div className="card-slant pt-48"></div>
      <div className="card-slant-content">
        <h3 className="card-title font-outfit text-2xl font-bold">{title}</h3>
        <p className="card-description font-poppins text-gray-100 text-[13px] pb-1">{description}</p>
      </div>
    </div>
  );
};

const Specialization = () => {
  const cardsData = [
    {
      icon: <FaBriefcase size={60} />,
      title: 'Corporate Sectors',
      description: 'Our Corporate Events deliver high-impact experiences, reflecting your brand\'s values and fostering meaningful connections.',
      items: [
        'Conferences and Seminars', 'Product Launches', 'Trade Shows and Expo', 'Team-Building Events', 
        'Meetings and Corporate Retreats', 'Awards and Recognition Events', 'Networking Events', 
        'Holiday and Celebration Events', 
        'Executive and Leadership Events', 'Sales and Incentive Events', 'Internal Company Events'
      ],
    },
    {
      icon: <FaGraduationCap size={60} />,
      title: 'Educational Sectors',
      description: 'Our Educational Events create engaging learning experiences and foster growth, tailored to enhance knowledge and inspire future leaders.',
      items: [
        'Academic Events', 'Cultural and Arts Events', 'Sports Events', 'Social and Community Events',
        'Fundraising Events', 'Educational Trips and Excursions', 'Workshops and Learning Events',
        'Health and Wellness Events', 'Technology and Innovation Events',
         'Celebratory and Themed Events'
      ],
    },
    {
      icon: <FaCalendarAlt size={60} />,
      title: 'General Events',
      description: 'Our General Events deliver versatile, memorable experiences that captivate audiences and create lasting impressions across various occasions.',
      items: [
        'Sports Events', 'Festivals and Fairs', 'Exhibitions and Conventions', 'Gaming Events',
        'Concerts and Music Festivals', 'FMCG / NON FMCG Marketing Campaigns & Events'
      ],
    },
    {
      icon: <FaBuilding size={60} />,
      title: 'Mall Events',
      description: 'Our Mall Events create engaging and vibrant experiences that attract visitors and enhance brand visibility through innovative and interactive activities.',
      items: [
        'Seasonal and Holiday Events', 'Fashion Shows', 'Live Performances and Entertainment', 'Children’s Events',
        'Health and Wellness Events', 'Product Launches and Promotions', 'Art and Cultural Events',
        'Workshops and Educational Events', 'Food and Drink Events',
         'Contests and Competitions'
      ],
    },
  ];

  return (
    <div id='services' className='w-full h-auto py-10'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='font-outfit font-semibold text-6xl text-glpl-red pt-8'>Our Specialization</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 mt-8">
          {cardsData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specialization;
