import React, { Component } from 'react';
import { handleSubmit, handleChange } from '../actions/loginAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';


class FormRedux extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      password: '',
      error: false,
      fireRedirect: false,
    }
  }

  handleSubmit(e){
    e.preventDefault();
    if (this.state.name === '' || this.state.password === '') {
      this.setState(
        {error: true}
      )
    } else {
      this.setState(
        {error: false}
      )
    }
    this.setState({
      name: '',
      password: '',
      fireRedirect: true,
    });    

    this.props.handleSubmit(this.state.name, this.state.password);

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
        <div className="">
          <h3 className={this.state.error ? 'block': 'hidden'}  >Please Input a Username</h3>
        </div>
        {this.state.fireRedirect && (
          <Redirect to={'/community'}/>
        )}
      </div>
    )
  }
}


function mapStateToProps(state, prop) {
  return {
    name: state.name,
    password: state.password,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: bindActionCreators(handleSubmit, dispatch),
    handleChange: bindActionCreators(handleChange, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormRedux);