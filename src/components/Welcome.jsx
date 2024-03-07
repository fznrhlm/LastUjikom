import React from 'react'
import { Link } from 'react-router-dom'
export const Welcome = () => {
  return (
    <div className="welcome">
       <h1>Welcome to Restaurant Gelegar</h1>
       <p>Berminat member di restoran kami? Join Di Sini</p>
        <p className="btnJoin"><Link to={"/login"}>Join</Link></p>
    </div>
  )
}
