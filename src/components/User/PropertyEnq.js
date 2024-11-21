import React, { useState,useEffect } from 'react'
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Leftside from './Leftside';

export default function PropertyEnq() {
    const [pata, setPata] = useState([]);
    const [pname, setPname] = useState();
    let {id} = useParams();
    useEffect(() => {
        getRecords();
    }, []);    

  const getRecords = () => {
    axios.get(`http://localhost:27019/realstate/property/getenq/${id}`, {
      headers: {
          'auth-token': localStorage.getItem('token')
      }
  })
      .then(function (response) {
        setPata(response.data.propss);
        setPname(response.data.dtl[0].pname);
        
      })
      .catch(function (error) {
      });
    }
  
console.log(pata.propss);
  return (
    <section className="contact-section bg-light">
      <div className="container">
        <center><h3>Enquiries</h3></center>
     
        <div className="row block-9">
          <Leftside />
          <div className="col-md-9 col-lg-9 ml-md-auto px-0 ms-md-auto">
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Property Name</td>
                        <td>Username</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Message</td>
                        <td>Datetime</td>
                    </tr>
                </thead>
                <tbody>
                  {pata.map((object, i) => {
                
                return(
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{pname}</td>
                        <td>{object.username}</td>
                        <td>{object.email}</td>
                        <td>{object.phone}</td>
                        <td>{object.msg}</td>
                        <td>{object.datetime}</td>
                        
                    </tr>
                )
    
            })}  
                </tbody>
            </table>
           
          </div>

        </div>
      </div>
    </section>
  )
}
