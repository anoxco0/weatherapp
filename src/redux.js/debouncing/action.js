import axios from "axios";

export const GET_DATA_LOADING = "GET_DATA_LOADING";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILURE = "GET_DATA_FAILURE";

export const getDataLoading = () => ({
    type: GET_DATA_LOADING,
})

export const getDataSuccess = (payload) => ({
    type: GET_DATA_SUCCESS,
    payload
})

export const getDataFailure = () => ({
    type: GET_DATA_FAILURE,
})


export const getDAta = (value) => (dispatch) => {
    console.log(value)
    dispatch(getDataLoading());
    axios.get('https://anoxco0-product.herokuapp.com/indian_cities')
        .then(res => {
            let dat = res.data;
            dat = dat.filter(city => city.toLowerCase().includes(value.toLowerCase()));
            dat.forEach((element, i) => {
                axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${element.split(', ')[0]}&units=metric&appid=ddc894a0a38425be12ca6bbf79cb31e5`)
                .then(Response => {
                    if (Response.data) {
                        let city = Response.data;
                        city.name = element;
                        dat[i] = city;
                    }
                })
                .catch(error => console.log(error))
            });
            dispatch(getDataSuccess(dat))
        })
        .catch(erro => dispatch(getDataFailure()))
}