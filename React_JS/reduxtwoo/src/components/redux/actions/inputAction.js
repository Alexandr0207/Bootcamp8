import Axios from "axios";

export const input = (e) => {
  return{
    type: 'input',
    payload: e.target.value
  }
} 

