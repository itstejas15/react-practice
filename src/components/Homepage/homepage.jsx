import React from 'react';
import { useNavigate } from 'react-router-dom';
import './homepage.css';

const HomePage = () => {
  const navigate = useNavigate()
  // const getData = localStorage.getItem('value')
  // const getDataFromSession = sessionStorage.getItem('value')
  // const cookie = document.cookie
  return (
    <div className='App'>
      <div className="App-header" >
        <h1>Im HomePage</h1>
        <div style={{ margin:"2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          {/* <button onClick={() => navigate("/")}>HomePage</button> */}
          <button onClick={() => navigate("/demoPage")}>DemoPage</button>
          <button onClick={() => navigate("/impConcepts")}>Imp Concepts</button>
          <button onClick={() => navigate("/flexboxAndGrid")}>FlexBox & Grid</button>
          <button onClick={() => navigate("/letVarConst")}>Let Var Const</button>
          <button onClick={() => navigate("/")}>Box CSS </button>
          <button onClick={() => navigate("/positions")}>Positions</button>
          {/* <button onClick={() => navigate("/header")}>Header</button>
          <button onClick={() => navigate("/footer")}>Footer</button> */}
          <button onClick={() => navigate("/practice")}>Practice</button>
          <button onClick={() => navigate("/")}>Callback Promise Await</button>
          <button onClick={() => navigate("/album")}>Album</button>
          <button onClick={() => navigate("/image-slider")}>Image Slider</button>
          <button onClick={() => navigate("/accordion")}>Accordion</button>
          <button onClick={() => navigate("/comment-section")}>Comment Section</button>
          <button onClick={() => navigate("/redux")}>Redux</button>
          <button onClick={() => navigate("/hooks")}>Hooks</button>
          <button onClick={() => navigate("/inputTypes")}>Input Types</button>
          <button onClick={() => navigate("/localStorage")}>Local Storage</button>
          <button onClick={() => navigate("/jsMethods")}>JS Methods</button>
          <button onClick={() => navigate("/tables")}>Tables</button>
          {/* <button onClick={() => navigate("/functions")}>JS Functions</button> */}
          <button>Spread Operator</button>
          <button>Btn7</button>
          <button>Btn7</button>
          <button>Btn7</button>

        </div>
        {/* {getData},{getDataFromSession},{cookie} */}
      </div>
    </div>
  );
}

export default HomePage;