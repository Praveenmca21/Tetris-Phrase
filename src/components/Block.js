import React from 'react';

function Block({ word, x, y }) {
  const blockStyle = {
    position: 'absolute',
    left: `${x * 50}px`, 
    top: `${y * 50}px`,  
    width: '50px',       
    height: '50px',      
    backgroundColor: 'blue', 
    color: 'white',          
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div className="block" style={blockStyle}>
      {word}
    </div>
  );
}

export default Block;

