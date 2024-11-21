import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function PropertySingle() {

    const [pata, setPata] = useState([]);
    let { id } = useParams();
    const [mesg, setMesg] = useState('');
    const [inputValues, setInputValue] = useState({
        username: "",
        email: "",
        phone: "",
        msg: "",
    });

    //handle submit updates
    function handleChange(event) {
        const { name, value } = event.target;
        setInputValue({ ...inputValues, [name]: value });
    }


    const handleSubmit = (e) => {
        e.preventDefault();        
            const data = {
                username: inputValues.username,
                phone: inputValues.phone,
                email: inputValues.email,
                msg: inputValues.msg,
                id: id
            };

            axios.post('http://localhost:27019/realstate/property/submit',data)
                .then(function (response) {
                    console.log(response);
                    if(response.data.status == "1")
                    {
                        setMesg({
                            msg: response.data.msg,
                            typ: "success",
                        });
                    }
                    else{
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

    };

    useEffect(() => {
        getRecords();
    }, [inputValues]);

    const getRecords = () => {
        axios.get(`http://localhost:27019/realstate/property/getsingle/${id}`)
            .then(function (response) {
                setPata(response.data[0]);
            })
            .catch(function (error) {
            });
    }

    return (
        <>
            <section className="contact-section bg-light">
                <div className="container">
                    <section className="overview" id="overview">
                        <div className="container">
                            <h2 className="section-title">{pata.pname} Overview</h2>
                            <div className="row">
                                <div className='col-md-5 p-0'><img src={`../images/${pata.image}`} style={{ width: "100%", height: "300px" }} /></div>
                                <div className='col-md-7'>
                                    <div className="row mx-1">
                                        <div className="col-xs-4 col-md-4 col-md-offset-2 detail">
                                            <p>{pata.bedroom} Bedrooms</p>
                                        </div>
                                        <div className="col-xs-4 col-md-4 detail">
                                            <p>{pata.bathroom} Baths</p>
                                        </div>
                                        <div className="col-xs-4 col-md-4 detail">
                                            <p>{pata.sqft} Sq. Ft.</p>
                                        </div>
                                    </div>


                                    <div className="col-xs-12 col-md-12 text-justify">
                                        <p>{pata.descr}</p>

                                    </div>

                                </div>


                            </div>


                        </div>

                    </section>
                    <div className='row mt-4'>
                        <div className="map-responsive col-md-6">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28369.605778377445!2d-82.56847361357275!3d27.27558636023474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c341e625af63c9%3A0x2fb47a66f2e7518!2sSiesta+Key%2C+FL+34242!5e0!3m2!1sen!2sus!4v1510846291715" width="100%" height="400" frameBorder="0" allowFullScreen></iframe>
                        </div>
                        <div className='col-md-6'>
                            <form action="#" className="bg-white p-5 contact-form" onSubmit={handleSubmit}>
                            <center><h4>Enquiry</h4></center>
                            {mesg !=='' &&
        <div className={`alert alert-${mesg.typ}`} role="alert">{mesg.msg}</div>
      }
                                <div className="form-group">
                                    <input type="text" name="username" id="username" className="form-control" placeholder="Your Name" onChange={(e) => handleChange(e)} value={inputValues.username} />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="email" id="email" className="form-control" placeholder="Your Email" onChange={(e) => handleChange(e)} value={inputValues.email} />
                                </div>
                               
                                <div className="form-group">
                                    <input type="text" name="phone" id="phone" className="form-control" placeholder="Phone" onChange={(e) => handleChange(e)} value={inputValues.phone} />
                                </div>

                                <div className="form-group">
                                    <input type="text" name="msg" id="msg" className="form-control" placeholder="Message" onChange={(e) => handleChange(e)} value={inputValues.msg} />
                                </div>

                                <div className="form-group">
                                    <input type="submit" value="Submit" className="btn btn-primary py-3 px-5" onClick={handleChange} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
