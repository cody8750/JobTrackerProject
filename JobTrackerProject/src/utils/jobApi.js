import API from "../config/api";

//GET JOBS
export const getJobs = async () => {
  const res = await API.get("/jobs");
  return res.data;
};

//CREATE JOB
export const createJob = async (data) => {
  const res = await API.post("/jobs", data);
  return res.data;
};

//UPDATE JOB
export const updateJob = async (id, data) => {
  const res = await API.put(`/jobs/${id}`, data);
  return res.data;
};

//DELETE JOB
export const deleteJob = async (id) => {
  await API.delete(`/jobs/${id}`);
};