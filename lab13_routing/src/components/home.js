import React from "react";
import '../App.css'
import aboutimg from '../images/about.jpg'
import contactimg from '../images/coontact.png'
import { Link } from "react-router-dom";

const Home = function(){
    return(
        <>
            <header className="header">
                <h1 className="headertitle">Welcome to React Routing</h1>

                <main className="maincontainer">

                    <div className="cardimg">
                        <Link to="/about">
                            <img src={aboutimg} />
                        </Link>
                    </div>

                    <div className="cardimg">
                        <Link to="/contact">
                            <img src={contactimg} />
                        </Link>
                    </div>

                </main>
            </header>
        </>
    )
}

export default Home