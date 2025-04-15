import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Outlet } from'react-router';
import SideBar from './Sidebar/Sidebar';
import './Root.css';
const Root = () => {
  return (
    <div>
      <Header></Header>
      <div className='flex'>
        <SideBar></SideBar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;