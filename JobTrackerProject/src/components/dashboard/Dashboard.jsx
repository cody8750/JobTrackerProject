import { useEffect, useState, useContext } from "react";
import {
  getJobs,
  deleteJob,
  createJob,
  updateJob,
} from "../../utils/jobApi";
import { AuthContext } from "../../context/AuthContext";
import JobForm from "../jobs/JobForm";

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [loading, setLoading] = useState(true);

  const { logout } = useContext(AuthContext);

  useEffect(() => {
    fetchJobs();
  }, []);

  // 🚀 Fetch Jobs
  const fetchJobs = async () => {
    try {
      setLoading(true);
      const data = await getJobs();
      console.log("Jobs:", data); // debug
      setJobs(data);
    } catch (error) {
      console.error("Error fetching jobs:", error);

      // 🔥 Handle 401 error
      if (error.response?.status === 401) {
        alert("Session expired. Please login again.");
        logout();
      }
    } finally {
      setLoading(false);
    }
  };

  // 🚀 Add / Update Job
  const handleSubmit = async (formData) => {
    try {
      if (selectedJob) {
        await updateJob(selectedJob._id, formData);
        setSelectedJob(null);
      } else {
        await createJob(formData);
      }
      fetchJobs();
    } catch (error) {
      console.error("Error saving job:", error);
    }
  };

  // 🚀 Delete Job
  const handleDelete = async (id) => {
    try {
      await deleteJob(id);
      fetchJobs();
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  // 🚀 Edit Job
  const handleEdit = (job) => {
    setSelectedJob(job);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* 🔥 Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">My Jobs</h2>

        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* 🔥 Job Form */}
      <JobForm onSubmit={handleSubmit} selectedJob={selectedJob} />

      {/* 🔥 Loading */}
      {loading ? (
        <p className="text-gray-500 mt-4">Loading jobs...</p>
      ) : jobs.length === 0 ? (
        <p className="text-gray-500 mt-4">No jobs added yet</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              {/* Title */}
              <h3 className="text-lg font-bold">{job.title}</h3>

              {/* Company */}
              <p className="text-gray-600">{job.company}</p>

              {/* Location */}
              <p className="text-sm text-gray-500">{job.location}</p>

              {/* Job Info */}
              <div className="flex justify-between mt-2 text-sm">
                <span className="text-blue-500">{job.jobType}</span>
                <span className="text-green-600 font-semibold">
                  ₹{job.salary || "N/A"}
                </span>
              </div>

              {/* Status Dropdown */}
              <select
                value={job.status}
                onChange={async (e) => {
                  try {
                    await updateJob(job._id, {
                      status: e.target.value,
                    });
                    fetchJobs();
                  } catch (error) {
                    console.error("Error updating status:", error);
                  }
                }}
                className="mt-3 border p-2 rounded w-full"
              >
                <option>Applied</option>
                <option>Interview</option>
                <option>Rejected</option>
              </select>

              {/* Buttons */}
              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => handleEdit(job)}
                  className="bg-yellow-400 hover:bg-yellow-500 px-3 py-1 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(job._id)}
                  className="bg-red-400 hover:bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;