import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { requestData } from '../slices/userSlice';
import { CreateData } from '../slices/slices';

export const Create = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [newUser, setNewUser] = useState({
    name: '',
    address: '',
    total_item: 0,
    total_spent: 0,
  });
  const { name, address, total_item, total_spent } = newUser;

  const navigate = useNavigate();

  const handleChange = (e) => {
    const state = newUser;
    state[e.target.name] = e.target.value;
    setNewUser({ ...state });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(CreateData({ name, address, total_item, total_spent }));
    if (users.error.length > 0) {
      console.log(users.error);
    } else {
      navigate('/');
    }
  };

  return (
    <div className='create_container'>
      <div className='panel panel-default'>
        <div className='panel-heading'>
          <h3 className='panel-title'>ADD CLIENTS</h3>
        </div>
        <div className='panel-body'>
          <h4>
            <Link to='/'>
              {' '}
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
              Clients List
            </Link>
          </h4>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='isbn'>Name:</label>
              <input
                type='text'
                className='form-control'
                name='name'
                value={name}
                onChange={handleChange}
                placeholder='Name'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='title'>Address:</label>
              <input
                type='text'
                className='form-control'
                name='address'
                value={address}
                onChange={handleChange}
                placeholder='Address'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='published_date'>Total purchased:</label>
              <input
                type='number'
                className='form-control'
                name='total_item'
                value={total_item}
                onChange={handleChange}
                placeholder='How many item did you purchased?'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='publisher'>Total Spent:</label>
              <input
                type='number'
                className='form-control'
                name='total_spent'
                value={total_spent}
                onChange={handleChange}
                placeholder='Total spent'
              />
            </div>
            <button type='submit' className='btn btn-success'>
              Submit
            </button>
            <button
              type='text'
              className='btn btn-danger'
              onClick={() => navigate('/')}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
