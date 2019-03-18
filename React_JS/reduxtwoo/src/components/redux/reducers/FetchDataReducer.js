const startState = {
  data: [],
  loading: false,
}

export default function fetchData(state = startState, action){
  switch(action.type){
    case 'fetchGet':
    return {
      data: action.payload,
      loading: true
    }
    default: 
      return state;
  }
}