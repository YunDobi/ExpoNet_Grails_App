import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export const Create = () => {
  const [newUser, setNewUser] = useState({
    name: '',
    address: '',
    total_item: 0,
    total_spent: 0
  })
  const {name, address, total_item, total_spent} = newUser;

  const navigate = useNavigate();


  const handleChange = (e) => {
    const state = newUser
    state[e.target.name] = e.target.value;
    setNewUser({...state})
    console.log(newUser)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post('http://localhost:8080/clients', {name, address, total_item, total_spent})
    .then((result) => {
      navigate('/')
    })
  }

  return (
    <div className="create_container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              ADD CLIENTS
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> Clients List</Link></h4>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="isbn">Name:</label>
                <input type="text" className="form-control" name="name" value={name} onChange={handleChange} placeholder="Name" />
              </div>
              <div className="form-group">
                <label htmlFor="title">Address:</label>
                <input type="text" className="form-control" name="address" value={address} onChange={handleChange} placeholder="Address" />
              </div>
              <div className="form-group">
                <label htmlFor="published_date">Total purchased:</label>
                <input type="number" className="form-control" name="total_item" value={total_item} onChange={handleChange} placeholder="How many item did you purchased?" />
              </div>
              <div className="form-group">
                <label htmlFor="publisher">Total Spent:</label>
                <input type="number" className="form-control" name="total_spent" value={total_spent} onChange={handleChange} placeholder="Total spent" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
              <button type="text" className="btn btn-default" onClick={() => navigate('/')}>Cancel</button>
            </form>
          </div>
        </div>
      </div>
  )
}
