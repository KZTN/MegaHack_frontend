import React from 'react'
import {Link} from 'react-router-dom';

import './styles.css'

const Login = () => {

  return (
    <div className="background-image">
      <div className="button-div">
        <Link to="/login">Sou Consumidor</Link>
        <Link to="/login" style={{marginLeft: "5em"}}>Sou Cozinheiro</Link>
      </div>
    </div>
  )
}

export default Login;