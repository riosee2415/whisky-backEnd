import mongoose from "mongoose";

const Schema = mongoose.Schema;

const WriterQna = new Schema(
  {
    asked: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model(`WriterQna`, WriterQna, `WriterQna`);
