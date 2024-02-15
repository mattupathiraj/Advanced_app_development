import './Login.css';
import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';

const Login = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const [loginEmailError, setLoginEmailError] = useState('');
  const [loginPasswordError, setLoginPasswordError] = useState('');
  const [signupNameError, setSignupNameError] = useState('');
  const [signupEmailError, setSignupEmailError] = useState('');
  const [signupPasswordError, setSignupPasswordError] = useState('');

  const [isLoginForm, setIsLoginForm] = useState(true); // State to toggle between login and signup forms

  const navigate = useNavigate();

  const validateLoginEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setLoginEmailError(emailRegex.test(loginEmail) ? '' : 'Invalid email address');
  };

  const validateLoginPassword = () => {
    setLoginPasswordError(loginPassword.length >= 6 ? '' : 'Password must be at least 6 characters');
  };

  const validateSignupName = () => {
    setSignupNameError(signupName.length > 2 ? '' : 'Name should contain more than 2 letters');
  };

  const validateSignupEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setSignupEmailError(emailRegex.test(signupEmail) ? '' : 'Invalid email address');
  };

  const validateSignupPassword = () => {
    setSignupPasswordError(signupPassword.length >= 6 ? '' : 'Password must be at least 6 characters');
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    validateLoginEmail();
    validateLoginPassword();
    if (!loginEmail.trim() || !loginPassword.trim()) {
      console.log('Please fill in all login fields.');
      return;
    }
    if (!loginEmailError && !loginPasswordError) {
      // Your login logic here
      console.log('Login successful:', { loginEmail, loginPassword });

      // Navigate to the next page
      navigate('/');
    } else {
      console.log('Form contains errors. Please fix them.');
    }
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    validateSignupName();
    validateSignupEmail();
    validateSignupPassword();
    if (!signupName.trim() || !signupEmail.trim() || !signupPassword.trim()) {
      console.log('Please fill in all signup fields.');
      return;
    }
    if (!signupNameError && !signupEmailError && !signupPasswordError) {
      // Your signup logic here
      console.log('Signup successful:', { signupName, signupEmail, signupPassword });

      // Navigate to the next page
      navigate('/');
    } else {
      console.log('Form contains errors. Please fix them.');
    }
  };

  return (
    <div>
      <body>
        <div className="container">
          <input type="checkbox" id="flip" checked={!isLoginForm} onChange={() => setIsLoginForm(!isLoginForm)} />
          <div className="cover">
            <img src="https://www.mbatuts.com/wp-content/uploads/2019/11/Event-Planning-Business-in-plan.jpg" alt="" />
            <div className="text"></div>
          </div>
          <div className="forms">
            <div className={`form-content ${isLoginForm ? 'login-active' : 'signup-active'}`}>
              <div className="login-form">
                <div className="title">Login</div>
                <form onSubmit={handleLoginSubmit}>
                  <div className="input-boxes">
                    <div className="input-box">
                      <i className="fas fa-envelope"></i>
                      <input
                        type="text"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        onBlur={validateLoginEmail}
                        placeholder="Enter your email"
                        required
                      />
                      {loginEmailError && <div className='error-message'>{loginEmailError}</div>}
                    </div>
                    <div className="input-box">
                      <i className="fas fa-lock"></i>
                      <input
                        type="password"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        onBlur={validateLoginPassword}
                        placeholder="Enter your password"
                        required
                      />
                      {loginPasswordError && <div className='error-message'>{loginPasswordError}</div>}
                    </div>
                    <div className="text"><a href="#">Forgot password?</a></div>
                    <div className="button input-box">
                      <input type="submit" value="Submit" />
                    </div>
                    <div className="text sign-up-text">Dont have an account? <label htmlFor="flip">Sign up now</label></div>
                  </div>
                </form>
              </div>
              <div className="signup-form">
                <div className="title">Signup</div>
                <form onSubmit={handleSignupSubmit}>
                  <div className="input-boxes">
                    <div className="input-box">
                      <i className="fas fa-user"></i>
                      <input
                        type="text"
                        value={signupName}
                        onChange={(e) => setSignupName(e.target.value)}
                        onBlur={validateSignupName}
                        placeholder="Enter your name"
                        required
                      />
                      {signupNameError && <div className='error-message'>{signupNameError}</div>}
                    </div>
                    <div className="input-box">
                      <i className="fas fa-envelope"></i>
                      <input
                        type="text"
                        value={signupEmail}
                        onChange={(e) => setSignupEmail(e.target.value)}
                        onBlur={validateSignupEmail}
                        placeholder="Enter your email"
                        required
                      />
                      {signupEmailError && <div className='error-message'>{signupEmailError}</div>}
                    </div>
                    <div className="input-box">
                      <i className="fas fa-lock"></i>
                      <input
                        type="password"
                        value={signupPassword}
                        onChange={(e) => setSignupPassword(e.target.value)}
                        onBlur={validateSignupPassword}
                        placeholder="Enter your password"
                        required
                      />
                      {signupPasswordError && <div className='error-message'>{signupPasswordError}</div>}
                    </div>
                    <div className="button input-box">
                      <input type="submit" value="Submit" />
                    </div>
                    <div className="text sign-up-text">Already have an account? <label htmlFor="flip">Login now</label></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Login;
