import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

export const Detail = () => {
  const [currentUser, setCurrentUser] = useState({});

  const navigate = useNavigate();
  const { id } = useParams();
  // console.log()

  const requestData = () => {
    try {
      axios.get(`http://localhost:8080/clients/${id}`).then((result) => {
        console.log(result.data);
        setCurrentUser(result.data);
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    requestData();
  }, []);

  const RequestDelete = (id) => {
    console.log(id);
    axios.delete('http://localhost:8080/clients/' + id).then((result) => {
      navigate('/');
    });
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
            <dd>{currentUser.name}</dd>
            <dt>Address:</dt>
            <dd>{currentUser.address}</dd>
            <dt>Total Purchased Items:</dt>
            <dd>{currentUser.total_item}</dd>
            <dt>Total spent:</dt>
            <dd>{currentUser.total_spent}</dd>
          </dl>
          <Link to={`/edit/${currentUser.id}`} className='btn btn-success'>
            Edit
          </Link>
          &nbsp;
          <button
            onClick={(e) => RequestDelete(e, id)}
            className='btn btn-danger'
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
