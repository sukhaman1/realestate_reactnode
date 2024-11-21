import React, { useState,useEffect } from 'react'
import axios from "axios";
import Leftside from './Leftside';

export default function AddProperty() {
  const [mesg, setMesg] = useState('');
  const [file, setFile] = useState();
  const [inputValues, setInputValue] = useState({
    pname: "",
    price: "",
    bedroom: "",
    bathroom: "",
    sqft: "",
    descr: "",
  });
  const [validation, setValidation] = useState({
    pname: "",
    price: "",
    descr: "",
    subm: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValue({ ...inputValues, [name]: value });
  }
  const checkValidation = () => {
    let errors = validation;

    if (!inputValues.pname.trim()) {
      errors.pname = "Property Name is required";
      errors.subm = "1";
    } else {
      errors.pname = "";
      errors.subm = "";
    }

    if (!inputValues.price.trim()) {
      errors.price = "price is required";
      errors.subm = "1";
    } else {
      errors.price = "";
      errors.subm = "";
    }


    if (!inputValues.descr.trim()) {
      errors.descr = "Description is required";
      errors.subm = "1";
    } else {
      errors.descr = "";
      errors.subm = "";
    }

    
    setValidation(errors);
  };

  useEffect(() => {
    checkValidation();
}, [inputValues]);


  const handleSubmit = (e) => {
    e.preventDefault();
        if (validation.subm === '') {
const formData = new FormData();
formData.append('file',file);
formData.append('pname',inputValues.pname);
formData.append('price',inputValues.price);
formData.append('bedroom',inputValues.bedroom);
formData.append('bathroom',inputValues.bathroom);
formData.append('sqft',inputValues.sqft);
formData.append('descr',inputValues.descr);
formData.append('userid',localStorage.getItem('userid'));
       

    axios.post('http://localhost:27019/realstate/property/add', formData, {
      headers: {
          'auth-token': localStorage.getItem('token')
      }
  })
      .then(function (response) {        
        if (response.data.status == "1") {
          setMesg({
            msg: response.data.msg,
            typ: "success",
          });
        }
        else {
          setMesg({
            msg: response.data.msg,
            typ: "danger",
          });
        }

      })
      .catch(function (error) {
        console.log(error);
        setMesg({
          msg: 'sadas',
          typ: "danger",
        });
      });
    }
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
       
            <form action="#" className="bg-white p-5 contact-form" onSubmit={handleSubmit}>
              <div className='row'>
                <div className="col-md-6">
                  <input type="text" name="pname" id="pname" className="form-control" placeholder="Property Name" onChange={(e) => handleChange(e)} value={inputValues.pname} />
                  {validation.pname && <p style={{color:"red"}}>{validation.pname}</p>}
                </div>
                <div className="col-md-6">
                  <input type="text" name="price" id="price" className="form-control" placeholder="Price" onChange={(e) => handleChange(e)} value={inputValues.price} />
                  {validation.price && <p style={{color:"red"}}>{validation.price}</p>}
                </div>
              </div>
              <div className='row mt-4'>
                <div className="col-md-6">
                  <input type="number" name="bedroom" id="bedroom" className="form-control" placeholder="bedroom" onChange={(e) => handleChange(e)} value={inputValues.bedroom} />
                </div>
                <div className="col-md-6">
                  <input type="number" name="bathroom" id="bathroom" className="form-control" placeholder="bathroom" onChange={(e) => handleChange(e)} value={inputValues.bathroom} />
                </div>
              </div>
              <div className='row mt-4'>
                <div className="col-md-6">
                  <input type="file" name="image" id="image" className="form-control" placeholder="bedroom" onChange={(e) => setFile(e.target.files[0])} />
                </div>
                <div className="col-md-6">
                  <input type="number" name="sqft" id="sqft" className="form-control" placeholder="sq ft." onChange={(e) => handleChange(e)} value={inputValues.sqft} />
                </div>
              </div>
              <div className='row mt-4 mb-3'>

                <div className="col-md-12">
                  <textarea name="descr" id="descr" className="form-control" placeholder="Description" onChange={(e) => handleChange(e)} value={inputValues.descr}></textarea>
                  {validation.descr && <p style={{color:"red"}}>{validation.descr}</p>}
                </div>
              </div>
              <div className="form-group">
                <input type="submit" value="Submit" className="btn btn-primary py-3 px-5" onClick={handleChange} />
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
