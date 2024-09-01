import { useContext, useState } from 'react';
import classes from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const email = event.target.email.value;
    const password = event.target.password.value;

    const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true
        })
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error.message || 'Authentication failed');
      }

      const data = await response.json();
      const expirationTime = new Date(
        new Date().getTime() + +data.expiresIn * 1000
      ).toISOString();

      authCtx.login(data.idToken, expirationTime, data.email);
      alert('Login successful');
      navigate('/store');
    } catch (err) {
      alert(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={classes.auth}>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button type='submit'>Login</button>}
          {isLoading && <p>Sending request...</p>}
        </div>
      </form>
    </section>
  );
};

export default Login;
