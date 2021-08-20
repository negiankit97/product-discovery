import {
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    FILTER_PRODUCTS_SUCCESS,
    FILTER_PRODUCTS_FAILURE,
    SET_ACTIVE_LINK,
    LOADING_STATE
} from "../actions/constants";

const initialState = {
    products: [],
    filteredProducts: [],
    loading: false,
    error: {
        isError: false,
        errorMssg: ""
    },
    isActiveFilter: false
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case LOADING_STATE:
            return {
                ...state,
                loading: true,
                error: {
                    isError: false,
                    errorMssg: ""
                }
            };
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
                loading: false,
                error: {
                    isError: false,
                    errorMessage: ""
                },
                isActiveFilter: false
            };
        case FILTER_PRODUCTS_SUCCESS:
            return {
                ...state,
                filteredProducts: action.payload,
                loading: false,
                error: {
                    isError: false,
                    errorMessage: action.payload.error
                },
                isActiveFilter: true
            };
        case FILTER_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: {
                    isError: true,
                    errorMssg: action.payload.error
                },
                isActiveFilter: false
            };
        case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                error: {
                    isError: true,
                    errorMssg: action.payload
                }
            };
        case SET_ACTIVE_LINK:
            return {
                ...state,
                isActiveFilter: action.isActive
            };
        default:
            return state;
    }
}

export default reducer;