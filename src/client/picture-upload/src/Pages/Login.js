import Login  from "../components/Login"
import { Link } from "react-router-dom"

import Footer from "../components/Footer"
import "../styles/loginPage.scss"

function LoginPage() {
  return (
    <div className="body">
        <h2>Memories</h2>
        <b>Login to your Account</b>
        <Login />

        <p>Don't have an account?  
            <span>
                <Link to="/signup" style={{ textDecoration: 'none', fontWeight: "bold" }} > Sign up</Link>
            </span>
        </p>
        <Footer/>
    </div>
  )
}

export default LoginPage