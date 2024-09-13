import React from 'react';
import { motion } from 'framer-motion'; 
import assets from '../../public/assets/assets';

const Hero = () => {
    return (
        <div id="home" className='flex flex-col items-center md:flex-row h-screen'>
            
            <div className='flex flex-col justify-center items-center w-full md:w-1/2 p-6 md:p-12 text-center'>
                
                <motion.h1
                    className='text-3xl md:text-7xl mb-4 font-outfit font-semibold'
                    initial={{ opacity: 0, y: 50 }}  
                    animate={{ opacity: 1, y: 0 }}   
                    transition={{ duration: 0.5, delay: 0.1 }}     
                >
                    Welcome to
                </motion.h1>

               
                <motion.h2
                    className='text-3xl md:text-7xl mb-4 font-outfit font-semibold whitespace-nowrap'
                    initial={{ opacity: 0, y: 50 }}  
                    animate={{ opacity: 1, y: 0 }}   
                    transition={{ duration: 0.6, delay: 0.3 }}     
                >
                    Goodrich Events
                </motion.h2>

               
                <motion.h3
                    className='text-lg md:text-[16px] font-poppins font-medium mb-4'
                    initial={{ opacity: 0, y: 30 }}  
                    animate={{ opacity: 1, y: 0 }}   
                    transition={{ duration: 0.6, delay: 0.8 }} 
                >
                    Where Educational Excellence Meets Corporate Innovations
                </motion.h3>

               
                <motion.p
                    className='text-[14px] font-poppins mb-6 text-center'
                    initial={{ opacity: 0 }}   
                    animate={{ opacity: 1 }}   
                    transition={{ duration: 1, delay: 1 }} 
                >
                    At Goodrich Events, we pride ourselves on being the go-to specialists for educational and corporate events. With a passion for creating memorable experiences, we understand the unique needs of both sectors and deliver tailored solutions that exceed expectations.
                </motion.p>

               
                <motion.button
                    className='font-medium text-lg font bg-glpl-red text-white px-6 py-3 rounded-lg'
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }}   
                    transition={{ duration: 0.3 }}
                >
                    Learn More
                </motion.button>
            </div>

           
            <motion.div
                className='w-full md:w-1/2'
                initial={{ opacity: 0 }}   
                animate={{ opacity: 1 }}   
                transition={{ duration: 1.5, delay: 0.2 }} 
            >
               <video src={assets.vector_1} autoPlay loop muted className=' relative' ></video>
            </motion.div>
        </div>
    );
};

export default Hero;
