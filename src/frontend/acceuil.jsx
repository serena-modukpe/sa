import React from 'react';
import "./assets/style.css";
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { myroutes } from '../routes/webroutes';
import { Carousel } from 'react-bootstrap';





const Accueil = () => {
  

  return (
    <React.Fragment>

<div className="container">
    <header id="header" className="allodoto fixed-top">
        <div className="topbar pt-3">
            <div className="row">
                <div className="col-4">
                    <img src="/assets/img/logo.png" alt="logo" className="img-fluid" />
                </div>
                <div className="col-8 align-items-center justify-content-center">
                    <div className="row">
                        <div className="col-8">
                            <nav>
                                <ul className="p-3 d-flex">
                                    <li className="li"><a href="#">Lorem ipsum</a></li>
                                    <li className="li"><a href="#">Lorem ipsum</a></li>
                                    <li className="li"><a href="#">Lorem ipsum</a></li>
                                    <li className="li"><a href="#">Lorem ipsum</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-4 mt-3">
                            {/* Utilisez Link au lieu de a pour les liens internes */}
                            <Link to={myroutes.register} className="register mx-3">S'inscrire</Link>
                            <Link to={myroutes.login} className="login text-primary mx-3">Se connecter</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         {/* Bannière avec une simple image en arrière-plan */}
     
    </header>
    <div className="container-fluid">
    <div className="banner">
        <div className="banner-content">
            <h1>Texte de présentation du site</h1>
            <p>Autres informations importantes...</p>
        </div>
    </div>
    </div>
   

    <section className='nous mt-5' id='apropos'>
    
        <div className="container d-flex ">
            <div className="row">
                <div className="col-6 premiere"style={{border:"2px solid red"}}>
                    <span>
                    <h3>Bienvenue sur Allo-Doto</h3>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente similique,
                        repellat fugiat eveniet quae asperiores neque atque eos,
                        quasi inventore, saepe non quis dicta.
                        Numquam assumenda labore eveniet eligendi consectetur!
                    
                    </span>
                       
                </div>
                <div className="col-6 deuxieme h-20">
                    <div className="row">
                        <div className="col-6">
                            <img src="/assets/img/medecin1.png" alt="logo" className="img-fluid " style={{width:"100%", height:"200px"}}/>
                        </div>
                        <div className="col-6">
                            <img src="/assets/img/medecin2.png" alt="logo" className="img-fluid " style={{width:"100%", height:"200px"}}/>
                        </div>
                        <div className="col-md-6 image1">
                        <img src="/assets/img/medecin3.png" alt="logo" className="img-fluid "style={{width:"100%", height:"200px"}} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

      
     
   

       
       
    </React.Fragment>
  );
}

export default Accueil;
