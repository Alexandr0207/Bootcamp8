export default function counter(state = 0, action){
  switch(action.type){
    case 'plus':
    return state + 1;
    case 'minus':
    return state - 1;
    case 'reset':
    return 0
    default: 
      return state;
  }
}