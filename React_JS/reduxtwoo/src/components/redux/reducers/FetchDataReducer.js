export default function fetchData(state = [], action){
  switch(action.type){
    case 'fetchGet':
    return action.payload;
    default: 
      return state;
  }
}