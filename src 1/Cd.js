import React from "react";
import { PureComponent } from "react";
class Cd extends PureComponent{
    
    render()
    {
       console.warn("user component check rerendering") ;
        return(
            <div className="Cd">
<h1>pure Component in React {this.props.count}</h1>


            </div>
        );
    }
}

export default Cd ;