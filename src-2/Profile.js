import { useState } from "react";

function Profile(){
    // const [loggedIn,setLoggedIn]=useState(false)
    // return(
    //     <div>
    //         {loggedIn ? <h1>Welcome mudit</h1> : <h1>Welcome monchu</h1>}
    //     </div>
    // )


    const [loggedIn,setLoggedIn]=useState(3)


    // 1,2,3
return(
    <div>
        {loggedIn==1 ? 
        <h1>Welcome user 1</h1>
        :loggedIn==2 ?<h1>Welcome user 2</h1>
        :<h1>welcome user 3</h1>}
    </div>
)











//     if(loggedIn){
//         return(
//         <div>
//             <h1>Welcome mudit </h1>
//         </div>
//         )
//     }
//     else{
//     return(
// <div>
//     <h1>Welcome monchu</h1>
// </div>
//     )
// }
}
export default Profile ;