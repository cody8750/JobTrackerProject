import { useState } from "react";

const JobForm = ({ onSubmit, selectedJob }) => {
  const [formData, setFormData] = useState(
    selectedJob || {
      title: "",
      company: "",
      location: "",
      jobType: "Full-Time",
      salary: "",
      status: "Applied",
    }
  );

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow mb-6 grid gap-3"
    >
      <h3 className="font-bold text-lg">
        {selectedJob ? "Edit Job" : "Add Job"}
      </h3>

      <input name="title" placeholder="Title" onChange={onChange} className="border p-2 rounded" defaultValue={formData.title} />
      <input name="company" placeholder="Company" onChange={onChange} className="border p-2 rounded" defaultValue={formData.company} />
      <input name="location" placeholder="Location" onChange={onChange} className="border p-2 rounded" defaultValue={formData.location} />

      <select name="jobType" onChange={onChange} className="border p-2 rounded" defaultValue={formData.jobType}>
        <option>Full-Time</option>
        <option>Part-Time</option>
        <option>Internship</option>
        <option>Remote</option>
      </select>

      <input name="salary" placeholder="Salary" onChange={onChange} className="border p-2 rounded" defaultValue={formData.salary} />

      <select name="status" onChange={onChange} className="border p-2 rounded" defaultValue={formData.status}>
        <option>Applied</option>
        <option>Interview</option>
        <option>Rejected</option>
      </select>

      <button className="bg-blue-500 text-white p-2 rounded">
        {selectedJob ? "Update Job" : "Add Job"}
      </button>
    </form>
  );
};

export default JobForm;