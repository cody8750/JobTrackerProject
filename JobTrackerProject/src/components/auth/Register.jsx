import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    await register(formData);
    //navigate("/login");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={onSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-80"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Register</h2>

        <input
          name="name"
          placeholder="Name"
          onChange={onChange}
          className="w-full p-2 mb-3 border rounded"
        />

        <input
          name="email"
          placeholder="Email"
          onChange={onChange}
          className="w-full p-2 mb-3 border rounded"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={onChange}
          className="w-full p-2 mb-3 border rounded"
        />

        <button className="w-full bg-blue-500 text-white p-2 rounded">
          Register
        </button>
        <p className="text-sm mt-3 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;