import React from 'react'
import { Link,useLocation } from "react-router-dom";

export default function Leftside() {
    let location = useLocation();
    
  return (
    <>
      <div className="col-md-3 col-lg-2 px-0 position-fixed h-100 bg-white shadow-sm sidebar" id="sidebar">
                {/* <h1 className="bi bi-bootstrap text-primary d-flex my-4 justify-content-center"></h1> */}
                <div className="list-group rounded-0">
                    <Link to="/dashboard" className={`list-group-item list-group-item-action ${location.pathname === '/dashboard' ? 'active':''} border-0 d-flex align-items-center`}>
                        <span className="bi bi-border-all"></span>
                        <span className="ml-2">Dashboard</span>
                    </Link>
                    <Link to="/add-property" className={`list-group-item list-group-item-action ${location.pathname === '/add-property' ? 'active':''} border-0 align-items-center`}>
                        <span className="bi bi-box"></span>
                        <span className="ml-2">Add Property</span>
                    </Link>
                    <Link to="/my-property" className={`list-group-item list-group-item-action ${location.pathname === '/my-property' ? 'active':''} border-0 align-items-center`}>
                        <span className="bi bi-box"></span>
                        <span className="ml-2">My Listing Property</span>
                    </Link>
                    <Link to="/logout" className="list-group-item list-group-item-action border-0 align-items-center">
                        <span className="bi bi-box"></span>
                        <span className="ml-2">Logout</span>
                    </Link>

                    

                
                
                </div>
            </div> 
    </>
  )
}
