import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    token: "",
};

export const auth = createSlice({
    name: 'auth',
    initialState,

    reducers: {
        loginUser(state, action) {
            state.token = "";
            const loginRequest = action.payload;
            state.user = loginRequest.user;
            state.token = loginRequest.access_token;
        },

        resetAuthData(state) {
            state.user = null;
            state.token = '';
        },

        // Ajoutez une action pour vérifier l'authentification
        // Vous pouvez appeler jwtDecode ici pour vérifier le token et mettre à jour l'état en conséquence
        checkAuthenticate(state) {
            // Logique pour vérifier l'authentification
        },
    },
});

export const { loginUser, checkAuthenticate, resetAuthData } = auth.actions;

export default auth.reducer;
