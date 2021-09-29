import axios from "axios";
import { rapidApiKey } from "../config/API";

const ocr = axios.create({
  baseURL: "https://ocrly-image-to-text.p.rapidapi.com/",
  method: "GET",
  headers: {
    "x-rapidapi-host": "ocrly-image-to-text.p.rapidapi.com",
    "x-rapidapi-key": rapidApiKey,
  },
  crossDomain: true,
});

export default ocr;
