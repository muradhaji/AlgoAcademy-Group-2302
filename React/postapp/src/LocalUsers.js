import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LocalUsers.css';

function LocalUsers() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    let localusers = JSON.parse(localStorage.getItem('localusers') || []);
    setUsers(localusers);
  }, []);

  return (
    <div className='localusers'>
      <div className='buttons'>
        <h2 className='pageHeader'>All Users</h2>
        <Link to='/localusers/create'>Create</Link>
      </div>
      <div className='usersContainer'>
        {users.length
          ? users.map((user) => {
              return (
                <Link
                  to={`/localusers/${user.id}`}
                  className='userContainer'
                  key={user.id}
                >
                  <span>{user.username}</span>
                  <span>{user.email}</span>
                </Link>
              );
            })
          : 'There is not any users.'}
      </div>
    </div>
  );
}

export default LocalUsers;
