import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/UI/Layout";
import MainPage from './pages/MainPage';
import WindbnbPage from './pages/WindbnbPage';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' exact element={<MainPage/>}/>
        <Route path='/challenge' element={<WindbnbPage/>}/>
      </Routes>
    </Layout>
  );
};

export default App;
