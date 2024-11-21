import React, { useState,useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import Leftside from './Leftside';

export default function MyProperty() {
    const [mesg, setMesg] = useState('');
    const [pata, setPata] = useState([]);
  
    useEffect(() => {
        getRecords();
    }, []);    

const delprop = (id)=>{
    axios.get(`http://localhost:27019/realstate/property/delproperty/${localStorage.getItem('userid')}/${id}`, {
        headers: {
            'auth-token': localStorage.getItem('token')
        }
    }).then(function (response) {
        console.log(response);
        if (response.data.status == "1") {
            setMesg({
              msg: response.data.msg,
              typ: "success",
            });
            getRecords();
          }
          else {
            setMesg({
              msg: response.data.msg,
              typ: "danger",
            });
          }
      })
      .catch(function (error) {
      });
}

  const getRecords = () => {
    axios.get(`http://localhost:27019/realstate/property/getallproperties?userid=${localStorage.getItem('userid')}`, {
      headers: {
          'auth-token': localStorage.getItem('token')
      }
  })
      .then(function (response) {
        setPata(response.data);
      })
      .catch(function (error) {
      });
    }
  
  

  return (
    <section className="contact-section bg-light">
      <div className="container">
        <center><h3>Add Property</h3></center>
        {mesg !=='' &&
        <div className={`alert alert-${mesg.typ}`} role="alert">{mesg.msg}</div>
      }
        <div className="row block-9">
        
          
          <Leftside />
          <div className="col-md-9 col-lg-9 ml-md-auto px-0 ms-md-auto">
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Property Name</td>
                        <td>Price</td>
                        <td>Bedroom</td>
                        <td>Bathroom</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                {pata.map((object, i) => {
                
                return(
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{object.pname}</td>
                        <td>{object.price}</td>
                        <td>{object.bedroom}</td>
                        <td>{object.bathroom}</td>
                        <td><b style={{color:"red",cursor:"pointer"}} onClick={() => {if(window.confirm('Delete the property?')){delprop(object._id)};}}>Delete</b> / <Link to={`/edit-property/${object._id}`}>Edit</Link> / <Link style={{color:"green",fontWeight:"bold"}}  to={`/view-enq/${object._id}`}>Enquiries</Link></td>
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
