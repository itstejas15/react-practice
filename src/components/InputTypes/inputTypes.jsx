import React from 'react';
import treeImage from '../../Assets/Images/tree.jpg';

const commanStyles = { display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', gap: '2rem' }
const InputTypes = () => {
  return (
    <div style={{ margin: '2rem' }}>
      <div>
        <input type="image" alt='image' src={treeImage} height={200} width={400}></input>
      </div>
      <div style={commanStyles}>
        <input type="button" value={'button'}></input>
        <input type="reset"></input>
        <input type="submit"></input>
        <input type="checkbox"></input>
        <input type="radio"></input>
        <input type="color"></input>
        <input type="file"></input>
        <input type="range"></input>
        <input type="hidden"></input>
        <input type="date"></input>
        <input type="datetime-local"></input>
        <input type="week"></input>
        <input type="month"></input>
        <input type="time"></input>
        <input type="email" placeholder='email'></input>
        <input type="password" placeholder='password'></input>
        <input type="number" placeholder='number'></input>
        <input type="text" placeholder='text'></input>
        <input type="tel" placeholder='tel - telephone'></input>
        <input type="url" placeholder='url'></input>
        <input type="search" placeholder='search'></input>
      </div>
    </div>
  );
}

export default InputTypes;