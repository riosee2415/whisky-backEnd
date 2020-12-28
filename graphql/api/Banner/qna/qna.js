import WriterQna from "../../../models/WriterQna";
import DetailBanner from "../../../models/DetailBanner";
import mongoose from "mongoose";

export default {
  Mutation: {
    modifyQnaInDetail: async (_, args) => {
      const { id, asked, answer } = args;

      try {
        const result = await WriterQna.updateOne(
          { _id: id },
          {
            $set: {
              asked,
              answer,
            },
          }
        );

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },

    createQnaInDetail: async (_, args) => {
      const { pid, asked, answer } = args;

      try {
        const result = await WriterQna.create({
          asked,
          answer,
        });

        const obId = mongoose.Types.ObjectId(result._id);

        const parent = await DetailBanner.findOne({ _id: pid });
        parent.qnaList.push(obId);
        parent.save();

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
