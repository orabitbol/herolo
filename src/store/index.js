
import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialKeyCityState = { key: 0, nameCity: '', }

const keySlice = createSlice({
    name: 'key',
    initialState: initialKeyCityState,
    reducers: {
        keyValue(state, action) {
            state.key = state.key = action.payload;
        },
        getNameCity(state, action) {
            state.nameCity = action.payload;
        },

    }
});


const initialCurrentWeatherState = { degrees: '', unit: '', WeatherText: '' }

const currentWeatherSlice = createSlice({
    name: 'currentWeather',
    initialState: initialCurrentWeatherState,
    reducers: {
        getUnit(state, action) {
            state.unit = state.unit = action.payload;

        },

        getDegrees(state, action) {
            state.degrees = state.degrees = action.payload;

        },
        getWeatherText(state, action) {
            state.WeatherText = action.payload;
        }
    }
});

const initial5DaysOfDailyForecasts = { fiveDays: [] }

const initial5DaysOfDailyForecastsSlice = createSlice({
    name: '5DaysOfDailyForecasts',
    initialState: initial5DaysOfDailyForecasts,
    reducers: {
        getFiveDays(state, action) {
            state.fiveDays = action.payload;

        }

    }
})
//------------------------------- for page favorite ------------------------------------


// const initialFavoritesPage = {  favorite: [] }

// const initialFavoritesPageSlice = createSlice({
//     name: 'FavoritesPage',
//     initialState: initialFavoritesPage,
//     reducers: {
//         getName(state, action) {
//             state.favorite.name = action.payload;
//         },
//         getDegrees(state, action) {
//             state.favorite.degrees = action.payload;
//         },
//         getUnit(state, action) {
//             state.favorite.unit = action.payload;
//         },

//         getWeatherText(state, action) {
//             state.favorite.weatherText = action.payload;
//         }

//     }
// })


const store = configureStore({
    reducer: { keyCity: keySlice.reducer, currentWeather: currentWeatherSlice.reducer, fiveDaysOfDailyForecasts: initial5DaysOfDailyForecastsSlice.reducer },

});


export const keyActions = keySlice.actions;
export const currentWeatherActions = currentWeatherSlice.actions;
export const fiveDaysOfDailyForecastsActions = initial5DaysOfDailyForecastsSlice.actions;
// export const initialFavoritesPageActions = initialFavoritesPageSlice.actions;
export default store;