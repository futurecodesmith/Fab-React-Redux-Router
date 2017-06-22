import React from 'react';
import Navbar from '../components/Navbar';
import * as CartActions from '../actions/cartAction';
import * as ShelfActions from '../actions/shelfAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Form from './Form';

const Login = (props) => {

  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <Form />
          </div>
        </div>
      </div>
    </div>
  )
}


function mapStateToProps(state, prop) {
  return {
    cart: state.cart
  }
}

function mapDispatchToProps(dispatch) {
  return {
    cartActions: bindActionCreators(CartActions, dispatch),
    shelfActions: bindActionCreators(ShelfActions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);