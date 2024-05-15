import React, { useState } from 'react';

function CRUDForm({ attributes, initialValues, onSubmit }) {
  const [formData, setFormData] = useState(initialValues || {});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="container">
        <div className="card">
            <div className="card-header">Ajouter un rôle</div>
            <div className="body">
            <Form
                className="mx-2 settings-form"
                style={{ textAlign: "left" }}
                onSubmit={handleSubmit}>{attributes.map(attribute => (
                    <div key={attribute.name}>
                      <label htmlFor={attribute.name}>{attribute.label}</label>
                      <input
                        type={attribute.type || 'text'}
                        id={attribute.name}
                        name={attribute.name}
                        value={formData[attribute.name] || ''}
                        onChange={handleChange}
                      />
                    </div>
                  ))}
                
                <Row>
                    <Col md={12} sm={12} className="form-group">
                    <Form.Group className="">
                        <Form.Label className="fw-bold">
                        email <i className="text-danger">*</i>
                        </Form.Label>
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
                    <Col md={12} sm={12} className="form-group">
                    <Form.Group className="">
                        <Form.Label className="fw-bold">
                        Password <i className="text-danger">*</i>
                        </Form.Label>
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
                <Button type="submit" variant="primary me-3 mt-5"className="boutton">
                Connecter
                </Button>
                        
                    </Form>
            </div>
        </div>
    </div>
            
                    
                   
    

    
  );
}

export default CRUDForm;
