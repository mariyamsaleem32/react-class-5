export const reducer = (state, action) => {
  
  switch (action.type) {
    case "ADD": {
      return {...state, myNum : state.myNum+1}
    }
    case "SUB": {
      return {...state, myNum : state.myNum-1}
    }
    case "CLEAR": {
      return {...state, myNum : state.myNum=0}
    }
    case "CHANGE_THEME": {
      return { ...state, darkTheme: !state.darkTheme }
    }
    default: {
     return state
    }
  }
  
}
