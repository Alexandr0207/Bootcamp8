export default function count(state = 0, action) {
  switch(action.type){
    case 'plus': 
    return state + action.data;
    default:
     return state;
  }
}

