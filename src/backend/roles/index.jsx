import React from 'react';
import { Link,useNavigate } from "react-router-dom";
import { myroutes } from '../../routes/webroutes';
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

import Rolesservices from '../../services/Rolesservices';
import Layout from '../include/layout';


//import 'datatables.net-dt/js/dataTables.dataTables'
//import 'datatables.net-dt/css/jquery.dataTables.css'




export default function Rolesindex() {

    //##########################/// METHODES ##########################///
    const [roles, setRoles] = useState([])
    const navigate = useNavigate();
    const token = useSelector(state => state.auth.token)
    

    //get liste statuts
    const fetchRoles = async () => {
        try {
            const response = await Rolesservices.index(token);
            const responseData = response.data;
            console.log("Response Data:", responseData); // Afficher l'ensemble des données de réponse
    
            if (responseData.success && responseData.data && responseData.data.length > 0) {
                console.log("Data status:", responseData.success); // Vérifier le statut de la réponse
                console.log("Data:", responseData.data); // Vérifier les données retournées
                setRoles(responseData.data);
                console.log("Liste des rôles récupérée avec succès");
            } else {
                console.error("Erreur dans la réponse:", responseData.message);
            }
        } catch (error) {
            console.error("Erreur lors de la requête de statuts:", error);
        }
    
        // Afficher dataTable
    };
    
    

    


    //redirection sur la page edit sans afficher les id dans l'url
    const goToEdit = (param) => {
        navigate(myroutes.roles_edit, { state: { id: param } })
    }

    //suppression d'un élément
    const onDelete = (param) => {
        //confirm action
        Swal.fire({
            icon: "warning",
            text: "Voulez-vous confirmer cette action ?",
            showCancelButton: true,
            cancelButtonText: "Non",
            confirmButtonText: "Oui",
            confirmButtonColor: "red"
        }).then(result => {
            if (result.isConfirmed) {
              Rolesservices.delete(param, token).then((response) => {
                    if (response.data.erreur) {
                        Swal.fire({
                            icon: "error",
                            text: response.data.erreur
                        })
                    } else {
                        Swal.fire({
                            icon: "success",
                            text: response.data.message
                        })
                        fetchRoles()
                    }
                }).catch(e => {
                    Swal.fire({
                        icon: "error",
                        text: e.message
                    })
                    console.log(e)
                })
            }
        })
    }

    useEffect(() => {
        fetchRoles();
        
    }, [])


    //##########################/// END METHODES ##########################///


    return (
        <Layout>
            <main id="main" className="main">
                <div className="app-content pt-3 p-md-3 p-lg-4 app-card app-card-stat">
                    <div className="container-xl app-card-body">

                        <div className="row g-3 align-items-center justify-content-between">
                            <div className="col-auto">
                                <div className="pagetitle">
                                    <h1 className="app-page-title mb-0">Paramètres</h1>
                                    <nav>
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to={myroutes.dashboard} >Accueil</Link></li>
                                            <li className="breadcrumb-item active">Rôles </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>{/*//row*/}

                        <div className="row g-3 mb-4 align-items-center justify-content-between">
                            <div className="col-auto">
                                <h3 className="app-page-title mb-0">Liste des rôles <Link className="btn btn-success btn-sm" to={myroutes.roles_create} title="Ajouter"><i className="bi bi-plus"></i>Ajouter</Link> </h3>
                            </div>
                        </div>{/*//row*/}

                        <div className="app-card app-card-orders-table shadow-lg mb-5">
                            <div className="app-card-body mx-3 py-2">
                                <div className="table-responsive mt-4">

                                    <table className="table table-striped table-font table-hover app-table-hover mb-0 data-table">
                                        <thead className="table-info mt-2">
                                            <tr>
                                                <th className="text-center">N°</th>
                                                <th className="text-center">Libelle</th>
                                                <th className="text-center">Description</th>
                                                <th className="text-center">Statut</th>
                                                <th className="text-center">Date modification</th>
                                                <th className="text-center">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="table-group-divider" style={{ textAlign: "left" }}>
                                                    {roles.length > 0 && roles.map((item, index) => (
                                                    <tr key={index}>
                                                        <td className="text-center">{index + 1}</td>
                                                        <td className="text-center">{item && item.libelle ? item.libelle : 'N/A'}</td>
                                                        <td className="text-center"><span className="truncate">{item && item.description ? item.description : '---'}</span></td>
                                                        <td className="text-center"><span className={`badge ${item && item.get_statut && item.get_statut.libelle === 'ACTIF' ? 'text-bg-success' : 'text-bg-danger'}`}>
                                                            {item && item.get_statut && item.get_statut.libelle ? item.get_statut.libelle : 'N/A'}
                                                        </span></td>
                                                        <td className="text-center">
                                                    <span>{item.updated_at ? new Date(item.updated_at).toLocaleString() : 'N/A'}</span>
                                                </td>

                                                <td className="text-center">
                                                    <Button className="btn btn-sm btn-primary" onClick={() => goToEdit(item.id)} title="Modifier">
                                                        <i className="bi bi-pen-fill"></i>
                                                    </Button> &nbsp;&nbsp;
                                                    <Button className="btn btn-sm btn-danger" onClick={() => onDelete(item.id)} title="Supprimer">
                                                        <i className="bi bi-trash"></i>
                                                    </Button>  &nbsp;&nbsp;
                                                </td>
                                            </tr>
                                        ))}



                                        </tbody>
                                    </table>
                                </div>{/*//table-responsive*/}

                            </div>{/*//app-card-body*/}
                        </div>
                        {/*//app-card*/}

                        {/*//End table-content*/}



                    </div>{/*//container-fluid*/}
                </div>

            </main>
            {/*//app-content*/}
        </Layout>
            
       
    )
}
