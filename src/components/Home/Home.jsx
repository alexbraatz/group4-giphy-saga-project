import {useState} from 'react';
import './Home.css';
import {useSelector, useDispatch } from 'react-redux';

const Home = () => {
    
    // const dispatch = useDispatch();

    // const [ findGif, setFindGif ] = useState( '' );
    const ourGifs = useSelector(store => store.gifs);
    // const ourGifs = useSelector( ( store ) => {
    //     console.log( 'in useSelector store.gifs:', store.gifs );
    //     return store.gifs
    // })
    console.log('this is ourGifs', ourGifs);
    
    return (
    <>
        <header>
            <h1>Giphy Images</h1>
        </header>
        <div className="input-container">
            <input placeholder="Search gif" type="text"/>
        <button>Submit</button>
        {/* { JSON.stringify( ourGifs )} */}
        </div>
        <hr />
        <div>
    
            <table>
                <thead>
                    <tr>
                        <th>Gifs</th>
                        <th>Favorite</th>

                    </tr>
                </thead>
                <tbody>
                    {/* {ourGifs ? ourGifs.type  : <tr><td>Gifs Go here</td></tr>} */}
                    { ourGifs.map( ( gif, i ) => {
                        return (
                            <tr key={ i }>
                                <td><img src={ gif.images.original.url } /></td>
                                
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </>)
}

export default Home
