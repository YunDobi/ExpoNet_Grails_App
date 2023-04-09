import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DeleteData, GetUser } from '../slices/slices';

export const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.users.currentUser);

  useEffect(() => {
    dispatch(GetUser(id));
  }, []);

  const RequestDelete = () => {
    dispatch(DeleteData(id));
    navigate('/');
  };

  return (
    <div className='container'>
      <div className='panel panel-default'>
          <h4>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              class='bi bi-arrow-return-left'
              viewBox='0 0 16 16'
            >
              <path
                fill-rule='evenodd'
                d='M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z'
              />
            </svg>{' '}
            <Link to='/'>Clients List</Link>
          </h4>
        <div className='panel-heading'>
          <h3 className='panel-title'>CLIENT DETAILS</h3>
        </div>
        <div className='panel-body'>
          <dl>
            <dt>Name:</dt>
            <dd>{user.name}</dd>
            <dt>Address:</dt>
            <dd>{user.address}</dd>
            <dt>Id:</dt>
            <dd>{user.id}</dd>
            <dt>Total Purchased Items:</dt>
            <dd>{user.total_item}</dd>
            <dt>Total spent:</dt>
            <dd>{user.total_spent}</dd>
          </dl>
          <Link to={`/edit/${user.id}`} className='btn btn-success'>
            Edit
          </Link>
          &nbsp;
          <button onClick={() => RequestDelete()} className='btn btn-danger'>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
