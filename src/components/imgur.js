import { imgurKey } from "../config/API";
import axios from "axios";

let auth = {
  Authorization: `Client-ID ${imgurKey}`,
  "Content-type": "application/x-www-form-urlencoded",
};

const imgur = axios.create({
  baseURL: "https://api.imgur.com",
  headers: auth,
  crossDomain: true,
});

export const imgurDelete = axios.create({
  method: "DELETE",
  baseURL: "https://api.imgur.com/3",
  headers: { Authorization: `Client-ID ${imgurKey}` },
  crossDomain: true,
});

export default imgur;
