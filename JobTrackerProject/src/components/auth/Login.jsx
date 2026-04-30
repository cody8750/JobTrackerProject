import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Login = () => {
  const { login, authError } = useContext(AuthContext);

  const [formData, setFormData] = useState({ email: "", password: "" });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    await login(formData);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={onSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-80"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

        {authError && (
          <p className="text-red-500 text-sm mb-3 text-center">{authError}</p>
        )}

        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={onChange}
          className="w-full p-2 mb-3 border rounded"
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={onChange}
          className="w-full p-2 mb-3 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Login
        </button>

        <p className="text-sm mt-3 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;


// import { useState, useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import { useNavigate, Link } from "react-router-dom";

// const Login = () => {
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const onChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     await login(formData);
//     //navigate("/");
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <form
//         onSubmit={onSubmit}
//         className="bg-white p-6 rounded-xl shadow-md w-80"
//       >
//         <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

//         <input
//           name="email"
//           placeholder="Email"
//           onChange={onChange}
//           className="w-full p-2 mb-3 border rounded"
//         />

//         <input
//           name="password"
//           type="password"
//           placeholder="Password"
//           onChange={onChange}
//           className="w-full p-2 mb-3 border rounded"
//         />

//         <button className="w-full bg-green-500 text-white p-2 rounded">
//           Login
//         </button>
//         <p className="text-sm mt-3 text-center">
//           Don't have an account?{" "}
//           <Link to="/register" className="text-blue-500">
//             Register
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Login;