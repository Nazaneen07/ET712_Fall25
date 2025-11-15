import React from "react";
import './App.css'
import Modalwindow from './Modalwindow'

const User_feedback = function(props){
    // open modal window 
    const openmodalwindow = () => {
        const modalwindow = document.querySelector(".modalwindow")   // FIXED
        if (modalwindow) modalwindow.style.display = "block"
    

        // set the username for each modal window 
        const modalusername = document.querySelector(".modalusername").innerHTML = `<em>${props.username}</em>`
    };

    return(
        <>
            <div className="feedbackcontainer">
                <section className="feedbackcard">
                    <div className="content">{props.username}</div>
                    <div className="description">{props.children}</div>
                    <div className="cardfooter">
                        <p className="addicon" onClick={openmodalwindow}>
                            <span>&#10011;</span>Add feedback
                        </p>
                    </div>
                </section>
            </div>

            <Modalwindow />
        </>
    )
}

export default User_feedback

