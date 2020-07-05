import React, { useEffect, useState } from 'react'
import api from '../../services/api';
import ScrollArea from 'react-scrollbar'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';

import SideBar from '../../components/sidebar'
import TitleBar from "../../components/titlebar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: '6em'
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      marginTop: '5px',
      maxWidth: 500,
      backgroundColor: '#f1d3a7',
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    titleItem: {
      marginTop: '15px',
    },
    button: {
      margin: theme.spacing(1),
      backgroundColor: '#87b7c4',
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
    <div>

      <div className={classes.root}>
        {
          orders.map(order => (
            <Paper className={classes.paper} id={order.id}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src={order.thumbnail} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs className={classes.titleItem}>
                      <Typography gutterBottom variant="subtitle1">
                        {order.produto} [Qtd: {order.qtd}]
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        {order.client}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {order.address}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">{order.date}</Typography>
                      <Button
                      variant="contained"
                      className={classes.button}
                      endIcon={<CheckIcon />}
                    >Aceitar Pedido</Button>
                    </Grid>
                  </Grid>
                  <Grid item className={classes.titleItem}>
                    <Typography variant="subtitle1">R${order.price}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          ))
        }
      </div>
      <TitleBar title="Pedidos" />
      <SideBar />
    </div>
  )
}

export default StabHistory