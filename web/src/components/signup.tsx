import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import './styles.css'

const SignUp = () => {
  const history = useHistory()

  function goToHome() {
    history.push('/home')
  }

  return (
    <div className="content">
      <div className="form">
        <input type="text" name="name" placeholder="Nome" />
        <input type="text" name="address" placeholder="Endereço" />
        <input type="text" name="complement" placeholder="Complemento" />
        <input type="text" name="cep" placeholder="CEP" />
        <input type="text" name="email" placeholder="E-mail" />
        <input type="password" name="password" placeholder="Senha" />

        <div className="footer">
          <button onClick={goToHome}>Cadastrar</button>
        </div>
      </div>
    </div>
  )
}

export default SignUp