import express from "express";
import Job from "../models/job.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

// CREATE JOB
router.post("/", auth, async (req, res) => {
  try {
    const job = await Job.create({ ...req.body, user: req.user.id });
    res.json(job);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server Error" });
  }
});

// GET ALL JOBS
router.get("/", auth, async (req, res) => {
  try {
    const jobs = await Job.find({ user: req.user.id });
    res.json(jobs);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server Error" });
  }
});

// UPDATE JOB — findOneAndUpdate already enforces ownership via user: req.user.id
router.put("/:id", auth, async (req, res) => {
  try {
    const updatedJob = await Job.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedJob) {
      return res.status(404).json({ msg: "Job not found or not authorized" });
    }

    res.json(updatedJob);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server Error" });
  }
});

// DELETE JOB — ownership check added
router.delete("/:id", auth, async (req, res) => {
  try {
    const job = await Job.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!job) {
      return res.status(404).json({ msg: "Job not found or not authorized" });
    }

    res.json({ msg: "Job deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server Error" });
  }
});

export default router;

// import express from "express";
// import Job from "../models/job.js";
// import auth from "../middlewares/auth.js";

// const router = express.Router();

// // CREATE JOB
// router.post("/", auth, async (req, res) => {
//   try {
//     const job = await Job.create({
//       ...req.body,
//       user: req.user.id,
//     });
//     res.json(job);
//   } catch (err) {
//     res.status(500).send("Server Error");
//   }
// });

// // GET ALL JOBS
// router.get("/", auth, async (req, res) => {
//   try {
//     const jobs = await Job.find({ user: req.user.id });
//     res.json(jobs);
//   } catch (err) {
//     res.status(500).send("Server Error");
//   }
// });

// // UPDATE JOB
// router.put("/:id", auth, async (req, res) => {
//   try {
//     const updatedJob = await Job.findOneAndUpdate(
//       { _id: req.params.id, user: req.user.id },
//       req.body,
//       { new: true }
//     );

//     if (!updatedJob) {
//       return res.status(404).json({ msg: "Job not found" });
//     }

//     res.json(updatedJob);
//   } catch (err) {
//     res.status(500).send("Server Error");
//   }
// });

// // DELETE JOB
// router.delete("/:id", auth, async (req, res) => {
//   try {
//     await Job.findByIdAndDelete(req.params.id);
//     res.json({ msg: "Job deleted" });
//   } catch (err) {
//     res.status(500).send("Server Error");
//   }
// });

// export default router;