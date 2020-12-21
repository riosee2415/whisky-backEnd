import NoticeBoardType from "../../../models/NoticeBoardType";
import NoticeBoard from "../../../models/NoticeBoard";

import { CURRENT_TIME } from "../../../../utils/commonUtils";

export default {
  Query: {
    getNoticeBoard: async (_, args) => {
      const { searchValue, limit, currentPage } = args;

      try {
        const result = await NoticeBoard.find({
          title: { $regex: `.*${searchValue}.*` },
        })
          .sort({
            createdAt: -1,
          })
          .limit(limit)
          .skip(currentPage * limit);

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },

    getNoticeBoardTotalPage: async (_, args) => {
      const { searchValue, limit } = args;

      try {
        const result = await NoticeBoard.find({
          title: { $regex: `.*${searchValue}.*` },
        }).sort({
          createdAt: -1,
        });

        const cnt = result.length;

        const realTotalPage = cnt % limit > 0 ? cnt / limit + 1 : cnt / limit;

        return parseInt(realTotalPage);
      } catch (e) {
        console.log(e);
        return 0;
      }
    },

    getNoticeBoardType: async (_, args) => {
      try {
        const result = await NoticeBoardType.find().sort({ typeName: 1 });

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },

    getNoticeBoardTotalPageOnlyCnt: async (_, args) => {
      const { searchValue, limit } = args;

      try {
        const result = await NoticeBoard.find({
          title: { $regex: `.*${searchValue}.*` },
        }).sort({
          createdAt: -1,
        });

        const cnt = result.length;

        return parseInt(cnt);
      } catch (e) {
        console.log(e);
        return 0;
      }
    },

    getNoticeBoardDetail: async (_, args) => {
      const { id } = args;
      console.log(id);

      try {
        const result = await NoticeBoard.findOne({
          _id: id,
        });

        return result;
      } catch (e) {
        console.log(e);
        return {};
      }
    },

    getNoticeBoardNextId: async (_, args) => {
      const { id } = args;
      console.log(id);

      try {
        const result = await NoticeBoard.findOne({
          _id: { $lt: id },
          isDelete: false,
        })
          .sort({
            createdAt: -1,
          })
          .limit(1);

        return result;
      } catch (e) {
        console.log(e);
        return {};
      }
    },

    getNoticeBoardBeforeId: async (_, args) => {
      const { id } = args;
      console.log(id);

      try {
        const result = await NoticeBoard.findOne({
          _id: { $gt: id },
          isDelete: false,
        })
          .sort({
            createdAt: 1,
          })
          .limit(1);

        return result;
      } catch (e) {
        console.log(e);
        return {};
      }
    },
  },
  Mutation: {
    createNoticeBoardType: async (_, args) => {
      const { value } = args;

      try {
        const reuslt = await NoticeBoardType.create({
          typeName: value,
        });

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },

    deleteNoticeBoardType: async (_, args) => {
      const { id } = args;

      try {
        const result = await NoticeBoardType.deleteOne({ _id: id });

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },

    deleteNoticeBoard: async (_, args) => {
      const { id } = args;

      try {
        const current = await CURRENT_TIME();

        const result = await NoticeBoard.updateOne(
          { _id: id },
          { isDelete: true, deletedAt: current }
        );

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },

    createNoticeBoard: async (_, args) => {
      const { title, type, description } = args;

      try {
        const current = await CURRENT_TIME();

        const result = await NoticeBoard.create({
          title,
          type,
          description,
          isDelete: false,
          deletedAt: "",
          createdAt: current,
        });

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },

    modifyNoticeBoard: async (_, args) => {
      const { id, title, description } = args;

      try {
        const result = await NoticeBoard.updateOne(
          { _id: id },
          {
            title,
            description,
          }
        );

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
