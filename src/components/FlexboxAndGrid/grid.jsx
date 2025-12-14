import { useContext } from "react";
import "./grid.css";
import { globalContext } from "../Hooks/useContext/GlobalContext/globalContext";

const GirdLayout = () => {
  const data = useContext(globalContext)
  return (
    <>
      <h1>Grid</h1>
      <div className="containerGrid">
        {[1, 2, 3, 4, 5].map((ele) => {
          return <div className="cardGrid" key={ele}>{ele}</div>;
        })}
      </div>
      {data.name}
      {data.city}
      {data.age}
    </>
  );
};

export default GirdLayout;
