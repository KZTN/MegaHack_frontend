import React from 'react'
import { Link } from 'react-router-dom';
import { FaUserAlt, FaHome, FaRegStar, FaShoppingCart, FaRegFileAlt } from 'react-icons/fa'

const SideBar = () => {

  return (
    <>
      <div className="menu-wrapper">
        <div className="links-wrapper">
          <Link to="/profile">
            <FaUserAlt size={32}/>
            <div className="profile-link">
              <strong>[Nome]</strong>
              <small>Ver Perfil</small>
            </div>
          </Link>
          <Link to="/home">
            <FaHome />
            Navegar
          </Link>
          <Link to="/favorite">
            <FaRegStar />
            Favoritos
          </Link>
          <Link to="/">
            <FaShoppingCart />
            Pedidos
          </Link>
          <Link to="/">
            <FaRegFileAlt />
            Histórico
          </Link>
        </div>
      </div>
    </>
  )
}

export default SideBar;