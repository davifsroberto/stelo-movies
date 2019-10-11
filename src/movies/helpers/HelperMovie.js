export default class HelperMovie {
  
  categoriaPage(namePage) {        
    switch (namePage) {
      case 'populares':
        this.categoria = 'Populares'
      break;     
      
      case 'avaliados':
        this.categoria = 'Mais bem avaliados'        
      break;     

      case 'estreias':
        this.categoria = 'Próximas Estreias'
      break;     
      
      case 'cartaz':
        this.categoria = 'Em Cartaz'
      break;             
    }

    return this.categoria;
  }
  
}