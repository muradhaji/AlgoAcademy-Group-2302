import { useNavigate } from 'react-router-dom';
import './LocalUsersCreate.css';

function LocalUsersCreate() {
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let localusers = JSON.parse(localStorage.getItem('localusers') || '[]');
    let maxId = 0;

    for (let i = 0; i < localusers.length; i++) {
      if (localusers[i].id > maxId) {
        maxId = localusers[i].id;
      }
    }

    let newUser = {
      id: maxId + 1,
      username: e.target.username.value,
      email: e.target.email.value,
    };

    localusers.push(newUser);

    localStorage.setItem('localusers', JSON.stringify(localusers));

    navigate(`/localusers/${newUser.id}`);
  };

  return (
    <>
      <h2>Create user:</h2>
      <form className='createUser' onSubmit={handleSubmit}>
        <input name='username' type='text' placeholder='Username' />
        <input name='email' type='email' placeholder='Email' />
        <div className='buttonHolder'>
          <input type='submit' value='Create' />
        </div>
      </form>
    </>
  );
}

export default LocalUsersCreate;
