
export default (state = [], payload) => {
  switch(payload.type) {
    case 'HANDLE_SUBMIT':
     console.log('REDUCER', state.name, state.password);
     payload.e.preventDefault();
     state.name = '';
     state.password = '';
     return state;
    
    case 'HANDLE_CHANGE':
      state[payload.e.target.name] = payload.e.target.value;
      console.log('ON CHANGE', state.name, state.password);
      return state;

    default: 
      return state;
  }
}