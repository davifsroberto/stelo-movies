import categoria from '../helpers/categoria'

export default class HelperMovie {
  
  categoriaPage(namePage) {     
    
    switch (namePage) {
      case 'populares':
        this.categoria = categoria.populares.descricao
      break;     

      case 'avaliados':
        this.categoria = categoria.avaliados.descricao
      break;     

      case 'estreias':
        this.categoria = categoria.estreias.descricao
      break;     

      case 'cartaz':
        this.categoria = categoria.cartaz.descricao
      break;       
    }

    return this.categoria;
  }

  paginacaoPage(totalRange, totalPages) {
    return Math.round(totalRange/totalPages);
  }
  
}