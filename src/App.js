import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function App() {

  let [action, setAction] = useState("Sign Up")
  return (
    <>
      <div className='container'>
        <div className='header'>
          <h1>{action}</h1>
          <div className='underline'></div>
        </div>
        <div className='inputs'>
          {action === "Log In" ? <div></div> : <div className='input'>
            <FontAwesomeIcon icon={faUser} />
            <input type='text' name='uname' placeholder='Name'></input>
          </div>}

          <div className='input'>
            <FontAwesomeIcon icon={faEnvelope} />
            <input type='email' name='eamil' placeholder={action === "Log In" ? 'Enter your Email Id' : 'Email Id'}></input>
          </div>
          <div className='input'>
            <FontAwesomeIcon icon={faLock} />
            <input type='password' name='password' placeholder={action === "Log In" ? 'Enter your Password' : 'Password'}></input>
          </div>
        </div>
        {action === "Sign Up" ? <div></div> : <div className='forget_password'>Lost Pasword? <a href=''>Click Here</a></div>}

        <div className='submit_container'>
          <button className={action === "Log In" ? 'submit gray' : 'submit'} onClick={() => { setAction('Sign Up') }}>Sign Up</button>
          <button className={action === "Sign Up" ? 'submit gray' : 'submit'} onClick={() => { setAction('Log In') }}>Log In</button>
        </div>
      </div>
    </>
  );
}

export default App;
