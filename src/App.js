// // import logo from './logo.svg';
import React from 'react';

// // import './App.css';
// import Hero from './components/hero/Hero';
import Navbar from './components/Navbar/Navbar';
import First from './First'
import Tips from './tips'
import Vlog from './Vlog'
// import About from './components/about/about';
// import Contact from './components/contact/Contact';
// import Footer from './components/footer/footer';
import Calculator from './calculator';
// import Login from './login/Login';

// function App() {
//   return (
//    <div className='App'>
//     {/* <Calculator/>   */}
//     <Navbar/> 
//     <Hero/> 
//     <About/>
//    <Contact/> 
//    <Footer/>  
//    </div>
//   );
// }

// export default App;




// react router import 
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Login from './login/Login';


export default function App() {
  return (

    <div className='App'>
      <BrowserRouter>
        <Navbar />
        {/* <First /> */}
        <Routes>
          <Route path='/' element={<First />} />
          <Route path='/tips' element={<Tips />} />
          <Route path='/Vlog' element={<Vlog />} />
          <Route path='/calculator' element={<Calculator />} />
          {/* <Route path='/login/Login' element={<Login />} /> */}

        </Routes>
      </BrowserRouter>

    </div>
  );
}
