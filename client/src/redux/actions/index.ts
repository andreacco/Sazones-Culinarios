import axios from "axios"
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"

export const getAllProducts = () => async (dispatch:any) => {
    try{
        await axios.get('http://localhost:5000/api/getAllProducts')
        .then(response => response.data())
        .then(allProducts => {
            return dispatch({type: GET_ALL_PRODUCTS, payload: allProducts})
        })
    }
    catch(error) {
        console.log(error);
    }
}