import React from "react";
import './App.css'

const User_feedback = function(props){
    //open modal window 
    const openmodalwindow = () => {
        const modalwindow = document.querySelector(".modalWindow")
        modalwindow.computedStyleMap.display = "block"
    }

    return(
        <>
            <div className="feedbackcontainer">
                <section className="feedbackcard">
                    <div className="conent">{props.username}</div>
                    <div className="description">{props.children}</div>
                    <div className="cardfooter">
                        <p className="addicon" onClick={openmodalwindow}><span>&#10011;</span>Add feedback</p>
                    </div>
                </section>
            </div>

            {/* modal window */}
            <Modalwindow/>
        </>
    )
}

export default User_feedback