// components/Layout.js
import React, { Component } from 'react';
// import Footer from './Footer';
import Header from './Header';


function Layout({ children }) {
  return (
    <>
     {/* <div className="bg-black  mx-auto px-7 sm:px-20 lg:px-8">
        <div className=" max-w-6xl mx-auto "> */}
     <div className="">
        <div className=" ">
          <div className='sticky top-0 z-50'>
            <Header />
          </div>
         
              { children }
          {/* <Footer /> */}
        </div>
    </div>
    
    </>
  )
}

export default Layout;

