import React from 'react'
import { useNavigate } from 'react-router-dom'

const Layout = () => {
    const navigate =useNavigate();

const handle = ()=> {
  navigate("/home")

}
  return (
    <div>This is a Blog page!
    <button onClick={handle}>Back</button>
    </div>
  )
}

export default Layout