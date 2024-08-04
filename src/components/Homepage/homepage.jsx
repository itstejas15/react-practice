import React from 'react';
import { useNavigate } from 'react-router-dom';
import './homepage.css';

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <div className='App'>
      <div className="App-header" >
        <h1>Im HomePage</h1>
        <div style={{ margin:"2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          {/* <button onClick={() => navigate("/")}>HomePage</button> */}
          <button onClick={() => navigate("/demoPage")}>DemoPage</button>
          <button onClick={() => navigate("/header")}>Header</button>
          <button onClick={() => navigate("/footer")}>Footer</button>
          <button onClick={() => navigate("/practice")}>Practice</button>
          <button onClick={() => navigate("/redux")}>Redux</button>
          <button>Btn4</button>
          <input type="week"></input>
          <button>Btn5</button>
          <button>Btn6</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;