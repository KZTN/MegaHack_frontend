import React, { useEffect, useState } from 'react'
import api from '../../services/api';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import './styles.css'

import SideOptions from '../../components/sideoptions'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      backgroundColor: '#f1d3a7',
    },
  }),
);

interface User {
  name: string;
  email: string;
  phone: string;
  city: string;
  thumbnail: string;
}

const Profile = () => {
  const classes = useStyles();

  const [user, setUser] = useState<User>()

  useEffect(() => {
    api.get(`users/${localStorage.getItem("id")}`).then(response => {
      setUser(response.data);
    });
  }, []);

  function save() {

  }

  return (
    <div >
      <div className="grid-container">
        <div className="footer-grid">
          <img src={user?.thumbnail} alt="" className="img-circular" />
        </div>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <div className="form-component">
                Nome Completo
                <input type="text" value={user?.name} />
              </div>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <div className="form-component">
                E-mail
                <input type="text" value={user?.email} />
              </div>
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <div className="form-component">
                CPF
              <input type="text" />
              </div>
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <div className="form-component">
                Telefone
              <input type="text" value={user?.phone} />
              </div>
            </Paper>
          </Grid>

          <Grid item xs={9}>
            <Paper className={classes.paper}>
              <div className="form-component">
                Endereço
              <input type="text" />
              </div>
            </Paper>
          </Grid>

          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <div className="form-component">
                Número
              <input type="text" />
              </div>
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <div className="form-component">
                Bairro
              <input type="text" />
              </div>
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <div className="form-component">
                CEP
              <input type="text" />
              </div>
            </Paper>
          </Grid>

          <Grid item xs={9}>
            <Paper className={classes.paper}>
              <div className="form-component">
                Cidade
              <input type="text" />
              </div>
            </Paper>
          </Grid>

          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <div className="form-component">
                Estado
              <input type="text" />
              </div>
            </Paper>
          </Grid>

        </Grid>
        <div className="footer-grid">
          <button onClick={save}>Salvar</button>
        </div>
      </div>

      <SideOptions />
    </div>
  )
}

export default Profile