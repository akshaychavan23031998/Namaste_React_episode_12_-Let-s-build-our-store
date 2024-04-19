import React from "react"
import Child from "./Child";
class UserClass extends React.Component {
    constructor (props) {
        super(props);
        // console.log(props);
        console.log(this.props.name +"Child Constructor");
    
        this.state = {
            userInfo: {
                name:"Dummy",
                location:"Default",
            },
        };
    }   
    async componentDidMount() {
        console.log(this.props.name+"Child component Did Mount");
        const data = await fetch("https://api.github.com/users/akshaychavan23031998");
        const json = await data.json();
        console.log(json);
    
        this.setState({
            userInfo:json,
        });

        this.timer = setInterval(() => {
            console.log("Namaste React");
        },1000);
    }

    componentDidUpdate() {
        console.log("Child component didUpdate");
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        console.log("Child componentWillUnmount");
    }
    render () {
        const {name,location, bio, avatar_url} = this.state.userInfo;
        console.log(this.props.name+"Child render");
        return (
            <div className="user-card">
                <image src={avatar_url} />
                <h2> Name: {name}</h2>
                <h3> Location:{location}</h3>
                <h3> Bio:{bio}</h3>
            </div>
        )
    }
}
export default UserClass;