const intitialState = {
  counter: 0,
}


const reducer = (state = intitialState, action) => {
 if (action.type === "INC_COUNTER") {
   return {...state, counter: state.counter + 1};
 }
 if (action.type === "DEC_COUNTER") {
   return {...state, counter: state.counter - 1};
 }
 if (action.type === "ADD_COUNTER+") {
   return {...state, counter: state.counter + action.value};
 }
 if (action.type === "SUB_COUNTER-") {
   return {...state, counter: state.counter - action.value}
 }
  return state;
};



export default reducer;