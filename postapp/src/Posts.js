import { useEffect } from 'react';
import { useState } from 'react';
import Post from './Post';
import './Posts.css';

function Posts() {
  let [postList, setPostList] = useState([]);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts', { method: 'GET' })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setPostList(data);
        setLoading(false);
      })
      .catch(function (err) {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className='postsHolder'>
      {loading
        ? 'Loading...'
        : postList.length
        ? postList.map(function (post) {
            return <Post data={post} />;
          })
        : 'Empty..'}
    </div>
  );
}

export default Posts;
