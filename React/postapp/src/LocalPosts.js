import { Link } from 'react-router-dom';
import './LocalPosts.css';

function LocalPosts() {
  return (
    <>
      <div className='localposts'>
        <div className='buttons'>
          <Link to='/localposts/create'>Create</Link>
        </div>
        <div className='localPostsHolder'>All posts</div>
      </div>
    </>
  );
}

export default LocalPosts;
