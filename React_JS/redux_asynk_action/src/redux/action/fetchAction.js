import {getGallery} from '../../Axios/api'

export function addImg (data) {
  return {
    type: 'DOWNLOADER', // Буде кричати команду ПЛЮС!
    data,
  }
}

export const fetchData = () => dispatch => {
  return getGallery()
  .then(data => dispatch(addImg(data.data.hits)))
  .catch(err => console.log(err))
}


