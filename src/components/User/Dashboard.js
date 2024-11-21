import React from 'react'
import { Link } from "react-router-dom";
import Leftside from './Leftside';
export default function Dashboard() {
    return (
        <>
    <section className="contact-section bg-light">
    <div className="container">  
    <div className="row block-9 mt-4">
        <div id="sidebar-overlay" className="overlay w-100 vh-100 position-fixed d-none"></div>
        <Leftside/>
        <div className="col-md-9 col-lg-10 ml-md-auto px-0 ms-md-auto">                
                         
                <div className="jumbotron jumbotron-fluid rounded bg-white border-0 shadow-sm border-left px-4">
                    <div className="container">
                        <h1 className="display-4 mb-2 text-primary">Welcome Your Panel</h1>
                    </div>
                </div>
            
        </div>
        </div>
        </div>
        </section>
        </>
    )
}
