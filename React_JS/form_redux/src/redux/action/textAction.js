export const text = (e) => {
  return {
    type: 'text', // Буде кричати команду ПЛЮС!
    data: e.target.value
  }
}



// export const minus = (number) => ({
//     type: 'minus',
//     data: number,
// })

// export const reload = () => {
//   return{
//     type: 'reload'
//   }
// }