import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Rolesservices from "../../services/Rolesservices";
import { myroutes } from "../../routes/webroutes";
import Layout from "../include/layout";
import Statutsservices from "../../services/Statutsservices";
import { useSelector } from "react-redux";



export default function RolesEdit() {

    //##########################/// METHODES ##########################///
    //navigate pour faire les redirections
    const navigate = useNavigate()
    const [validationError, setValidationError] = useState({})
    const location = useLocation()
    const token = useSelector(state => state.auth.token)

    //Creation des ascesseurs getters et setters pour tout le formulaire
    const [libelle, setLibelle] = useState('')
    const [description, setDescription] = useState('')
    const [statut_id, setStatut_id] = useState('')
    const [statuts, setStatuts] = useState([])



    //get liste statuts
    const fetchStatuts = async () => {
        try {
          const response = await Statutsservices.index(token);
          const responseData = response.data;
          console.log("Response Data:", responseData); // Afficher l'ensemble des données de réponse
    
          if (responseData.success && responseData.data && responseData.data.length > 0) {
              console.log("Data status:", responseData.success); // Vérifier le statut de la réponse
              console.log("Data:", responseData.data); // Vérifier les données retournées
              setStatuts(responseData.data);
              console.log("Liste des rôles récupérée avec succès");
          } else {
              console.error("Erreur dans la réponse:", responseData.message);
          }
      } catch (error) {
          console.error("Erreur lors de la requête de statuts:", error);
      }
    }

    ///Save form data
    const handleUpdate = async (event) => {
        event.preventDefault()
        let form = {
            libelle, description, statut_id
        }

        
        
        await Rolesservices.update(location.state.id, form,token).then((response) => {
            if (response.status === 200) {
                //redirection sur index
                Swal.fire({
                    icon: "success",
                    text: "Modification effectuée avec succès",
                    timer: 3000,
                  });
                  navigate(myroutes.roles_index)
            } else {
                  Swal.fire({
                    icon: "error",
                    text: response.data.message,
                    showConfirmButton: false,
                    timer: 2000
                })
                setValidationError(response.data.message)
            }
        }).catch(error => {
            Swal.fire({
                icon: "error",
                text: error.message
            })
            //affichage des erreurs sur le formulaire
            setValidationError(error.erreur)
        });
    }

    const edit = async () => {
        try {
            const response = await Rolesservices.edit(location.state.id, token);
            //console.log("API response", response);
            if (response.data) {
                const data = response.data.data;
               // console.log("data", data);
                setLibelle(data.libelle);
                setDescription(data.description);
                setStatut_id(data.statut_id);

            } else {
                console.log("Data not found in API response");
                // Gérer le cas où response.data ou response.data.statut est undefined ou null
            }
        } catch (error) {
            console.error("API error", error);
            Swal.fire({
                icon: "error",
                text: error.message
            });
            setValidationError(error.erreur);
        }
    };
    
    

    

    useEffect(() => {
        edit();
        fetchStatuts();
        
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
                            <h1 className="app-page-title mb-0">Modification </h1>
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
                            <Form className="mx-3 settings-form" style={{ textAlign: "left" }} onSubmit={handleUpdate}>
                            <Row>
                                    <Col md={6} sm={6} className="form-group">
                                        <Form.Group className="mb-3">
                                            <Form.Label>Libelle <i className="text-danger">*</i>
                                            </Form.Label>
                                            <Form.Control className="border  border rounded-2" onChange={(e) => setLibelle(e.target.value)}
                                                value={libelle}
                                                placeholder="Libelle du statut"
                                                name="libelle"
                                                aria-label="libelle"
                                                maxLength={100}
                                                minLength={3}
                                                type="text"
                                                required

                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6} sm={6} className="formx-groupx">
                                    <Form.Group className="mb-3">
                                        <Form.Label className="fw-bold">
                                        Statut <i className="text-danger">*</i>
                                        </Form.Label>
                                        <Form.Select
                                        className=""
                                        id="statut_id"
                                        name="statut_id"
                                        value={statut_id}
                                        // required
                                        onChange={(e) => {
                                            setStatut_id(e.target.value);
                                        }}
                                        >
                                        
                                        {statuts.length > 0 &&
                                            statuts.map((item) => (
                                            <option key={item.id} value={item.id}>
                                                {item.libelle}
                                            </option>
                                            ))}
                                        </Form.Select>
                                    </Form.Group>
                                    </Col>
                                </Row>
                               
                                <Row>
                                    <Col md={12} sm={12} className="form-group">
                                        <Form.Group className="mb-3">
                                            <Form.Label>Description  <i className="text-danger"></i>
                                            </Form.Label>
                                            <textarea value={description} name="resume" id="" cols="30" onChange={(e) => setDescription(e.target.value)} rows="5" className="form-control summernote border border rounded-2" placeholder=""></textarea>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Button type="submit" variant="warning me-3">Enregistrer</Button>
                                <Button variant="secondary" onClick={() => navigate(myroutes.roles_index)}>Annuler</Button> 
                            </Form>

                        </div>{/*//app-card-body*/}
                    </div>
                    {/*//app-card*/}

                </div>{/*//container-fluid*/}
            </div>{/*//app-content*/}
            </main>
        </Layout>
           
        
    )
}