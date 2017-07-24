import React, { Component } from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux';
import { imageFetchError, imagesLoading, imageFetchSuccess, fetchImages } from '../actions/shelfAction';
import ImageLinks from './ImageLinks';


class Community extends Component {

  render() {
    return (
      <div className="container-fluid fade-in">
        <div className="row">
          <Navbar />
          <ImageLinks 
              images={this.props.images} 
              hasError={this.props.hasErrored}
              isLoading={this.props.isLoading}
          />
          <div className="col-sm-12">
            <h1 className="header center h1-header">Community</h1>
          </div>
          <div className=" text col-sm-8 col-sm-offset-2 columns-2">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt voluptatem incidunt aliquam veritatis, deserunt quisquam magni quae quasi tenetur, nemo quia optio molestiae amet soluta consequatur blanditiis aut. Error fugit ipsam nesciunt earum amet natus saepe minus omnis dignissimos autem placeat, numquam iure totam eaque dolores necessitatibus laborum maxime labore voluptates vel incidunt fuga assumenda doloribus aspernatur?  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur fugiat, odit adipisci quidem quaerat numquam ipsum repellat id dolorem similique perspiciatis omnis, molestias rem! Totam praesentium nobis et sit, repellat porro quos numquam assumenda ullam harum. Quod, praesentium id, earum cum inventore voluptates magni nulla. Error, vero, animi dolorum adipisci velit eveniet quisquam maiores fugiat.</p>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.props.getImages('https://unsplash.it/list');
  }

}

function mapStateToProps(state) {
  return {
    images: state.images,
    hasErrored: state.imageFetchError,
    isLoading: state.imagesLoading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getImages: (url) => dispatch(fetchImages(url))
  }
}


export default connect(
  mapStateToProps, mapDispatchToProps
)(Community);