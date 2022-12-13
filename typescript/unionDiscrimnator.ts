export interface SuccessResponse {
  status: "ok";
  stargazers: 23;
}

interface ErrorResponse {
  status: "error";
}

type Response = ErrorResponse | SuccessResponse;

function handleResponse(response: Response) {
  if (response.status === "ok") {
    console.log(response.stargazers);
  } else {
    console.log(response.status);
    // The following throws an error,
    // because ErrorResponse doesn't have stargazers
    // console.log(response.stargazers);
  }
}
