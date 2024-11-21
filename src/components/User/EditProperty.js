import React, { useState,useEffect } from 'react'
import axios from "axios";
import Leftside from './Leftside';
import { useParams } from 'react-router-dom';


export default function EditProperty() {
    let { id } = useParams();

    const [inputValues, setInputValue] = useState([{
        pname: "",
        price: "",
        bedroom: "",
        bathroom: "",
        sqft: "",
        descr: "",
      }]);
    const [mesg, setMesg] = useState('');
    const [file, setFile] = useState();
    
    useEffect(() => {
      getRecords();
    }, []);
    
    const getRecords = () => {
        axios.get(`http://localhost:27019/realstate/property/getinfo/${localStorage.getItem('userid')}/${id}`, {
          headers: {
              'auth-token': localStorage.getItem('token')
          }
      })
          .then(function (response) {
           setInputValue({pname:response.data[0].pname,price:response.data[0].price,bedroom:response.data[0].bedroom,bathroom:response.data[0].bathroom,sqft:response.data[0].sqft,descr:response.data[0].descr});
           setFile(response.data[0].image);
          })
          .catch(function (error) {
          });
        } 

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setInputValue({ ...inputValues, [name]: value });
  }


  const handleSubmit = (e) => {
    e.preventDefault();
const formData = new FormData();
formData.append('file',file);
formData.append('pname',inputValues.pname);
formData.append('price',inputValues.price);
formData.append('bedroom',inputValues.bedroom);
formData.append('bathroom',inputValues.bathroom);
formData.append('sqft',inputValues.sqft);
formData.append('descr',inputValues.descr);
//formData.append('userid',localStorage.getItem('userid'));
    axios.put('http://localhost:27019/realstate/property/update/'+id, formData, {
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
        getRecords();
      })
      .catch(function (error) {
        console.log(error);
        setMesg({
          msg: 'sadas',
          typ: "danger",
        });
      });
    }

  return (
    <>
    <section className="contact-section bg-light">
      <div className="container">
        <center><h3>Edit Property</h3></center>
        {mesg !=='' &&
        <div className={`alert alert-${mesg.typ}`} role="alert">{mesg.msg}</div>
      }
        <div className="row block-9">
        
          
          <Leftside />
          <div className="col-md-9 col-lg-9 ml-md-auto px-0 ms-md-auto">
       
          <form action="#" className="bg-white p-5 contact-form" onSubmit={handleSubmit}>
              <div className='row'>
                <div className="col-md-6">
                  <input type="text" name="pname" id="pname" className="form-control" placeholder="Property Name" onChange={(e) => handleChange(e)} value={inputValues.pname || ''}/>
                </div>
                <div className="col-md-6">
                  <input type="text" name="price" id="price" className="form-control" placeholder="Price" onChange={(e) => handleChange(e)} value={inputValues.price || ''}/>
                </div>
              </div>
              <div className='row mt-4'>
                <div className="col-md-6">
                  <input type="number" name="bedroom" id="bedroom" className="form-control" placeholder="bedroom" onChange={(e) => handleChange(e)} value={inputValues.bedroom || ''} />
                </div>
                <div className="col-md-6">
                  <input type="number" name="bathroom" id="bathroom" className="form-control" placeholder="bathroom" onChange={(e) => handleChange(e)} value={inputValues.bathroom || ''}/>
                </div>
              </div>
              <div className='row mt-4'>
                <div className="col-md-6">
                  <input type="file" name="image" id="image" className="form-control" placeholder="bedroom" onChange={(e) => setFile(e.target.files[0])} />
                  <img src={`../../../images/${file}`}/>
                </div>
                <div className="col-md-6">
                  <input type="number" name="sqft" id="sqft" className="form-control" placeholder="sq ft." onChange={(e) => handleChange(e)} value={inputValues.sqft || ''}/>
                </div>
              </div>
              <div className='row mt-4 mb-3'>

                <div className="col-md-12">
                  <textarea name="descr" id="descr" className="form-control" placeholder="Description" onChange={(e) => handleChange(e)} value={inputValues.descr || ''}></textarea>
                </div>
              </div>
              <div className="form-group">
                <input type="submit" value="Submit" className="btn btn-primary py-3 px-5"/>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
    </>
  )
}
