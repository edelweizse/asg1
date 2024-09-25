import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";


function App() {

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

  return (
    <div className="flex">
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login setName={setName} />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
