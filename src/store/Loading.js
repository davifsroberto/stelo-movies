export default  {
  namespaced: true,
  	
	mutations: {
		add() {         
      const loading = document.getElementById('loading');
      loading.innerHTML = '<div id="overl" class="overlay"><div class="loader"></div></div>';
    },
    
		remove() {
      const elem = document.getElementById('overl');
      elem.parentNode.removeChild(elem);				      
    }
	}
};
