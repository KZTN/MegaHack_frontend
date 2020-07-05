import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaRegStar,
  FaShoppingCart,
  FaDoorOpen,
  FaBell,
  FaRegChartBar,
  FaRegFileAlt,
} from "react-icons/fa";
import api from "../services/api";

interface User {
  name: string;
  thumbnail: string;
}

const SideBar = () => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    if (localStorage.getItem("usertype") === "0") {
      api.get(`users/${localStorage.getItem("id")}`).then((response) => {
        setUser(response.data);
      });
    }else if(localStorage.getItem("usertype") === "1") {
      api.get(`establishments/${localStorage.getItem("id")}`).then((response) => {
        setUser(response.data);
      });
    }
  }, []);

  function handleLogout() {
    localStorage.removeItem("id");
    localStorage.removeItem("usertype");
  }

  return (
    <>{
      localStorage.getItem("usertype") === "0"
        ? <div className="menu-wrapper">
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
            <Link to="/notifications">
              <FaBell size={20} />
              <label>Notificações</label>
            </Link>
            <Link to="/" onClick={handleLogout}>
              <FaDoorOpen size={20} />
              <label>Sair</label>
            </Link>
          </div>
        </div>
        : localStorage.getItem("usertype") === "1" ?
          <div className="menu-wrapper">
            <div className="links-wrapper">
              <Link to="/profile">
                <img src={user?.thumbnail} alt="olar" className="img-menu" />
                <div className="profile-link">
                  <small>{user?.name}</small>
                  <small>Ver Perfil</small>
                </div>
              </Link>
              <Link to="/posts">
                <FaHome size={20} />
                <label>Postagens</label>
              </Link>
              <Link to="/staborders">
                <FaShoppingCart size={20} />
                <label>Pedidos</label>
              </Link>
              <Link to="/history">
                <FaRegFileAlt size={20} />
                <label>Histórico</label>
              </Link>
              <Link to="/notifications">
                <FaRegChartBar size={20} />
                <label>Estatísticas</label>
              </Link>
              <Link to="/notifications">
                <FaBell size={20} />
                <label>Notificações</label>
              </Link>
              <Link to="/" onClick={handleLogout}>
                <FaDoorOpen size={20} />
                <label>Sair</label>
              </Link>
            </div>
          </div>
          : <div></div>
    }
    </>
  );
};

export default SideBar;
