import axios from "axios"
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"
export const GET_BEST_SELLERS = "GET_BEST_SELLERS"
export const GET_BANNER_PRODUCTS = "GET_BANNER_PRODUCTS"
export const SUBSCRIBE_USER = "SUBSCRIBE_USER"
export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES"
export const SET_TITLE = "SET_TITLE"
export const RESET = "RESET"

export const getAllProducts = () => async (dispatch:any) => {
    try{
        // await axios.get('http://localhost:5000/api/getAllProducts')
        await axios.get('https://sazones-culinarios-back.onrender.com/api/getAllProducts')
        .then(response => response.data)
        .then(allProducts => {
            return dispatch({type: GET_ALL_PRODUCTS, payload: allProducts})
        })
    }
    catch(error) {
        console.log(error, "error, actions");
    }
}

export const getAllCategories = () => async (dispatch:any) => {
    try{
        // await axios.get('http://localhost:5000/api/getAllCategories')
        await axios.get('https://sazones-culinarios-back.onrender.com/api/getAllCategories')
        .then(response => response.data)
        .then(allCategories => {
            return dispatch({type: GET_ALL_CATEGORIES, payload: allCategories})
        })
    }
    catch(error) {
        console.log(error, "error, actions");
    }
}

export const getBestSellers = () => async (dispatch:any) => {
    try{
        // await axios.get('http://localhost:5000/api/getBestSellers')
        await axios.get('https://sazones-culinarios-back.onrender.com/api/getBestSellers')
        .then(response => response.data)
        .then(bestSellers => {
            return dispatch({type: GET_BEST_SELLERS, payload: bestSellers})
        })
    }
    catch(error) {
        console.log(error, "error, actions");
    }
}

export const getBannerProducts: any = () => async (dispatch:any) => {
    try{
        // await axios.get('http://localhost:5000/api/getBannerProducts')
        await axios.get('https://sazones-culinarios-back.onrender.com/api/getBannerProducts')
        .then(response => response.data)
        .then(bannerProducts => {
            return dispatch({type: GET_BANNER_PRODUCTS, payload: bannerProducts})
        })
    }
    catch(error) {
        console.log(error, "error, actions");
    }
}

export const subcribeUser = (newUser: Object) => {
        return async (dispatch:any) => {
        try{
            // var res = await axios.post('http://localhost:5000/api/user/postUser', newUser)
            let res = await axios.post('https://sazones-culinarios-back.onrender.com/api/user/postUser', newUser)
            return dispatch({type: SUBSCRIBE_USER, payload: res.data})
        }
        catch(error) {
            console.log(error, "error, actions");
            return dispatch({type: SUBSCRIBE_USER, payload: error})
        }
    }
}

export const setTitle = () => {
        return (dispatch:any) => {
        try{
            let title = "Sazones Culinarios"
            dispatch({type: SET_TITLE, payload: title})
        }
        catch(error) {
            console.log(error, "error, actions");
        }
    }
}

export const resetSub = () => {
    return { 
        type: RESET
    }
}


export const verifyUser: any = (id: any) => {
        return async () => {
        try{
            await axios.get(`http://localhost:5000/api/user/verified/${id}`)
        }
        catch(error) {
            console.log(error, "error, actions");
        }
    }
}