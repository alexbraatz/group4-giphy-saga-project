import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Home from '../Home/Home';
import Favorites from '../Favorites/Favorites';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';

function App() {

  const dispatch = useDispatch();
  const gifs = useSelector(store => store.gifs);

  const getGifs = () => {
    
    axios.get('/gifs').then((response) => {
      console.log('back from server', response.data );
      dispatch({type: 'GET_GIFS', payload: response.data })
      
    }).catch((error) => {
      console.log(error);
    })
  }

  useEffect( ()=> {
    getGifs();
  }, []);

  return (
    <div>
      <Router>

        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/favorites" exact>
          <Favorites />
        </Route>

      </Router>
    </div>
  );
}

export default App;
