
import './App.css';
import React, { useState } from 'react';
// import CurrentWeather from './components/CurrentWeather';
// import Header from './components/Header'
// import Search from './components/Search'
// import WeatherDetails from './components/WeatherDetails';
import Home from './page/Home';
import NavigationRoutes from './NavigationRoutes/NavigationRoutes';
import Favorites from './page/Favorites';



const App = () => {

  return (
    <div style={{ borderStyle: 'solid', borderWidth: '1px' }}>

      <NavigationRoutes>
        <Home />
        <Favorites />
      </NavigationRoutes>


    </div>
  );
}

export default App;

