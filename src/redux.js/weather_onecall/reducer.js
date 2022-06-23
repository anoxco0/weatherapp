import {
    WEATHER_ERROR,
    WEATHER_LOADING, WEATHER_ONECALL
} from "./action"

const initial = {
    weather_loading: false,
    weather_error:false,
    weather_onecall:{},
}

export const weather_reducer = (store = initial, {
    type,
    payload
}) => {
    switch (type) {
        case WEATHER_LOADING:
            return {
                ...store,
                weather_loading: true,
            }
        case WEATHER_ERROR:
            return{
                ...store,
                weather_loading:false,
                weather_error:true,
            }
        case WEATHER_ONECALL:
            return{
                ...store,
                weather_loading:false,
                weather_error:false,
                weather_onecall:payload
            }
            default:
                return store
    }
}