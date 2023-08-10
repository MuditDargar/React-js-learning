import React from 'react'
function User(props){
return (
    <div>
        <h1> Mudit Dargar</h1>
        <button onClick={props.data}>Call Data function</button>
    </div>
)
}
export default User ;