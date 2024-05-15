import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./assets/style.css";
import Authservices from "../services/Authservices";
import { myroutes } from "../routes/webroutes";

export default function Register() {
    const navigate = useNavigate();
    
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [telephone, setTelephone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validationError] = useState({});
    const [showPassword, setShowPassword] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            nom,
            prenom,
            telephone,
            email,
            password,
        };

        try {
            
            const response = await Authservices.register(formData);
            
            if (response.status === 200) {
                Swal.fire({
                    icon: "success",
                    title: "Bravo !",
                    text: response.data.message,
                });

                setNom("");
                setPrenom("");
                
                setTelephone("");
                setEmail("");
                setPassword("");

                navigate(myroutes.login);

            } else {
                Swal.fire({
                    icon: "error",
                    title: "Erreur",
                    text: response.data.message,
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Erreur',
                text: 'Vous avez mal renseigné les champs ou cet élément existe déjà dans la base de données'
            });
            console.log(error);
           
        }
    };

    return (
        <React.Fragment>
         
                           
            <section className="utilisateur pt-5"style={{  padding:"auto", height:"100vh"}}>
                <div className="container">
                  
                 
                    <div className="row  justify-content-center">
                   
                      <div className="col-md-6 pt-4">
                      
                        <div className="row align-items-center justify-content-center">
                            
                            <div className="col-6"><img src="/assets/img/hello-doc.png" alt="hello-doc" className="rounded-icon img-fluid"/></div>
                            <div className="col-12"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse lectus tortor.</p></div>
                        
                        </div>

                      </div>
                        <div className=" col-md-6 pt-4 align-items-center justify-content-center">                       
                            <div className="container mt-0"></div>
                            <div className="card mb-3 ">
                                <div className="card-body">
                                
                                    <div className=" pb-2">
                                      
                                      
                                        <div className="pt-0 pb-2 text-center mb-3">
                                            <h5 className="card-title text-center pb-0 fs-4" style={{ color: "#000080" }}>
                                                Espace de création de compte <hr />
                                            </h5>
                                        </div>
                                        <div className="app-card-body">
                                         
                                            <Row>
                                                {Object.keys(validationError).length > 0 && (
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="alert alert-danger">
                                                                <ul className="mb-0">
                                                                    {<li>{validationError}</li>}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </Row>
                                           
                                            <Form className="mx-3 settings-form" style={{ textAlign: "left" }} onSubmit={handleSubmit}>
                                                <Row>
                                                    <Col md={6} sm={6} className="form-group">
                                                        <Form.Group className="mb-3">
                                                            <Form.Label className="fw-bold">Nom <i className="text-danger">*</i></Form.Label>
                                                            <Form.Control
                                                                className="border border rounded-2"
                                                                onChange={(e) => setNom(e.target.value)}
                                                                value={nom}
                                                                placeholder=""
                                                                name="nom"
                                                                aria-label="nom"
                                                                maxLength={100}
                                                                minLength={2}
                                                                type="text"
                                                                required
                                                            />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col md={6} sm={6} className="form-group">
                                                        <Form.Group className="mb-3">
                                                            <Form.Label className="fw-bold">Prénom (s) <i className="text-danger">*</i></Form.Label>
                                                            <Form.Control
                                                                className="border border rounded-2"
                                                                onChange={(e) => setPrenom(e.target.value)}
                                                                value={prenom}
                                                                placeholder=""
                                                                name="prenom"
                                                                aria-label="prenom"
                                                                maxLength={100}
                                                                minLength={3}
                                                                type="text"
                                                                required
                                                            />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col md={6} sm={6} className="form-group">
                                                    <Form.Group className="mb-3">
                                                        <Form.Label className="fw-bold">Téléphone <i className="text-danger">*</i></Form.Label>
                                                        <Form.Control
                                                            className="border border rounded-2"
                                                            onChange={(e) => setTelephone(e.target.value)}
                                                            value={telephone}
                                                            placeholder=""
                                                            name="telephone"
                                                            aria-label="telephone"
                                                            maxLength={8} // Nombre maximum de caractères
                                                            type="tel" // Utilisez le type "tel" pour les champs de téléphone
                                                            required
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                    <Col md={6} sm={6} className="form-group">
                                                        <Form.Group className="mb-3">
                                                            <Form.Label className="fw-bold">email <i className="text-danger">*</i></Form.Label>
                                                            <Form.Control
                                                                className="border border rounded-2"
                                                                onChange={(e) => setEmail(e.target.value)}
                                                                value={email}
                                                                placeholder=""
                                                                name="email"
                                                                aria-label="email"
                                                                maxLength={100}
                                                                minLength={2}
                                                                type="email"
                                                                required
                                                            />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col md={6} sm={6} className="form-group">
                                                        <Form.Group className="mb-3">
                                                            <Form.Label className="fw-bold">Password <i className="text-danger">*</i></Form.Label>
                                                            <Form.Control
                                                            type={showPassword ? "text" : "password"}
                                                            placeholder="Entrez votre mot de passe"
                                                            value={password}
                                                            onChange={(e) => setPassword(e.target.value)}
                                                            name="password"
                                                        />
                                                        <Form.Text className="text-muted">
                                                            {/* Icône "œil" pour afficher/masquer le mot de passe */}
                                                            <i
                                                                className={`bi ${
                                                                    showPassword ? "bi-eye-slash" : "bi-eye"
                                                                }`}
                                                                onClick={() => setShowPassword(!showPassword)}
                                                                style={{ cursor: "pointer" }}
                                                            ></i>{" "}
                                                            {showPassword ? "Masquer" : "Afficher"} le mot de passe
                                                        </Form.Text>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Button type="submit" variant="primary me-3" >Enregistrer</Button>
                                            </Form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
            </section>
            
        </React.Fragment>
    );
}
