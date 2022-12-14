import axios from "axios";
import { ADMIN_API_URL, API_URL } from "../constant";

class propductApi {
  addProduct = ({ data, adminToken }) => {
    console.log(data);
    const url = `${ADMIN_API_URL}/product`;
    return axios.post(url, data, {
      headers: {
        Authorization: "Bearer " + adminToken,
      },
    });
  };
  getAllProductsByAdmin = ({page, perPage, keyWord, adminToken}) => {
    const url = `${ADMIN_API_URL}/product`;
    return axios.get(url, {
      params: {
        page,
        perPage,
        keyWord
      },
      headers: {
        Authorization: "Bearer " + adminToken,
      },
    });
  };

  getAllProducts = ({page, perPage, keyWord}) => {
    const url = `${API_URL}/product`;
    return axios.get(url, {
      params : {
        page,
        perPage,
        keyWord
      }
    });
  };

  deleteProduct = ({ id, adminToken }) => {
    const url = `${ADMIN_API_URL}/product/${id}`;
    return axios.delete(url, {
      headers: {
        Authorization: "Bearer " + adminToken,
      },
    });
  };

  getProductDetail = (id) => {
    const url = `${API_URL}/product/${id}`
    return axios.get(url)
  }

  getOption = (optionValues) => {
    console.log(optionValues)
    const url = `${API_URL}/option/GetByAnother`
    return axios.post(url, optionValues)
  }
}
const ProductApi = new propductApi();
export default ProductApi;
