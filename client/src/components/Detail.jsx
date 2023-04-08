import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DeleteData, GetUser } from '../slices/slices';

export const Detail = () => {

  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch()

  const user = useSelector((state) => state.users.currentUser);

  useEffect(() => {
    dispatch(GetUser(id))
  }, []);

  const RequestDelete = () => {
    dispatch(DeleteData(id))
    navigate('/')
    // console.log(id);
    // axios.delete(`http://localhost:8080/clients/${id}`).then((result) => {
    //   navigate('/');
    // });
  };

  return (
    <div className='container'>
      <div className='panel panel-default'>
        <div className='panel-heading'>
          <h3 className='panel-title'>Client Details</h3>
        </div>
        <div className='panel-body'>
          <h4>
            <Link to='/'>
              <span
                className='glyphicon glyphicon-th-list'
                aria-hidden='true'
              ></span>{' '}
              Clients List
            </Link>
          </h4>
          <dl>
            <dt>Name:</dt>
            <dd>{user.name}</dd>
            <dt>Address:</dt>
            <dd>{user.address}</dd>
            <dt>Total Purchased Items:</dt>
            <dd>{user.total_item}</dd>
            <dt>Total spent:</dt>
            <dd>{user.total_spent}</dd>
          </dl>
          <Link to={`/edit/${user.id}`} className='btn btn-success'>
            Edit
          </Link>
          &nbsp;
          <button
            onClick={() => RequestDelete()}
            className='btn btn-danger'
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
