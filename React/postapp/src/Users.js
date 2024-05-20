import { isEmpty } from 'lodash';
import { useEffect, useState } from 'react';
import './Users.css';
import { Link } from 'react-router-dom';

function Users() {
  let [users, setUsers] = useState([]);
  let [usersLoading, setUsersLoading] = useState(false);

  useEffect(() => {
    setUsersLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users`, { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        if (!isEmpty(data)) {
          setUsers(data);
        }
        setUsersLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setUsersLoading(false);
      });
  }, []);

  return (
    <div className='usersContainer'>
      {usersLoading
        ? 'Users loading ...'
        : users.length
        ? users.map((user) => {
            return (
              <Link
                to={`/users/${user.id}`}
                className='userContainer'
                key={user.id}
              >
                <span>{user.name}</span>
                <span>{user.email}</span>
              </Link>
            );
          })
        : 'There is not any users.'}
    </div>
  );
}

export default Users;
