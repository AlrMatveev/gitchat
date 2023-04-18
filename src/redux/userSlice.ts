import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  login: string | null;
  avatarUrl: string | null;
  name: string | null;
  admin: boolean;
}

const initialState: UserState = {
  login: null,
  avatarUrl: null,
  name: null,
  admin: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      const { displayName, screenName, photoUrl } = action.payload;
      state.name = displayName;
      state.login = screenName;
      state.avatarUrl = photoUrl;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
