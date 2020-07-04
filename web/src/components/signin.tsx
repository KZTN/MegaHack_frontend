import React, { useState, FormEvent, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../services/api";
import "./styles.css";

const SignIn = () => {
  const history = useHistory();
  const [emailfield, setEmailfield] = useState<string>("");
  const [passwordfield, setSasswordfield] = useState<string>("");

  useEffect(() => {
    if (localStorage.getItem("id")) {
      history.push("/home");
    }
  }, [history]);

  async function getData() {
    await api
      .post("/sessions", { email: emailfield, password: passwordfield })
      .then((response) => {
        localStorage.setItem("id", response.data);
        history.push("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    getData();
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="E-mail"
          required
          value={emailfield}
          onChange={(e) => setEmailfield(e.target.value)}
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
        <div className="footer">
          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
