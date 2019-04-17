const logReducer = (state = { logs:["Default value"] }, action) => {
    switch (action.type) {
      case 'ADD_LOG_ENTRY':
        return {
            logs: [...state.logs, action.text]
          };
      default:
        return {
            logs: ["Default value"]
          };
    }
  }
  
  export default logReducer