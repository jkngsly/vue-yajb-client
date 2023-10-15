import axios from "axios";

const api = {
  host: "http://localhost:3000",
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
