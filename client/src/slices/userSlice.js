import { createSlice } from '@reduxjs/toolkit';
import {
  RequestData,
  CreateData,
  EditData,
  GetUser,
  DeleteData,
} from './slices.js';

const initialState = { list: [], loading: false, currentUser: {}, error: '' };

//if the reducers is peinding
const setPending = (builder, actionData) => {
  builder.addCase(actionData.pending, (state) => {
    state.loading = true;
  });
};

//if the reducers is rejected
const setRejected = (builder, actionData) => {
  builder.addCase(DeleteData.rejected, (state, action) => {
    state.loading = false;
    state.list = [];
    state.error = action.error.message;
  });
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    setPending(builder, RequestData);
    setRejected(builder, RequestData);

    builder.addCase(RequestData.fulfilled, (state, action) => {
      console.log(action);
      state.loading = false;
      state.list = action.payload;
      state.error = '';
    });

    // create the data
    setPending(builder, CreateData);
    setRejected(builder, CreateData);

    builder.addCase(CreateData.fulfilled, (state, action) => {
      console.log(action);
      state.loading = false;
    });

    // delete the data
    setPending(builder, DeleteData);
    setRejected(builder, DeleteData);
    builder.addCase(DeleteData.fulfilled, (state, action) => {
      console.log(action);
      state.currentUser = {};
      state.loading = false;
    });

    // get one user
    setPending(builder, GetUser);
    setRejected(builder, GetUser);
    builder.addCase(GetUser.fulfilled, (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
      state.error = '';
    });

    // edit the data
    setPending(builder, EditData);
    setRejected(builder, EditData);
    builder.addCase(EditData.fulfilled, (state, action) => {
      console.log('action recieved', action);
      state.loading = false;
      state.currentUser = action.payload;
    });
  },
});

export default userSlice.reducer;
