import React, {useState,useEffect,useContext} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";



export default function Login() {
    const {islogin,setIslogin} = useContext(AuthContext);

    const navigate = useNavigate();
    const [mesg, setMesg] = useState('');
    const [inputValues, setInputValue] = useState({
        email: "",
        password: "",
    });

    const [validation, setValidation] = useState({
        email: "",
        password: "",
        subm: "",
    });

    // google login response
    const getdetail =(credentialResponse)=> {
    
        const logindetails = jwtDecode(credentialResponse.credential);
        //console.log(logindetails.name);

        const data = {
            username: logindetails.name,
            phone: '1231231231',
            email: logindetails.email,
            password: logindetails.email
        };

        axios.post('http://localhost:27019/realstate/register',data)
            .then(function (response) {
                //console.log(response);
                if(response.data.status == "1")
                {
                    localStorage.setItem('token', response.data.token); 
                    localStorage.setItem('userid', response.data.userid); 
                    setIslogin(true);
                    navigate(`/dashboard`)
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
    // google login response

    //handle submit updates
    function handleChange(event) {
        const { name, value } = event.target;
        setInputValue({ ...inputValues, [name]: value });
    }

    const checkValidation = () => {
        let errors = validation;

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
                email: inputValues.email,
                password: inputValues.password
            };

            axios.post('http://localhost:27019/realstate/login',data)
                .then(function (response) {
                    if(response.data.status == "1")
                    {
                        setMesg({
                            msg: response.data.msg,
                            typ: "success",
                        });
                        localStorage.setItem('token', response.data.token); 
                        localStorage.setItem('userid', response.data.userid); 
                        setIslogin(true);
                        navigate(`/dashboard`)
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
            
        <center><h3>Login</h3></center>
            <div className="row block-9">
            {mesg !=='' &&
        <div className={`alert alert-${mesg.typ}`} role="alert">{mesg.msg}</div>
      }
                <div className="col-md-12 order-md-last d-flex">
                    <form action="#" className="bg-white p-5 contact-form" onSubmit={handleSubmit}>
                       
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Your Email" name="email" id="email" onChange={(e) => handleChange(e)} value={inputValues.email}/>
                            {validation.email && <p style={{color:"red"}}>{validation.email}</p>}
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password" name="password" onChange={(e) => handleChange(e)} value={inputValues.password}/>
                            {validation.password && <p style={{color:"red"}}>{validation.password}</p>}
                        </div>
                        
                        <div className="form-group" style={{display:"flex"}}>
                            <input type="submit" value="Login" className="btn btn-primary py-3 px-5" onClick={handleChange}/>
                            <GoogleLogin onSuccess={getdetail} onError={() => { console.log('Login Failed'); }}/>
                        </div>
                    </form>

                </div>

                </div>
            </div>
            </section>
        </>
    )
}
