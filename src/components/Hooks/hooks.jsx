import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hooks = () => {
  const navigate = useNavigate();
  return (
    <div style={{ margin: '4rem' }}>
      <h1>React hooks</h1>
      <div style={{ margin: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <button onClick={() => navigate("/hooks/useState")}>useState</button>
        <button onClick={() => navigate("/hooks/useEffect")}>useEffect</button>
        <button onClick={() => navigate("/hooks/useCallback")}>useCallback</button>
        <button onClick={() => navigate("/hooks/useMemo")}>useMemo</button>
        <button onClick={() => navigate("/hooks/useContext")}>useContext</button>
        <button onClick={() => navigate("/hooks/useReducer")}>useReducer</button>
        <button onClick={() => navigate("/hooks/useRef")}>useRef</button>
        <button onClick={() => navigate("/hooks/useLayoutEffect")}>useLayoutEffect</button>
        <button onClick={() => navigate("/hooks/useDebugValue")}>useDebugValue</button>
        <button onClick={() => navigate("/hooks/useImperativeHandle")}>useImperativeHandle</button>
        <button onClick={() => navigate("/hooks/customHook")}>customHook</button>
      </div>
    </div>
  );
}

export default Hooks;