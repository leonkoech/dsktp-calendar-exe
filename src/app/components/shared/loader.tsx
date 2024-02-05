"use client";
import React, { useState, useEffect } from 'react';

const Loader = ({sizeLoader}: any) => {
  const [size, setSize] = useState(sizeLoader);

  useEffect(() => {
    const interval = setInterval(() => {
      setSize((prevSize: any) => (prevSize === sizeLoader ? sizeLoader*0.7 : sizeLoader));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: `${size * 3}px`, // Use a larger size for the box
        height: `${size * 3}px`, // Use a larger size for the box
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgb(82, 129, 252, 0.51) 0px, black, black 100%)',
        transition: 'width 1s, height 1s', // Slower transition for size change
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)', // Center the box
        animation: 'pulse 1s infinite',
      }}
    ></div>
  );
};

export default Loader;
