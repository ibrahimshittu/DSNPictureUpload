import React, {useContext, useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from '../api/axios'
import { context } from '../context/context'
import {useNavigate} from 'react-router-dom'
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'
import "../styles/login.scss"

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { dispatch } = useContext(context)
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    window.history.pushState("", "Login", "/login");


    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        dispatch({type: "LOGIN_START"})
        try {
            if (email.trim() === '' || password.trim() === '') {
                setError('Please enter email or password')
                setShow(true)
            } else {        

            const response = await axios.post('user/signin/', {
                email,
                password
            })
            
            dispatch({type: "LOGIN_SUCCESS", payload: response.data})
            setLoading(false)
            navigate('/')
            setShow(true)}

        } catch (error) {
            
            setError(error.response.data.non_field_errors || `Password: ${error.response.data.password}`)
            dispatch({type: "LOGIN_FAILURE"})
            setShow(true)
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
            <Button variant="primary" type="submit" size='md' disabled={loading}>
                {loading && <span>Logging In...</span>}
                {!loading && <span>LogIn</span>}
            </Button>
        </Form>

        {show &&

        <ToastContainer className="p-3" position="top-end">
            <Toast bg='danger' onClose={() => setShow(false)} show={show} delay={3000} autohide>
            
            <Toast.Body className='text-white'>{error}</Toast.Body>
            </Toast>
        </ToastContainer>
        
        }
    </div>
  )
}

export default Login