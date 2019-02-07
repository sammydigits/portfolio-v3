import axios from "axios";

//catch axios errors
axios.interceptors.response.use(null, error => {
  //if the error is within the 400 range, its expected
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  //if error is not expected
  if (!expectedError) {
    console.log("Error", error);
    alert("An unexpected error occured");
  }

  //return a rejected promise no matter what happens
  return Promise.reject(error);
});

export default {
  get: axios.get
};
