import { reverse, sortBy, toNumber } from 'lodash';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Post from './Post';

function LocalUsersDetails() {
  let [user, setUser] = useState(null);
  let [posts, setPosts] = useState([]);

  let navigate = useNavigate();

  let params = useParams();
  let { id: userId } = params;

  useEffect(() => {
    let localusers = JSON.parse(localStorage.getItem('localusers') || '[]');
    let foundUser = localusers.find((user) => user.id === toNumber(userId));
    if (foundUser) {
      setUser(foundUser);
    }
  }, []);

  useEffect(() => {
    if (user) {
      setPosts(getFilteredAndSortedPosts());
    }
  }, [user]);

  function getFilteredAndSortedPosts() {
    let localposts = JSON.parse(localStorage.getItem('localposts') || '[]');
    let filteredposts = localposts.filter(
      (post) => post.userId === toNumber(userId)
    );
    let sortedposts = reverse(sortBy(filteredposts, ['created_at']));
    return sortedposts.length ? sortedposts : [];
  }

  function handleDelete() {
    let localusers = JSON.parse(localStorage.getItem('localusers') || '[]');
    let newLocalUsers = localusers.filter(
      (user) => user.id !== toNumber(userId)
    );
    localStorage.setItem('localusers', JSON.stringify(newLocalUsers));
    navigate('/localusers');
  }

  return (
    <div className='postDetails'>
      <div className='buttons'>
        <h2>User details</h2>
        <Link to={`/localusers/edit/${user?.id}`}>
          <i className='fa-solid fa-pen-to-square'></i>
        </Link>
        <div onClick={handleDelete}>
          <i className='fa-solid fa-trash-can'></i>
        </div>
      </div>
      <div className='userDetailsContainer'>
        {user ? (
          <>
            <div className='userDetails'>
              <div>
                <b>Username:</b> {user.username}
              </div>
              <div>
                <b>Email:</b> {user.email}
              </div>
            </div>
            <div className='postsHolder'>
              <div>
                <b>Posts:</b>
              </div>
              {posts.length
                ? posts.map((post) => (
                    <Link to={`/localposts/${post.id}`} className='post'>
                      <b>Title:</b> {post.title}
                    </Link>
                  ))
                : 'There is not any posts.'}
            </div>
          </>
        ) : (
          'User not found :('
        )}
      </div>
    </div>
  );
}

export default LocalUsersDetails;
