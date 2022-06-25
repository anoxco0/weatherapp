import axios from "axios";

export const GET_DATA_LOADING = "GET_DATA_LOADING";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILURE = "GET_DATA_FAILURE";
export const GET_ALL_DATA = "GET_ALL_DATA";
export const GET_CITIES = "GET_CITIES";

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

export const getCities = (payload) =>({
    payload,
})

export const getAllData = (payload) =>({
    type:GET_ALL_DATA,
    payload,
})



export const getDAta = (value) => (dispatch) => {
    console.log(value)
    dispatch(getDataLoading());
    axios.get('https://anoxco0-product.herokuapp.com/indian_cities')
        .then(res => {
            let dat = res.data;
            dat = dat.filter(city => city.toLowerCase().includes(value.toLowerCase()));
            dispatch(getDataSuccess(dat))
        })
        .catch(erro => dispatch(getDataFailure()))
}


export const GetAllData = (allData) =>(dispatch)=>{
    dispatch(getDataLoading());
    let AllData = [];
    allData.forEach((element, i) => {
        dispatch(getDataLoading())
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${element.split(', ')[0]}&units=metric&appid=ddc894a0a38425be12ca6bbf79cb31e5`)
        .then(Response => {
            dispatch(getDataLoading())
            if (Response.data) {
                let city = Response.data;
                city.name=element;
                AllData.push(city);
            }
            dispatch(getCities(AllData))
        })
        .catch(error => dispatch(getDataFailure()));
    });
    dispatch(getAllData(AllData))
}