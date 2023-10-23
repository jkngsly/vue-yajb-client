import axios from "axios";

export default class JobService {
  constructor() {
    this.get = this.get.bind(this);
    this.create = this.create.bind(this);
  }

  async get() {
    const request = axios.get("/jobs").catch(function (error) {
      console.log(error);
    });

    return request.then((response) => response.data);
  }

  async create(job) {
    const request = axios.post("/job", job).catch(function (error) {
      console.log(error);
    });

    return request.then((response) => response.data);
  }
}
