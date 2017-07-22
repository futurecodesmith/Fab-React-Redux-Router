import React, { Component } from 'react';
import * as LoginActions from '../actions/loginAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class FormRedux extends Component {

  render() {
    return (
      <div className="center form">
        <form onSubmit={this.props.loginActions.handleSubmit.bind(this)} onChange={this.props.loginActions.handleChange.bind(this)}>
          <input className="input block center" type="text" placeholder="Name" value={this.props.name} name="name" />
          <input className="input block center" type="password" name="password" placeholder="Password" value={this.props.password} />
          <input className="btn input-button" type="submit" value="Login" />
        </form>
      </div>
    )
  }
}


function mapStateToProps(state, prop) {
  return {
    name: state.name,
    password: state.password
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loginActions: bindActionCreators(LoginActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormRedux);