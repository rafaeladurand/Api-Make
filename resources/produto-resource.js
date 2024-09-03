const express = require('express');
const produtoController = require('../controllers/produto-controller')

const router = express.Router();

//rotas
//app.get('/categorias/:idcategoria/listar-produtos', (req, res) => {

    router.get('/', produtoController.listar);
    router.get('/:idProduto', produtoController.buscarById);
    router.post('/', produtoController.novo);
    router.put('/:idproduto', produtoController.editar)
    router.delete('/:idproduto', produtoController.deletar);
    
module.exports = router;