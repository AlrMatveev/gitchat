import { useState } from "react";
import { ref, push, set } from "firebase/database";
import { db } from "../../FIREBASE";
import { useAppSelector, useAppDispatch } from "../redux";
import { clearCreateChatState } from "../../redux/createChatSlice";

const addChat = () => {
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);
  const [error, setError] = useState<boolean | string>(false);

  const dispatch = useAppDispatch();
  const { info, members } = useAppSelector((state) => state.createChat);
  const user = useAppSelector((state) => state.user);

  const pushChat = () => {
    setLoading(true);
    if (!user) {
      setLoading(false);
      setError("No Auth");
      return;
    }
    const addedAdmin = members.concat([user]);
    const chatsRef = ref(db, "chats");

    const pushChatRef = push(chatsRef);
    set(pushChatRef, {
      name: info.name,
      description: info.description,
    })
      .then(() => {
        addedAdmin.map((user) => {
          const membersRef = ref(
            db,
            "chats/" + pushChatRef.key + "/members/" + user.login
          );
          set(membersRef, {
            name: user.name ? user.name : "No Name",
            avatarUrl: user.avatarUrl,
          });
          const userRef = ref(db, "users/" + user.login);
          const psuhUsersRef = push(userRef);
          set(psuhUsersRef, pushChatRef.key).then(() => {
            dispatch(clearCreateChatState());
            setLoading(false);
            setAdded(true);
          });
        });
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  };
  return { loading, added, error, pushChat };
};

export default addChat;
