import React from 'react';


import './singelDay.css'


const SingelDay = (props) => {


    const paddingNumber = (num) => {
        const number = num + '';
        const len = number.length;
        if (len === 1)
            return '0' + number;
        else
            return number;
    }

    const showMinimum = () => {
        return (
        props.Temperature.Minimum.Value + " " +
        props.Temperature.Minimum.Unit )
        
    }
    const showMaximum = () =>{
        return(
        props.Temperature.Maximum.Value + " " +
        props.Temperature.Maximum.Unit)
    }


    return (
        <div className='main'>
            <div className='icon'>
                <img
                    alt={props.Day.iconPhrase}
                    src={`https://developer.accuweather.com/sites/default/files/${paddingNumber(props.Day.Icon)}-s.png`}
                />
            </div>
            <div style={{color:'white'}} >
                {props.daysOfTheWeek}
            </div>
            <div className='property'>
                <h4 style={{color:'white'}}>Min: {showMinimum()}</h4>
                <h4 style={{color:'white'}} >Max: {showMaximum()}</h4>

            </div>
        </div>
    )
}


export default SingelDay;