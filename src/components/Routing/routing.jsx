import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../Homepage/homepage';
import DemoPage from '../DemoPage/demoPage';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Practice from '../Practice/practice';
import Redux from '../Redux/reduxPractice';

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routing;