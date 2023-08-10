import React  from "react";
import {Link} from 'react-router-dom';


function Nav(){
    return(
    <div className="Nav">
    <Link to="/">Home Page</Link>
    <br></br>
    <Link to="/About">About Page</Link>
    
    </div>
    );
}

export default Nav;