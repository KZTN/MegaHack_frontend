import React, { useEffect, useState, FormEvent } from "react";
import "./styles.scss";
import { FaTimes, FaWhatsapp, FaStar } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";

import { FiHeart } from "react-icons/fi";
import api from "../../services/api";

type Post_Type = {
  _id: string;
  title: string;
  description: string;
  price: string;
  hashtags: string;
  thumbnail: string;
};
const POST_INITIAL_STATE: Post_Type = {
  _id: "",
  title: "",
  description: "",
  price: "",
  hashtags: "",
  thumbnail: "",
};
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
    like: boolean;
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
    like: false,
  },
];

export default function Modal() {
  const [isfavorite, setIsfavorite] = useState<Boolean>(false);
  const [quotes, setQuotes] = useState<Comments_Type>(COMMENT_INITIAL_STATE);
  const [post, setPost] = useState<Post_Type>(POST_INITIAL_STATE);
  const [quantity, setquantity] = useState<number>(
    Math.floor(Math.random() * Math.floor(20))
  );
  const [establishment, setEstablishment] = useState<Establishment_Type>(
    ESTABLISHMENT_INITIAL_STATE
  );
  const [comment, setComment] = useState("");
  const [like, setLike] = useState<boolean>(false);

  async function getPostData() {
    await api
      .get(`/posts/${localStorage.getItem("postID")}`)
      .then((response) => {
        console.log(response.data);
        setQuotes(response.data.comments);
        setPost(response.data);
        setEstablishment(response.data.establishment);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getPostData();
  }, []);

  function popupWPP() {
    window.open(`https://wa.me/${establishment.phone}`, "_top");
  }

  async function handleClosePost() {
    localStorage.setItem("postID", "");
    localStorage.setItem("postIsOpen", "close");
    window.location.reload();
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    await api
      .post(`/commentsposts/${localStorage.getItem("postID")}`, {
        comment,
        like,
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
  async function handlePurchase() {
    await api
      .post("/orders", {
        user: localStorage.getItem("id"),
        post: localStorage.getItem("postID"),
        establishment: establishment._id,
      })
      .then(() => {
        alert("Pedido realizado com sucesso!");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  async function handleFavorite() {
    await api
      .post(`/favorites/${localStorage.getItem("id")}`, {
        establishment: establishment._id,
      })
      .then(() => {
        alert("Adicionado a sua lista de favoritos");
        setIsfavorite(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="post">
      <div className="content">
        <div className="close-button">
          <button onClick={handleClosePost}>
            <FaTimes size={24} color="#444" />
          </button>
        </div>
        <div className="details">
          <div className="box-img">
            <img src={post.thumbnail} />
          </div>
          <div className="box-main-details">
            <h1 style={{ marginBottom: 20 }}>
              <strong>{post.title}</strong>
            </h1>
            <h2>
              <strong>
                Quantidade:{" "}
                {quantity === 0 ? "Esgotado!" : `${quantity} unidades`}
              </strong>
            </h2>
            <h2>
              <strong>Valor unid: R${post.price}</strong>
            </h2>
            <div className="box-main-item" style={{ marginBottom: 2 }}>
              <h3>Estabelecimento: {establishment.name}</h3>
            </div>
            <div className="box-main-item" style={{ marginBottom: 2 }}>
              <h3>
                Horário de funcionamento: {establishment.work_start_time} às{" "}
                {establishment.work_end_time}
              </h3>
            </div>
            <div className="purchase" onClick={handlePurchase}>
              <MdAddShoppingCart size={24} color="#fff" />
              <strong>Comprar</strong>
            </div>
            <div className="favorites" onClick={handleFavorite}>
              <FiHeart size={24} color="#fff" />
              {!isfavorite ? (
                <strong>Adicionar a sua lista de favoritos</strong>
              ) : (
                <strong>Adicionado a sua lista de favoritos</strong>
              )}
            </div>
            <div className="contact" onClick={popupWPP}>
              <FaWhatsapp size={24} color="#fff" />
              <strong>Entre em contato</strong>
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
                    <span>{e.like}</span>
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
                <button type="submit">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
