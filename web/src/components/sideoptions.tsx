import React from 'react'
import { Link } from 'react-router-dom';
import { FaAngleLeft, FaTrashAlt, FaLock, FaPowerOff } from 'react-icons/fa'

const SideOptions = () => {

  return (
    <>
      <div className="menu-wrapper">
        <div className="links-wrapper">
          <Link to={localStorage.getItem("usertype") === "0" ? "/home" : "/posts"}>
            <FaAngleLeft size={20}/>
            <small>Voltar</small>
          </Link>
          <Link to="/">
            <FaLock/>
            <small>Alterar Senha</small>
          </Link>
          <Link to="/">
            <FaTrashAlt />
            <small>Excluir Conta</small>
          </Link>
          <Link to="/">
            <FaPowerOff />
            <small>Sair</small>
          </Link>

        </div>
      </div>
    </>
  )
}

export default SideOptions;