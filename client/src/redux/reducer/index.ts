import { GET_ALL_PRODUCTS, SUBSCRIBE_USER, GET_ALL_CATEGORIES } from '../actions/index'

const initialState: productState = {
    products: [],
    categories: []
}

const rootReducer = (state: productState = initialState, action: productAction): productState => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
        return {
            ...state,
            products: action.payload
        }

        case SUBSCRIBE_USER: 
        return {
            ...state
        }

        case GET_ALL_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }

        default: 
        return state
    }
}
    
    export default rootReducer;