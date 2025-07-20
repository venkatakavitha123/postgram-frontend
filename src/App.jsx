import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import UploadPost from './pages/UploadPost';
import Feed from './pages/Feed';
import Chatbox from './pages/Chatbox';
import FollowPage from './pages/Feed';
import Profile from './pages/Profile';


function App() {
  return(
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      {/*Your route definitions */}
    </Routes>
    </BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      </Routes>
      {/*Only show navbar after login*/}
      {window.location.pathname !=='/' && 
      window.location.pathname !== '/signup' && <Navbar/>}
      <Route path="/feed" element={<Feed/>}/>
      <Route path="/upload" element={<UploadPost/>}
      />
      <Route path="/chat" element={<Chatbox/>}/>
      <Route path="/followers" element={<FollowPage/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Routes/>
    </>

  );
  const [count, setCount] = useState(0)

  return (

    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
