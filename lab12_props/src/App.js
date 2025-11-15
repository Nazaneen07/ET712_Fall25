import './App.css';
import User from './comments';
import User_feedback from './User_feedback';
import Modalwindow from './Modalwindow';

// import images
import avatar1 from './images/icon_batman.png';
import avatar2 from './images/icon_student.png';
import avatar3 from './images/icon_support.png';

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        Lab 12, React props by student's full name
      </h1>

      <section className="container">
        {/* user 1 */}
        <User_feedback username="Batman">
          <User image={avatar1} date="04/23/2025" msg="I am Batman" />
        </User_feedback>

        {/* user 2 */}
        <User_feedback username="Daisy">
          <User image={avatar2} date="01/20/2025" msg="Where is the bus stop?" />
        </User_feedback>

        {/* user 3 */}
        <User_feedback username="Peter">
          <User image={avatar3} date="12/13/2024" msg="I need help!" />
        </User_feedback>
      </section>

      {/**  COMMENT LIST */}
      <section className='postcomment'>
        <ul className='commentlist'>
          <li>Testing</li>
        </ul>
      </section>

    </>
  );
}

export default App;

