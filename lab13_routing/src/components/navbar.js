import react from "react";
import "../App.css"
import { Link } from "react-router-dom";

const Navbars = function(){
    return(
        <>
            <nav className="navbar">
                <div className="qcclink">
                    <a href="https://www.qcc.cuny.edu">QCC</a>
                </div>

                <div className="btngroup">
                    <button><Link to="/">Home</Link></button>
                    <button><Link to="/about">About us</Link></button>
                    <button><Link to="/contact">Contact us</Link></button>
                </div>
            </nav>
        </>
    )
}

export default Navbars