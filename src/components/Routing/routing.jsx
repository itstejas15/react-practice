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
import UseMemoDemo from '../Hooks/useMemo/useMemo';
import UseCallbackDemo from '../Hooks/useCallback/useCallback';
import UseReducerDemo from '../Hooks/useReducer/useReducer';
import UseRefDemo from '../Hooks/useRef/useRef';
import CustomHookDemo from '../Hooks/customHooks/customHooks';
import SliceAndSplice from '../JsMethods/SliceAndSplice/sliceAndSplice';
import PhotoAlbum from '../PhotoAlbum/album';
import LetVarConst from '../LetVarConst/letVarConst';
import ImpConcepts from '../ImpConcepts/impConcepts';
import FlexboxAndGrid from '../FlexboxAndGrid/flexboxAndGrid';
import Positions from '../Positions/Positions';
import ImageSlider from '../ImageSlider/imageSlider';
import CommentSection from '../CommentSection/commentSection';

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/demopage' element={<DemoPage />} />
          <Route path='/impConcepts' element={<ImpConcepts />} />
          <Route path='/flexboxAndGrid' element={<FlexboxAndGrid />} />
          <Route path='/positions' element={<Positions />} />
          <Route path='/header' element={<Header />} />
          <Route path='/footer' element={<Footer />} />
          <Route path='/practice' element={<Practice />} />
          <Route path='/letVarConst' element={<LetVarConst />} />
          <Route path='/album' element={<PhotoAlbum />} />
          <Route path='/image-slider' element={<ImageSlider />} />
          <Route path='/comment-section' element={<CommentSection />} />
          <Route path='/redux' element={<Redux />} />
          <Route path='/hooks' element={<Hooks />} />
          <Route path='/hooks/useState' element={<UseStateDemo />} />
          <Route path='/hooks/useEffect' element={<UseEffectDemo />} />
          <Route path='/hooks/useContext' element={<UseContextDemo />} />
          <Route path='/hooks/useMemo' element={<UseMemoDemo />} />
          <Route path='/hooks/useCallback' element={<UseCallbackDemo />} />
          <Route path='/hooks/useReducer' element={<UseReducerDemo />} />
          <Route path='/hooks/useRef' element={<UseRefDemo />} />
          <Route path='/hooks/customHook' element={<CustomHookDemo />} />
          <Route path='/inputTypes' element={<InputTypes />} />
          <Route path='/localStorage' element={<LocalStorage />} />
          <Route path='/jsMethods' element={<JsMethods />} />
          <Route path='/jsMethods/sliceAndSplice' element={<SliceAndSplice/>}/>
          <Route path='/tables' element={<Tables />} />
          {/* <Route path='/jsMethods' element={<LocalStorage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routing;