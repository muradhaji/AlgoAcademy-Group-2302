import './Post.css';
import { Link } from 'react-router-dom';

function Post(props) {
  let { data } = props;

  return (
    // <Link to={String(data.id)} className='post'>
    <Link to={`/posts/${data.id}`} className='post'>
      <b>Title:</b> {data.title}
    </Link>
  );
}

export default Post;
