import axios from "axios";

const baseURL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000/api"
    : "https://jobtrackerproject-q72g.onrender.com/api";

const API = axios.create({
  baseURL,
});

export default API;

// import axios from "axios";

// const API = axios.create({
//   baseURL: "https://jobtrackerproject-q72g.onrender.com/api",
//   //baseURL: "http://localhost:5000/api",
// });

// export default API;