import { useEffect } from 'react';
import { useState } from 'react';
import Post from './Post';
import './Posts.css';

function Posts() {
  let [posts, setPosts] = useState([]);
  let [postsLoading, setPostsLoading] = useState(false);

  useEffect(() => {
    setPostsLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts', { method: 'GET' })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setPosts(data);
        setPostsLoading(false);
      })
      .catch(function (err) {
        console.log(err);
        setPostsLoading(false);
      });
  }, []);

  return (
    <div className='postsHolder'>
      {postsLoading
        ? 'Posts loading ...'
        : posts.length
        ? posts.map(function (post) {
            return <Post data={post} />;
          })
        : 'Empty..'}
    </div>
  );
}

export default Posts;
