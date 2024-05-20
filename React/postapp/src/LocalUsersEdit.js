import { toNumber } from 'lodash';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function LocalUsersEdit() {
  let params = useParams();
  let { id: userId } = params;

  let [user, setUser] = useState(null);

  let navigate = useNavigate();

  useEffect(() => {
    let localusers = JSON.parse(localStorage.getItem('localusers') || '[]');
    let foundUser = localusers.find((user) => user.id === toNumber(userId));
    if (foundUser) {
      setUser(foundUser);
    }
  }, [userId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let localusers = JSON.parse(localStorage.getItem('localusers') || '[]');

    localusers = localusers.map((user) => {
      return user.id === toNumber(userId)
        ? {
            ...user,
            username: e.target.username.value,
            email: e.target.email.value,
          }
        : user;
    });

    localStorage.setItem('localusers', JSON.stringify(localusers));

    navigate(`/localusers/${userId}`);
  };

  return (
    <>
      <h2>Edit user:</h2>
      <form className='createUser' onSubmit={handleSubmit}>
        <input
          name='username'
          type='text'
          placeholder='Username'
          defaultValue={user?.username}
        />
        <input
          name='email'
          type='email'
          placeholder='Email'
          defaultValue={user?.email}
        />
        <div className='buttonHolder'>
          <input type='submit' value='Save' />
        </div>
      </form>
    </>
  );
}

export default LocalUsersEdit;
