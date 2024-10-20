import React from 'react';
import './flexboxAndGrid.css';

const FlexboxAndGrid = () => {
  return (
    <div>
      <h1 style={{position: 'absolute', left: 14, top: 4}}>Flexbox and Grid</h1>
      <div className="flex-container">
        <div className="flex-item">Item 1</div>
        <div className="flex-item">Item 2</div>
        <div className="flex-item">Item 3</div>
      </div>
    </div>
  );
}

export default FlexboxAndGrid;