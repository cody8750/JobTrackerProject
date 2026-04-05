import express from "express";
import auth from "../middlewares/auth.js";
import User from "../models/user.js";

const router = express.Router();

router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
});

export default router;