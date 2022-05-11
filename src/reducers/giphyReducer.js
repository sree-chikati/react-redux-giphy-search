export default function giphyReducer(
  state = { giphy: [], shouldFetch: true}, action) {
  switch (action.type) {
    case "FETCH_GIPHY": {
      return {
        ...state,
        shouldFetch: false,
        giphy: action.payload.giphyData
      };
    }

    case "CHANGE_USERINPUT": {
      return {
        ...state,
        userInput: action.payload
      };
    }

    case "CHANGE_INITIALINPUT": {
      return {
        ...state,
        initialInput: action.payload
      };
    }

    default:
      return state;
  }
}
