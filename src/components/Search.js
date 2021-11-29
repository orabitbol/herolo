import React, { useState, useEffect } from 'react';

// import { initialFavoritesPageActions } from '../store/index'
import { useDispatch } from 'react-redux'
import { keyActions } from '../store/index'
import SearchField from 'react-search-field';

const Search = (props) => {

    const apiKey = 'Hclu6rpgBGRrHjovPNR0tJAyMwBWLmgI';

    const [city, setCity] = useState('tel aviv');
    const [defaultCity, setDefaultCity] = useState(true);

    const dispatch = useDispatch();

    // write only English  letters
    // const regex = /^[a-zA-Z$@$!%*?&#^-_. +]+$/

    const getkeyCity = async (e) => {

        const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${city}`)
        const result = await response.json();
        dispatch(keyActions.keyValue(result[0].Key));
        dispatch(keyActions.getNameCity(city));
        // dispatch(initialFavoritesPageActions.getName(city));
        setCity("");
    }

    return (

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '50px' }}>
            <div style={{ display: 'flex', borderStyle: 'solid', borderWidth: '1px' }}>


                <SearchField
                    placeholder='Enter City'
                    onChange={(e) => { setCity(e) }}
                    onEnter={() => getkeyCity(city) }
                    onSearchClick={() => { getkeyCity() }}
                    value={city}
                />
            </div>


        </div>
    )
}
export default Search;






