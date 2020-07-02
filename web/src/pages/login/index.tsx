import React, { useState } from 'react'

import './styles.css'

import SignIn from './signin'
import SignUp from './signup'

const Login = () => {
  const [loginAction, setLoginAction] = useState<boolean>(true);

  function handleActionButton(isLogin: boolean) {
    setLoginAction(isLogin)
  }

  return (
    <div className="base-container">
      <div className="header">
        <button onClick={() => handleActionButton(true)}>Entrar</button>
        <button onClick={() => handleActionButton(false)}>Cadastrar</button>
      </div>

      {loginAction
        ? <SignIn />
        : <SignUp />
      }
    </div>
  )
}

export default Login;