import React from 'react'
import ScrollArea from 'react-scrollbar'
import { Link } from 'react-router-dom';

import './styles.css'

import SiderBar from '../../components/sidebar'
import SearchBar from '../../components/searchbar'

const Home = () => {
  return (
    <div>
      <ScrollArea
        speed={0.8}
        className="area"
        contentClassName="content"
        vertical={true}
      >
        {[...Array(10)].map((x, i) => (
          <div className="post-row">
            <Link to="/food/i">
              <div id="i" className="post-container">
                <img src={require("../../assets/food-feed.jpg")} alt="" className="img-container" />
                <strong>R$ 8,00</strong>
                <small>Empada de frango cremoso</small>
              </div>
            </Link>

            <div className="post-container">
              <img src={require("../../assets/food-feed.jpg")} alt="" className="img-container" />
              <strong>R$ 8,00</strong>
              <small>Empada de frango cremoso</small>
            </div>

            <div className="post-container">
              <img src={require("../../assets/food-feed.jpg")} alt="" className="img-container" />
              <strong>R$ 8,00</strong>
              <small>Empada de frango cremoso</small>
            </div>
          </div>
        ))}
      </ScrollArea>

      <SearchBar />
      <SiderBar />

    </div>
  )
}

export default Home;