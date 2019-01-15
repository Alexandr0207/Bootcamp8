export const plus = (number) => {
  return {
    type: 'plus', // Буде кричати команду ПЛЮС!
    data: number,
  }
}

export const minus = (number) => ({
    type: 'minus',
    data: number,
})

export const reload = () => {
  return{
    type: 'reload'
  }
}