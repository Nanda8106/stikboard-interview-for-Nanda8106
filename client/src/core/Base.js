import React from "react";
import logo from "../spacex.png"
import "../styles.css";
import { withRouter } from "react-router";

const Base = ({
    children,
    history
}) => {
    return (
        <div className="container">
            <div className="navbar">
                <img src={logo} width="220" height="60" alt=""/>
                
                    <button>Signout</button>
               
               
            </div>
            <div>{children}</div>
        </div>
    )
}

export default withRouter(Base)