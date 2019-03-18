import Axios from 'axios';

export function fetchGet(payload) {
  return{
    type: 'fetchGet',
    payload: payload,
  }
} 

export const fetchData = () => dispatch => {
  return Axios.get('https://api.openweathermap.org/data/2.5/weather?APPID=c60dd86e9ebff9397278842665cf0376&q=Kiev&units=metric')
  .then(res => dispatch(fetchGet(res.data)))
  .catch(err => console.error(err))
}
 