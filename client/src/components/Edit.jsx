import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

export const Edit = () => {
  const [currentUser, setCurrentUser] = useState({});
  const { name, address, total_item, total_spent } = currentUser;
  const {id} = useParams();
  const navigate = useNavigate()

  const requestData = async () => {
    try {
      await axios.get('http://localhost:8080/clients/' + id)
      .then((result) => {
        console.log(result.data);
        setCurrentUser(result.data)
      })
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    requestData()
  },[])


  const handleChange = (e) => {
    const state = currentUser
    state[e.target.name] = e.target.value;
    setCurrentUser({...state})
    console.log(currentUser)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put('http://localhost:8080/clients/'+id, { name, address, total_item, total_spent })
      .then((result) => {
        navigate('/detail/'+id)
      });
  }


  return (
<div className="Edit_container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              EDIT Clients
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to={`/`}><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Clients List</Link></h4>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label for="name">Name:</label>
                <input type="text" className="form-control" name="name" value={currentUser.name} onChange={handleChange} placeholder="Name" />
              </div>
              <div className="form-group">
                <label for="title">Address:</label>
                <input type="text" className="form-control" name="address" value={currentUser.address} onChange={handleChange} placeholder="Address" />
              </div>
              <div className="form-group">
                <label for="description">Total Purchased Items:</label>
                <input type="number" className="form-control" name="total_item" value={currentUser.total_item} onChange={handleChange} placeholder="Total Purchased Items" />
              </div>
              <div className="form-group">
                <label for="published_date">Total Spent:</label>
                <input type="number" className="form-control" name="total_spent" value={currentUser.total_spent} onChange={handleChange} placeholder="Total Spent" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
  )
}
