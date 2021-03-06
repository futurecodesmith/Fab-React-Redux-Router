import React from 'react';
import Navbar from './Navbar';
import * as ShelfActions from '../actions/shelfAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Home = (props) => {


  const thumbnails = props.shelf.map((item, i) => {
    return (
      <li
        onClick={(e) => {props.shelfActions.addToCart(item)}}
        key={i} className="col-xs-3 col-sm-2 col-md-1 list-item-small grow">
        <img
          className="img img-responsive"
          src={item.src}
          alt={item.name} />
      </li>
    )
  })


  const topThree = props.shelf.slice(0,3).map((item, i) => {
    return (
      <li
        key={i} className="col-sm-4 list-item-big">
        <div className="container-thirds overflow-scroll">
          <div className="col-sm-12">
            <img
              className="inline float-left img-responsive padding-right-1"
              src={item.src}
              alt={item.name} />
            <h3 className="left-align h3-header">{item.name}</h3>
            <p className="justify">{item.description}</p>
          </div>
        </div>
      </li>

    )
  })



  return (
    <div>
      <Navbar />

      <div className="container-fluid top fade-in">
        <div className="row">
          <ul className="list-top">
                <ReactCSSTransitionGroup  transitionName="example" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
            {topThree}
                </ReactCSSTransitionGroup>

          </ul>
        </div>
        <div className="row">
          <ul className="list-bottom">
            {thumbnails}
          </ul>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state, prop) {
  return {
    shelf: state.shelf
  }
}

function mapDispatchToProps(dispatch) {
  return {
    shelfActions: bindActionCreators(ShelfActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);