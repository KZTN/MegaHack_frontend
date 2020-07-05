import React, { useEffect, useState } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import StarIcon from "@material-ui/icons/Star";
import api from "../../services/api";
import Post from "../../components/Post";
import "./styles.css";

import SiderBar from "../../components/sidebar";
import SearchBar from "../../components/searchbar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    titleBar: {
      background:
        "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
        "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
    },
    icon: {
      color: "rgba(255, 255, 255, 0.54)",
    },
    iconClicked: {
      color: "yellow",
    },
  })
);

interface Post {
  _id: string;
  title: string;
  price: number;
  thumbnail: string;
  hashtags: string[];

  establishment: {
    name: string;
    _id: string;
  };
}

interface PostFAvorite {
  id: string;
  isFavorite: boolean;
}

const Home = () => {
  const classes = useStyles();

  const [posts, setPosts] = useState<Post[]>([]);
  const [favorites, setFavorites] = useState<PostFAvorite[]>([]);

  useEffect(() => {
    if (localStorage.getItem("field")) {
      api.get(`search/${localStorage.getItem("field")}`).then((response) => {
        setPosts(response.data);
        localStorage.removeItem("field");
        response.data.map((p: Post) => {
          let favorite = { id: p._id, isFavorite: false };
          favorites.push(favorite);
          console.log(favorites);
        });
      });
    } else {
      api.get("posts").then((response) => {
        setPosts(response.data);

        response.data.map((p: Post) => {
          let favorite = { id: p._id, isFavorite: false };
          favorites.push(favorite);
          console.log(favorites);
        });
      });
    }
  }, [favorites]);

  async function handleFavorite(id: string) {
    favorites.map((f) => {
      if (f.id === id) {
        f.isFavorite = !f.isFavorite;
      }
    });
  }
  function handleClick(postID: string) {
    localStorage.setItem("postID", postID);
    localStorage.setItem("postIsOpen", "open");
    window.location.reload();
  }
  return (
    <div>
      <div className="root">
        <GridList cellHeight={400} className="gridList" cols={2}>
          {posts.map((post) => (
            <GridListTile key={post._id} onClick={() => handleClick(post._id)}>
              <img
                src={post.thumbnail}
                alt={post.title}
                className="img-container"
                style={{ objectFit: "cover", width: "100%" }}
              />
              <GridListTileBar
                title={<strong>{post.establishment.name}</strong>}
                titlePosition="top"
                className={classes.titleBar}
              />

              <GridListTileBar
                title={`${post.title}  R$${post.price}`}
                subtitle={<span>{post.hashtags.map((h) => `#${h} `)}</span>}
                actionIcon={
                  <IconButton
                    className={classes.icon}
                    key={post._id}
                    onClick={(key) => handleFavorite(post._id)}
                  >
                    <StarIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>

      <SearchBar />
      <SiderBar />
      {localStorage.getItem("postIsOpen") === "open" ? <Post /> : null}
    </div>
  );
};

export default Home;
