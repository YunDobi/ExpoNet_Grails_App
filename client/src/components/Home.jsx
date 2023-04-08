import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RequestData } from '../slices/slices';
import axios from 'axios';
import { Navbar } from './Navbar';

import { useSelector, useDispatch } from 'react-redux';

export const Home = () => {
  const usersList = useSelector((state) => state.users.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(RequestData());
  }, []);

  return (
    <div className='container'>
      <div className='panel'>
        <div className='panel-heading'>
          <h3 className='panel-title'>CLIENTS LIST</h3>
        </div>
        <div className='panel-body'>
          <div>
            <h4>
              <Link to='/create'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  class='bi bi-plus-circle'
                  viewBox='0 0 16 16'
                >
                  <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
                  <path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z' />
                </svg>{' '}
                Add Clients
              </Link>
            </h4>
          </div>
          <table className='table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Total Spent($)</th>
              </tr>
            </thead>
            <tbody>
              {usersList.map((cust) => (
                <tr key={cust.id}>
                  <td>
                    <Link to={`/detail/${cust.id}`}>{cust.name}</Link>
                  </td>
                  <td>{cust.address}</td>
                  <td>${cust.total_spent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
