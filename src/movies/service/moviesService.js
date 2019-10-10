import api from "../../api";

export default class MoviesService {
 
  getMovies(url) {
    const request = api
    .get(url)
    .then(response => response)
    .catch((e) => {});

    return request;
  }
  
}