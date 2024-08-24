import axios from "axios";
//worker saga
export default function requestGetNews() {
  return axios.request({
    method: "GET",
    url: "https://hn.algolia.com/api/v1/search?query=react",
  });
}
