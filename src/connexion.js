import axios from "axios";

const connexion = axios.create({
  baseURL: "http://localhost:8000/users",
});

export default connexion;
