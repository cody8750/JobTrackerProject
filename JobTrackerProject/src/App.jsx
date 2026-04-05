import { AuthProvider } from "./context/AuthContext";
import AppRouter from "./components/routing/AppRouter";
import setAuthToken from "./utils/setAuthToken";
import { useEffect } from "react";

//setAuthToken();

function App() {
  useEffect(() => {
    setAuthToken(); // 🔥 VERY IMPORTANT
  }, []);
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;



// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
      
//     </>
//   )
// }

// export default App
