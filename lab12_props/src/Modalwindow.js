import React from 'react'
import "./App.css"

const Modalwindow = function () {
    const closemodalwindow= ()=>{
        const modalwindow = document.querySelector(".modalwindow")  // FIXED
        if (modalwindow) modalwindow.style.display = "none"
    }

    // function to collect comments 
    const collectcomment = ()=>{
        let commentarea = document.querySelector(".commentarea")
        const commentlist = document.querySelector(".commentlist")
        const modalusername = document.querySelector(".modalusername").textContent
        const postdate = new Date().toLocaleDateString()
        const modalwindow = document.querySelector(".modalwindow")

        /** append comemtn from the modal window to the comment list */
        commentlist.innerHTML += `<li><em><b>${modalusername}</b></em> --- ${commentarea.value} --- <spam style = "font-size:0.8rem; color:gray"> posted on ${postdate}</spam></li>`
        commentarea.value = ""
        modalwindow.style.display = "none"
    }
    
    

    return (
        <>
            <section className="modalwindow">
                <div className="modalcontent">
                    <header className="modelheader">
                        <p>App Feedback to <b className='modalusername'></b></p>
                        <p className="closemodel" onClick={closemodalwindow}>&#x58;</p>
                    </header>

                    <main className="modalbody">
                        <input className="commentarea" type="text" placeholder="Type your comments..."/>
                        <button className="btnpostfeedback" onClick={collectcomment}>post feedback</button>
                    </main>

                </div>
            </section>
        </>
    )
}

export default Modalwindow