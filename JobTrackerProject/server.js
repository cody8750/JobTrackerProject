import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";
import jobRoutes from "./routes/jobs.js";
import userRoutes from "./routes/users.js";

dotenv.config();
connectDB();

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://job-tracker-project-d4xs.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // allow Postman / curl
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("API running...");
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ message: err.message || "Server Error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import connectDB from "./config/db.js";

// import authRoutes from "./routes/auth.js";
// import jobRoutes from "./routes/jobs.js";
// import userRoutes from "./routes/users.js";

// // Load env variables
// dotenv.config();

// // Connect DB
// connectDB();

// const app = express();

// // ✅ CORS CONFIG (FINAL CLEAN VERSION)
// const allowedOrigins = [
//   "http://localhost:5173",
//   "https://job-tracker-project-d4xs.vercel.app",
// ];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       // allow Postman or server-to-server requests
//       if (!origin) return callback(null, true);

//       if (allowedOrigins.includes(origin)) {
//         return callback(null, true);
//       } else {
//         return callback(new Error("Not allowed by CORS"));
//       }
//     },
//     credentials: true,
//   })
// );

// // ✅ Middleware
// app.use(express.json());

// // ✅ Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/jobs", jobRoutes);
// app.use("/api/users", userRoutes);

// // ✅ Root Route (for Render health check)
// app.get("/", (req, res) => {
//   res.send("API running...");
// });

// // ✅ 404 Handler (optional but good)
// app.use((req, res) => {
//   res.status(404).json({ message: "Route not found" });
// });

// // ✅ Global Error Handler (important)
// app.use((err, req, res, next) => {
//   console.error(err.message);
//   res.status(500).json({ message: err.message || "Server Error" });
// });

// // ✅ Server Start
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });

// // import express from "express";
// // import dotenv from "dotenv";
// // import cors from "cors";
// // import connectDB from "./config/db.js";

// // import authRoutes from "./routes/auth.js";
// // import jobRoutes from "./routes/jobs.js";
// // import userRoutes from "./routes/users.js";

// // dotenv.config();
// // connectDB();

// // const app = express();

// // // Middleware
// // app.use(express.json());
// // app.use(cors());

// // // Routes
// // app.use("/api/auth", authRoutes);
// // app.use("/api/jobs", jobRoutes);
// // app.use("/api/users", userRoutes);

// // app.get("/", (req, res) => {
// //   res.send("API Running...");
// // });

// // const PORT = process.env.PORT || 5000;

// // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));