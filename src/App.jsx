import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import HomePage from './Pages/HomePage'
import SignUp from './Pages/SignUp'
import SignIn from './Pages/SignIn'
const App = () => {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path="/login" element={<SignIn/>}/>
    </Routes>
   </Router>
   
   </>
  )
}

export default App
