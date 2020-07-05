import React, { useState, FormEvent } from "react";
import { FaSearch } from "react-icons/fa";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import PostAddIcon from "@material-ui/icons/PostAdd";
import DeleteIcon from "@material-ui/icons/Delete";
import logo from "../assets/logo.png";
import origem from "../assets/origem.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
      backgroundColor: "#fff3b0",
    },
  })
);

type Title = {
  title: string,
}

const TitleBar = ({title}: Title) => {
  
  return (
    <>
      {
        <div className="search-container">
          <img src={origem} alt="origem" />
          <strong style={{fontSize: '30px'}}>{title}</strong>
          <img src={logo} alt="logo" />
        </div>
      }
    </>
  );
};

export default TitleBar;
