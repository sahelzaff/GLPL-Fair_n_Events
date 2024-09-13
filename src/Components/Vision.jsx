import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import assets from '../../public/assets/assets';



const Vision = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '0px 0px -200px 0px' });
    return (
        <div className='w-full h-auto' ref={ref}>
            <div className='grid grid-cols-12 place-items-center py-28 gap-3'>
                
                <div className='col-span-3'>
                    <motion.img
                        src={assets.fun_1}
                        className='px-10'
                        alt=""
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 1 }}
                    />
                </div>

              
                <div className='col-span-6'>
                    <div className='flex flex-col items-center justify-center text-center space-y-4'>
                        <motion.h1
                            className='font-ibm-plex-serif text-black text-5xl pb-2 font-semibold italic'
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                        >
                            <motion.span

                            >
                                Bringing Your Vision to Life
                            </motion.span>

                            <br />

                            <motion.span


                                transition={{ delay: 0.5 }}
                            >
                                with Goodrich Fairs & Events
                            </motion.span>
                        </motion.h1>

                        <motion.p
                            className='font-poppins text-gray-700 text-[14px] font-normal pb-5'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            At Goodrich Fairs & Events, we are passionate about creating unforgettable experiences that captivate and inspire your guests. Our team of dedicated professionals works tirelessly to transform your event dreams into reality, seamlessly blending creativity, innovation, and attention to detail to deliver exceptional results.
                        </motion.p>
                        <motion.button
                            className='font-medium text-lg bg-glpl-red text-white px-6 py-3 rounded-lg'
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 1 }}
                        >
                            Learn More
                        </motion.button>
                    </div>
                </div>

              
                <div className='col-span-3'>
                    <motion.img
                        src={assets.festivities_2}
                        className='px-10'
                        alt=""
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Vision;
