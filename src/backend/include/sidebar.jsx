import React from "react";
import { myroutes } from "../../routes/webroutes";
import { Link } from 'react-router-dom';
import { logoutRequest } from "../../auth/logout";
export default function Sidebar(){

   

    return(
        <React.Fragment>
            {/* ======= Sidebar ======= */}
                <aside id="sidebar" className="sidebar">

                <ul className="sidebar-nav" id="sidebar-nav">

                <li className="nav-item">
                    <a className="nav-link " href="index.html">
                    <i className="bi bi-grid"></i>
                    <span>Dashboard</span>
                    </a>
                </li>{/* End Dashboard Nav */}

                <li className="nav-item">
                    <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
                    <i className="bi bi-menu-button-wide"></i><span>Rôles</span><i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                    <li>
                        
                    <Link to ={myroutes.roles_create}><i className="bi bi-circle"></i><span>Ajouter un rôle</span></Link>
                        
                    </li>
                    <li>
                        
                        <Link to ={myroutes.roles_index} ><i className="bi bi-circle"></i><span>Liste des rôles</span></Link>
                       
                    </li>
                   
                    </ul>
                </li>{/* End Components Nav */}

                <li className="nav-item">
                    <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
                    <i className="bi bi-journal-text"></i><span>Profils</span><i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                    <li>
                    <Link to ={myroutes.profils_create}><i className="bi bi-circle"></i><span>Ajouter un profile</span></Link>
                    </li>
                    <li>
                        
                        <Link to ={myroutes.profils_index} ><i className="bi bi-circle"></i><span>Liste des profils</span></Link>
                       
                    </li>
                    <li>
                        <a href="forms-editors.html">
                        <i className="bi bi-circle"></i><span>Form Editors</span>
                        </a>
                    </li>
                    <li>
                        <a href="forms-validation.html">
                        <i className="bi bi-circle"></i><span>Form Validation</span>
                        </a>
                    </li>
                    </ul>
                </li>{/* End Forms Nav */}

                <li className="nav-item">
                    <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
                    <i className="bi bi-layout-text-window-reverse"></i><span>Tables</span><i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                    <li>
                        <a href="tables-general.html">
                        <i className="bi bi-circle"></i><span>General Tables</span>
                        </a>
                    </li>
                    <li>
                        <a href="tables-data.html">
                        <i className="bi bi-circle"></i><span>Data Tables</span>
                        </a>
                    </li>
                    </ul>
                </li>{/* End Tables Nav */}

                <li className="nav-item">
                    <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
                    <i className="bi bi-bar-chart"></i><span>Charts</span><i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                    <li>
                        <a href="charts-chartjs.html">
                        <i className="bi bi-circle"></i><span>Chart.js</span>
                        </a>
                    </li>
                    <li>
                        <a href="charts-apexcharts.html">
                        <i className="bi bi-circle"></i><span>ApexCharts</span>
                        </a>
                    </li>
                    <li>
                        <a href="charts-echarts.html">
                        <i className="bi bi-circle"></i><span>ECharts</span>
                        </a>
                    </li>
                    </ul>
                </li>{/* End Charts Nav */}

                <li className="nav-item">
                    <a className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
                    <i className="bi bi-gem"></i><span>Icons</span><i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul id="icons-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                    <li>
                        <a href="icons-bootstrap.html">
                        <i className="bi bi-circle"></i><span>Bootstrap Icons</span>
                        </a>
                    </li>
                    <li>
                        <a href="icons-remix.html">
                        <i className="bi bi-circle"></i><span>Remix Icons</span>
                        </a>
                    </li>
                    <li>
                        <a href="icons-boxicons.html">
                        <i className="bi bi-circle"></i><span>Boxicons</span>
                        </a>
                    </li>
                    </ul>
                </li>{/* End Icons Nav */}

                <li className="nav-heading">Pages</li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="users-profile.html">
                    <i className="bi bi-person"></i>
                    <span>Profile</span>
                    </a>
                </li>{/* End Profile Page Nav */}

                <li className="nav-item">
                    <a className="nav-link collapsed" href="pages-faq.html">
                    <i className="bi bi-question-circle"></i>
                    <span>F.A.Q</span>
                    </a>
                </li>{/* End F.A.Q Page Nav */}

                <li className="nav-item">
                    <a className="nav-link collapsed" href="pages-contact.html">
                    <i className="bi bi-envelope"></i>
                    <span>Contact</span>
                    </a>
                </li>{/* End Contact Page Nav */}

                <li className="nav-item">
                    <a className="nav-link collapsed" href="pages-register.html">
                    <i className="bi bi-card-list"></i>
                    <span>Register</span>
                    </a>
                </li>{/* End Register Page Nav */}

                <li className="nav-item">
                    <a className="nav-link collapsed" href="pages-login.html">
                    <i className="bi bi-box-arrow-in-right"></i>
                    <span>Login</span>
                    </a>
                </li>{/* End Login Page Nav */}

                <li className="nav-item">
                    <a className="nav-link collapsed" href="pages-error-404.html">
                    <i className="bi bi-dash-circle"></i>
                    <span>Error 404</span>
                    </a>
                </li>{/* End Error 404 Page Nav */}

                <li className="nav-item">
                    <a className="nav-link collapsed" href="pages-blank.html">
                    <i className="bi bi-file-earmark"></i>
                    <span>Blank</span>
                    </a>
                </li>{/* End Blank Page Nav */}

                </ul>

                </aside>{/* End Sidebar*/}
        </React.Fragment>
    );
}
