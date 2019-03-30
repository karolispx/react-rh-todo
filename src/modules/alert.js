export const SHOW_ALERT = 'alert/SHOW_ALERT';
export const HIDE_ALERT = 'alert/HIDE_ALERT';

const initialState = {
  alertShow: false,
  style: null,
  message: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        alertShow: true,
        style: action.style,
        message: action.message
      };

    case HIDE_ALERT:
      return {
        ...state,
        alertShow: false,
        style: null,
        message: null
      };

    default:
      return state
  }
}

export const showAlert = (style, message) => {
  return dispatch => {
    dispatch({
      type: SHOW_ALERT,
      style: style,
      message: message
    });
  }
};

export const hideAlert = () => {
  return dispatch => {
    dispatch({
      type: HIDE_ALERT
    })
  }
};
