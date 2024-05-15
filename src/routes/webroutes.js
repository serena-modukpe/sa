import {  Routes, Route } from "react-router-dom";
import Register from "../auth/register";
import Accueil from "../frontend/acceuil";
import Login from "../auth/login";
import Dashboard from "../backend/dashboard";
import RoleCreate from "../backend/roles/create";
import Rolesindex from "../backend/roles";
import RolesEdit from "../backend/roles/edit";
import ProfilCreate from "../backend/profils/create";
import ProfilIndex from "../backend/profils";
import ProfilEdit from "../backend/profils/edit";

const myroutes={
    dashboard:"/backend/dashboard",
    login: "/login",
    register: "register",

    //Rôles

    roles_create:"/backend/roles/create",
    roles_index:"/backend/roles/index" ,
    roles_edit:'/backend/roles/edit' ,   

     //profils

    profils_create:"/backend/profils/create",
    profils_edit:"/backend/profils/edit" ,
    profils_index:'/backend/profils/index'    
}

export {myroutes};

export default function Webroute(){
    return(
      
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path={myroutes.register} name="register" element={<Register />} />
                <Route path={myroutes.login} name="login" element={<Login />} />
                
                <Route path={myroutes.dashboard} name="dashboard" element={<Dashboard />} />

                {/*Roles*/}

                <Route path={myroutes.roles_create} name="roles_create" element={<RoleCreate />} />
                <Route path={myroutes.roles_index} name="roles_index" element={<Rolesindex />} />
                <Route path={myroutes.roles_edit} name="roles_edit" element={<RolesEdit />} />
                

                {/*profils*/}

                <Route path={myroutes.profils_create} name="profils_create" element={<ProfilCreate />} />
                <Route path={myroutes.profils_edit} name="profils_edit" element={<ProfilEdit />} />
                <Route path={myroutes.profils_index} name="profil_index" element={<ProfilIndex />} />
                


            </Routes>
        
    )
}