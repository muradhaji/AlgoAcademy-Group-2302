import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { floor, reverse, sortBy, toNumber } from 'lodash';
import './LocalPostDetails.css';

function LocalPostDetails() {
  let navigate = useNavigate();

  let params = useParams();
  let { id: postId } = params;

  let [post, setPost] = useState(null);
  let [user, setUser] = useState(null);
  let [comments, setComments] = useState([]);

  useEffect(() => {
    let localposts = JSON.parse(localStorage.getItem('localposts') || '[]');
    let foundPost = localposts.find((post) => post.id === toNumber(postId));
    if (foundPost) {
      setPost(foundPost);
    }
  }, [postId]);

  useEffect(() => {
    if (post) {
      let localusers = JSON.parse(localStorage.getItem('localusers') || '[]');
      let foundUser = localusers.find((user) => user.id === post.userId);
      if (foundUser) {
        setUser(foundUser);
      }
    }
  }, [post]);

  useEffect(() => {
    if (post) {
      setComments(getFilteredAndSortedComments());
    }
  }, [post]);

  function getFilteredAndSortedComments() {
    let localcomments = JSON.parse(
      localStorage.getItem('localcomments') || '[]'
    );
    let filteredcomments = localcomments.filter(
      (comment) => comment.postId === post.id
    );
    let sortedcomments = reverse(sortBy(filteredcomments, ['created_at']));

    return sortedcomments.length ? sortedcomments : [];
  }

  function handleDelete() {
    let localposts = JSON.parse(localStorage.getItem('localposts') || '[]');
    let newLocalPosts = localposts.filter(
      (post) => post.id !== toNumber(postId)
    );
    localStorage.setItem('localposts', JSON.stringify(newLocalPosts));
    navigate('/localposts');
  }

  function createComment(e) {
    e.preventDefault();

    let localcomments = JSON.parse(
      localStorage.getItem('localcomments') || '[]'
    );

    let maxId = 0;
    for (let i = 0; i < localcomments.length; i++) {
      if (localcomments[i].id > maxId) {
        maxId = localcomments[i].id;
      }
    }

    let newComment = {
      id: maxId + 1,
      postId: toNumber(postId),
      email: e.target.email.value,
      body: e.target.body.value,
      created_at: new Date(),
    };

    localcomments.push(newComment);

    localStorage.setItem('localcomments', JSON.stringify(localcomments));

    e.target.email.value = '';
    e.target.body.value = '';

    setComments(getFilteredAndSortedComments());
  }

  function getTime(createdAt) {
    if (!createdAt) {
      return '';
    }

    createdAt = new Date(createdAt);
    let now = new Date();
    let diff = now - createdAt;

    let days = floor(diff / (24 * 60 * 60 * 1000));
    diff -= days * 24 * 60 * 60 * 1000;
    let hours = floor(diff / (60 * 60 * 1000));
    diff -= hours * 60 * 60 * 1000;
    let minutes = floor(diff / (60 * 1000));

    return days
      ? `${days}d ago`
      : hours
      ? `${hours}h ago`
      : minutes
      ? `${minutes}m ago`
      : 'now';
  }

  return (
    <div className='postDetails'>
      <div className='buttons'>
        <h2>Post details</h2>
        <Link to={`/localposts/edit/${post?.id}`}>
          <i className='fa-solid fa-pen-to-square'></i>
        </Link>
        <div onClick={handleDelete}>
          <i className='fa-solid fa-trash-can'></i>
        </div>
      </div>
      <div className='details'>
        {post ? (
          <>
            {user ? (
              <div>
                <b>User: </b>{' '}
                <Link to={`/localusers/${user.id}`}>{user.username}</Link>
              </div>
            ) : (
              'User not found!'
            )}
            <div>
              <b>Title: </b> {post.title}
            </div>
            <div>
              <b>Body: </b> {post.body}
            </div>
          </>
        ) : (
          'Post not found!'
        )}
      </div>
      <div className='comments'>
        <b>Comments:</b>
        <br />
        <form onSubmit={createComment}>
          <input type='email' name='email' placeholder='Email' />
          <textarea name='body' placeholder='Body'></textarea>
          <input type='submit' value='Create Comment' />
        </form>
        <div className='commentsContainer'>
          {comments.length
            ? comments.map((comment) => (
                <div className='commentContainer' key={comment.id}>
                  <div>
                    <b>{comment.email}</b>
                  </div>
                  <div>{comment.body}</div>
                  <span className='time'>{getTime(comment.created_at)}</span>
                </div>
              ))
            : 'There is not any comments!'}
        </div>
      </div>
    </div>
  );
}

export default LocalPostDetails;
