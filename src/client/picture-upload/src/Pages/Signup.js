import Signup  from "../components/Signup"
import { Link } from "react-router-dom"

import Footer from "../components/Footer"
import "../styles/signupPage.scss"

function SignupPage() {
  return (
    <div className="body">
        <h2>Memories</h2>
        <h6 className="note">Register for an Account to share your Memories</h6>
        <Signup />

        <p>Already have an Account?  
            <span >
                <Link  to="/login" style={{ textDecoration: 'none', fontWeight: "bold" }}> Log In
                </Link>
            </span>
        </p>
        <Footer/>
    </div>
  )
}

export default SignupPage