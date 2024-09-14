import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import assets from '../../public/assets/assets';

const Why_choose = () => {
    // const headingRef = useRef(null);
    // const textRef = useRef(null);
    // const imageRef = useRef(null);
    // const buttonRef = useRef(null);

    // const [headingInView, setHeadingInView] = useState(false);
    // const [textInView, setTextInView] = useState(false);
    // const [imageInView, setImageInView] = useState(false);
    // const [buttonInView, setButtonInView] = useState(false);

    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         (entries) => {
    //             entries.forEach(entry => {
    //                 if (entry.target === headingRef.current && entry.isIntersecting) {
    //                     setHeadingInView(true);
    //                 }
    //                 if (entry.target === textRef.current && entry.isIntersecting) {
    //                     setTextInView(true);
    //                 }
    //                 if (entry.target === imageRef.current && entry.isIntersecting) {
    //                     setImageInView(true);
    //                 }
    //                 if (entry.target === buttonRef.current && entry.isIntersecting) {
    //                     setButtonInView(true);
    //                 }
    //             });
    //         },
    //         { threshold: 0 }
    //     );

    //     if (headingRef.current) observer.observe(headingRef.current);
    //     if (textRef.current) observer.observe(textRef.current);
    //     if (imageRef.current) observer.observe(imageRef.current);
    //     if (buttonRef.current) observer.observe(buttonRef.current);

    //     return () => {
    //         if (headingRef.current) observer.unobserve(headingRef.current);
    //         if (textRef.current) observer.unobserve(textRef.current);
    //         if (imageRef.current) observer.unobserve(imageRef.current);
    //         if (buttonRef.current) observer.unobserve(buttonRef.current);
    //     };
    // }, []);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '0px 0px -200px 0px' });

    return (
        <div className='w-full h-auto pt-10' >
            <div className='flex flex-row items-center justify-center w-full bg-glpl-red py-28' ref={ref}>
                <motion.div
                    className='w-1/2'
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <div className='flex flex-col items-start pl-10' id='about'>
                        <motion.h1
                            className='font-outfit text-5xl font-semibold text-start text-white py-8'
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        >
                            Why Choose Goodrich<br />Events?
                        </motion.h1>
                        <motion.div

                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        >
                            <div className='flex items-start flex-col gap-1'>
                                <motion.div
                                    className='text-white flex flex-row items-start gap-2 pb-5'
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={isInView ? { opacity: 1, x: 30 } : {}}
                                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
                                >
                                    <h3 className='text-6xl font-outfit font-bold'>1</h3>
                                    <p className='font-poppins text-[16px] text-start pt-2'>
                                        <span className='text-lg font-semibold'>Tailored Solutions</span>: We understand that every event is unique. Our team works closely with you to design an event that aligns with your goals and vision
                                    </p>
                                </motion.div>
                                <motion.div
                                    className='text-white flex flex-row items-start gap-2 pb-5'
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={isInView ? { opacity: 1, x: 30 } : {}}
                                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
                                >
                                    <h3 className='text-6xl font-outfit font-bold'>2</h3>
                                    <p className='font-poppins text-[16px] text-start pt-2'>
                                        <span className='text-lg font-semibold'>Expert Team</span>: Our experienced professionals bring a wealth of knowledge and creativity to every project, ensuring high-quality execution
                                    </p>
                                </motion.div>
                                <motion.div
                                    className='text-white flex flex-row items-start gap-2 pb-5'
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={isInView ? { opacity: 1, x: 30 } : {}}
                                    transition={{ duration: 0.8, ease: 'easeOut', delay: 1.1 }}
                                >
                                    <h3 className='text-6xl font-outfit font-bold'>3</h3>
                                    <p className='font-poppins text-[16px] text-start pt-2'>
                                        <span className='text-lg font-semibold'>End-To-End Service</span>: From initial concept to post event analysis, we manage every stage of the event planning process, allowing you to focus on what matters most
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                        <motion.div

                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0, x:0 } : {}}
                            transition={{ duration: 0.8, ease: 'easeOut', delay: 1.2}}
                        >
                            <h2 className='font-outfit text-2xl font-semibold pt-8 text-white pb-2 text-start'>
                                Let's Create Something Extraordinary Together
                            </h2>
                            <p className='font-poppins text-[14px] text-slate-100 text-start pb-2'>
                                At Goodrich Events, we believe in the power of events to educate, inspire, and connect. Whether you're planning a corporate conference or an educational seminar, we're here to make your vision a reality
                            </p>
                            <p className='font-poppins text-[14px] text-slate-100 text-start pb-4'>
                                <span className='font-bold'>Contact Us</span> today to start planning your next successful event
                            </p>
                        </motion.div>
                        <motion.button

                            id='button_1'
                            className='text-black bg-white font-montserrat font-bold'
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                        >
                            Contact Us
                        </motion.button>
                    </div>
                </motion.div>
                <motion.div

                    className='w-1/2 flex items-center justify-center'
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <img src={assets.why1_1} className='rounded-lg w-10/12' alt="vector why" />
                </motion.div>
            </div>
        </div>
    );
};

export default Why_choose;
