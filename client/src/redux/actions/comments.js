const BASE_URL = "http://localhost:3000/api/v1";

export function saveComment(post, comment, dispatch) {
  const TOKEN = window.localStorage.getItem("token");
  const DECODED_TOKEN = TOKEN ? jwtDecoder(TOKEN) : "";

  const options = {
    method: "POST",
    headers: {
      Authorization: "Bearer " + TOKEN,
      "Content-Type": "application/json"
    },
    mode: "cors",
    body: JSON.stringify({ _idpost: post._id, content: comment })
  };

  fetch(BASE_URL + "/comments", options).then(response => {
    switch (response.status) {
      case 201:
        return response.json();
      case 400:
        return Promise.reject("Bad request");
      default:
        return Promise.reject("Server error");
    }
  });

  return { type: "APP_COMMENT_SAVE_REQUESTED" };
}
