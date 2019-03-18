import Axios from 'axios';

export function fetchGet(data) {
  return{
    type: 'fetchGet',
    payload: data,
  }
} 

export const fetchData = (input) => dispatch => {
  return Axios.get(`https://api.openweathermap.org/data/2.5/weather?APPID=2cf8416fa466735149c56e0e32345cdc&q=${input || 'Kiev'}&units=metric`)
  .then(res => dispatch(fetchGet(res.data)))
  .catch(err => console.error(err))
}
 