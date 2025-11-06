import './App.css';
import User from './comments'
import User_feedback from './User_feedback'

//import images
import avatar1 from './images/icon_batman.png'
import avatar2 from './images/icon_student.png'
import avatar3 from './images/icon_support.png'

function App() {
  return (
    <>
      <h1 style={{textAlign:"center"}}>Lab 12, React props by Nazaneen Baguaei</h1>
      <section className='container'>
        {/** user 1 */}
        <User_feedback Username ="Batman"></User_feedback>image ={avatar1} date="04/23/2025" msg ="I am batman"/>


        {/** user 2 */}
        <User_feedback Username ="Daisy"></User_feedback>image ={avatar2}  date="01/20/2025" msg ="Where is the bus stop?"/>

        {/** user 3 */}
        <User_feedback name ="Peter"></User_feedback>image ={avatar3} date="12/16/2025" msg ="I need help!"/>

      </section>

      <section className='container'>
        <User_feedback></User_feedback>
      </section>

    </>
  );
}

export default App;
