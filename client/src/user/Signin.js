import React, {useState} from "react";
import {Link, Redirect} from "react-router-dom";
import {authenticate, isAuthenticated, signin } from "../auth/helper";
import Base from "../core/Base";
import "../styles.css"


const Signin = () => {
    const [values, setValues] = useState({
        email: "",
        password : "",
        error:"",
        success : false,
        loading : false,
        redirect : false,   
    })

    const {email, password, error, success, loading, redirect} = values;
    const {user} = isAuthenticated();

    const handleChange = name => event => {
        setValues({...values, error:false, success:false, [name]:event.target.value})
    }
    
    const onSubmit = event => {
        event.preventDefault();
        setValues({...values, error:false, success:false, loading:true})
        signin({email, password})
        .then(data => {
            if(data.error){
                setValues({...values, error:data.error, success:false, loading:false})
            }
            else{
                authenticate(data, () => {
                    setValues({
                        ...values,
                        email:"",
                        password:"",
                        error:"",
                        loading:false,
                        success:true,
                        redirect:true,
                    })
                })
                
            }
        })

    }

    
    const successMessage = () => {
        if(success){
            alert("You are logged in")
        }
    }
    const errorMessage = () => {
        return (
            <div style={{display: error ? "":"none"}}>
               <p className="error">
                   {error}
               </p>
           </div>
        )
    }
    const didRedirect = () => {
        if(redirect){
            if(user){
                return <Redirect to="/" />
            }
        }
    }

    const signinForm = () => {
        return (
            <div className="login">
                <form>
                {errorMessage()}
                {successMessage()}
                    <label>Email</label><br/>
                    <i className="fa fa-envelope"></i>
                    <input type="text" onChange={handleChange("email")} value={email}/><br/>
                    <label>Password</label><br/>
                    <i className="fa fa-key"></i>
                    <input type="password" onChange={handleChange("password")} value={password}/>
                    <button onClick={onSubmit}>Sign In</button>
                </form>
                <p className="account">Don't have account? <Link to="/signup">Sign Up</Link> here</p>
            </div>
        )
    }
    return (
        <Base>
            
            {signinForm()}
            {didRedirect()}
        </Base>
    )
}


export default Signin;