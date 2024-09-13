import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion'; 

const Elevating = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '0px 0px -200px 0px' }); 

    return (
        <div className='w-full h-auto py-10'>
            <div className='flex flex-col items-center justify-center' ref={ref}>
                
                <motion.h1
                    className='font-outfit text-5xl font-semibold text-center pb-2'
                    initial={{ opacity: 0, y: 50 }}  
                    animate={isInView ? { opacity: 1, y: 0 } : {}}  
                    transition={{ duration: 0.6, ease: 'easeOut' }}  
                >
                    Elevating Events to New Heights with 
                </motion.h1>

                <motion.h2
                    className='font-outfit text-5xl font-semibold text-center'
                    initial={{ opacity: 0, y: 50 }}  
                    animate={isInView ? { opacity: 1, y: 0 } : {}}  
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}  
                >
                    Goodrich Fairs & Events
                </motion.h2>

               
                <motion.p
                    className='font-poppins text-base text-gray-600 text-center pt-8 px-40'
                    initial={{ opacity: 0, y: 20 }}  
                    animate={isInView ? { opacity: 1, y: 0 } : {}}  
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}  
                >
                    At Goodrich Fairs & Events, we pride ourselves on our ability to transform your event dreams into reality. Our team of experienced professionals is dedicated to providing comprehensive event solutions, from initial planning to seamless execution, ensuring your event is a true reflection of your brand and vision.
                </motion.p>
            </div>
        </div>
    );
}

export default Elevating;
