import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaHome, FaRegStar, FaShoppingCart, FaRegFileAlt, FaDoorOpen } from 'react-icons/fa'
import api from '../services/api';

interface User {
  name: string
  thumbnail: string
}

const SideBar = () => {
  const [user, setUser] = useState<User>()

  useEffect(() => {
    api.get(`users/${localStorage.getItem("id")}`).then(response => {
      setUser(response.data);
    });
  }, []);

  function handleLogout() {
    localStorage.removeItem("id");
  }
  
  return (
    <>
      <div className="menu-wrapper">
        <div className="links-wrapper">
          <Link to="/profile">
            <img src={user?.thumbnail} alt="olar" className="img-menu" />
            <div className="profile-link">
              <small>{user?.name}</small>
              <small>Ver Perfil</small>
            </div>
          </Link>
          <Link to="/home">
            <FaHome size={20} />
            <label>Navegar</label>
          </Link>
          <Link to="/favorites">
            <FaRegStar size={20} />
            <label>Favoritos</label>
          </Link>
          <Link to="/orders">
            <FaShoppingCart size={20} />
            <label>Pedidos</label>
          </Link>
          <Link to="/">
            <FaRegFileAlt size={20} />
            <label>Histórico</label>
          </Link>
          <Link to="/" onClick={handleLogout}>
            <FaDoorOpen size={20} />
            <label>Sair</label>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideBar;
