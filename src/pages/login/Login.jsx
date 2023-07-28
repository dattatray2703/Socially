import "./login.css"

export default function Login() {
  return (
    <div className="login">
    <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">Social Connect</h3>
            <span className="loginDesc">Connect with friends and world around you</span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
                <input placeholder="Email" className="loginInput"/>
                <input placeholder="Password" className="loginInput"/>
                <button className="loginButton">Log in</button>
                <span className="loginForgot">Forgot Password</span>
                <button className="login RegisterButton">Create Account</button>
            </div>
        </div>
    </div>
      
    </div>
  )
}
