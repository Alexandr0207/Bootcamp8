export const plus = (number) => {
  return{
    type: 'plus',
    payload: number
  }
} 

export const minus = (number) => {
  return{
    type: 'minus',
    payload: number
  }
} 

export const reset = (number) => {
  return{
    type: 'reset',
    payload: number
  }
} 
