import React, { useState, useEffect } from 'react';
import CurrentWeather from './CurrentWeather';
import { useSelector, useDispatch } from 'react-redux'
import { fiveDaysOfDailyForecastsActions } from '../store/index'
import SingelDay from './SingelDay';
import './weatherDetails.css';

const WeatherDetails = (props) => {

    const dispatch = useDispatch();
    const apiKey = 'Hclu6rpgBGRrHjovPNR0tJAyMwBWLmgI';

    const initialKeyCity = useSelector((state) => state.keyCity.key);
    const initialCityName = useSelector((state) => state.keyCity.nameCity);

    const [fiveOfDays, setFiveOfDays] = useState([]);


    const getDetailOfCity = async () => {
        const response = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${initialKeyCity}?apikey=${apiKey}`)
        const result = await response.json();
        
        setFiveOfDays(result.DailyForecasts);
        
        dispatch(fiveDaysOfDailyForecastsActions.getFiveDays(result.DailyForecasts));
    }

    useEffect(() => {
        if (initialCityName != "") {
            getDetailOfCity();
        }
    }, [initialCityName]);


    const daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu"];




    return (
        <div className='main__weather__detail'>

            <CurrentWeather getFavoriteStuff={props.getFavoriteStuff} />

            <div className='weather__detail'>
                {fiveOfDays.map((item, index) => {
                    return <SingelDay daysOfTheWeek={daysOfTheWeek[index]} Temperature={item.Temperature} Day={item.Day} key={index} />
                })}

            </div>
        </div>

    )
}


export default WeatherDetails;