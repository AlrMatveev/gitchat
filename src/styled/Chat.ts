import styled from "styled-components";

export const ChatItem = styled.div<{ background: string }>`
  display: flex;
  padding: 5px;
  align-items: center;
  margin: 5px;
  background-color: ${(props) => props.background};
  div {
    flex-grow: 1;
  }
  * {
    margin: 5px;
  }
`;

export const ChatListStyled = styled.div`
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  background-color: white;
  width: 200px;
`;

export const ChatStyled = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 70vh;
  overflow: auto;
`;

export const ChatMessage = styled.div<{ flex: string }>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.flex};
  > div {
    background-color: white;
    width: 45%;
    padding: 5px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  }
  > div > div {
    display: flex;
    align-items: center;
  }
  img {
    border-radius: 50%;
    margin-right: 5px;
  }
`;

export const ChatWraper = styled.div`
  display: flex;
  width: 100%;
`;

export const MessageInput = styled.input`
  width: 100%;
  margin: 10px;
  border: none;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;
