import React from 'react'
import { useHistory } from "react-router-dom";
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

import './styles.css'

const images = [
  {
    url: require('../../assets/client.jpg'),
    title: 'Sou Consumidor',
    width: '33%',
  },
  {
    url: require('../../assets/chef.jpg'),
    title: 'Sou Empresa',
    width: '33%',
  },
  {
    url: require('../../assets/entregador.jpg'),
    title: 'Sou Entregador',
    width: '33%',
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      minWidth: 300,
      width: '100%',
    },
    image: {
      position: 'relative',
      height: 650,
      [theme.breakpoints.down('xs')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
      },
      '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
          opacity: 0.15,
        },
        '& $imageMarked': {
          opacity: 0,
        },
        '& $imageTitle': {
          border: '4px solid currentColor',
        },
      },
    },
    focusVisible: {},
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
    },
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
      position: 'relative',
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
    },
  }),
);

const Login = () => {
  const classes = useStyles();
  const history = useHistory();

  function goToUserLogin() {
    history.push("/login");
  }

  function goToEstabLogin() {
    history.push("/login");
  }

  function goToDeliveryLogin() {
    history.push("/login");
  }

  return (
    <div className={classes.root}>
        <ButtonBase
          focusRipple
          key={images[0].title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: images[0].width,
          }}
          onClick={goToUserLogin}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${images[0].url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {images[0].title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>

        <ButtonBase
          focusRipple
          key={images[1].title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: images[1].width,
          }}
          onClick={goToEstabLogin}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${images[1].url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {images[1].title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>

        <ButtonBase
          focusRipple
          key={images[2].title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: images[2].width,
          }}
          onClick={goToDeliveryLogin}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${images[2].url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {images[2].title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
    </div>

  )
}

export default Login;