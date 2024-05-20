import { Link } from 'react-router-dom';
import './LocalPosts.css';
import { useEffect, useState } from 'react';

function LocalPosts() {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    let localposts = JSON.parse(localStorage.getItem('localposts') || '[]');
    setPosts(localposts);
  }, []);

  return (
    <>
      <div className='localposts'>
        <div className='buttons'>
          <h2 className='pageHeader'>All Posts</h2>
          <Link to='/localposts/create'>Create</Link>
        </div>
        <div className='localPostsHolder'>
          {posts.length
            ? posts.map((post) => (
                <Link
                  to={`/localposts/${post.id}`}
                  className='post'
                  key={post.id}
                >
                  <b>Title: </b>
                  {post.title}
                </Link>
              ))
            : 'There is not any posts.'}
        </div>
      </div>
    </>
  );
}

export default LocalPosts;
