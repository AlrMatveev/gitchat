import { useEffect, useRef, useState } from "react";
import { ref, query, limitToLast, onValue, push, set } from "firebase/database";
import { db } from "../../FIREBASE";
import { Link } from "react-router-dom";
import { ChatStyled, ChatMessage, MessageInput } from "../../styled/Chat";
import { useAppSelector } from "../../hooks/redux";
import User from "./User";

interface IMessages {
  [key: string]: {
    login: string;
    text: string;
  };
}

const ActiveChat = ({ activeChat, login }: any) => {
  const [messeges, setMesseges] = useState<IMessages | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const chatsRef = ref(db, "chats/" + activeChat + "/messages");
    const recentPostsRef = query(chatsRef, limitToLast(100));
    const subscribe = onValue(recentPostsRef, (data) => {
      setMesseges(data.val());
    });
    return () => {
      subscribe();
    };
  }, [activeChat]);

  const handleEnter: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter" && inputRef.current) {
      if (inputRef.current.value.length > 0) {
        const activeChatsRef = ref(db, "chats/" + activeChat + "/messages");
        const newChatRef = push(activeChatsRef);
        set(newChatRef, {
          login: login,
          text: inputRef.current.value,
        }).then(() => {
          if (inputRef.current) inputRef.current.value = "";
        });
      }
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <ChatStyled>
        <div>
          {messeges === null ? (
            <div>...</div>
          ) : (
            Object.entries(messeges).map((message) => {
              return (
                <ChatMessage
                  flex={message[1].login === login ? "flex-end" : "flex-start"}
                  key={message[0]}
                >
                  <div>
                    <User login={message[1].login} />
                  </div>
                  <div>{message[1].text}</div>
                </ChatMessage>
              );
            })
          )}
        </div>
      </ChatStyled>
      <div>
        <MessageInput
          ref={inputRef}
          type="text"
          onKeyDown={handleEnter}
          placeholder="Maessage"
        ></MessageInput>
      </div>
    </div>
  );
};

export default ActiveChat;
