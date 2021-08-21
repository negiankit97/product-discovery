import { getProductsApi } from "../service/apis";
import { FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE, FILTER_PRODUCTS_FAILURE, FILTER_PRODUCTS_SUCCESS, LOADING_STATE, SET_ACTIVE_LINK } from "../actions/constants";
import { filteredProducts } from "../util/helpers";

const filterProducts = (data) => (dispatch) => {
    if(!data.gender && !data.categories.length && !data.brands.length) {
        return dispatch({
            type: SET_ACTIVE_LINK,
            isActive: false
        })
    }
    try {
        dispatch({
            type: LOADING_STATE
        });
        const payload = filteredProducts(data);
        dispatch({
            type: FILTER_PRODUCTS_SUCCESS,
            payload: payload
        })
    }catch(err){
        dispatch({
            type: FILTER_PRODUCTS_FAILURE,
            payload: {
                error: "No Products Found."
            }
        });
    }
}

const fetchProducts = () => async (dispatch) => {
    try {
        dispatch({
            type: LOADING_STATE
        });
        const response = await getProductsApi();
        return dispatch({
            type: FETCH_PRODUCTS_SUCCESS,
            payload: response.data.products
        });
    } catch (error) {
        dispatch({
            type: FETCH_PRODUCTS_FAILURE,
            payload: {
                error
            }
        });
    }
}

export { fetchProducts, filterProducts }