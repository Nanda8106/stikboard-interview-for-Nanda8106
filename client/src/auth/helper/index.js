


export const signup = user => {
    return fetch(`https://spacexrocket.herokuapp.com/api/signup`,{
        method : "POST",
        headers :{
            Accept : "application/json",
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(user)
    }).then(response => {
        return response.json()
    }).catch(error => console.log(error))
}


export const signin = user => {
    return fetch(`https://spacexrocket.herokuapp.com/api/signin`,{
        method : "POST",
        headers :{
            Accept : "application/json",
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(user)
    }).then(response => {
        return response.json()
    }).catch(error => console.log(error))
}

export const authenticate = (data, next) => {
    if(typeof window !== undefined){
        localStorage.setItem("auth", JSON.stringify(data))
        next();
    }
}

export const signout = next => {
    if(typeof window !== undefined){
        localStorage.removeItem("auth")
        next();

        return fetch(`https://spacexrocket.herokuapp.com/api/signout`,{
            method:"GET"
        }).then(response => {
            return response.json()
        }).catch(error => console.log(error))
    }
}


export const isAuthenticated = () => {
    if(typeof window == undefined){
        return false
    }
    if(localStorage.getItem("auth")){
        return JSON.parse(localStorage.getItem("auth"))   // whatever the response comming from auj parsing it into the form json format
    }else{
        return false
    }
}

