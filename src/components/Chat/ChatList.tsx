import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../../FIREBASE";
import { useAppSelector } from "../../hooks/redux";
import ChatListItem from "./ChatListItem";
import ActiveChat from "./ActiveChat";
import removeChat from "../../hooks/firebase/removeChat";
import { Button } from "../../styled/Main";
import { ChatItem, ChatListStyled, ChatWraper } from "../../styled/Chat";
import NoActiveChat from "./NoActiveChat";
import { Link } from "react-router-dom";

const ChatList = () => {
  const { login } = useAppSelector((state) => state.user);
  const [chats, setChats] = useState<string[]>([]);
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const { removeChatById } = removeChat();

  useEffect(() => {
    const chatsRef = ref(db, "users/" + login);
    const subscribe = onValue(chatsRef, (snapshot) => {
      const data = snapshot.val();
      setChats(data);
    });
    return () => {
      subscribe();
    };
  }, []);

  if (chats === null) return <Link to="/create-chat">Create Chat</Link>;

  return (
    <ChatWraper>
      <ChatListStyled>
        {chats &&
          Object.entries(chats).map((chat) => {
            return (
              <ChatItem
                background={activeChat === chat[1] ? "#eeeeee" : "transperent"}
                key={chat[0]}
                onClick={() => setActiveChat(chat[1])}
              >
                <ChatListItem id={chat[1]} />
                <Button onClick={() => removeChatById(chat[0])}>X</Button>
              </ChatItem>
            );
          })}
      </ChatListStyled>
      <>
        {activeChat ? (
          <ActiveChat login={login} activeChat={activeChat} />
        ) : (
          <>
            <NoActiveChat />
          </>
        )}
      </>
    </ChatWraper>
  );
};

export default ChatList;
