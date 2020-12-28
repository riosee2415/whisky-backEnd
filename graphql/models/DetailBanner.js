import mongoose from "mongoose";

const Schema = mongoose.Schema;

const DetailBanner = new Schema(
  {
    topBannerPath: {
      type: String,
      required: true,
    },
    topDescription: {
      type: String,
      required: true,
    },
    writerImagePath1: {
      type: String,
      required: true,
    },
    writerImagePath2: {
      type: String,
      required: true,
    },
    writerDescription1: {
      type: String,
      required: true,
    },
    writerDescription2: {
      type: String,
      required: true,
    },
    qnaList: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: `WriterQna`,
      },
    ],
    drinkImagePath: {
      type: String,
      required: true,
    },
    drinkTitle: {
      type: String,
      required: true,
    },
    drinkSubTitle: {
      type: String,
      required: true,
    },
    drinkContent: {
      type: String,
      required: true,
    },
    videoPath: {
      type: String,
      required: true,
    },
    sort: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model(`DetailBanner`, DetailBanner, `DetailBanner`);
