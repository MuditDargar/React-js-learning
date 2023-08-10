import React from "react";
class Rolls extends React.Component{
    constructor(){
        super();
        this.state={
            email:"muditdargar@gmail.com"
        }
    }
    render(){
        console.warn("Render method ",this.state.email)
        // console.warn("Render method ",this.props)
        return(
            <div>
                <h1> here the email is {this.state.email} </h1>
                <button onClick={()=>this.setState({email:"sachin@gmail.com"})}>Update Email </button>
                {/* <h1> here the name is {this.props.name} </h1> */}
            </div>
        )
    }
}

export default Rolls ;