/*
import axios from 'axios';


var baseURL = "localhost:5000";

export function authenticate(user,password){
    return{
        type: "AUTHENTICATE",
        payload: new Promise((resolve, reject) => {
                axios.post(baseURL+"/login",
                    {
                        username: user,
                        password: password
                    }).then(function(response){
                        resolve(response);
                })
            })
    }
}*/


export function login(account){
    return{
        type: "LOGIN",
        payload: account
    }
}

export function logout(){
    return{
        type: "LOGOUT",
        payload: {}
    }
}