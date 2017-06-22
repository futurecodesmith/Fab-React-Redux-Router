import React, { Component } from 'react';

class Form extends Component {

  handleSubmit(e){
    e.preventDefault();
    console.log(this.refs.name.value, this.refs.password.value)
    this.refs.name.value = '';
    this.refs.password.value = '';

  }

  render() {
    return (
      <div className="center form">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input className="input block center" type="text" placeholder="Name" ref="name"/>
          <input className="input block center" type="password" placeholder="Password" ref="password"/>
          <input className="btn input-button" type="submit" value="Login" />
        </form>
      </div>
    )
  }

}

  export default Form;