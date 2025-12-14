import './App.css';
import GlobalContextProvider from './components/Hooks/useContext/GlobalContext/globalContext';
import Routing from './components/Routing/routing';

function App() {
  return (
    <div>
      <GlobalContextProvider>
        <Routing />
      </GlobalContextProvider>
    </div>
  );
}

export default App;
