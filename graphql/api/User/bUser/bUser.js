import BUser from "../../../models/BUser";
import { CURRENT_TIME, sendSecretMail } from "../../../../utils/commonUtils";
import UserRight from "../../../models/UserRight";

export default {
  Query: {
    getAllBUser: async (_, args) => {
      const { searchName } = args;

      console.log("asdfklsaklasdfkl");
      console.log("asdfklsaklasdfkl");
      console.log("asdfklsaklasdfkl");
      console.log("asdfklsaklasdfkl");

      try {
        const result = await BUser.find({
          b_name: {
            $regex: `.*${searchName}.*`,
          },
        }).sort({ createdAt: -1 });

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },
  },

  Mutation: {
    modifyExitBUser: async (_, args) => {
      const { id } = args;

      try {
        const current = await CURRENT_TIME();

        const result = await BUser.updateOne(
          { _id: id },
          {
            $set: {
              isExit: true,
              exitedAt: current,
            },
          }
        );

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
    modifyBlackBUser: async (_, args) => {
      const { id } = args;

      try {
        const current = await CURRENT_TIME();

        const result = await BUser.updateOne(
          { _id: id },
          {
            $set: {
              isBlack: true,
              blackAt: current,
            },
          }
        );

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
    modifyAssignMentBUser: async (_, args) => {
      const { id } = args;

      try {
        const result = await BUser.updateOne(
          { _id: id },
          {
            $set: {
              b_asignment: true,
            },
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
