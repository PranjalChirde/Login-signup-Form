import { useState } from 'react';
import SignupForm from './Signup.jsx';
import LoginForm from './loginform.jsx'


function App() {
  let [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {
        showLogin ? <LoginForm setShowLogin={setShowLogin}/> : <SignupForm setShowLogin={setShowLogin}/>
      }
    </>
  )
}

export default App
