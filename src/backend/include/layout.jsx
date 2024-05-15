import React, { Children } from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import "../assets/css/style.css";


export default function Layout(props){
    return(
        <React.Fragment>
            <Header/>
            <Sidebar/>
            
           {props.children}
  
            <Footer/>
        </React.Fragment>
    )
}