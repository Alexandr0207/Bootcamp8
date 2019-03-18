export default function loading(state = false, action){
  switch(action.type){
    case 'Loading':
    return !state;
    default: 
      return state;
  }
}