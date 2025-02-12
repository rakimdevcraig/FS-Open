import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data).catch((err) => err);
};

const create = (nameObject) => {
  const request = axios.post(baseUrl, nameObject);
  return request.then((response) => response.data).catch((err) => err);
};

const update = (id, nameObject) => {
  const request = axios.put(`${baseUrl}/${id}`, nameObject);
  return request.then((response) => response.data).catch((err) => err);
};

const remove = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data).catch((err) => err);
};

export default {
  getAll: getAll,
  create: create,
  update: update,
  remove: remove,
};
