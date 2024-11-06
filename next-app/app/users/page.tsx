import React from 'react'
interface User {
    id: number;
    name :string;

}

const UsersPage = async () =>  {
    const res = await fetch('https://jsonplaceholder.typicode.com/users',  
         {next:{revalidate:10} } ); // cahcing that mean next will reload data each 10s from backend
 
    const users: User[]  = await res.json();
  return (
    <>
    <h1> users</h1>
    <ul>
        {users.map (user => <li key={user.id}>{user.name}</li>)}
    </ul>
    </>
    
   
  )
}

export default UsersPage
