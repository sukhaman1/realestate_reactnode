import React, {useState,useEffect} from 'react';
import axios from "axios";

export default function Register() {

    const [mesg, setMesg] = useState('');
    const [inputValues, setInputValue] = useState({
        username: "",
        email: "",
        password: "",
        phone: "",
    });

    const [validation, setValidation] = useState({
        username: "",
        email: "",
        password: "",
        phone: "",
        subm: "",
    });

    //handle submit updates
    function handleChange(event) {
        const { name, value } = event.target;
        setInputValue({ ...inputValues, [name]: value });
    }

    const checkValidation = () => {
        let errors = validation;

        //first Name validation
        if (!inputValues.username.trim()) {
            errors.username = "Name is required";
            errors.subm = "1";
        } else {
            errors.username = "";
            errors.subm = "";
        }

        // email validation
        const emailCond = "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$";
        if (!inputValues.email.trim()) {
            errors.email = "Email is required";
            errors.subm = "1";
        } else if (!inputValues.email.match(emailCond)) {
            errors.email = "Please enter a valid email address";
            errors.subm = "1";
        } else {
            errors.email = "";
            errors.subm = "";
        }

        //password validation
        const password = inputValues.password;
        if (!password) {
            errors.password = "password is required";
            errors.subm = "1";
        } else if (password.length < 6) {
            errors.password = "Password must be longer than 6 characters";
            errors.subm = "1";
        } else {
            errors.password = "";
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
            const data = {
                username: inputValues.username,
                phone: inputValues.phone,
                email: inputValues.email,
                password: inputValues.password
            };

            axios.post('http://localhost:27019/realstate/register',data)
                .then(function (response) {
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
        }

    };

    return (
        <>
            <section className="contact-section bg-light">

                <div className="container">
                    <center><h3>Register</h3></center>
                    <div className="row block-9">
                    {mesg !=='' &&
        <div className={`alert alert-${mesg.typ}`} role="alert">{mesg.msg}</div>
      }
                        <div className="col-md-12 order-md-last d-flex">
                            <form action="#" className="bg-white p-5 contact-form" onSubmit={handleSubmit}>

                                <div className="form-group">
                                    <input type="text" name="username" id="username" className="form-control" placeholder="Your Name" onChange={(e) => handleChange(e)} value={inputValues.username}/>
                                    {validation.username && <p style={{color:"red"}}>{validation.username}</p>}
                                </div>
                                <div className="form-group">
                                    <input type="text" name="email" id="email" className="form-control" placeholder="Your Email"  onChange={(e) => handleChange(e)} value={inputValues.email}/>
                                    {validation.email && <p style={{color:"red"}}>{validation.email}</p>}
                                </div>
                                <div className="form-group">
                                    <input type="password" name="password" id="password" className="form-control" placeholder="Password" onChange={(e) => handleChange(e)} value={inputValues.password}/>
                                    {validation.password && <p style={{color:"red"}}>{validation.password}</p>}
                                </div>
                                <div className="form-group">
                                    <input type="text" name="phone" id="phone" className="form-control" placeholder="Phone" onChange={(e) => handleChange(e)} value={inputValues.phone}/>
                                </div>

                                <div className="form-group">
                                    <input type="submit" value="Submit" className="btn btn-primary py-3 px-5" onClick={handleChange}/>
                                </div>
                            </form>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
