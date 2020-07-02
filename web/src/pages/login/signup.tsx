import React, { useState } from 'react'

import './styles.css'

const SignUp = () => {
  return (
    <div className="content">
      <div className="form">
        <input type="text" name="name" placeholder="Nome" />
        <input type="text" name="email" placeholder="E-mail" />
        <input type="password" name="password" placeholder="Senha" />

        <div className="footer">
          <button>Cadastrar</button>
        </div>
      </div>
    </div>
  )
}

export default SignUp