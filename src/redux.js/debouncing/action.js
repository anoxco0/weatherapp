import axios from "axios";

export const GET_DATA_LOADING = "GET_DATA_LOADING";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILURE = "GET_DATA_FAILURE";

export const getDataLoading = ()=>({
    type:GET_DATA_LOADING,
})

export const getDataSuccess=(payload)=>({
    type:GET_DATA_SUCCESS,
    payload
})

export const getDataFailure = ()=>({
    type:GET_DATA_FAILURE,
})


export const getDAta  = (value) => (dispatch) =>{
    console.log(value)
    dispatch(getDataLoading());
    axios.get('https://anoxco0-product.herokuapp.com/indian_cities')
    .then(res=>{let dat = res.data; dat = dat.filter(city=>city.toLowerCase().includes(value.toLowerCase())); dispatch(getDataSuccess(dat))})
    .catch(erro=>dispatch(getDataFailure()))
} 
// {const data = res.data.filter(ele=>ele.split(', ')[0].name.toLowerCase().includes(value.toLowerCase()));
    // console.log("dat",data, res)}