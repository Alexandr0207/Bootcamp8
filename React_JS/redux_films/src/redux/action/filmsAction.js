import {getFilms} from '../../Axios/api';

export function films (data) {
  return {
    type: 'GET',
    data,
  }
}

export const fetchData =() => dispatch => {
  return getFilms()
  .then (res => dispatch(films(res.data)))
  }



// .then(res => {
//   let posts = res[0].data;
//   let comments = res[1].data;
//   let users = res[2].data;
//   return posts.map(el => ({
//       title: el.title,
//       body: el.body,
//       quantityComments: (comments.filter(coment => coment.postId === el.id)).length,
//       author: users.find(item => item.id === el.userId).name,
//   }))