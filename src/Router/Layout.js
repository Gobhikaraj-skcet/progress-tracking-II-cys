import React from 'react'
import { useNavigate } from 'react-router-dom'

const Layout = () => {
    const navigate =useNavigate();

const handle = ()=> {
  navigate("/home")

}
  return (
    <div><h1>This is a layout page!</h1>
    <button onClick={handle}>Back</button>
    </div>
  )
}

export default Layout