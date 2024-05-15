import React, {useState } from 'react';
 // Assurez-vous que le chemin est correct

import { Link } from 'react-router-dom';


import Swal from "sweetalert2";
import "../assets/css/style.css";
import { useNavigate } from 'react-router-dom';
import Rolesservices from '../../services/Rolesservices';
import { myroutes } from '../../routes/webroutes';
import { Button, Col, Form, Row } from "react-bootstrap";
import Layout from '../include/layout';
import { useSelector } from "react-redux";



export default function RoleCreate(){

    const [libelle, setLibelle]=useState("");
    const [description, setDescription]=useState("");
    const [validationError, setValidationError] = useState({});
    const token = useSelector(state => state.auth.token)
    
    const navigate= useNavigate();


    ///Save form data
    const handleSubmit = async (event) => {
        event.preventDefault()
        let form = {
            libelle, description
        }

        await Rolesservices.store(form,token).then((response) => {
            if (response.data.status !== 200) {
                navigate(myroutes.roles_index)
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
                                    <Col md={12} sm={12} className="form-group">
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-bold">Libelle <i className="text-danger">*</i>
                                            </Form.Label>
                                            <Form.Control className="border  border rounded-2" onChange={(e) => setLibelle(e.target.value)}
                                                value={libelle}
                                               
                                                name="libelle"
                                                aria-label="libelle"
                                                maxLength={100}
                                                minLength={3}
                                                type="text"
                                                required

                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={12} sm={12} className="form-group">
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-bold">Description  <i className="text-danger"></i>
                                            </Form.Label>
                                            <textarea value={description} name="description" id="" cols="30" onChange={(e) => setDescription(e.target.value)} rows="5" className="form-control summernote border border rounded-2" placeholder=""></textarea>
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
