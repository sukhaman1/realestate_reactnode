import React,{createContext,useState} from "react";
import AuthContexts from './AuthContext';

const AuthState = (props)=>{
    const [islogin, setIslogin] = useState(false);

    const value={islogin,setIslogin}
    return(
        <AuthContexts.Provider value={value}>
        {props.children}
        </AuthContexts.Provider>
    )
}
export default AuthState;