import './App.css';
import React, {useState} from 'react';

function App() {
  /*
  // set the initial state for username
  const[username, setUsername] = useState("")
  */

  // set states for multiple inputs
  const [inputs, setInputs] = useState({})
  // function to handle changes in all inputs
  const handle_changes = function(event){
    const name = event.target.name
    const value = event.target.value
    // update the states
    setInputs(values =>({...values, [name]: value}))
  }

  // set staes for select gender
  const [myGender, setMyGender] = useState("")
  // function to collect the selected gender
  const selectedGender = (event)=>{
    setMyGender(event.target.value)
  }
  
  // set state for comments
  const [textcomment, setComment] = useState("")
  // function to collect the comments
  const submitted_comments = function(event){
    setComment(event.target.value)
  }
  
  // function submit form
  const submitform = function(event){
    event.preventDefault()
  }
  return (
    <div className="App">
      <form className='myform' onSubmit={submitform}>
        <fieldset>
          <legend>Forms in React JS</legend>
          <div className='formgroup'>
            <label for="name">Enter username : </label>
          <input 
          type='text' 
          id='name'
          className='inputstyle'
          name='username' 
          placeholder='Type the Username...' 
          value={inputs.username} 
          onChange={handle_changes}
          />
          </div>

          <div className='formgroup'>
            <label for='age'>Enter your age : </label>
            <input 
            type='number'
            id='age'
            name='age'
            className='inputstyle'
            placeholder='Type in number your age'
            value={inputs.age}
            onChange={handle_changes}
            />
          </div>

        {/** select a gender */}
        <div className='formgroup'>
          <label> Select a Gender:
            <select value={myGender} onChange={selectedGender}>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
              </select>
          </label>
        </div>
          
        {/** comments ysing textarea */}
         <div className="formgroup">
            <label for="comments">Any suggestions? </label>
            <textarea
              id='comments'
              value={textcomment}
              onChange={submitted_comments}
              placeholder='Type your comments...'
            
            />
         </div>
         


        {/** Submit form */}
          <input type='submit' className='btnsubmit'/>
        </fieldset>
      </form>
      {/**test the username collected after the submit button */}
      <p className='printresult'>Username = {inputs.username} </p>
      <p className='printresult'>Age = {inputs.age} </p>
      <p className='printresult'>Gender = {myGender} </p>
      <p className='printresult'>Comments = {textcomment} </p>

      
    </div>
  );
}

export default App;
