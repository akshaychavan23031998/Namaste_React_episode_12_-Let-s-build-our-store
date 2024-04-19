import react from "react";
import {useRouteError} from "react-router-dom";
const Contact = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div className="contact">
            <h1> Contact us</h1>
            <h2> Contact us by Namaste React from Akshay Saini</h2>
        </div>
    )
}
export default Contact;