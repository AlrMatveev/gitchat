import styled from "styled-components";

export const Button = styled.button`
  padding: 5px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  transition: 500ms;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
  }
`;

export const ContainerWraper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Container = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: auto;
`;
