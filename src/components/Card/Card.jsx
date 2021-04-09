import {useState} from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  star: {
    color: '#636059',
    '&:hover': {
      color: '#04C56B',
    },
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    
  }

});

export default function ImgMediaCard({gif}) {

  const classes = useStyles();
  const ourGifs = useSelector(store => store.gifs);

  const [favorite, setFavorite] = useState([]);
  
  const markFavorite = ( ) => {
    let gifUrl = gif.images.original.url 
    console.log( 'in markFavorite url:', gifUrl );
    
    // setFavorite( {
    //   url: gifUrl,
    //   favorite: true,
    // })

    // console.log( 'after setFavorite:', favorite );
    
    // axios.post(`api/favorite`, ).then((response))
  }

  // console.log('favorite item', favorite);

  return (

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="300"
          image={ gif.images.original.url }
          title="Contemplative Reptile"
        />
        {/* <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent> */}
      </CardActionArea>
      <CardActions className={classes.buttonContainer}>
        <Button size="small" color="primary">
          Share
        </Button>

        <IconButton onClick={ (event) => markFavorite( ) }>
          <StarIcon id={ gif.images.original.url } className={classes.star} />
        </IconButton>

      </CardActions>
    </Card>
  );
}

