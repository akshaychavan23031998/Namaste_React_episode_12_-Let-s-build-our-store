import React from "react";

class Child extends React.Component {
    constructor (props) {
        super(props);
        console.log("Child 3 constructor");
    }
    componentDidMount() {
        console.log("Child 3 componentDidMount");
    }
    render() {
        console.log("child 3 constructor");
        return (
            <div>
                <h1> Child </h1>
            </div>
        );
    }
}
export default Child;