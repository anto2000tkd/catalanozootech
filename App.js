import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Bovini from "./components/pages/Bovini";
import Ovini from "./components/pages/Ovini";
import Suini from "./components/pages/Suini";
import Footer from "./components/Footer";
import Chisiamo from "./components/pages/Chisiamo";
import { ScrollingProvider,Section as Scroll } from "react-scroll-section";


function App(){

  return(

    <ScrollingProvider>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/bovini" element={<Bovini />}/>
        <Route path="/ovini" element={<Ovini />}/>
        <Route path="/suini" element={<Suini />}/>
        <Route path="/chisiamo" element={<Chisiamo />}/>
      </Routes>
      <Scroll id='contatti'><Footer/></Scroll>
    </BrowserRouter>
    </ScrollingProvider>
  );

}

export default App;