import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import api from "../../services/api";
import Modal from "../../components/Modal";
import SideBar from "../../components/sidebar";
import { Link } from "react-router-dom";
import "./styles.scss";

type Favorites_Type = [
  {
    Ingredients: string[];
    _id: String;
    name: String;
    price: Number;
    establishment: String;
    createdAt: String;
    updatedAt: String;
    __v: Number;
    thumbnail: String;
  }
];
const INITIAL_STATE: Favorites_Type = [
  {
    Ingredients: [],
    _id: "",
    name: "",
    price: 0,
    establishment: "String",
    createdAt: "",
    updatedAt: ",",
    __v: 0,
    thumbnail: "",
  },
];
export default function Favorites() {
  const history = useHistory();
  const [favorites, setFavorites] = useState<Favorites_Type>(INITIAL_STATE);

  async function getUserData() {
    await api
      .get(`/users/${localStorage.getItem("id")}`)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setFavorites(response.data.favorites);
      })

      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    getUserData();
  }, []);
  useEffect(() => {
    if (!localStorage.getItem("id")) {
      history.push("/login");
    }
  });
  function handleclick(favoriteID: string) {
    localStorage.setItem("favoriteID", favoriteID);
    localStorage.setItem("modalIsOpen", "open");
    window.location.reload();
  }

  return (
    <div className="wrapper">
      {localStorage.getItem("modalIsOpen") === "open" ? <Modal /> : null}
      {favorites !== null ? (
        <section id="favorites">
          <div className="content">
            <div className="header">
              <div className="wrapper">
                <h1>xxx</h1>
                <span>contato</span>
              </div>
              <div className="wrapper-actions">
                <Link to="/home">Ver postagens mais recentes</Link>
                <Link to="/profile">Ver perfil</Link>
              </div>
            </div>
            <header>
              <h1>Seus pratos favoritos</h1>
            </header>
            <div className="wrapper-favorites">
              {favorites.map((favitem: any) => (
                <div
                  className="wrapper-item"
                  onClick={() => handleclick(favitem._id)}
                  key={favitem._id}
                >
                  <div className="item-thumbnail">
                    <img src={favitem.thumbnail} alt="" />
                  </div>
                  <div className="wrapper-body">
                    <div className="wrapper-header">
                      <span>{favitem.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}
      <SideBar />
    </div>
  );
}
