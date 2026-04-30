import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import AppRouter from "./components/routing/AppRouter";
import setAuthToken from "./utils/setAuthToken";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    setAuthToken(); // restore token from localStorage on page reload
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;


// import { BrowserRouter } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext";
// import AppRouter from "./components/routing/AppRouter";
// import setAuthToken from "./utils/setAuthToken";
// import { useEffect } from "react";

// function App() {
//   useEffect(() => {
//     setAuthToken(); // set token on reload
//   }, []);

//   return (
//     <BrowserRouter>
//       <AuthProvider>
//         <AppRouter />
//       </AuthProvider>
//     </BrowserRouter>
//   );
// }

// export default App;

// import { AuthProvider } from "./context/AuthContext";
// import AppRouter from "./components/routing/AppRouter";
// import setAuthToken from "./utils/setAuthToken";
// import { useEffect } from "react";

// //setAuthToken();

// function App() {
//   useEffect(() => {
//     setAuthToken(); // 🔥 VERY IMPORTANT
//   }, []);
//   return (
//     <AuthProvider>
//       <AppRouter />
//     </AuthProvider>
//   );
// }

// export default App;