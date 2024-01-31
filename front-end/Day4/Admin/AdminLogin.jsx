import './AdminLogin.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
        <body>
  <div className="container">
    <input type="checkbox" id="flip"/>
    <div className="cover">
      <div className="front">
        <img src="https://partyslate.imgix.net/companies-cover-image/15887/image-67e305f8-8f0f-47cf-8ab5-24b81b21bc75.jpg?ixlib=js-2.3.2&auto=compress%2Cformat&bg=fff" alt=""/>
        <div className="text">
          
        </div>
      </div>
      <div className="back">
        <img className="backImg" src="" alt=""/>
        <div className="text">
          <span className="text-1">Complete miles of journey <br/> with one step</span>
          <span className="text-2">Lets get started</span>
        </div>
      </div>
    </div>
    <div className="forms">
        <div className="form-content">
          <div className="login-form">
            <div className="title">Login</div>
          <form action="#">
            <div className="input-boxes">
              <div className="input-box">
                <i className="fas fa-envelope"></i>
                <input type="text" placeholder="Enter your email" required/>
              </div>
              <div className="input-box">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Enter your password" required/>
              </div>
              <div className="text"><a href="#">Forgot password?</a></div>
              <div className="button input-box">
                
                <Link to="/adminHome"><input type="submit" value="Sumbit"/></Link>
              </div>
              <div className="text sign-up-text">Dont have an account? <label htmlFor="flip">Sigup now</label></div>
            </div>
        </form>
      </div>
        <div className="signup-form">
          <div className="title">Signup</div>
        <form action="#">
            <div className="input-boxes">
              <div className="input-box">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Enter your name" required/>
              </div>
              <div className="input-box">
                <i className="fas fa-envelope"></i>
                <input type="text" placeholder="Enter your email" required/>
              </div>
              <div className="input-box">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Enter your password" required/>
              </div>
              <div className="button input-box">
                <Link to="/adminHome"><input type="submit" value="Sumbit"/></Link>
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
  )
}

export default Login