export default function films(state = [], action) {
  switch(action.type){
    case 'GET': 
    return [...action.data];
    default:
     return state;
  }
}

