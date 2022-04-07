import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from '../api/axios'
import {useNavigate} from 'react-router-dom'
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'


function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [show, setShow] = useState(false)
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)


    const navigate = useNavigate()
    window.history.pushState("", "Signup", "/signup");


    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            if (confirmPassword !== password) {
                setError('Passwords do not match')
                setShow(true)
                setLoading(false)
            } else if ( password.length < 6) {
                setError('Password must be at least 6 characters')
                setShow(true)
                setLoading(false)
            } else {
            const response = await axios.post('user/signup/', {
                email,
                password
            })
            setSuccess(true)
       
            if (response.status === 201) {
                setSuccess(true)
                setTimeout(() => {
                    navigate('/login')
                }, 1000)
                setLoading(false)
            }
        }
        } catch (error) {
            setShow(true)
            setError(error.response.data.email)
            setLoading(false)

        }
    }
  return (
    <div className="form">
        <Form onSubmit={handleSubmit} >
            <Form.Group >
                <Form.Label><small>Email address</small></Form.Label>
                <Form.Control type="email" placeholder="name@example.com" onChange={e=> setEmail(e.target.value)} required/>
            </Form.Group>

            <Form.Group  style={{marginTop: "9px"}}>
                <Form.Label><small>Password</small></Form.Label>
                <Form.Control type="password" placeholder="password" onChange={e=> setPassword(e.target.value)} required/>
            </Form.Group>
            <Form.Group  style={{marginTop: "9px"}}>
                <Form.Label><small>Confirm Password</small></Form.Label>
                <Form.Control type="password" placeholder="confirm password" onChange={e=> setConfirmPassword(e.target.value)} required/>
            </Form.Group>
            <Button variant="primary" type="submit" size='md' disabled={loading}>
                {loading && <span>Creating an Account..</span>}
                {!loading && <span>Register</span>}
            </Button>
        </Form>
        {show &&

        <ToastContainer className="p-3" position="top-end">
            <Toast bg='danger' onClose={() => setShow(false)} show={show} delay={3000} autohide>
            
            <Toast.Body className='text-white'>{error}</Toast.Body>
            </Toast>
        </ToastContainer>
        
        }

        {success &&

        <ToastContainer className="p-3" position="top-end">
            <Toast bg='success' onClose={() => setShow(false)} show={true} delay={3000} autohide>
            
            <Toast.Body className='text-white'>Successfully created an Account</Toast.Body>
            </Toast>
        </ToastContainer>
        
        }
    </div>
  )
}

export default Signup