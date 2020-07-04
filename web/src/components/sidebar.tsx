import React from 'react'
import { Link } from 'react-router-dom';
import { FaHome, FaRegStar, FaShoppingCart, FaRegFileAlt } from 'react-icons/fa'

const SideBar = () => {

  return (
    <>
      <div className="menu-wrapper">
        <div className="links-wrapper">
          <Link to="/profile">
            <img src={require("../assets/user-profile.jpg")} alt="olar" className="img-menu" />
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