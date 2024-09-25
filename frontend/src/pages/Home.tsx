import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';

const Home = () => {

  const [name, setName] = useState('');

  useEffect(() => {
    (
      async () => {
        const response = await fetch('http://localhost:8000/api/user', {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
          credentials: 'include',
        });

        const content = await response.json();

        setName(content.name);
      }
    )();
  });

  const [redirect, setRedirect] = React.useState(false);

  const logout = async () => {

    await fetch('http://localhost:8000/api/logout', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
    });

    setRedirect(true);

    setName('');
  }

  if(redirect) {
    return <Navigate to="/login"/>
  }
  
  return (
    <div className="flex mx-auto">
      <div>
      {name ? 'You are logged in, ' + name : 'You are not logged in'} 
        <button onClick={logout} className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded">Logout</button>
      </div>
    </div>
  )
}

export default Home