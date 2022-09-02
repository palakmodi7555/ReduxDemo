const initialState = {
    counta: 0,
  };
  export default (state = initialState, action) => {
    switch (action.type) {
   
      case 'COUNT_INCRESE':
        console.log("inside reducer");
        return {
          
          ...state,
          counta: state.counta + 1,
        };
      case 'COUNT_DECRESE':
        return {
          ...state,
          counta: state.counta - 1,
        };
      default:
        return state;
    }
  };
