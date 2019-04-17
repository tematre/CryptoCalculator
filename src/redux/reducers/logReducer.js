const logReducer = (state = { logs:[] }, action) => {
    switch (action.type) {
      case 'ADD_LOG_ENTRY':
        return {
            logs: [...state.logs, action.text]
          };
      default:
        return {
            logs: []
          };
    }
  }
  
  export default logReducer