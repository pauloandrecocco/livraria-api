import mongoose from "mongoose";

const Schema = mongoose.Schema;

const AvaliacaoSchema = new Schema({
  nome: { type: String, required: true },
  nota: { type: Number, required: true },
  avaliacao: { type: String },
});

const InfoLivroSchema = new Schema(
  {
    livroId: { type: Number, required: true },
    descricao: { type: String, required: true },
    paginas: { type: Number, required: true },
    editora: { type: String, required: true },
    avaliacoes: [AvaliacaoSchema],
  },
  { collection: "infoLivros", versionKey: false }
);

export default InfoLivroSchema;
