import axios from "axios";
import { resetAuthData } from "../app/providers/authSlice";
import { store } from "../app/store";

//Ici l'application cherche si c'est démarré en ligne ou en local pour aller l'url déclaré dans le .env

var app_url = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_API_URL : process.env.REACT_APP_DEV_API_URL;
export { app_url }

const http = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_API_URL : process.env.REACT_APP_DEV_API_URL,
    //withCredentials: true,
    headers: {
        'Access-Control-Allow-Origin': "*",
        'Content-Type': 'application/json;charset=UTF-8',
    }
});

// Add a response interceptor
http.interceptors.response.use(function (response) {
    return response;
}, function (error) {

    if (error.response && error.response.status === 401) {        
        // En cas d'erreur 401, déconnecter l'utilisateur
        store.dispatch(resetAuthData());
        // Rediriger vers la page de connexion
        window.location.href = "/";
    }
    return Promise.reject(error);
});



export default http
