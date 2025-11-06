import React from "react";
import './App.css'

const User_feedback = function(){
    return(
        <>
            <div className="feedbackcontainer">
                <section className="feedbackcard">
                    <div className="conent">{props.username}</div>
                    <div className="description">{props.children}</div>
                    <div className="cardfooter">
                        <p className="addicon"><span>&#10011;</span>Add feedback</p>
                    </div>
                </section>
            </div>
        </>
    )
}

export default User_feedback