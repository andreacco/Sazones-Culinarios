import { GET_ALL_PRODUCTS, SUBSCRIBE_USER, GET_ALL_CATEGORIES, SET_TITLE, RESET, GET_BEST_SELLERS, GET_BANNER_PRODUCTS, GET_SEARCH_PRODUCTS } from '../actions/index'

const initialState: productState = {
    products: [],
    bestSellers: [],
    bannerProducts: [],
    productDetail: [],
    categories: [],
    title: '',
    subscribeResponse: ''
}

const rootReducer = (state: productState = initialState, action: productAction): productState => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }

        case GET_BEST_SELLERS:
            return {
                ...state,
                bestSellers: action.payload
            }

        case GET_BANNER_PRODUCTS:
            return {
                ...state,
                bannerProducts: action.payload
            }

        case GET_SEARCH_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }

        case SUBSCRIBE_USER: 
            return {
                ...state,
                subscribeResponse: action.payload
            }

        case GET_ALL_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }

        case SET_TITLE:
            return {
                ...state,
                title: action.payload
            }
            
        case RESET:
            return {
                ...state,
                subscribeResponse: ''
            }

        default: 
        return state
    }
}
    
    export default rootReducer;