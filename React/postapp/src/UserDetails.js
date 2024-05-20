import { isEmpty } from 'lodash';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Post from './Post';

function UserDetails() {
  let [user, setUser] = useState(null);
  let [userLoading, setUserLoading] = useState(false);
  let [posts, setPosts] = useState([]);
  let [postsLoading, setPostsLoading] = useState(false);

  let params = useParams();
  let { id } = params;

  useEffect(() => {
    if (id) {
      setUserLoading(true);
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((data) => {
          if (!isEmpty(data)) {
            setUser(data);
          }
          setUserLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setUserLoading(false);
        });
    }
  }, [id]);

  useEffect(() => {
    if (user) {
      setPostsLoading(true);
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`, {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((data) => {
          if (!isEmpty(data)) {
            setPosts(data);
          }
          setPostsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setPostsLoading(false);
        });
    }
  }, [user]);

  return (
    <div className='userDetailsContainer'>
      {userLoading ? (
        'User loading ...'
      ) : user ? (
        <>
          <div className='userDetails'>
            <div>
              <b>Name:</b> {user.name}
            </div>
            <div>
              <b>Username:</b> {user.username}
            </div>
            <div>
              <b>Email:</b> {user.email}
            </div>
            <div>
              <b>Phone:</b> {user.phone}
            </div>
          </div>
          <div className='postsHolder'>
            <div>
              <b>Posts:</b>
            </div>
            {postsLoading
              ? 'Posts loading ...'
              : posts.length
              ? posts.map((post) => <Post data={post} key={post.id} />)
              : 'There is not any posts.'}
          </div>
        </>
      ) : (
        'User not found :('
      )}
    </div>
  );
}

export default UserDetails;
