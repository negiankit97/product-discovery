import axios from "axios";
import config from "../../config";

function getProductsApi() {
    return axios.get(`${config.url}${config.productsEndpoint}`);
}

export {getProductsApi};