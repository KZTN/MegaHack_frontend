import React, { useEffect, useState } from 'react'
import api from '../../services/api';

import './styles.css'

import SideOptions from '../../components/sideoptions'

interface User {
  name: string;
  email: string;
  phone: string;
  city: string;
  thumbnail: string;
}

const Profile = () => {
  const [user, setUser] = useState<User>()

  useEffect(() => {
    api.get(`users/${localStorage.getItem("id")}`).then(response => {
      setUser(response.data);
      console.log(user)
    });
  }, []);

  function save() {

  }

  return (
    <div>
      <SideOptions />
      <form action="" className="form-container">
        <img src={user?.thumbnail} alt="" className="img-circular" />

        <div className="form-row">
          <div className="form-component">
            Nome Completo
            <input type="text" value={user?.name}/>
          </div>
        </div>

        <div className="form-row">
          <div className="form-component">
            E-mail
            <input type="text" value={user?.email}/>
          </div>
        </div>

        <div className="form-row">
          <div className="form-component">
            CPF
            <input type="text" />
          </div>
          <div className="form-component">
            Telefone
            <input type="text" value={user?.phone}/>
          </div>
        </div>

        <div className="form-row">
          <div className="form-component">
            Endereço
            <input type="text" />
          </div>
          <div className="form-component">
            Número
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-component">
            Bairro
            <input type="text" />
          </div>
          <div className="form-component">
            CEP
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-component">
            Cidade
        <input type="text" value={user?.city}/>
          </div>
          <div className="form-component">
            Estado
        <input type="text" />
          </div>
        </div>
        <div className="footer">
          <button onClick={save}>Salvar</button>
        </div>
      </form>
    </div>
  )
}

export default Profile