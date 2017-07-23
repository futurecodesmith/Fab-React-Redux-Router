
export default (state = {}, payload) => {
  let newState;
  switch(payload.type) {
    case 'HANDLE_SUBMIT':
      return {...state, name: payload.name, password: payload.password}
    
    case 'HANDLE_CHANGE':
      newState = {...state, [payload.e.target.name] : payload.e.target.value}
      console.log('ON CHANGE', state.name, state.password);
      return newState;

    default: 
      return state;
  }
}