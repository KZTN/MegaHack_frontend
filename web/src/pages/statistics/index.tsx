import React, { useEffect, useState } from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';

import './styles.css'

import SideBar from '../../components/sidebar'
import TitleBar from "../../components/titlebar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }),
);

interface Order {
  id: string,
  client: string
  produto: string
  price: number
  date: string
  qtd: number
  thumbnail: string
  address: string
}

const StabHistory = () => {
  const classes = useStyles();

  const [orders, setOrders] = useState<Order[]>([
    {
      id: '1',
      client: "Tatiana",
      produto: "Hamburger Rainbow",
      price: 30,
      date: "05/07/2020 - 19:23",
      qtd: 2,
      thumbnail: require("../../assets/pedido1.jpg"),
      address: "Rua Alencar Guimarães, 54"
    },
    {
      id: '2',
      client: "Yago Marcos",
      produto: "Cookie Gotas de Chocolate",
      price: 5,
      date: "08/01/2020 - 19:55",
      qtd: 4,
      thumbnail: require("../../assets/pedido3.jpg"),
      address: "Av. Visconde de Guarapuava, 978"
    }
  ])

  useEffect(() => {

  }, []);

  return (
    <div className={classes.root}>
      <img src={require("../../assets/pdf1.png")} alt="" className="imagem"/>
      <img src={require("../../assets/pdf2.png")} alt="" className="imagem"/>
      <img src={require("../../assets/pdf3.png")} alt="" className="imagem"/>
      <img src={require("../../assets/pdf4.png")} alt="" className="imagem"/>
      <img src={require("../../assets/pdf5.png")} alt="" className="imagem"/>
      <img src={require("../../assets/pdf6.png")} alt="" className="imagem"/>
      <img src={require("../../assets/pdf7.png")} alt="" className="imagem"/>
      <TitleBar title="Estatísticas" />
      <SideBar />
    </div>
  )
}

export default StabHistory