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
            <FaHome size={20}/>
            <label>Navegar</label>
          </Link>
          <Link to="/favorite">
            <FaRegStar size={20}/>
            <label>Favoritos</label>
          </Link>
          <Link to="/">
            <FaShoppingCart size={20}/>
            <label>Pedidos</label>
          </Link>
          <Link to="/">
            <FaRegFileAlt size={20}/>
            <label>Histórico</label>
          </Link>
        </div>
      </div>
    </>
  )
}

export default SideBar;