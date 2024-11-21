import React,{useEffect,useContext} from 'react';
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { googleLogout } from '@react-oauth/google';
export default function Logout() {
    const {islogin,setIslogin} = useContext(AuthContext);
    const navigate = useNavigate();
    
    useEffect(() => {
        localStorage.clear();
        setIslogin(false);
        googleLogout();
        navigate('/login');
    }, []);
}
