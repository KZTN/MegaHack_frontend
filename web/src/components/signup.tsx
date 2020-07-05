import React, { useState, FormEvent, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../services/api";
import Input from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./styles.css";

const SignUp = () => {
  const history = useHistory();
  const [namefield, setNamefield] = useState<string>("");
  const [phonefield, setPhonefield] = useState<string>("");
  const [cityfield, setCityfield] = useState<string>("");
  const [emailfield, setEmailfield] = useState<string>("");
  const [passwordfield, setSasswordfield] = useState<string>("");
  useEffect(() => {
    if (localStorage.getItem("id")) {
      history.push("/home");
    }
  }, [history]);
  async function handleData() {
    await api
      .post("/users", {
        email: emailfield,
        password: passwordfield,
        city: cityfield,
        phone: phonefield,
      })
      .then((response) => {
        localStorage.setItem("id", response.data.id);
        history.push("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    handleData();
  }
  return (
    <div className="content">
      <div className="form">
        <form onSubmit={handleSubmit}>
        <img src={require('../assets/logo-completo.png')} alt="" style={{width: '200px'}}/>
          <input
            type="text"
            name="name"
            placeholder="Nome"
            required
            value={namefield}
            onChange={(e) => setNamefield(e.target.value)}
          />
          <input
            type="text"
            name="email"
            placeholder="E-mail"
            required
            value={emailfield}
            onChange={(e) => setEmailfield(e.target.value)}
          />
          <input
            type="text"
            name="city"
            placeholder="Cidade"
            required
            value={cityfield}
            onChange={(e) => setCityfield(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            required
            minLength={6}
            value={passwordfield}
            onChange={(e) => setSasswordfield(e.target.value)}
          />
          <Input
            defaultCountry="BR"
            name="phone"
            id="phone"
            value={phonefield}
            onChange={setPhonefield}
            placeholder="Telefone"
            style={{ width: "290px" }}
          />
          <div className="footer">
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
