import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './components/Home'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
import ErrorPage from './components/ErrorPage'

function App() {

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/signin" element={<Signin />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route exact path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default App
