import React from 'react'
import { FaSearch } from 'react-icons/fa'
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import PostAddIcon from '@material-ui/icons/PostAdd';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
      backgroundColor: "#fff3b0",
    },
  }),
);

const SearchBar = () => {
  const classes = useStyles();

  return (<>
    {localStorage.getItem("usertype") === "0"
      ? <div className="search-container">
        <input type="text" placeholder="Pesquisar" />
        <button>
          <FaSearch />
        </button>
      </div>
      : localStorage.getItem("usertype") === "1" ?
        <div className="post-container">
          <Button
            variant="contained"
            className={classes.button}
            startIcon={<PostAddIcon />}
          >
            Novo
      </Button>
      <Button
            variant="contained"
            className={classes.button}
            startIcon={<DeleteIcon />}
          >
            Exluir
      </Button>
        </div>
        :
        <div className="search-container">
          <input type="text" placeholder="Pesquisar" />
          <button>
            <FaSearch />
          </button>
        </div>
    }
  </>
  )
}

export default SearchBar 