import { GET_ALL_PRODUCTS, SUBSCRIBE_USER, GET_ALL_CATEGORIES, SET_TITLE, RESET } from '../actions/index'

const initialState: productState = {
    products: [],
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