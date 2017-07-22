import React, { Component } from 'react';


class FormControlled extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      password: ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
    // console.log(this.state.name, this.state.password);
    this.props.log(this.state.name);
    this.setState({
      name: '',
      password: '',
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    return (
      <div className="center form">
        <form onSubmit={this.handleSubmit.bind(this)} onChange={this.handleChange.bind(this)}>
          <input className="input block center" type="text" placeholder="Name" value={this.state.name} name="name" />
          <input className="input block center" type="password" name="password" placeholder="Password" value={this.state.password} />
          <input className="btn input-button" type="submit" value="Login" />
        </form>
      </div>
    )
  }

}

export default FormControlled;