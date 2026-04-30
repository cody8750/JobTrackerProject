import { useState, useEffect } from "react";

const EMPTY_FORM = {
  title: "",
  company: "",
  location: "",
  jobType: "Full-Time",
  salary: "",
  status: "Applied",
};

const JobForm = ({ onSubmit, selectedJob }) => {
  const [formData, setFormData] = useState(EMPTY_FORM);

  // Sync form when editing a job
  useEffect(() => {
    if (selectedJob) {
      setFormData({
        title: selectedJob.title || "",
        company: selectedJob.company || "",
        location: selectedJob.location || "",
        jobType: selectedJob.jobType || "Full-Time",
        salary: selectedJob.salary || "",
        status: selectedJob.status || "Applied",
      });
    } else {
      setFormData(EMPTY_FORM);
    }
  }, [selectedJob]);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    if (!selectedJob) setFormData(EMPTY_FORM); // clear form after add
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-xl shadow mb-6 grid gap-3"
    >
      <h3 className="font-bold text-lg">
        {selectedJob ? "Edit Job" : "Add Job"}
      </h3>

      <input
        name="title"
        placeholder="Job Title *"
        value={formData.title}
        onChange={onChange}
        className="border p-2 rounded"
        required
      />
      <input
        name="company"
        placeholder="Company"
        value={formData.company}
        onChange={onChange}
        className="border p-2 rounded"
      />
      <input
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={onChange}
        className="border p-2 rounded"
      />

      <select
        name="jobType"
        value={formData.jobType}
        onChange={onChange}
        className="border p-2 rounded"
      >
        <option>Full-Time</option>
        <option>Part-Time</option>
        <option>Internship</option>
        <option>Remote</option>
      </select>

      <input
        name="salary"
        placeholder="Salary"
        type="number"
        value={formData.salary}
        onChange={onChange}
        className="border p-2 rounded"
      />

      {/* Status options match backend enum */}
      <select
        name="status"
        value={formData.status}
        onChange={onChange}
        className="border p-2 rounded"
      >
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
        <option>Withdrawn</option>
        <option>Ghosted</option>
      </select>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
      >
        {selectedJob ? "Update Job" : "Add Job"}
      </button>

      {selectedJob && (
        <button
          type="button"
          onClick={() => onSubmit(null)}
          className="bg-gray-300 hover:bg-gray-400 p-2 rounded text-sm"
        >
          Cancel Edit
        </button>
      )}
    </form>
  );
};

export default JobForm;


// import { useState } from "react";

// const JobForm = ({ onSubmit, selectedJob }) => {
//   const [formData, setFormData] = useState(
//     selectedJob || {
//       title: "",
//       company: "",
//       location: "",
//       jobType: "Full-Time",
//       salary: "",
//       status: "Applied",
//     }
//   );

//   const onChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-white p-4 rounded shadow mb-6 grid gap-3"
//     >
//       <h3 className="font-bold text-lg">
//         {selectedJob ? "Edit Job" : "Add Job"}
//       </h3>

//       <input name="title" placeholder="Title" onChange={onChange} className="border p-2 rounded" defaultValue={formData.title} />
//       <input name="company" placeholder="Company" onChange={onChange} className="border p-2 rounded" defaultValue={formData.company} />
//       <input name="location" placeholder="Location" onChange={onChange} className="border p-2 rounded" defaultValue={formData.location} />

//       <select name="jobType" onChange={onChange} className="border p-2 rounded" defaultValue={formData.jobType}>
//         <option>Full-Time</option>
//         <option>Part-Time</option>
//         <option>Internship</option>
//         <option>Remote</option>
//       </select>

//       <input name="salary" placeholder="Salary" onChange={onChange} className="border p-2 rounded" defaultValue={formData.salary} />

//       <select name="status" onChange={onChange} className="border p-2 rounded" defaultValue={formData.status}>
//         <option>Applied</option>
//         <option>Interview</option>
//         <option>Rejected</option>
//       </select>

//       <button className="bg-blue-500 text-white p-2 rounded">
//         {selectedJob ? "Update Job" : "Add Job"}
//       </button>
//     </form>
//   );
// };

// export default JobForm;