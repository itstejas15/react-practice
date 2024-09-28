// sfc shortcut to create arrow function
// imr shortcut to import react
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getState,
  // setValue, 
  setState
} from '../../store/reducers/reduxSlice';

const Redux = () => {
  // usf - shortcut to create useState
  // const [state, setValue] = useState(0);
  // const state = useSelector((state) => state.redux.value);
  const newVar = useSelector(getState);

  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(setState(newVar + 1));
  };

  const handleRemove = () => {
    dispatch(setState(newVar - 1));
  };

  return (
    <div style={{ margin: "4rem" }}>
      <h1>Hii Redux</h1> <br />

      <div style={{ display: "flex", gap: "6px" }}>
        <button onClick={handleRemove}> - </button>
        <input value={newVar} />
        <button onClick={handleAdd}> + </button>
      </div>

    </div>
  );
}

export default Redux;