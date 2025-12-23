import React from 'react'
import  Button  from 'react-bootstrap'

const button = () => {
  return (
    <div className="container mt-5 mx-auto text-center border bg-warning p-5">
        <button variant="primary" className="p-2 bg-primary text-white fw-bold w-50">Click Me!</button>

    </div>
  )
}

export default button
/*
    step-1 : npm install react-bootstrap bootstrap
    step-2 : import 'bootstrap/dist/css/bootstrap.min.css';  (in index.js)
    step-3 : import { Button } from 'react-bootstrap'; (in Btn.js)
    step-4 : use <Button> from react-bootstrap
*/
