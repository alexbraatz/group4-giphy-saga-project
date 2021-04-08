import React from 'react'
import './Home.css' 

const Home = () => {

    
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
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Gifs</th>
                        <th>Favorite</th>

                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    </>
    )
}

export default Home
