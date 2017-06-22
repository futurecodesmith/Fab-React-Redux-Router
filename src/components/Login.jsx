import React from 'react';
import Navbar from '../components/Navbar';
import Form from './Form';

const Login = (props) => {

  return (
    <div>
      <Navbar />
      <div className="container-fluid fade-in">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <Form />
          </div>
        </div>
      </div>
    </div>
  )
}


export default Login;