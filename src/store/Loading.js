export default  {
	namespaced: true,
	state: {
		requests: []
	},
	mutations: {
		add(state, request) {   
      state.requests.push(request);   
      const loading = document.getElementById('loading', request);
      loading.innerHTML = '<div id="overl" class="overlay"><div class="loader"></div></div>';
		},
		remove(state, request) {		
      state.requests = state.requests.filter((item) => {
				return item !== request;
			});
      const elem = document.getElementById('overl', request);
      
			if (!state.requests.length){
        elem.parentNode.removeChild(elem);				
			}	
		}
	}
};
