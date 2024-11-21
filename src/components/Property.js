import React, { useState,useEffect } from 'react'
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Property() {

    const [pata, setPata] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        getRecords();
    }, []);

  const getRecords = () => {
    axios.get(`http://localhost:27019/realstate/property/getall/`+id)
      .then(function (response) {
        console.log(response);
        setPata(response.data);
        
      })
      .catch(function (error) {
      });
    }

    return (
        <>
            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row">
                    {pata.map((object, i) => {
                        var dess = (object.descr).substring(0,100);
                return(
                        <div key={i} className="col-md-4 ftco-animate">
                            <div className="properties">
                                <Link to={`/property-single/${object._id}`} className="img img-2 d-flex justify-content-center align-items-center">
                                    <div className="d-flex justify-content-center align-items-center" style={{ width:"100%" }}>
                                    <img src={`../images/${object.image}`} style={{ width:"100%",height:"200px" }}/>
                                    </div>
                                </Link>
                                <div className="text p-3">
                                    <span className="status sale">Sale</span>
                                    <div className="d-flex">
                                        <div className="one">
                                            <h3><Link to={`/property-single/${object._id}`}>{object.pname}</Link></h3>
                                            <p>Apartment</p>
                                        </div>
                                        <div className="two">
                                            <span className="price">${object.price}</span>
                                        </div>
                                    </div>
                                    <p>{dess}...</p>
                                    <hr/>
                                        <p className="bottom-area d-flex">
                                            <span><i className="flaticon-selection"></i> {object.sqft}sqft</span>
                                            <span className="ml-auto"><i className="flaticon-bathtub"></i> {object.bathroom}</span>
                                            <span><i className="flaticon-bed"></i> {object.bedroom}</span>
                                        </p>
                                </div>
                            </div>
                        </div>
                        )
    
                    })}
                    </div>
                 
                </div>
            </section>
        </>
    )
}
