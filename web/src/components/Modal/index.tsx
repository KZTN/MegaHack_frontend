import React, { useEffect, useState, FormEvent } from "react";
import "./styles.scss";
import { FaTimes, FaWhatsapp, FaStar } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import api from "../../services/api";

type Product_Type = {
  ingredients: string[];
  _id: string;
  name: string;
  price: Number;
  establishment: string;
  createdAt: string;
  updatedAt: string;
  __v: Number;
  thumbnail: string;
};

const PRODUCT_INITIAL_STATE: Product_Type = {
  ingredients: [],
  _id: "",
  name: "",
  price: 0,
  establishment: "",
  createdAt: "",
  updatedAt: ",",
  __v: 0,
  thumbnail: "",
};

type Establishment_Type = {
  name: string;
  phone: string;
  work_start_time: string;
  work_end_time: string;
  thumbnail: string;
};
const ESTABLISHMENT_INITIAL_STATE: Establishment_Type = {
  name: "",
  phone: "",
  work_start_time: "",
  work_end_time: "",
  thumbnail: "",
};

type Comments_Type = [
  {
    _id: string;
    author: string;
    comment: string;
    rate: number;
  }
];
const COMMENT_INITIAL_STATE: Comments_Type = [
  {
    _id: "",
    author: "",
    comment: "",
    rate: 0,
  },
];

export default function Modal() {
  const [isfavorite, setIsfavorite] = useState(false);
  const [favchanged, setFavchanged] = useState(false);
  const [product, setProduct] = useState<Product_Type>(PRODUCT_INITIAL_STATE);
  const [quotes, setQuotes] = useState<Comments_Type>(COMMENT_INITIAL_STATE);
  const [establishment, setEstablishment] = useState<Establishment_Type>(
    ESTABLISHMENT_INITIAL_STATE
  );

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [rate, setRate] = useState<any>();

  async function getUserData() {
    await api
      .get(`/products/${localStorage.getItem("favoriteID")}`)
      .then((response) => {
        setProduct(response.data);
        setQuotes(response.data.establishment.comments);
        setEstablishment(response.data.establishment);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getUserData();
  }, []);

  function popupWPP(phone: string) {
    window.open(`https://wa.me/${phone}`, "_top");
  }

  async function handleCloseModal() {
    localStorage.setItem("favoriteID", "");
    localStorage.setItem("modalIsOpen", "close");
    window.location.reload();
  }

  async function handleSubmit(e: FormEvent) {}
  return (
    <div className="modal">
      <div className="content">
        <div className="close-button">
          <span>#{product._id}</span>
          <button onClick={handleCloseModal}>
            <FaTimes size={24} color="#444" />
          </button>
        </div>
        <div className="details">
          <div className="box-img">
            <img src={product.thumbnail} />
          </div>
          <div className="box-main-details">
            <h1 style={{ marginBottom: 20 }}>
              <strong>{product.name}</strong>
            </h1>
            <div className="box-main-item" style={{ marginBottom: 2 }}>
              <h3>valor: R${product.price}</h3>
            </div>
            <div className="box-main-item" style={{ marginBottom: 2 }}>
              <h3>
                Ingredientes:{" "}
                {product.ingredients.map((ingredient) => (
                  <span>{ingredient} </span>
                ))}
              </h3>
            </div>
            <div className="box-main-item" style={{ marginBottom: 2 }}>
              <h3>Estabelecimento {establishment.name}</h3>
            </div>
            <div className="box-main-item" style={{ marginBottom: 2 }}>
              <h3>
                Horário de funcionamento {establishment.work_start_time} às{" "}
                {establishment.work_end_time}
              </h3>
            </div>
            <FaWhatsapp size={24} color="#fff" style={{ marginRight: 5 }} />
            <span>Entre em contato</span>
          </div>
          <div className="comments">
            <h1>Comentários:</h1>
            {quotes.map((e) => (
              <div className="comment">
                <div className="comment-header">
                  <div className="comment-author">
                    <img
                      src={
                        "https://media.discordapp.net/attachments/697512026251067472/711345678885847140/user-solid.png"
                      }
                      alt=""
                    />
                    <span>{e.author}</span>
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
