import React from "react";
import { useHistory } from "react-router-dom";
export class Logout extends React.Component{
logout(){
    localStorage.clear();
  
}
render(){
    // const history=useHistory();
    localStorage.clear();
//   history.push("/login");
    const token= localStorage.getItem("Authorization");
    if(token==null){
    return(
        <div>
            <h2>Thanks!!! Visit again.</h2>
        </div>
    )}
}
}