import axios from 'axios'

const API = 'http://localhost:3001/films'
export function getFilms(){
  return axios.get(API)
}