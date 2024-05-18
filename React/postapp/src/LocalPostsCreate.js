import { useContext, useEffect } from 'react';
import MyContext from './context/MyContext';
import { useNavigate } from 'react-router-dom';
import './LocalPostsCreate.css';

function LocalPostsCreate() {
  let { localUsers, setLocalUsers, localUsersLoading, setLocalUsersLoading } =
    useContext(MyContext);

  let navigate = useNavigate();

  useEffect(() => {
    setLocalUsersLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users', { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        setLocalUsers(data);
        setLocalUsersLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLocalUsersLoading(false);
      });
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

    navigate('/localposts');
  };

  return (
    <>
      <h2>Create new post:</h2>
      <form className='createPost' onSubmit={handleSubmit}>
        <select name='userId'>
          <option disabled selected hidden>
            User
          </option>
          {localUsers.length &&
            localUsers.map((user) => (
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
