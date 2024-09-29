import React, { useState } from "react";
import RetrieveData from "./retrieveData";
import { Link } from "react-router-dom";

const LocalStorage = () => {
  const [value, setValue] = useState(1);
  localStorage.setItem("value", value);
  sessionStorage.setItem("value", value * 2);
  document.cookie = `username=Tejas ${value}`;

  // localStorage.setItem('value', value)
  // let x = localStorage.getItem('value')
  // localStorage.removeItem('value')
  // localStorage.clear()

  const handleClick = () => {
    setValue(value + 1);
  };
  return (
    <div style={{ margin: "2rem" }}>
      <p>
        <li>localStorage</li>
        <li>sessionStorage</li>
        <li>cookie</li>
      </p>
      <p>
        {" "}
        <Link to={"https://www.tiny.cloud/blog/javascript-localstorage/"}>
          Reference
        </Link>{" "}
      </p>
      <div>
        <button onClick={handleClick}>Add</button> ={value}
      </div>
      <RetrieveData />
    </div>
  );
};

export default LocalStorage;
