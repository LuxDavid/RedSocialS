import {redirect} from "react-router-dom";

export const Authorization= async () => {

    const res= await fetch("http://localhost:8080/api/session/current", {
        method:"GET",
        credentials:"include"
    });

    if(res.status === 401){
        return redirect("/login");
    }

}

export const AuthorizationPublic= async () => {

    const res= await fetch("http://localhost:8080/api/session/current", {
        method:"GET",
        credentials:"include"
    });

    if(res.status === 200){
        return redirect("/");
    }

}