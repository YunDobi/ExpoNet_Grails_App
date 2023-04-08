import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../API/API_call';
import axios from 'axios';

// home api request
export const RequestData = createAsyncThunk('users/requestData', () => {
  try {
    return API.getAll().then((result) => result.data);
  } catch (error) {
    console.error(error);
  }
});

export const CreateData = createAsyncThunk('users/creatData', (data) => {
  try {
    console.log("data",data)
    API.create(data).then((result) => {
      // console.log(result.data);
      return result.data;
    });
  } catch (error) {
    console.error(error);
  }
});

export const DeleteData = createAsyncThunk('users/deleteData', (id) => {
  try {
    API.delete(id).then((result) => {
      // console.log(result.data);
      return result.data;
    });
  } catch (error) {
    console.error(error);
  }
});

export const GetUser = createAsyncThunk('users/getUser', (id) => {
  try {
    return API.detail(id).then((result) => result.data);
  } catch (error) {
    console.error(error);
  }
});

export const EditData = createAsyncThunk('users/editData', (data) => {
  console.log("data",data)
  try {
    return axios.put('http://localhost:8080/clients/' + data.id, data).then((result) => result.data)
  } catch (error) {
    console.error(error);
  }
});

// axios.put('http://localhost:8080/clients/'+id, { name, address, total_item, total_spent })
// .then((result) => {
//   navigate('/detail/'+id)
// });
