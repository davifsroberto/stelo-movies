import api from '../../api';
import store from '../../store/Store'

export default class MoviesService {
 
  getMovies(url, loading = true) {    
    const request = api
    .get(url)
    .then(response => response)
    .catch((e) => {})
    .finally(() => {
      if (loading) {
        store.commit('loading/remove', request);
      }
    });

    if (loading) {
      store.commit('loading/add', request);
    }

    return request;
  }
  
}