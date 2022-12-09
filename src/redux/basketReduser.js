const defaultState = {
    product: [],
    totalCost: 0,
    ref: {},
}

const ADD_PRODUCT = "ADD_PRODUCT";
const REMOVE_PRODUCT = "REMOVE_PRODUCT";
const ADD_COST = "ADD_COST";
const CORRECT_PRODUCT = "CORRECT_PRODUCT"
const SEND_REF = "SEND_REF";

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {...state, product: [...state.product, ...action.payload]}

        case ADD_COST:
                let cost = 0;
                for (let i = 0; i < state.product.length; i++){
                    cost = cost + state.product[i].price * state.product[i].quantity;
                }
                return {...state, totalCost: cost}




        case CORRECT_PRODUCT:

            return {product: state.product.map(product => product.id === action.payload.id
                                                                ?   {...product, quantity: action.payload.quantity}
                                                                :   product
                                                          )}

        case REMOVE_PRODUCT:
            return {...state, product: state.product.filter(product => product.id !== action.payload)}

        case SEND_REF:
            return {...state, ref: action.payload}

        default:
            return state;
    }
}

export const addProductAction = (payload) => ({type: ADD_PRODUCT, payload})
export const removeProductAction = (payload) => ({type: REMOVE_PRODUCT, payload})
export const countTotalCostAction = (payload) => ({type: ADD_COST, payload})
export const correctProductAction = (payload) => ({type: CORRECT_PRODUCT, payload})
export const sendReferentsForInfo = (payload) => ({type: SEND_REF, payload})