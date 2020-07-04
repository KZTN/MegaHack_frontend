import React, { useState } from 'react'

import './styles.css'
import SignIn from '../../components/signin'
import SignUp from './signup'

const UserLogin = () => {
  const [loginAction, setLoginAction] = useState(true);

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

export default UserLogin;