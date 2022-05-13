import { useFormik } from 'formik'
import React from 'react'
import useFetch from '../useFetch.js'

const Login = () => {

    const {data: persons} = useFetch('htp://localhost:7000/persons')

    const validate = (values) => {
        const errors = {}
        if (!values.username){
            errors.username = 'Please enter your username'
        }else if (!values.password){
            errors.password = 'Please enter your password'
        }

    }
    const formik = () => useFormik({
        initialValues: {
            username: '',
            password: ''
        },validateOnChange: false,
        validateOnBlur: false,
        onSubmit: () => {
            voic(0)
        }
    })
  return (
    <div>Login</div>
  )
}

export default Login