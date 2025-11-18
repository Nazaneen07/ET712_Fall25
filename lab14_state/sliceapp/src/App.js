import './App.css';
import { useState } from 'react';

// list of three messages
const message = ["I think, therefore i am", "I have a dream", "The only thing we have to fear is fear itself"]

function App() {

// set initial state
const [counter, setCounter] = useState(1)

// set initial state (open and close)
const [isOpen, setisOpen] = useState(true)



  return (
    <div className="App">
      <h1 className='title'>Slice card by Nazaneen Baguaei</h1>

      {/** Slice cards */}
      <section className='slidewrapper'>
        <div className='numberwrapper'>
          <p className='msg'>{counter} ------ {message [counter-1]} </p>
          <div className={counter==1 ? "active" : ""}> <p>1</p> </div>
          <div className={counter==2 ? "active" : ""}> <p>2</p> </div>
          <div className={counter==3 ? "active" : ""}> <p>3</p> </div>
        </div>


        <div className='btngroup'>
          <button onClick={function(){if(counter>1)setCounter(counter-1)}}>Previous</button>
          <button onClick={function(){if(counter<message.length)setCounter(counter+1)}}>Next</button>
        </div>
      </section>


      {/** Open and close */}
      <section className='info'>
        <p><b>Cat (Felis catus</b>, commenly reffered to as a domestic cat or hous car <button className='readmorebtn' onClick={function(){setisOpen(!isOpen)}}>{isOpen ? "Hide" : "read More"}</button></p>

        <section>
          {
            isOpen && (
              <div className='readmore'>
                <p>The cat, Commonly reffered to ad domestic cat or house cat, is a small domesticated carnivorous mammal. It is the only domesticated species of the family Felidae</p>
              </div>
            )
          }
        </section>

      </section>



    </div>
  );
}

export default App;