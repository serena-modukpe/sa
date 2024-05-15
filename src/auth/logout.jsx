import React from "react";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import Authservices from "../services/Authservices";

import { useEffect } from "react";

const logoutRequest = async (token) => {
    try {
        await Authservices.logout(token);
    } catch (error) {
        console.log(error.message);
    }
};

export default function Logout() {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    useEffect(() => {
        // Appel de logoutRequest lors du montage du composant
        logoutRequest(auth.token);
    }, [auth.token]); // Le callback useEffect sera appelé à chaque changement du token

    return null; // Ou vous pouvez retourner un composant de chargement, par exemple
}
export {logoutRequest} ;