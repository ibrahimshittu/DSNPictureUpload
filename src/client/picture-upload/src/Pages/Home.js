import React from 'react'
import Navigation from '../components/Navigation'
import Cards from '../components/Cards'
import Sidebar from '../components/Sidebar'
import "../styles/app.scss";
import { useContext } from 'react';
import { context } from '../context/context';


function Home() {
    window.history.pushState("", "Home", "/");
   const { user } = useContext(context);
  return (
    
    <>
    <Navigation />
        <main>
          <div className="container">
             
            <Cards />
            <Sidebar  accountName={user.email}/>
          </div>
        </main>
    </>
  )
}

export default Home