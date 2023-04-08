import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { RequestData } from '../slices/slices';
import axios from 'axios'

import { useSelector, useDispatch } from 'react-redux';


export const Home = () => {
  const  usersList  = useSelector(state => state.users.list);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(RequestData())
  },[])

  


  return (
    <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              CLIENTS LIST
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/create"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Clients</Link></h4>
            <table className="table table-stripe">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Total Spent</th>
                </tr>
              </thead>
              <tbody>
                {usersList.map(cust =>
                  <tr key={cust.id}>
                    <td><Link to={`/detail/${cust.id}`}>{cust.name}</Link></td>
                    <td>{cust.address}</td>
                    <td>{cust.total_spent}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  )
}
