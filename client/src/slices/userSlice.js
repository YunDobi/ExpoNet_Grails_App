import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RequestData, CreateData, EditData, GetUser, DeleteData } from './slices.js';


const initialState = { list: [], loading: false, currentUser: {},error: ''};


const setPending = (builder, actionData) => {
    builder.addCase(actionData.pending, (state) => {
      state.loading = true;
    })
}


const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    setPending(builder, RequestData)

    builder.addCase(RequestData.fulfilled, (state, action) => {
      console.log(action);
      state.loading = false;
      state.list = action.payload;
      state.error = '';
    });


    setPending(builder, CreateData)
    
    builder.addCase(CreateData.fulfilled, (state, action) => {
      console.log(action)
      state.loading = false;
    });
    builder.addCase(CreateData.rejected, (state, action) => {
      state.loading = false;
      state.list = [];
      state.error = action.error.message;
    });

    builder.addCase(DeleteData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(DeleteData.fulfilled, (state, action) => {
      console.log(action)
      state.currentUser = {}
      state.loading = false;
    });
    builder.addCase(DeleteData.rejected, (state, action) => {
      state.loading = false;
      state.list = [];
      state.error = action.error.message;
    });    


    builder.addCase(GetUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(GetUser.fulfilled, (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
      state.error = '';
    });
    builder.addCase(GetUser.rejected, (state, action) => {
      state.loading = false;
      state.currentUser = [];
      state.error = action.error.message;
    });

    builder.addCase(EditData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(EditData.fulfilled, (state, action) => {
      console.log("action recieved",action);
      state.loading = false;
      state.currentUser = action.payload
    });
    builder.addCase(EditData.rejected, (state, action) => {
      state.loading = false;
      state.list = [];
      state.error = action.error.message;
    });
  },
});

// export const { userAdded, userDeleted, userUpdated } = userSlice.actions;
export default userSlice.reducer;
