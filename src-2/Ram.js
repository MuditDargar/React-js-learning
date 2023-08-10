import React from "react";
class Ram extends React.Component{

    render(){
        console.log(this.props)
        return(
            <div style={{backgroundColor:"cyan",margin:20}}>
                <h1><i>Hello {this.props.name}</i></h1>
                <h3>Email_id : {this.props.email}</h3>
                </div>
        )
    }
}
export default Ram;