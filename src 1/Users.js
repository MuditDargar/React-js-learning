import React from "react";
import { useParams } from "react-router-dom";

function Users() {
  const { id ,email } = useParams();
  
  console.warn(id);
  console.warn(email);

  return (
    <div className="Users">
      <h2> this is user number : {id}</h2>
      <h2> this is user email : {email}</h2>
    </div>
  );
}

export default Users;
