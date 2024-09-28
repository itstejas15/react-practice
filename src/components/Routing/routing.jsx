import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../Homepage/homepage';
import DemoPage from '../DemoPage/demoPage';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Practice from '../Practice/practice';
import Redux from '../Redux/reduxPractice';
import Hooks from '../Hooks/hooks';
import UseStateDemo from '../Hooks/useState/useState';
import UseEffectDemo from '../Hooks/useEffect/useEffect';
import InputTypes from '../InputTypes/inputTypes';
import LocalStorage from '../LocalStorage/localStorage';
import JsMethods from '../JsMethods/jsMethods';
import Tables from '../Table';
import UseContextDemo from '../Hooks/useContext/useContext';

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/demopage' element={<DemoPage />} />
          <Route path='/header' element={<Header />} />
          <Route path='/footer' element={<Footer />} />
          <Route path='/practice' element={<Practice />} />
          <Route path='/redux' element={<Redux />} />
          <Route path='/hooks' element={<Hooks />} />
          <Route path='/hooks/useState' element={<UseStateDemo />} />
          <Route path='/hooks/useEffect' element={<UseEffectDemo />} />
          <Route path='/hooks/useContext' element={<UseContextDemo />} />
          <Route path='/inputTypes' element={<InputTypes />} />
          <Route path='/localStorage' element={<LocalStorage />} />
          <Route path='/jsMethods' element={<JsMethods />} />
          <Route path='/tables' element={<Tables />} />
          {/* <Route path='/jsMethods' element={<LocalStorage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routing;