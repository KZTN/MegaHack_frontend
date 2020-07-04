import React, { useEffect, useState } from 'react'
import ScrollArea from 'react-scrollbar'
import { Link } from 'react-router-dom';
import api from '../../services/api';

import './styles.css'

import SiderBar from '../../components/sidebar'
import SearchBar from '../../components/searchbar'

interface Post {
  _id: string;
  title: string;
  price: number;
  thumbnail: string;
}

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    localStorage.setItem("id", "5efe4993edbf718fe201a5f9")

    api.get("posts").then(response => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div>
      <ScrollArea
        speed={0.8}
        className="area"
        contentClassName="content"
        vertical={true}
      >
        {posts.map(post => (
            <Link id={post._id} to={`/food/${post._id}`}>
              <div className="post-container">
                <img src={post.thumbnail} alt="" className="img-container" />
                <strong>R${post.price}</strong>
                <small>{post.title}</small>
              </div>
            </Link>
        ))}
      </ScrollArea>

      <SearchBar />
      <SiderBar />

    </div>
  )
}

export default Home;