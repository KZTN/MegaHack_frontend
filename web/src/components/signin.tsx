import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import './styles.css'

const SignIn = () => {
  const history = useHistory()

  function goToHome() {
    history.push('/home')
  }

  return (
    <div className="form">
      <input type="text" name="email" placeholder="E-mail" />
      <input type="password" name="password" placeholder="Senha" />

      <div className="footer">
        <button onClick={goToHome}>Entrar</button>
      </div>
    </div>
  )
}

export default SignIn