import DetailBanner from "../../../models/DetailBanner";
import WriterQna from "../../../models/WriterQna";

export default {
  Query: {
    getAllDetailBanner: async (_, args) => {
      try {
        const result = await DetailBanner.find()
          .populate({
            path: `qnaList`,
            model: WriterQna,
          })
          .sort({ sort: 1 });

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },

    getDetailBanner: async (_, args) => {
      const { id } = args;

      try {
        const result = await DetailBanner.findOne({
          _id: id,
        }).populate({
          path: `qnaList`,
          model: WriterQna,
        });

        return result;
      } catch (e) {
        console.log(e);
        return {};
      }
    },
  },
};
