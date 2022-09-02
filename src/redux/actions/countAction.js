// redux/actions/countAction.js
export const increment = () => {
  console.log("inside action file");
    return {
      type: 'COUNT_INCRESE',
    };
  };
   
  export const decrement = () => {
    return {
      type: 'COUNT_DECRESE',
    };
  };