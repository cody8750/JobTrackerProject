import API from "../config/api";

const setAuthToken = () => {
  const token = localStorage.getItem("token");

  if (token) {
    API.defaults.headers.common["Authorization"] = token;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;

// import API from "../config/api";

// const setAuthToken = () => {
//   const token = localStorage.getItem("token");

//   if (token) {
//     API.defaults.headers.common["Authorization"] = token;
//   } else {
//     delete API.defaults.headers.common["Authorization"];
//   }
// };

// export default setAuthToken;