import React, { useState } from 'react';
import Header from "../components/Header"
import WeatherDetails from "../components/WeatherDetails"
import './home.css'




const Home = () => {


    const onClickButton = () => {
        
    }

    return (
        <div className='home__main'>
            <Header />
            <WeatherDetails />
            <div className='button__container'>
                <button 
                className='button'
                // onClick={}
                >add to Favorites</button>
            </div>
        </div>

    )
}


export default Home;
