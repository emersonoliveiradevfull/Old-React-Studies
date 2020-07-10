export const incrementNumberAction = (number) => {
  number++
  return {
    type: 'INCREMENT_NUMBER',
    number: number
  }
}