import React from 'react'
import { Navigate } from 'react-router-dom';

const Login = (props: {setName: (name: string) => void }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [redirect, setRedirect] = React.useState(false);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ email, password })
    });

    const content = await response.json();

    setRedirect(true);
    props.setName(content.name);
  }

  if(redirect) {
    return <Navigate to="/"/>
  }

  return (
    <div className="flex mx-auto">
      <div className="max-w-xl py-6 px-8 h-80 mt-20 bg-white rounded shadow-xl">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-800 font-bold">Email</label>
            <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
          </div>
          <div>
            <label className="block text-gray-800 font-bold">Password</label>
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
            <a href="/register" className="text-sm font-thin text-gray-800 hover:underline mt-2 inline-block hover:text-indigo-600">Don't have an account? Register</a>
          </div>
          <button type="submit" className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login