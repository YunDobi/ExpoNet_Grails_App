/* eslint-disable import/no-anonymous-default-export */
import dataURL from './dataURL';

class ClientsDataRequest {
  //check
  getAll() {
    return dataURL.get("/");
  }

  //check
  detail(id) {
    return dataURL.get(`/${id}`);
  }

  //check
  create(data) {
    console.log(data)
    return dataURL.post("/", data);
  }

  edit(id, data) {
    // console.log("rec", dataURL.put, id, data)
    return dataURL.put(`/${id}`, data);
  }

  delete(id) {
    return dataURL.delete(`/${id}`);
  }

}

export default new ClientsDataRequest();
