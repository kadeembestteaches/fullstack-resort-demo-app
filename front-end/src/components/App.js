import '../assets/css/App.css';
import '../assets/css/utilities.css';


import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import ResortList from "./ResortList"

import React from 'react';

const App = () => 
{
  return (
      <div className="grid grid-row-3" id="main-container">

        <Header/>
        <main>
          <Hero/>
          <ResortList/>
        </main>
        <Footer/>

    </div>
    );
};

export default App;

