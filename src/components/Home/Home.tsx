import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
function Home() {
    return (
        <div>
            <h1>Welcome to the AI Art Gallery</h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Link to="/Explore" style={{ margin: '0 10px' }}>
                    <button>Explore</button>
                </Link>
                <Link to="/login" style={{ margin: '0 10px' }}>
                    <button>Login</button>
                </Link>
                <Link to="/Contact" style={{ margin: '0 10px' }}>
                    <button>Contact</button>
                </Link>
            </div>
        </div>
    )
}

export default Home