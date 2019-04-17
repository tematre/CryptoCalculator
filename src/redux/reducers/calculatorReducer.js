const calculatorReducer = (state = { logs:[] }, action) => {
    switch (action.type) {
      case 'RESULT_RETURNED':
        return {
            logs: [...state.logs, action.text]
          };
      default:
        return {
            logs: []
          };
    }
  }
  
  export default calculatorReducer