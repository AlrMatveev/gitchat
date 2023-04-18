import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface createChatState {
  page: number;
  info: Info;
  members: User[];
}

type User = any;

type Info = { name?: string | undefined; description?: string | undefined };

const initialState: createChatState = {
  page: 0,
  info: {
    name: "",
    description: "",
  },
  members: [],
};

export const createChatSlice = createSlice({
  name: "createChat",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<boolean>) => {
      state.page = action.payload ? state.page + 1 : state.page - 1;
    },
    setInfo: (state, action: PayloadAction<Info>) => {
      state.info = action.payload;
    },
    addMember: (state, action: PayloadAction<User>) => {
      state.members.push(action.payload);
    },
    removeMember: (state, action: PayloadAction<string>) => {
      state.members = state.members.filter((member) => {
        if (member.login !== action.payload) return member;
      });
    },
    clearCreateChatState: (state) => {
      state.page = 0;
      state.info = {
        name: "",
        description: "",
      };
      state.members = [];
    },
  },
});

export const {
  setPage,
  setInfo,
  addMember,
  removeMember,
  clearCreateChatState,
} = createChatSlice.actions;

export default createChatSlice.reducer;
