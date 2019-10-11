import api from '../../api';
import store from '../../store/Store'

export default class MoviesService {
 
  getMovies(url) {    
    const request = api.get(url)    
    .then(response => response)
    .catch((e) => {})
    .finally(() => {
      store.commit('loading/remove');      
    });
    store.commit('loading/add');

    return request;
  }
  
}