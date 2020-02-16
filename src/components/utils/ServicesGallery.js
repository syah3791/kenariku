import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/gallery"
});
const apimg = axios.create({
  baseURL: "http://localhost:5000"
});

export const insertGallery = payload => api.post(`/add`, payload);
export const getAllBirds = () => api.get(`/getburung`);
export const getAllGallery = () => api.get(`/getgallery`);
export const deleteGById = id => api.delete(`/delete/${id}`);
export const getBirdById = id => api.get(`/find/${id}`);
export const upload = payload => apimg.post(`/upload`, payload);

const apis = {
  insertGallery,
  getAllBirds,
  getAllGallery,
  deleteGById,
  getBirdById,
  upload
};

export default apis;
