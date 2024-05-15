import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from './providers/authSlice';
import storage from 'redux-persist/lib/storage';
import { thunk } from 'redux-thunk'; 
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { persistReducer, persistStore} from 'redux-persist';

// initialisation de la configuration de stockage par défaut
const persistConfig = {
    key: 'root',
    storage, 
    
    //blacklist: ['users'],
    stateReconciler : autoMergeLevel2,
  } 
  
  // déclaration des reducers à utiliser 
  const rootReducer = combineReducers({ 
    //user: persistReducer(userPersistConfig,userReducer), // case of different config
    auth: authReducer
  })
  
  // sauvegarde dans la persistance
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  
// enregistrement de la configuration dans notre magasin
export const store = configureStore({
  reducer: persistedReducer,
  //middleware: [thunk]
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

  
  export const persistor = persistStore(store)