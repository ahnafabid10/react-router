import React from 'react';
import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Components/Footer/Footer';
import SideBar from './Components/SideBar/SideBar';
import './Components/Root/Root.css'
const Root = () => {
    return (
        <div>
             <Header></Header>
             <div className='root-main'>
                <SideBar></SideBar>
                <Outlet></Outlet>
             </div>
             
             <Footer></Footer>
        </div>
    );
};

export default Root;