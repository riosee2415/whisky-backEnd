import DetailBanner from "../../../models/DetailBanner";

export default {
  Query: {
    getDetailBanner: async (_, args) => {
      try {
        const result = await DetailBanner.find().sort({ sort: 1 });

        return result;
      } catch (e) {
        return [];
      }
    },
  },

  Mutation: {
    modifyDetailBanner: async (_, args) => {
      const { id, title, content } = args;

      try {
        const newContent = content.replace(/\n/g, "<br />");

        const result = await DetailBanner.update(
          { _id: id },
          { title, content: newContent }
        );

        return true;
      } catch (e) {
        return false;
      }
    },

    modifyDetailBannerImagePath: async (_, args) => {
      const { id, imagePath } = args;

      try {
        const result = await DetailBanner.update({ _id: id }, { imagePath });

        return true;
      } catch (e) {
        return false;
      }
    },
  },
};
