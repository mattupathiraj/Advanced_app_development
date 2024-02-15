import './Loginadmin.css';

const Loginadmin = () => {
  return (
    <div>
        <body>
  <div className="container">
    <input type="checkbox" id="flip"/>
    <div className="cover">
      <div className="front">
        <img src="https://img.freepik.com/premium-vector/event-management-wedding-planner-manager-planning-event-conference-party_501813-2157.jpg" alt=""/>
        <div className="text">
          
        </div>
      </div>
      <div className="back">
        <img className="backImg" src="https://img.freepik.com/free-vector/festive-calendar-event-holiday-celebration-party-work-schedule-planning-project-management-deadline-idea-office-managers-excited-colleagues_335657-20.jpg" alt=""/>
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
              <input type="submit" value="Sumbit"/>
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
                <input type="submit" value="Sumbit"/>
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

export default Loginadmin