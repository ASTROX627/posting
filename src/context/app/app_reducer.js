const appReducer = (state, action) => {
  switch(action.type){
    case "TOGGLE_FORM":{
      return{
        ...state,
        showForm : !state.showForm
      }
    }
  }
}

export default appReducer