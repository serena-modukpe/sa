import React, {useEffect, useState } from 'react';
 // Assurez-vous que le chemin est correct

import { Link } from 'react-router-dom';


import Swal from "sweetalert2";
import "../assets/css/style.css";
import { useNavigate } from 'react-router-dom';

import { myroutes } from '../../routes/webroutes';
import { Button, Col, Form, Row } from "react-bootstrap";
import Layout from '../include/layout';
import { useSelector } from "react-redux";
import Rolesservices from '../../services/Rolesservices';
import Authservices from '../../services/Authservices';
import Habilitaionsservices from '../../services/Habilitaionsservices';
import Profilsservices from '../../services/Profilsservices';
import { MultiSelect } from 'primereact/multiselect';



export default function ProfilUpdate(){
    const [role_id, setRole_id]=useState("");
    const [user_id, setUser_id]=useState("");
    const [habilitation_id, setHabilitation_id]=useState([]);
    const [roles, setRoles]=useState("");
    const [users, setUsers]=useState("");
    const [habilitations, setHabilitations]=useState([]);
    const [selectedOptionHabilitations, setSelectedOptionHabilitations]=useState([]);
    const [validationError, setValidationError] = useState({});
    const token = useSelector(state => state.auth.token)
    
    const navigate= useNavigate();

    //console.log(token);
    //get liste profils
    const fetchHabilitations = async () => {
        await Habilitaionsservices.index(token)
        .then((res) => {
            setHabilitations(res.data.data);
            // console.log("res.data.data", res.data.data)
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const datahabilitations = habilitations.map((item) => {
        return {
        label: item.libelle,
        value: item.id,
        };
    });

    const handleSlectedHabilitationsChange = (selectedOptionHabilitations) => {
        setSelectedOptionHabilitations(selectedOptionHabilitations);
      };

    const fecthRoles = async () => {
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
    }

    const fecthUsers = async () => {
        try {
          const response = await Authservices.listeUsers(token);
          const responseData = response.data;
          
          console.log("Response Data:", responseData); // Afficher l'ensemble des données de réponse
    
          if (responseData.success && responseData.data && responseData.data.length > 0) {
              console.log("Data status:", responseData.success); // Vérifier le statut de la réponse
              console.log("Data:", responseData.data); // Vérifier les données retournées
              setUsers(responseData.data);
              console.log("Liste des rôles récupérée avec succès");
          } else {
              console.error("Erreur dans la réponse:", responseData.message);
          }
      } catch (error) {
          console.error("Erreur lors de la requête de statuts:", error);
      }
    }

    

    ///Save form data
    const handleSubmit = async (event) => {
        event.preventDefault()
        let form = {
            role_id, user_id, 
            habilitation_id: selectedOptionHabilitations 
           
        }
        

        
       
        await Profilsservices.store(form,token).then((response) => {
            if (response.data.status !== 200) {
                console.log(role_id)
                console.log(user_id)
                navigate(myroutes.profils_index)
                //alert ("ok")
                Swal.fire({
                  icon: "success",
                  text: "Votre enregistrement a été effectué avec succès",
                  timer: 3000,
                });
            } else {
               // alert (" non ok")
                //redirection sur index
                Swal.fire({
                    icon: "error",
                    text: response.data.message,
                    showConfirmButton: true,
                    timer: 3000,
                  });
            }
        }).catch(error => {
            Swal.fire({
                icon: "error",
                text: error.message,
              });
              console.log(error);
        });
    }
    useEffect(() => {
        fecthRoles();
        fecthUsers();
        fetchHabilitations()
        
    }, [])

       

    //##########################/// END METHODES ##########################///

    return (
        <React.Fragment>
            
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
                            <h1 className="app-page-title mb-0">Enregistrement </h1>
                        </div>
                    </div>{/*//row*/}

                    <div className="app-card app-card-settings shadow-lg mb-5">
                        <div className="app-card-body py-3">
                            <Row>
                                {
                                    Object.keys(validationError).length > 0 && (
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="alert alert-danger">
                                                    <ul className="mb-0">
                                                        {
                                                            <li>{validationError}</li>
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </Row>
                            <Form className="mx-3 settings-form" style={{ textAlign: "left" }} onSubmit={handleSubmit}>

                            <Row>
                            <Col md={6} sm={6} className="formx-groupx">
                                    <Form.Group className="mb-3">
                                        <Form.Label className="fw-bold">
                                        Rôle <i className="text-danger">*</i>
                                        </Form.Label>
                                        <Form.Select
                                        className=""
                                        id="role_id"
                                        name="role_id"
                                        value={role_id}
                                        required
                                        onChange={(e) => {
                                            setRole_id(e.target.value);
                                        }}
                                        >
                                        <option>Selectionnez un role</option>
                                        {roles.length > 0 &&
                                            roles.map((item) => (
                                            <option key={item.id} value={item.id}>
                                                {item.libelle}
                                            </option>
                                            ))}
                                        </Form.Select>
                                    </Form.Group>
                                    </Col>
                                    <Col md={6} sm={6} className="formx-groupx">
                                    <Form.Group className="mb-3">
                                        <Form.Label className="fw-bold">
                                        user <i className="text-danger">*</i>
                                        </Form.Label>
                                        <Form.Select
                                        className=""
                                        id="user_id"
                                        name="user_id"
                                        value={user_id}
                                        required
                                        onChange={(e) => {
                                            setUser_id(e.target.value);
                                        }}
                                        >
                                        <option>Selectionnez un role</option>
                                        {users.length > 0 &&
                                            users.map((item) => (
                                            <option key={item.id} value={item.id}>
                                                {item.nom}  &nbsp; {item.prenom}       
                                            </option>
                                            ))}
                                        </Form.Select>
                                    </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                <Col md={6} sm={6} className="form-group">
                                    <Form.Group className="mb-4">
                                        <Form.Label className="fw-bold">
                                        Ajouter le(s) habilation(s) de l'utilisateur <i className="text-danger">*</i>{" "}
                                        </Form.Label>
                                        
                                        <MultiSelect
                                        
                                        value={selectedOptionHabilitations}
                                        onChange={(e) => {
                                            setSelectedOptionHabilitations(e.value);
                                            handleSlectedHabilitationsChange(e.value);
                                        }}
                                        options={datahabilitations}
                                        optionLabel="label"
                                        placeholder="Sélectionnez une habilitation"
                                        maxSelectedLabels={15}
                                        className="w-full md:w-20rem"
                                        style={{ width: "100%", height: "40px" }}
                                        filter
                                        filterPlaceholder="Rechercher"
                                        />
                                       
                                        
                                    </Form.Group>
                                    </Col>
                                
                                </Row>

                               

                                <Button type="submit" variant="warning me-3">Enregistrer</Button>
                                <Button variant="secondary" >Annuler</Button>

                            </Form>

                        </div>{/*//app-card-body*/}
                    </div>
                    {/*//app-card*/}

                </div>{/*//container-fluid*/}
            </div>{/*//app-content*/}
            </main>
           </Layout>
          
        </React.Fragment>
    )
}
