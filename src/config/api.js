import axios from "axios";

const api = {
  host: import.meta.env.VITE_API_HOST,
  contenType: "application/json",
};

export default {
  ...api,
  init: () => {
    axios.defaults.baseURL = api.host;
    axios.defaults.headers.post["Content-Type"] = api.contentType;
    axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
  },
};
