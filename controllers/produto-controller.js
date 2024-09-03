const mongoose = require('mongoose');
const Produto = mongoose.model('Produto', new mongoose.Schema({
  nomeProduto: String,
  corProduto: String,
}))

module.exports = {

  listar: async (req, res) => {
    Produto.find({}).then(result => {
      res.send(result)
    }).catch(err => {
      res.send('Ocorreu um erro!')
    })

    console.log(req.params)
    console.log(req.query)
  },

  buscarById: async (req, res) => {
    Produto.findById(req.params.idProduto).then(result => {
      res.send(result)
    }).catch(err => {
      res.send('Ocorreu um erro!')
    })
  },

  novo: async (req, res) => {
    const novoProduto = new Produto({
      nomeProduto: req.body.nome,
      corProduto: req.body.cor,
    })

    novoProduto.save().then(result => {
      console.log('Produto cadastrado!')
    })


    console.log(req.body)
    res.send('Novo produto cadastrado com sucesso!')

  },

  editar: async (req, res) => {
    console.log(req.params)
    console.log(req.body)
    res.send('Produto editado com sucesso!')
  },

  deletar: async (req, res) => {
    Produto.findByIdAndDelete(req.params.idproduto)
      .then(result => {
        if (result) {
          res.send('Produto deletado com sucesso!');
        } else {
          res.status(404).send('Produto não encontrado.');
        }
      })
      .catch(err => {
        res.status(500).send('Ocorreu um erro ao deletar o produto.');
      });
  }


}