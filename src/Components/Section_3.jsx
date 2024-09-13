import React from 'react';
import { motion } from 'framer-motion'; 
import assets from '../../public/assets/assets'; 

const Section_3 = () => {
    
    const textVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 } },
    };

    const imageVariant = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeOut', delay: 0.5 } }, 
    }

    const buttonHover = {
        hover: { scale: 1.05, transition: { duration: 0.3 } }
    };

    return (
        <motion.div 
            className='bg-glpl-red flex items-center h-auto py-16 px-8'
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-200px" }} 
        >
            
            <motion.div className='w-1/3 p-4' variants={textVariant}>
                <h1 className='font-outfit text-[14px] font-normal text-white pb-3 text-start'>
                    Discover Our Expertise
                </h1>
                <h2 className='font-outfit text-4xl font-semibold tracking-wide text-white pb-5 text-start'>
                    Sectors We <br /> Specialize In
                </h2>
                <p className='font-poppins text-[14px] text-gray-200 text-start pb-8 pr-10'>
                    Goodrich Fairs & Events offers specialized services across four key sectors: Corporate Events, Educational Events, General Events, and Mall Events
                </p>
                <motion.button
                    id='button_1'
                    className='text-black bg-white font-montserrat font-bold py-2 px-4'
                    whileHover="hover"
                    variants={buttonHover} 
                >
                    Explore Our Sectors
                </motion.button>
            </motion.div>

           
            <motion.div className='w-1/3 p-4' variants={textVariant} transition={{ delay: 0.5 }}>
                <h1 className='font-outfit text-[14px] font-normal text-white pb-3 text-start'>
                    Innovative Solutions
                </h1>
                <h2 className='font-outfit text-4xl font-semibold tracking-wide text-white pb-5 text-start'>
                    Empowering <br /> Your Vision
                </h2>
                <p className='font-poppins text-[14px] text-gray-200 text-start pb-8 pr-10'>
                    At Goodrich Fairs & Events, we believe that every event should be a perfect reflection of your unique vision and brand identity, capturing your brand’s essence.
                </p>
                <motion.button
                    id='button_1'
                    className='text-black bg-white font-montserrat font-bold py-2 px-4'
                    whileHover="hover"
                    variants={buttonHover} 
                >
                    Contact Us
                </motion.button>
            </motion.div>

          
            <motion.div className='w-2/5 p-4' variants={imageVariant}>
                <motion.img 
                    src={assets.section_3} 
                    alt="Some Image" 
                    className='w-full h-full object-cover' 
                    whileHover={{ scale: 1.05, transition: { duration: 0.5 } }} 
                />
            </motion.div>
        </motion.div>
    );
};

export default Section_3;
