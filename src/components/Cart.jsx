import React from 'react';
import Navbar from '../components/Navbar';
import * as CartActions from '../actions/cartAction';
import * as ShelfActions from '../actions/shelfAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Form from './Form';

const Cart = (props) => {

  let totalPrice = 0;
  
  console.log('STATE', props.cart);
  
  const cartItems = props.cart.map((item, i) => {
    totalPrice += Number(item.price)
    return (
      <li className="cart-item" key={i}><b>{item.title}</b>  ${item.price}
        <button
          className="btn btn-danger"
          onClick={props.cartActions.removeFromCart.bind(this, item)}>
          Remove</button>
      </li>
    )
  });


  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-5">
            <h1 className="header">Cart Items</h1>
            <ol>
              {cartItems}
            </ol>
            <div className="total-price">
              <h3>Total Price: <b>${totalPrice}</b></h3>
            </div>
          </div>
          <Form totalPrice={totalPrice}/>
          <div className="col-sm-1"></div>
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


export default connect(mapStateToProps, mapDispatchToProps)(Cart);