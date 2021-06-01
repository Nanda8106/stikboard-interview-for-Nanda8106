import React from "react";
import logo from "../spacex.png"
import "../styles.css";
import {isAuthenticated, signout} from "../auth/helper/index"
import { withRouter } from "react-router";

const Base = ({
    children,
    history
}) => {
    return (
        <div className="container">
            <div className="navbar">
                <img src={logo} width="220" height="60" alt=""/>
                {isAuthenticated() && (
                    <button onClick={() => {
                        signout( () => {
                            alert("You are logged out")
                            history.push("/")
                        })
                    }}>Signout</button>
                )}
               
            </div>
            <div>{children}</div>
        </div>
    )
}

export default withRouter(Base)