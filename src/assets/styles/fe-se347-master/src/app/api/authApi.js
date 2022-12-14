import axios from "axios";
import { ADMIN_API_URL, AUTH_API_URL, USER_API_URL } from "../constant";

class authApi {
    apiMe = (adminToken) => {
        const url = `${ADMIN_API_URL}/me`
        return axios.get(url,  {
            headers: {
              Authorization: "Bearer " + adminToken,
            },
          })
    }

    apiUserMe = (userToken) => {
        const url = `${USER_API_URL}/me`
        return axios.get(url,  {
            headers: {
              Authorization: "Bearer " + userToken,
            },
          })
    }

    login = (data) => {
        const url = `${AUTH_API_URL}/login`
        return axios.post(url, data)
    }

    adminLogin = (data) => {
        const url = `${AUTH_API_URL}/admin/login`
        return axios.post(url, data)
    }

    socialLogin = (data) => {
        const url = `${AUTH_API_URL}/redirect/${data}`
        return axios.get(url)
    }

    register = (data) => {
        const url = `${AUTH_API_URL}/register`
        return axios.post(url, data)
    }

    verify = (data) => {
        const url = `${AUTH_API_URL}/verifyRegister`
        return axios.post(url, data)
    }

    callbackSocial = (data) => {
        const url = `${AUTH_API_URL}/callback` + data;
        return axios.get(url, {})
    }
}
const AuthApi = new authApi()
export default AuthApi