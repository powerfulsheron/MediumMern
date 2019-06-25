export function fetchMovies(dispatch) {
  fetch("http://localhost:3000/movies", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer "
    },
    mode: "cors"
  })
    .then(response => {
      if (response.status !== 200) {
        throw new Error("Unable to fetch");
      } else {
        return response.json();
      }
    })
    .then(data => {
      dispatch({
        type: "FETCH_MOVIES_RECEIVED",
        playload: {
          movies: data
        }
      });
      this.setState({
        movies: data,
        received: true
      });
    })
    .catch(() => console.log("Error"));

  return {
    type: "FETCH_MOVIES_REQUESTED"
  };
}
