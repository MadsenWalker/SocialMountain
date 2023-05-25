import { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'

import Auth from './components/Auth'
import Form from './components/Form'
import Header from './components/Header'
import Home from './components/Home'
import Profile from './components/Profile'

import AuthContext from './store/authContext'


const App = () => {

  
const authCtx = useContext(AuthContext)


  return (
    <div className='app'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={!authCtx.token ? <Auth/> : <Navigate to='/profile'/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
    </div>
  )
}

export default App
