import { createContext } from "react";

export const globalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const data = {
    name: "Tejas",
    age: 25,
    city: "Nanded"
  }
  return (<>
    <globalContext.Provider value={data}>
      {children}
    </globalContext.Provider>
  </>)
}

export default GlobalContextProvider;