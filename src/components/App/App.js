import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Home from '../Home/Home';

function App(props) {

  const dispatch = useDispatch();
  const gifs = useSelector(store => store.gifs);

  const getGifs = () => {
    
    axios.get('/gifs').then((response) => {
      console.log('back from server', response);
      dispatch({type: 'GET_GIFS', payload: response })
      
    }).catch((error) => {
      console.log(error);
    })
  }

  useEffect( ()=> {
    getGifs();
  }, []);

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
