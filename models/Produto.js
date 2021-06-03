const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
    descricao: {
        type: String,
        required: [true, 'Por favor adicionar uma descrição'],
        maxlength: [200, 'Descrição não pode conter mais que 200 caracteres']
    }
})

module.exports = mongoose.models.Produto || mongoose.model('Produto', ProdutoSchema)