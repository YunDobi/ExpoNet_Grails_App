import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetUser, EditData } from '../slices/slices';

export const Edit = () => {
  const user = useSelector((state) => state.users.currentUser);
  const [name, setName] = useState(user.name);
  const [address, setAddress] = useState(user.address);
  const [total_item, setTotal_item] = useState(user.total_item);
  const [total_spent, setTotal_spent] = useState(user.total_spent);

  const { id } = useParams();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(GetUser(id));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(EditData({ id, name, address, total_item, total_spent }));
      navigate('/detail/' + id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='Edit_container'>
      <div className='panel panel-default'>
        <div className='panel-heading'>
          <h3 className='panel-title'>EDIT CLIENT</h3>
        </div>
        <div className='panel-body'>
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
            <Link to={`/`}>
              <span
                className='glyphicon glyphicon-eye-open'
                aria-hidden='true'
              ></span>{' '}
              Clients List
            </Link>
          </h4>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='name'>Name:</label>
              <input
                type='text'
                className='form-control'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Name'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='address'>Address:</label>
              <input
                type='text'
                className='form-control'
                name='address'
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                placeholder='Address'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='total_item'>Total Purchased Items:</label>
              <input
                type='number'
                className='form-control'
                name='total_item'
                value={total_item}
                onChange={(e) => {
                  setTotal_item(e.target.value);
                }}
                placeholder='Total Purchased Items'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='total_spent'>Total Spent:</label>
              <input
                type='number'
                className='form-control'
                name='total_spent'
                value={total_spent}
                onChange={(e) => {
                  setTotal_spent(e.target.value);
                }}
                placeholder='Total Spent'
              />
            </div>
            <button type='submit' className='btn btn-default'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
