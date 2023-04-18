import { useObject } from "react-firebase-hooks/database";
import { ref } from "firebase/database";
import { db } from "../../FIREBASE";
import { useState } from "react";

interface IChatListItemProps {
  id: any;
}

const ChatListItem = ({ id }: IChatListItemProps) => {
  const [select, setSelect] = useState(false);
  const chatRef = ref(db, "chats/" + id);
  const [snapshot, loading, error] = useObject(chatRef);

  if (loading) return <>Loading</>;
  if (error) return <>{error.message}</>;

  let chat: any;
  if (snapshot) chat = snapshot.val();

  return <div>{chat && <>{chat.name}</>}</div>;
};

export default ChatListItem;
