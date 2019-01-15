import uuidv4 from 'uuid/v4';

export default function tasks ( state = [], action) {
  switch(action.type){
    case 'createTasks':
    const item = {
      id: uuidv4(),
      text: action.data, // Путь до payload або data
      complete: false,
      edit: false,
    };
    return [item, ...state]
    default: 
    return state
  }
}