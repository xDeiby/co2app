import axios from "axios";

const co2FormsApi = axios.create({
  baseURL: "http://localhost:3001/api",
});

export default co2FormsApi;
