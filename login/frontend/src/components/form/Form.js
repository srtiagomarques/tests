import * as yup from 'yup'

import PropTypes from 'prop-types'
import React from 'react'

import { ErrorMessage, Formik, Form as FormikForm, Field } from 'formik'

import './Form.css'

const validations = yup.object().shape({
    email: yup.string()
        .email('Insira um email válido')
        .required('Insira um email'),
    password: yup.string()
        .min(5, 'Insira uma senha com no mínimo 8 carácteres')
        .required('Insira uma senha')
})

const Form = ({ handleSubmit, initialValues }) => (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validations}>
        <FormikForm className="Form">
            <h1 className="Form-Welcome">Bem vindo</h1>
            <h2 className="Form-Info">Insira usuário e senha para acessar o sistema</h2>
            <div className="Form-Group">
                <Field className="Form-Field" name="email" placeholder="Email" type="text" />
                <ErrorMessage className="Form-Error" component="span" name="email" />
            </div>
            <div className="Form-Group">
                <Field className="Form-Field" name="password" placeholder="Password" type="password" />
                <ErrorMessage className="Form-Error" component="span" name="password" />
            </div>
            <button className="Form-Btn" type="submit">Login</button>
        </FormikForm>
    </Formik>
)

Form.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    initialValues: PropTypes.object.isRequired
}

export default Form