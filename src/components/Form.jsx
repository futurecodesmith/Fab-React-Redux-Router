import React, { Component } from 'react';

class Form extends Component {

  handleSubmit(e){
    e.preventDefault();

    //TODO: send to server/DB
    console.log('NAME', this.refs.name.value); 
    console.log('ADDRESS', this.refs.address.value); 
    console.log('CITY', this.refs.city.value); 
    console.log('ZIP CODE', this.refs.zipCode.value); 
    console.log('CREDIT CARD', this.refs.creditCard.value); 
    console.log('TOTAL PRICE', this.props.totalPrice);

    this.refs.name.value = '';
    this.refs.address.value = '';
    this.refs.city.value = '';
    this.refs.zipCode.value = '';
    this.refs.creditCard.value = '';

    //TODO: 
      //message: your order has been placed
      //redirect back to home page
  }

  render() {
    return (
      <div className="col-sm-5">
        <h1 className="header">Check out</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input className="input" type="text" placeholder="Name" ref="name"/>
          <input className="input" type="text" placeholder="Address" ref="address"/>
          <input className="input" type="text" placeholder="City" ref="city"/>
          <input className="input" type="text" placeholder="Zip Code" ref="zipCode"/>
          <input className="input" type="text" placeholder="Credit Card" ref="creditCard"/>
          <input className="btn btn-success input-button" type="submit" value="Place Order" />
        </form>
      </div>
    )
  }

}

  export default Form;