import react from 'react'
import "./App.css"

const Modalwindow = function () {
    // function to close the modal window

    const closemodalwindow= ()=>{
        const modalwindow = document.querySelector(".modalWindow")
        modalwindow.style.display = "none"
    }
return (
    <>
        {/* modal window */}
        <section className="modalWindow">
            <div className="modalcontent">
                <header className="modelHeader">
                    <p>App Feedback</p>
                    <p className="closemodel" onClick={closemodalwindow}>&#x58;</p>
                </header>

                <main className= "modalbody">
                    <input className="commentarea" type="text" placeholder="Type your comments..."/>
                    <button className="btnpostfeedback">post feedback</button>
                </main>

            </div>

        </section>
    </>

)
}
export default Modalwindow