import axios from "axios";
import { ADMIN_API_URL, API_URL } from "../constant";


class categoryApi {

  getAllCategoriesByAdmin = async ({page, perPage, adminToken, noPagination}) => {
    const url = `${ADMIN_API_URL}/category`;
    return await axios.get(url, {
      params: {
        page, 
        perPage,
        noPagination
      },
      headers: {
        Authorization: "Bearer " + adminToken,
      },
    });
  };

  getAllCategories = () => {
    const url = `${API_URL}/category`;
    return axios.get(url);
  };

  deleteCategory = ({id, adminToken}) => {
    const url = `${ADMIN_API_URL}/category/${id}`;
    return axios.delete(url, {
      headers: {
        Authorization: "Bearer " + adminToken,
      },
    });
  };

  addCategory = ({data, adminToken}) => {
    const url = `${ADMIN_API_URL}/category`;
    return axios.post(url, data, {
      headers: {
        Authorization: "Bearer " + adminToken,
      },
    });
  };

  updateCategory = ({id, name, adminToken}) => {
    const url = `${ADMIN_API_URL}/category/${id}`;
    return axios.put(url, {name: name}, {
      headers: {
        Authorization: "Bearer " + adminToken,
      },
    });
  };
}

const CategoryApi = new categoryApi();
export default CategoryApi;
