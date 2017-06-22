import React from 'react';
import Navbar from './Navbar';
import * as CartActions from '../actions/cartAction';
import * as ShelfActions from '../actions/shelfAction';
import * as TopThreeActions from '../actions/topThreeAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


const Home = (props) => {

  const thumbnails = props.cart.map((item, i) => {
    return (
      <li
        onClick={props.shelfActions.addToCart.bind(this, item)}
        key={i} className="col-xs-3 col-sm-2 col-md-1 list-item-small">
        <img
          className="img img-responsive"
          src={item.src}
          alt={item.name} />
      </li>
    )
  })


  const topThree = props.cart.slice(0,3).map((item, i) => {
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
      <div className="container-fluid top">
        <div className="row">
          <ul className="list-top">
            {topThree}
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
    cart: state.shelf
  }
}

function mapDispatchToProps(dispatch) {
  return {
    cartActions: bindActionCreators(CartActions, dispatch),
    shelfActions: bindActionCreators(ShelfActions, dispatch),
    topThreeActions: bindActionCreators(TopThreeActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);