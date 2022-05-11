// Fetch data
export function fetchGiphy(userInput) {
    return function(dispatch) {
      const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
      const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${userInput}&limit=8&lang=en`;
      fetch(`${URL}`)
        .then(res => res.json())
        .then(json => {
          const giphyData = json.data
          const giphyId = json.meta.response_id
          dispatch({ type: "FETCH_GIPHY",payload: { giphyData, giphyId },});
        })
    };
  }
  
  // Update when user input changes
  export function changeUserInput(value) {
    return function(dispatch) {
      dispatch({ type: "CHANGE_USERINPUT", payload: value });
    };
  }
  
  // Update initally passed input
  export function changeInitialInput(value) {
    return function(dispatch) {
      dispatch({ type: "CHANGE_INITIALINPUT", payload: value });
    };
  }