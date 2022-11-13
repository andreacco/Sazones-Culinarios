import axios from "axios"
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"
export const SUBSCRIBE_USER = "SUBSCRIBE_USER"
export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES"

export const getAllProducts = () => async (dispatch:any) => {
    try{
        await axios.get('https://sazones-culinarios-back.onrender.com/api/getAllProducts')
        .then(response => response.data)
        .then(allProducts => {
            return dispatch({type: GET_ALL_PRODUCTS, payload: allProducts})
        })
    }
    catch(error) {
        console.log(error);
    }
}

export const getAllCategories = () => async (dispatch:any) => {
    try{
        await axios.get('https://sazones-culinarios-back.onrender.com/api/getAllCategories')
        .then(response => response.data)
        .then(allCategories => {
            return dispatch({type: GET_ALL_CATEGORIES, payload: allCategories})
        })
    }
    catch(error) {
        console.log(error);
    }
}

export const subcribeUser = (newUser: Object) => {
        return async (dispatch:any) => {
        try{
            let res = await axios.post('http://localhost:5000/api/user/postUser', newUser)
            return dispatch({type: SUBSCRIBE_USER, payload: res.data})
        }
        catch(error) {
            console.log(error);
        }
    }
}
