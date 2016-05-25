export const CHANGE_VALUE = 'CHANGE_VALUE';

export const changeValue = (event) => {
  return {
    type: CHANGE_VALUE,
    newValue: event.target.value,
  }
}
