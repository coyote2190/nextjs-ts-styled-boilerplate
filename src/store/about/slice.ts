import { createSlice } from '@reduxjs/toolkit';

import { AboutState, UpdateNamePayload } from './types';

const aboutInitialState: AboutState = {
  name: 'Yannick',
};

export const aboutSlice = createSlice({
  name: 'about',
  initialState: aboutInitialState,
  reducers: {
    updateName: (state, { payload }: UpdateNamePayload) => {
      state.name = payload.name;
    },
  },
});

export const { updateName } = aboutSlice.actions;
const aboutReducer = aboutSlice.reducer;
export default aboutReducer;
