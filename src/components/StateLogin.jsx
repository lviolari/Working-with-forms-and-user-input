import { useState } from "react";

export default function Login() {

  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');

  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: '',
  });

  function handleSumbit(event){
    event.preventDefault();
  
    console.log(enteredValues);
  }

  function handleInputChange(id, value) {
    setEnteredValues(prevValues => ({
      ...prevValues,
      [id]: value
    }))
  }

  return (
    <form onSubmit={handleSumbit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
           id="email" 
           type="email" 
           name="email" 
           onChange={(event) => handleInputChange('email', event.target.value)}
           value={enteredValues.email}/>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
          id="password" 
          type="password" 
          name="password" 
          onChange={(event) => handleInputChange('password', event.target.value)}
          value={enteredValues.password}/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
