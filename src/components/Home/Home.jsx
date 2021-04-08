import {useState} from 'react';
import './Home.css';
import {useSelector, useDispatch } from 'react-redux';
import Card from '../Card/Card';

const Home = () => {
    
    // const dispatch = useDispatch();


    const ourGifs = useSelector(store => store.gifs);

    console.log('this is ourGifs', ourGifs);
    
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
            {ourGifs.map( ( gif, i ) => {
                return (
                    <div className="card" key={ i }>
                    < Card gif={gif}/>
                    </div>
            )
                })}
        </div>


        {/* // { ourGifs.map( ( gif, i ) => {
//   return (
//       <div key={ i }>
//           <img src={ gif.images.original.url } />

//   )      
// })}       
            
        
        {/* <div>
    
            <table>
                <thead>
                    <tr>
                        <th>Gifs</th>
                        <th>Favorite</th>

                    </tr>
                </thead>
                <tbody>
                    
                    { ourGifs.map( ( gif, i ) => {
                        return (
                            <tr key={ i }>
                                <td><img src={ gif.images.original.url } /></td>
                                
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div> */}
    </>)
}

export default Home
