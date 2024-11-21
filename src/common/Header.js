import React,{useEffect,useState,useContext} from 'react';
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

export default function Header(props) {

  const {islogin} = useContext(AuthContext);
  
  return (
    <>
      <div className="top">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col">
              <p className="social d-flex">
                <Link to="/#"><span className="icon-facebook"></span></Link>
                <Link to="/#"><span className="icon-twitter"></span></Link>
                <Link to="/#"><span className="icon-google"></span></Link>
                <Link to="/#"><span className="icon-pinterest"></span></Link>
              </p>
            </div>
            <div className="col d-flex justify-content-end">
            
              <p className="num"><span className="icon-phone"></span> + 1700 12345 6789</p>
            
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div className="container">
          <Link className="navbar-brand" to="/index">Royal<span>estate</span></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="oi oi-menu"></span> Menu
          </button>

          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active"><Link to="/index" className="nav-link">Home</Link></li>
              <li className="nav-item"><Link to="/property/all" className="nav-link">Property</Link></li>
              <li className="nav-item"><Link to="/agents" className="nav-link">Agents</Link></li>
              <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
              <li className="nav-item"><Link to="/blog" className="nav-link">Blog</Link></li>
              <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
              { localStorage.getItem('token') === null ? (<><li className="nav-item cta"><Link to="/login" className="nav-link ml-lg-2"><span className="icon-user"></span> Sign-In</Link></li>
              <li className="nav-item cta cta-colored"><Link to="/register" className="nav-link"><span className="icon-pencil"></span> Sign-Up</Link></li></> ) : (
                <><li className="nav-item cta"><Link to="/logout" className="nav-link ml-lg-2"><span className="icon-user"></span> Logout</Link></li>
              <li className="nav-item cta cta-colored"><Link to="/dashboard" className="nav-link"><span className="icon-pencil"></span> My Account</Link></li></>
              ) } 

            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
