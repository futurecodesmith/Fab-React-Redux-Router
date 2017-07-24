export const addToCart = (item) => {
  return {
    type: 'add',
    item
  };
}

export const imageFetchError = (bool) =>  {
  return {
    type: 'IMAGE_FETCH_ERROR',
    hasErrored: bool,
  }
}

export const imagesLoading = (bool) => {
  return {
    type: 'IMAGES_LOADING',
    isLoading: bool,
  }
}

export const imageFetchSuccess = (images) => {
  return {
    type: 'IMAGES_FETCH_SUCCESS',
    images,
  }
}

export const fetchImages = (url) => {
  return (dispatch) => {
    dispatch(imagesLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          // throw Error(response.statusText);
          console.log('error, link no good')
        }
        dispatch(imagesLoading(false));
        return response;
      })
      .then((response) => response.json())
      .then((images) => dispatch(imageFetchSuccess(images)))
      .catch(() => dispatch(imageFetchError(true)));
  }
}