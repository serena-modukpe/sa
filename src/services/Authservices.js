import axios from "axios";

const authHttp = axios.create({
    baseURL : process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_API_URL : process.env.REACT_APP_DEV_API_URL, 
    headers: {
        "Content-Type": "application/json"
    }
})

class AuthServices {

    login(data) {
        return authHttp.post("/api/login", data)
    } 

    register(data) {
        return authHttp.post("/api/register", data)
    } 


    logout(data) {
        return authHttp.post("/api/v01/web/logout",  data,{ headers: { 'Authorization': 'Bearer '+data} })
    } 

    listeUsers(token) {
        return authHttp.get("/api/v01/web/listeUsers",  { headers: { 'Authorization': 'Bearer '+token} })
    }

   

} 


export default new AuthServices()
