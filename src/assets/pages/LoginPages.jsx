import "./Login.css";
import { FaFacebookF, FaGooglePlusG } from "react-icons/fa";



function LoginPage(){
    return(
        <div className='login-container'>
            <div className='login-box'>
               <h1>Login</h1>
               <p className='register-text'>
                Don't have an account?
                <a href='#'> Sign up here.</a>
               </p>
               <form>
                <input type="email" placeholder="Email" className='login-input'/>
                <input type="password" placeholder="Mật khẩu" className='login-input'/>
                <button className='login-btn'>Login</button>
               </form>
              <a href='#' className='forgot-password'>Forgot Password?</a>
                <p className='or-text'>Or sign in with</p>
               <div className='social-login'> 
                <button className='facebook'>
                    <span className='icon'> <FaFacebookF /></span>
                    Facebook</button>
                <button className='google'>
                    <span className='icon'><FaGooglePlusG /></span> 
                    Google</button>
                </div>
            </div>
        </div>
    )
}
export default LoginPage;