import {useState, useEffect } from 'react';
import './Favorites.css';
import {useSelector, useDispatch } from 'react-redux';
import CardFavorite from '../CardFavorite/CardFavorite';
import axios from 'axios';

const Favorites = () => {
    
    // const dispatch = useDispatch();
    
    const [ favoriteGifs, setFavoriteGifs ] = useState( [] );

    let getGifs = () => {
        console.log( ' in getGifs' );
        axios.get( '/api/favorite').then( ( response )=>{
            console.log( 'back from GET at server with:', response.data );
            setFavoriteGifs( response.data );
        }).catch( ( err )=>{
            console.log( 'error in getGifs GET route:', err );
            alert( 'error in GET in getGifs')
        })
    }

   useEffect( ()=>{
        getGifs();
   }, [])
    
    return (
    <>
        <header>
            <h1>Giphy Images</h1>
        </header>
        <div className="input-container">
            <input placeholder="Search gif" type="text"/>
        <button>Submit</button>
        
        </div>
        <hr />
        <div className="cardContainer">
            {favoriteGifs.map( ( gif, i) => {
                return (
                    <div className="card" key={ i }>
                    <CardFavorite gif={gif}/>
                    </div>
            )
                })}
        </div>
    
    </>)
}

export default Favorites;
