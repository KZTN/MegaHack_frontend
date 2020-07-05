import React, { useEffect, useState, FormEvent } from "react";
import "./styles.scss";
import { FaTimes, FaWhatsapp, FaStar } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import api from "../../services/api";

type Establishment_Type = {
  _id: string;
  name: string;
  phone: string;
  work_start_time: string;
  work_end_time: string;
  thumbnail: string;
};
const ESTABLISHMENT_INITIAL_STATE: Establishment_Type = {
  _id: "",
  name: "",
  phone: "",
  work_start_time: "",
  work_end_time: "",
  thumbnail: "",
};

type Comments_Type = [
  {
    _id: string;
    author: {
      name: string;
      thumbnail: string;
    };
    comment: string;
    rate: number;
  }
];
const COMMENT_INITIAL_STATE: Comments_Type = [
  {
    _id: "",
    author: {
      name: "",
      thumbnail: "",
    },
    comment: "",
    rate: 0,
  },
];

export default function Post() {
  const [isfavorite, setIsfavorite] = useState<Boolean>(true);
  const [quotes, setQuotes] = useState<Comments_Type>(COMMENT_INITIAL_STATE);
  const [establishment, setEstablishment] = useState<Establishment_Type>(
    ESTABLISHMENT_INITIAL_STATE
  );

  const [comment, setComment] = useState("");
  const [rate, setRate] = useState<any>();

  async function getUserData() {
    await api
      .get(`/establishments/${localStorage.getItem("establishmentID")}`)
      .then((response) => {
        console.log(response.data);
        setQuotes(response.data.comments);
        setEstablishment(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getUserData();
  }, []);

  function popupWPP() {
    window.open(`https://wa.me/${establishment.phone}`, "_top");
  }

  async function handleCloseModal() {
    localStorage.setItem("favoriteID", "");
    localStorage.setItem("modalIsOpen", "close");
    window.location.reload();
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    await api
      .post(`/comments/${establishment._id}`, {
        comment,
        rate,
        author: localStorage.getItem("id"),
      })
      .then(() => {
        alert("comentário feito com sucesso");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  async function handleFavorite() {
    await api
      .put(`/favorites/${localStorage.getItem("id")}`, {
        establishment: establishment._id,
      })
      .then(() => {
        alert("Removido da sua lista de favoritos");
        setIsfavorite(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="modal">
      <div className="content">
        <div className="close-button">
          <button onClick={handleCloseModal}>
            <FaTimes size={24} color="#444" />
          </button>
        </div>
        <div className="details">
          <div className="box-img">
            <img src={establishment.thumbnail} />
          </div>
          <div className="box-main-details">
            <h1 style={{ marginBottom: 20 }}>
              <strong>{establishment.name}</strong>
            </h1>
            <div className="box-main-item" style={{ marginBottom: 2 }}>
              <h3>Estabelecimento {establishment.name}</h3>
            </div>
            <div className="box-main-item" style={{ marginBottom: 2 }}>
              <h3>
                Horário de funcionamento {establishment.work_start_time} às{" "}
                {establishment.work_end_time}
              </h3>
            </div>
            <div className="favorites" onClick={handleFavorite}>
              <FiHeart size={24} color="#666" />
              {!isfavorite ? (
                <span>Adicionar a sua lista de favoritos</span>
              ) : (
                <span>Remover da sua lista de favoritos</span>
              )}
            </div>
            <div className="contact" onClick={popupWPP}>
              <FaWhatsapp size={24} color="#fff" style={{ marginRight: 5 }} />
              <span>Entre em contato</span>
            </div>
          </div>
          <div className="comments">
            <h1>Comentários:</h1>
            {quotes.map((e) => (
              <div className="comment">
                <div className="comment-header">
                  <div className="comment-author">
                    <img
                      src={
                        e.author.thumbnail
                          ? e.author.thumbnail
                          : "https://media.discordapp.net/attachments/697512026251067472/711345678885847140/user-solid.png"
                      }
                      alt=""
                    />
                    <span>{e.author.name}</span>
                  </div>
                  <div className="comment-rating">
                    <span>{e.rate}</span>
                    <FaStar
                      size={12}
                      color="#222"
                      style={{ marginBottom: 1 }}
                    />
                  </div>
                </div>

                <div className="comment-body">
                  <span>{e.comment}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="make-comment">
            <h1>faça um comentário:</h1>
            <form onSubmit={handleSubmit}>
              <textarea
                name=""
                id=""
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Descreva em detalhes o que achou deste estabelecimento."
              ></textarea>
              <div className="wrap">
                <input
                  type="number"
                  placeholder="nota"
                  min="1"
                  max="5"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  required
                />
                <button type="submit">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
