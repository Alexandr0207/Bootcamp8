export default function count(state = 0, action) {
  switch(action.type){
    case 'plus': 
    return state + action.data;
    case 'minus':
    return state -1;
    case 'reload':
    return 0;
    default:
     return state;
  }
}

