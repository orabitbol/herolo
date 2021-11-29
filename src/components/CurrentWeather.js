import React, { useState, useEffect } from 'react';
import Search from './Search'
// import { initialFavoritesPageActions } from '../store/index'
import { currentWeatherActions } from '../store/index'
import './currentWeather.css'
import { useSelector, useDispatch } from 'react-redux'


const CurrentWeather = (props) => {
    const dispatch = useDispatch();

    const initialKeyCity = useSelector((state) => state.keyCity.key);
    const initialCityName = useSelector((state) => state.keyCity.nameCity);

    const initialDegrees = useSelector((state) => state.currentWeather.degrees);
    const initialUnit = useSelector((state) => state.currentWeather.unit); 

    const [weatherIcon, setWeatherIcon] = useState();
    const [weatherText, setWeatherText] = useState();




    const apiKey = 'Hclu6rpgBGRrHjovPNR0tJAyMwBWLmgI';


    const getDetailOfCity = async () => {
        const response = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${initialKeyCity}?apikey=${apiKey}`)
        const result = await response.json();
        const degreesValue = result[0].Temperature.Metric.Value;
        const UnitValue = result[0].Temperature.Metric.Unit;
        
        setWeatherIcon(result[0].WeatherIcon);
        setWeatherText(result[0].WeatherText);
       
        dispatch(currentWeatherActions.getUnit(UnitValue));
        dispatch(currentWeatherActions.getDegrees(degreesValue));
        
        // dispatch(initialFavoritesPageActions.getWeatherText(result.WeatherText));
        // dispatch(initialFavoritesPageActions.getUnit(result[0].WeatherIcon));
        // dispatch(initialFavoritesPageActions.getDegrees(result[0].WeatherText));
    }



    useEffect(() => {
        if (initialCityName != "") {
            getDetailOfCity();
        }
    }, [initialCityName]);

    return (
        <div>
            <Search />
            <div className='current__main'>

       
                {initialCityName} <br />
                <div>
                    {initialDegrees} <br /> {initialUnit}
                </div>
            </div>

        </div>
    )
}

export default CurrentWeather;