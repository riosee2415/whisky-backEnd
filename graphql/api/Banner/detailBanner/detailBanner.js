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

  Mutation: {
    modifyDetail: async (_, args) => {
      const {
        id,
        topDescription,
        writerDescription1,
        writerDescription2,
        drinkTitle,
        drinkSubTitle,
        drinkContent,
        topBannerPath,
        writerImagePath1,
        writerImagePath2,
        drinkImagePath,
        videoPath,
      } = args;

      try {
        const result = await DetailBanner.updateOne(
          { _id: id },
          {
            $set: {
              topDescription,
              writerDescription1,
              writerDescription2,
              drinkTitle,
              drinkSubTitle,
              drinkContent,
              topBannerPath,
              writerImagePath1,
              writerImagePath2,
              drinkImagePath,
              videoPath,
            },
          }
        );

        return true;
      } catch (e) {
        return false;
      }
    },
    modifyDetailBannerTopBannerPath: async (_, args) => {
      const { id, topBannerPath } = args;

      try {
        const result = await DetailBanner.update(
          { _id: id },
          {
            topBannerPath,
          }
        );

        return true;
      } catch (e) {
        return false;
      }
    },
    modifyDetailBannerWriterImagePath1: async (_, args) => {
      const { id, writerImagePath1 } = args;

      try {
        const result = await DetailBanner.update(
          { _id: id },
          {
            writerImagePath1,
          }
        );

        return true;
      } catch (e) {
        return false;
      }
    },
    modifyDetailBannerWriterImagePath2: async (_, args) => {
      const { id, writerImagePath2 } = args;

      try {
        const result = await DetailBanner.update(
          { _id: id },
          {
            writerImagePath2,
          }
        );

        return true;
      } catch (e) {
        return false;
      }
    },
    modifyDetailBannerDrinkImagePath: async (_, args) => {
      const { id, drinkImagePath } = args;

      try {
        const result = await DetailBanner.update(
          { _id: id },
          {
            drinkImagePath,
          }
        );

        return true;
      } catch (e) {
        return false;
      }
    },
    modifyDetailBannerVideoPath: async (_, args) => {
      const { id, videoPath } = args;

      try {
        const result = await DetailBanner.update(
          { _id: id },
          {
            videoPath,
          }
        );

        return true;
      } catch (e) {
        return false;
      }
    },
  },
};
