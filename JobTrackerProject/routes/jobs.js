import express from "express";
import Job from "../models/job.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

// CREATE JOB
router.post("/", auth, async (req, res) => {
  try {
    const job = await Job.create({
      ...req.body,
      user: req.user.id,
    });
    res.json(job);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// GET ALL JOBS
router.get("/", auth, async (req, res) => {
  try {
    const jobs = await Job.find({ user: req.user.id });
    res.json(jobs);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// UPDATE JOB
router.put("/:id", auth, async (req, res) => {
  try {
    const updatedJob = await Job.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true }
    );

    if (!updatedJob) {
      return res.status(404).json({ msg: "Job not found" });
    }

    res.json(updatedJob);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// DELETE JOB
router.delete("/:id", auth, async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);
    res.json({ msg: "Job deleted" });
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

export default router;