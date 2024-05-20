import { useContext, useEffect } from 'react';
import Post from './Post';
import './Posts.css';
import MyContext from './context/MyContext.js';

function Posts() {
  let context = useContext(MyContext);
  let { posts, setPosts, postsLoading, setPostsLoading } = context;

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='postsHolder'>
      {postsLoading
        ? 'Posts loading ...'
        : posts.length
        ? posts.map(function (post) {
            return <Post data={post} key={post.id} />;
          })
        : 'Empty..'}
    </div>
  );
}

export default Posts;
