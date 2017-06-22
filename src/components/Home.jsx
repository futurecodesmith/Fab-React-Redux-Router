import React from 'react';
import * as CartActions from '../actions/cartAction';
import * as ShelfActions from '../actions/shelfAction';
import * as TopThreeActions from '../actions/topThreeAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


const Home = (props) => {
  const workers = props.shelfActions.populate().item;

  const thumbnails = workers.map((item, i) => {
    return (
      <li
        onClick={props.cartActions.addToCart.bind(this, item)}
        key={i} className="col-sm-1 list-item">
        <img
          className="img img-responsive"
          src={item.src}
          alt={item.name} />
      </li>
    )
  })

  const top = props.topThreeActions.populate().item;

  const topThree = top.map((item, i) => {
    return (
      <li
        onClick={props.cartActions.addToCart.bind(this, item)}
        key={i} className="col-sm-4 list-item-big">
        <img
          className="img img-responsive"
          src={item.src}
          alt={item.name} />
      </li>
    )
  })

  return (
    <div className="container-fluid">
      <div className="row">
        <ul className="list-top">
          {topThree}
        </ul>
      </div>
      <div className="row">
        <ul className="list">
          {thumbnails}
        </ul>
      </div>
    </div>
  )
}



function mapDispatchToProps(dispatch) {
  return {
    cartActions: bindActionCreators(CartActions, dispatch),
    shelfActions: bindActionCreators(ShelfActions, dispatch),
    topThreeActions: bindActionCreators(TopThreeActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Home);