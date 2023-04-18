import styled from "styled-components";

export const UserContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const InfoStyle = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
  div {
    margin: 10px;
  }
`;

export const RepositoriesWraper = styled.div`
  margin: 10px;
  padding: 10px;
  background-color: white;
  width: 100%;
`;

export const RepositoryContainer = styled.div`
  margin: 10px;
  background-color: #eee;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  padding: 10px;
`;
