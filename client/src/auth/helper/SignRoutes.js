import React from "react";
import {isAuthenticated} from "./index";
import { Redirect, Route } from "react-router-dom";

const SignRoutes = ({component : Component, ...rest}) => {
    return (
        <Route
         {...rest}
          render={props =>
             !isAuthenticated() ? 
             (<Component {...props}/>
                ) :( 
                    alert("already you are signed in"),
                <Redirect to={{
                    pathname:"/",
                    state :{from:props.location}
                    }}
                />
            )}
        />
    )
}

export default SignRoutes;