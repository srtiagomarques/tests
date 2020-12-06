import React from 'react'
import axios from 'axios'
import Form from './components/form'

import './App.css'

const handleSubmit = values => {
  axios.post(`http://127.0.0.1:8000/login/`, JSON.stringify(values)).then(res => {
  })
}
const initialValues = {}

const App = () => (
  <div className="App">
    <Form handleSubmit={handleSubmit} initialValues={initialValues} />
  </div>
)

export default App