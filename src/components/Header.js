import React from 'react';
import './header.css'


const Header = () => {


    return (
        <div className="header__container">
            <h1 style={{ color: 'white' }}> Herolo Weather Task</h1>
            <div className="buttom__container" >
                <button className="buttom" onClick={() => {
                    window.location.href = '/'
                }} >Home</button>
                <button className="buttom" onClick={() =>{
                 window.location.href='/favorites'}} > Favorites</button>
            </div>


        </div>
    )
}

export default Header;