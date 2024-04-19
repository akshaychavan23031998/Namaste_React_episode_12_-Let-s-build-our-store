import { useState } from "react";

const User = (props) => {
    return ( 
        <div className="user-card">
            <h2> Name: {props.name}</h2>
            <h3> Location: Solapur, Maharashtra</h3>
            <h4> Contact : akshayrchavan07@gmail.com</h4>
        </div>
    )
}
export default User;