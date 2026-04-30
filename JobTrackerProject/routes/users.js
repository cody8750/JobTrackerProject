import express from "express";
import auth from "../middlewares/auth.js";
import User from "../models/user.js";

const router = express.Router();

router.get("/me", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ msg: "User not found" });
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server Error" });
  }
});

export default router;

// import express from "express";
// import auth from "../middlewares/auth.js";
// import User from "../models/user.js";

// const router = express.Router();

// router.get("/me", auth, async (req, res) => {
//   const user = await User.findById(req.user.id).select("-password");
//   res.json(user);
// });

// export default router;