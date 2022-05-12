import { useFormik } from 'formik'
import React from 'react'
import styles from './styles/Register.js'


const Register = () => {
    
    const date = new Date()
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            dateOfBirth: date.getDay(),
            gender: '',
            username: '',
            password: '',
            confirmPassword: ''
        }, 
        onSubmit: () => {

        }
    })
  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            <div className=''>

            </div>
        </form>
    </div>
  )
}

export default Register