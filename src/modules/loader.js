export const SHOW_LOADER = 'loader/SHOW_LOADER';
export const HIDE_LOADER = 'loader/HIDE_LOADER';

const initialState = {
  loaderShow: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        loaderShow: true
      };

    case HIDE_LOADER:
      return {
        ...state,
        loaderShow: false
      };

    default:
      return state
  }
}

export const showLoader = () => {
  return dispatch => {
    dispatch({
      type: SHOW_LOADER
    });
  };
};


export const hideLoader = () => {
  return dispatch => {
    dispatch({
      type: HIDE_LOADER
    })
  }
};
