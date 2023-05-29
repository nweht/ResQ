import React, { useState } from 'react';

function MyButton({ buttonText, width, height }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonStyle = {
    backgroundColor: isHovered ? '#8286c9' : '#d3d3dc',
    color: '#000',
    border: '2px solid #222450',
    borderRadius: '18px',
    padding: '10px',
    transition: 'background-color 0.3s ease',
    cursor: 'pointer',
    width: width,
    height: height,
  };

  const textStyle = {
    fontWeight: 'bold',
    color: '#222450',
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span style={textStyle}>{buttonText}</span>
    </button>
  );
}

export default MyButton;


