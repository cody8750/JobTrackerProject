import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    company: { type: String },
    location: { type: String },
    jobType: {
      type: String,
      enum: ["Full-Time", "Part-Time", "Internship", "Remote"],
      default: "Full-Time",
    },
    salary: { type: Number },
    appliedDate: { type: Date, default: Date.now },
    jobLink: {
      type: String,
      match: [/^https?:\/\/.+/, "Please use a valid URL"],
    },
    status: {
      type: String,
      enum: ["Applied", "Interview", "Offer", "Rejected", "Withdrawn", "Ghosted"],
      default: "Applied",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", jobSchema);

// import mongoose from "mongoose";

// const jobSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//     },
//     company: {
//       type: String,
//     },
//     location: {
//       type: String,
//     },

//     // ✅ NEW FIELDS
//     jobType: {
//       type: String,
//       enum: ["Full-Time", "Part-Time", "Internship", "Remote"],
//       default: "Full-Time",
//     },
//     salary: {
//       type: Number,
//     },
//     appliedDate: {
//       type: Date,
//       default: Date.now,
//     },
//     jobLink: {
//       type: String,
//       match: [/^https?:\/\/.+/, "Please use a valid URL"],
//     },

//     status: {
//       type: String,
//       enum: ["Applied", "Interview", "Rejected"],
//       default: "Applied",
//     },
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//     },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Job", jobSchema);