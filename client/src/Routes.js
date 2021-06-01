import React from "react";
import {BrowserRouter, Switch } from "react-router-dom";
import PrivateRoutes from "./auth/helper/PrivateRoutes";
import SignRoutes from "./auth/helper/SignRoutes";
import Home from "./core/Home";
import Signin from "./user/Signin";
import Signup from "./user/Signup";



const Routes = ()=> {
    return (
        <BrowserRouter>
            <Switch>
                <SignRoutes exact path="/signup" component={Signup} /> 
                <SignRoutes exact path="/signin" component={Signin} />
                <PrivateRoutes exact path="/" component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes