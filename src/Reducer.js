export const initialState = {
  menu: false
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'OPEN_MENU':
      return {
        ...state,
        menu: action.item
      }
    default:
      return state;
  }
}
      
      
    
export default reducer;