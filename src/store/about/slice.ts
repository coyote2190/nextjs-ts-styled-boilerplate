import { createSlice } from '@reduxjs/toolkit';

import { AboutState, UpdateNamePayload, UpdatePersonPayload } from './types';

const aboutInitialState: AboutState = {
  name: 'Yannick',
  age: 32,
  entreprise: 'yklic',
};

export const aboutSlice = createSlice({
  name: 'about',
  initialState: aboutInitialState,
  reducers: {
    updateName: (state, { payload: name }: UpdateNamePayload) => {
      state.name = name;
    },
    updatePerson: (state, { payload }: UpdatePersonPayload) => {
      state.name = payload.name;
      state.age = payload.age;
      state.entreprise = payload.entreprise;
    },
  },
});

export const { updateName, updatePerson } = aboutSlice.actions;
const aboutReducer = aboutSlice.reducer;
export default aboutReducer;
