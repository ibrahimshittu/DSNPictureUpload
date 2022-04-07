import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import "../styles/pictureForm.scss"
import {useState} from 'react'
import axios from '../api/axios'
import { useContext } from 'react';
import { context } from '../context/context';
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'

function PictureForm() {
    const [image, setImage] = useState(null)
    const [caption, setCaption] = useState('')
    const { user } = useContext(context);
    const [error, setError] = useState('')
    const [show, setShow] = useState(false)
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)



    const onImageChange = (e) => {
        setImage(e.target.files[0])
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const formData = new FormData()
        formData.append('picture', image, image.name);
        formData.append('caption', caption);
        formData.append('owner', "body@mail.com");
        try {
            const response = await axios.post('images/', formData, {
                headers: {
                'Content-Type':
                    'multipart/form-data',
                    'Authorization': `Bearer ${user.tokens.access}`
                },
            })
            if (response.status === 201) {
                setTimeout(() => {
                    window.location.reload()
                }, 1000)
                setSuccess(true)
                setLoading(false)

            }
            
        } catch (error) {
            setError(error.response.data.non_field_errors)
            setShow(true)  
            setLoading(false)
        }
    }

  return (
    <div className="form">
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFileSm" className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control type="file" size="sm" accept='image/*' onChange={onImageChange} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Caption</Form.Label>
                <Form.Control as="textarea" maxLength="256" rows={2} onChange={(e)=>{setCaption(e.target.value)}} required />
            </Form.Group>
            <Button variant="primary" type="submit" size='md' disabled={loading}>
                {loading && <span>Uploading...</span>}
                {!loading && <span>Submit</span>}
            </Button>
        </Form>

        

        {show && <ToastContainer className="py-2">
            <Toast bg='danger' onClose={() => setShow(false)} show={true} delay={3000} autohide>
            
            <Toast.Body className='text-white'>{error}</Toast.Body>
            </Toast>
        </ToastContainer>} 

        {success && <ToastContainer className="py-2">
            <Toast bg='success' onClose={() => setShow(false)} show={true} delay={3000} autohide>
            
            <Toast.Body className='text-white'>Successfully Uploaded</Toast.Body>
            </Toast>
        </ToastContainer>} 

    </div>
  )
}

export default PictureForm