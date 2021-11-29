import React, { useState, useEffect } from 'react';
import { keyActions } from '../store/index'
import { currentWeatherActions } from '../store/index'
import { fiveDaysOfDailyForecastsActions } from '../store/index'
import { useSelector, useDispatch } from 'react-redux'
import { initialFavoritesPageActions } from '../store/index'
import SingelFavorite from '../components/SingelFavorite';



const Favorites = () => {

   
  
    
   
    
    return (
        <div>
{/* {initialFavoritesPage.map((item,index) => {
    return <SingelFavorite 
     name={initialFavoritesPage.name} 
     degrees={initialFavoritesPage.degrees}
     unit={initialFavoritesPage.unit}
     weatherText={initialFavoritesPage.weatherText} />
})} */}
           
        </div>
    )
}

export default Favorites;
