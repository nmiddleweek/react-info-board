import axios from "axios";

const CONFIG = {
  endpoint: "https://www.mocky.io/v2/5d3cc3d9320000e227afd02f"
};

const service = {
  // getData: function() {
  //   return axios.get(CONFIG.endpoint);
  // },
  getData: async function getData() {
    let response = null;
    let apiData = null;
    let error = null;

    try {
      response = await axios.get(CONFIG.endpoint);
    } catch (error) {
      console.log("error", error);
    } finally {
      if (error === null) {
        console.log("queues", response.data.queues);
        apiData = response.data.queues;
      }
      return apiData;
    }
  }
};

export default service;
