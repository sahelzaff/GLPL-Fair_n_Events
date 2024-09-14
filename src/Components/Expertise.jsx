import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import './Expertise.css';
import assets from '../../public/assets/assets';

const Expertise = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '0px 0px -150px 0px' });

    return (
        <div className='w-full h-auto flex flex-col items-center justify-center pt-20 pb-10 bg-[#FEF7F3]' id='expertise' ref={ref}>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <h1 className='font-outfit text-5xl font-semibold'>Our Expertise</h1>
                <h2 className='font-poppins text-gray-700 text-lg pt-1 font-normal'>Discover Our Expertise</h2>
            </motion.div>


            <motion.div
                className='flex flex-wrap gap-10 py-12 justify-center'
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            >

                <motion.div
                    id="card"
                    className='shadow-lg cursor-pointer relative'
                    onMouseEnter={() => setHoveredCard(1)}
                    onMouseLeave={() => setHoveredCard(null)}
                    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                >
                    <motion.div
                        className="absolute inset-0 bg-cover bg-center"
                        initial={{ scale: 1.2, opacity: 1 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: 12, ease: 'easeOut', delay: 0,  repeat: Infinity, repeatType: 'reverse' }}
                        style={{ backgroundImage: `url(${assets.bg_education})` }}
                    >

                        <div className="absolute inset-0 bg-black opacity-60"></div>
                    </motion.div>
                    <p className='font-outfit text-4xl text-center'>
                        {hoveredCard === 1 ? (
                            <motion.ul
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                                className='text-start font-outfit text-white text-[16px] leading-normal font-semibold list-disc px-10'
                            >
                                <h1 className='font-outfit text-4xl text-center pb-6'>Educational Sectors:</h1>
                                <li className='list-disc pb-3'>Workshops & Seminars<span className='font-normal'>: Interactive and impactful workshops for various educational needs.</span></li>
                                <li className='list-disc pb-3'>Academic Conferences<span className='font-normal'>: Conferences bringing together educators and students.</span></li>
                                <li className='list-disc pb-3'>School Fairs & Exhibitions<span className='font-normal'>: Engaging exhibitions inspiring learning.</span></li>
                            </motion.ul>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                            >
                                Educational Events
                            </motion.div>
                        )}
                    </p>
                </motion.div>


                <motion.div
                    id="card"
                    className='shadow-lg cursor-pointer relative'
                    onMouseEnter={() => setHoveredCard(2)}
                    onMouseLeave={() => setHoveredCard(null)}
                    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                >
                    <motion.div
                        className="absolute inset-0 bg-cover bg-center"
                        initial={{ scale: 1.2, opacity: 1 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: 12, ease: 'easeOut', delay: 0,  repeat: Infinity, repeatType: 'reverse' }}
                        style={{ backgroundImage: `url(${assets.bg_corporate})` }}
                    >

                        <div className="absolute inset-0 bg-black opacity-60"></div>
                    </motion.div>

                    <p className='font-outfit text-4xl text-center'>
                        {hoveredCard === 2 ? (
                            <motion.ul
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                                className='text-start font-outfit text-white text-[16px] leading-normal font-semibold list-disc px-10'
                            >
                                <h1 className='font-outfit text-4xl text-center pb-6'>Corporate Sectors:</h1>
                                <li className='list-disc pb-3'>Conferences & Summits<span className='font-normal'>: Industry summits and niche conferences organized seamlessly.</span></li>
                                <li className='list-disc pb-3'>Training Programs<span className='font-normal'>: Informative and engaging corporate training programs.</span></li>
                                <li className='list-disc pb-3'>Product Launches & Anniversaries<span className='font-normal'>: Complete handling of corporate milestone events.</span></li>
                            </motion.ul>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                            >
                                Corporate Events
                            </motion.div>
                        )}
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Expertise;
