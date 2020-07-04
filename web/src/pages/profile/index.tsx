import React from 'react'

import './styles.css'

import SideOptions from '../../components/sideoptions'

const Profile = () => {

  return (
    <div>
      <SideOptions />
      <form action="" className="form-container">
        <img src={require("../../assets/user-profile.jpg")} alt="olar" className="img-circular" />
        
        <div className="form-row">
          <div className="form-component">
            Nome Completo
            <input type="text"/>
          </div>
        </div>

        <div className="form-row">
          <div className="form-component">
            E-mail
            <input type="text"/>
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-component">
            CPF
            <input type="text"/>
          </div>
          <div className="form-component">
            Telefone
            <input type="text"/>
          </div>
        </div>

        <div className="form-row">
          <div className="form-component">
            Endereço
            <input type="text"/>
          </div>
          <div className="form-component">
            Número
            <input type="text"/>
          </div>
        </div>

        <div className="form-row">
          <div className="form-component">
            Bairro
            <input type="text"/>
          </div>
          <div className="form-component">
            CEP
            <input type="text"/>
          </div>
        </div>

        <div className="form-row">
          <div className="form-component">
            Cidade
        <input type="text"/>
          </div>
          <div className="form-component">
            Estado
        <input type="text"/>
          </div>
        </div>

      </form>
    </div>
  )
}

export default Profile