import { db } from "../../FIREBASE";
import { ref, remove } from "firebase/database";
import { useAppSelector } from "../redux";

const removeChat = () => {
  const { login } = useAppSelector((state) => state.user);
  const removeChatById = (id: string) => {
    const chatsRef = ref(db, "users/" + login + "/" + id);
    remove(chatsRef).then(() => {
      console.log(id);
    });
  };

  return { removeChatById };
};

export default removeChat;
