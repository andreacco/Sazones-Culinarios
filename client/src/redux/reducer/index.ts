import {GET_ALL_PRODUCTS} from '../actions/index'

const initialState: productState = {
  products: []
}

const rootReducer = (state: productState = initialState, action: productAction): productState => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
        return {
            ...state,
            products: action.payload
        }
        default: 
        return state
    }
}
    
    export default rootReducer;