import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'


export const Home = () => {
  const [users, setUsers] = useState([])
  const navigate = useNavigate();

  const requestData = async () => {
    try {
      await axios.get('http://localhost:8080/clients')
      .then((result) => {
        console.log(result.data);
        setUsers(result.data)
      })
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    requestData()
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
                {users.map(cust =>
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
