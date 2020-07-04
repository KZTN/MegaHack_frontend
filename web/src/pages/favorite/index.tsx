import React from 'react'
import { Link } from 'react-router-dom'
import ScrollArea from 'react-scrollbar'

import './styles.css'

import SideBar from '../../components/sidebar'

const Favorite = () => {
  return (
    <div>

      <ScrollArea
        speed={0.8}
        className="area-container"
        contentClassName="content"
        vertical={true}
      >
        {
          [...Array(10)].map((x, i) => (
            <Link to="/user/i">
              <div className="favorite-container">
                <img src={require("../../assets/user-profile.jpg")} alt="" className="img-favorite" />
                <div className="description">
                  <strong>Amanda do Cookie</strong>
                  <small>Bolos, Cookies, Brownies, Bombons</small>
                </div>
              </div>
            </Link>
          ))
        }
      </ScrollArea>

      <SideBar />
    </div>
  )
}

export default Favorite