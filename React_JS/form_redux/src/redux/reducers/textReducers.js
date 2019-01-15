export default function text(state = '', action) {
  switch(action.type){
    case 'text': 
    return action.data;
    default:
     return state;
  }
}

