import api from '../../api';
import store from '../../store/Store'

export default class MoviesService {
 
  getMovies(url) {    
    const request = api.get(url)    
    .then(response => response)
    .catch((e) => {})
    .finally(() => {
      store.commit('loading/remove', request);     
    });
    store.commit('loading/add', request);

    return request;
  }
  
}