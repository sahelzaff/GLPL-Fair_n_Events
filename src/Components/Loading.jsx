import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import assets from '../../public/assets/assets';

const Loading = ({ onComplete }) => {
  useEffect(() => {
   
    const timer = setTimeout(() => {
      onComplete();
    }, 3700); 

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      
      transition={{ duration: 0.5, delay:3.3 }}
      style={{
        position: 'fixed', 
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999, 
      }}
    >
      <video
        src={assets.Animation_1} 
        autoPlay
        muted
        loop
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          scale:'50%',
          objectFit: 'cover', 
        }}
      />
    </motion.div>
  );
};

export default Loading;
