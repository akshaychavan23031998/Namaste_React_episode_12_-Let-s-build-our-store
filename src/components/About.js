import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
    constructor (props) {
        super(props);
        console.log("Parent Constructor");
    }
    componentDidMount() {
        console.log("Parent component Did Mount");
    }

    componentDidUpdate() {
        console.log("Parent component didUpdate");
    }

    componentWillUnmount() {
        console.log("Parent componentWillUnmount");
    }

    render() {
        console.log("Parent Render");
        return (
            <div className="about">
                 <h1> About </h1>
                 <h2> Namaste React by Akshay Saini </h2>
                 <UserClass name="Child1 from (CC)"/>
            </div>
         )
    }
}

export default About;

