import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LocalPostsCreate.css';

function LocalPostsCreate() {
  let [users, setUsers] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    let localusers = JSON.parse(localStorage.getItem('localusers') || '[]');
    setUsers(localusers);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    let localPosts = JSON.parse(localStorage.getItem('localposts') || '[]');
    let maxId = 0;

    for (let i = 0; i < localPosts.length; i++) {
      if (localPosts[i].id > maxId) {
        maxId = localPosts[i].id;
      }
    }

    let newPost = {
      id: maxId + 1,
      userId: Number(e.target.userId.value),
      title: e.target.title.value,
      body: e.target.body.value,
    };

    localPosts.push(newPost);

    localStorage.setItem('localposts', JSON.stringify(localPosts));

    navigate(`/localposts/${newPost.id}`);
  };

  return (
    <>
      <h2>Create post:</h2>
      <form className='createPost' onSubmit={handleSubmit}>
        <select name='userId'>
          <option disabled selected hidden>
            User
          </option>
          {users.length &&
            users.map((user) => (
              <option value={user.id} key={user.id}>
                {user.username}
              </option>
            ))}
        </select>
        <input name='title' type='text' placeholder='Title' />
        <textarea name='body' placeholder='Body'></textarea>
        <div className='buttonHolder'>
          <input type='submit' value='Create' />
        </div>
      </form>
    </>
  );
}

export default LocalPostsCreate;
