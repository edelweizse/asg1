import React from 'react'
import { useState, SyntheticEvent } from 'react';
import { Navigate } from 'react-router-dom';

const Register = () => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e: SyntheticEvent) => {
      e.preventDefault();

      await fetch('http://localhost:8000/api/register', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
              name,
              email,
              password
          })
      });

      setRedirect(true);
  }

  if (redirect) {
      return <Navigate to="/login"/>;
  }


  return (
    <div className="flex mx-auto">
      <div className="max-w-xl py-6 px-8 h-80 mt-20 bg-white rounded shadow-xl">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-800 font-bold">Name</label>
            <input type="text" placeholder="Name" onChange={e => setName(e.target.value)} required className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-800 font-bold">Email</label>
            <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
          </div>
          <div>
            <label className="block text-gray-800 font-bold">Password</label>
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
            <a href="/login" className="text-sm font-thin text-gray-800 hover:underline mt-2 inline-block hover:text-indigo-600">Already have an account? Login</a>
          </div>
          <button type="submit" className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded">Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register