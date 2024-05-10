import { isEmpty, isMap } from 'lodash';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './PostDetails.css';

function PostDetails() {
  let [post, setPost] = useState(null);
  let [postLoading, setPostLoading] = useState(false);
  let [user, setUser] = useState(null);
  let [userLoading, setUserLoading] = useState(false);
  let [comments, setComments] = useState([]);
  let [commentsLoading, setCommentsLoading] = useState(false);

  let params = useParams();
  let { id } = params;

  console.log(params);

  useEffect(() => {
    setPostLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: 'GET' })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        if (!isEmpty(data)) {
          setPost(data);
        }
        setPostLoading(false);
      })
      .catch(function (err) {
        console.log(err);
        setPostLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!isEmpty(post)) {
      setUserLoading(true);
      fetch(`https://jsonplaceholder.typicode.com/users`, { method: 'GET' })
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          let foundUser = data.find(function (user) {
            return user.id === post.userId;
          });
          if (!isEmpty(foundUser)) {
            setUser(foundUser);
          }
          setUserLoading(false);
        })
        .catch(function (err) {
          console.log(err);
          setUserLoading(false);
        });
    }
  }, [post]);

  useEffect(() => {
    if (!isEmpty(post)) {
      setCommentsLoading(true);
      fetch(`https://jsonplaceholder.typicode.com/post/${post.id}/comments`, {
        method: 'GET',
      })
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          if (!isEmpty(data)) {
            setComments(data);
          }
          setCommentsLoading(false);
        })
        .catch(function (err) {
          console.log(err);
          setCommentsLoading(false);
        });
    }
  }, [post]);

  return (
    <div className='postDetailsContainer'>
      {postLoading ? (
        'Post loading ...'
      ) : post ? (
        <>
          <div>
            <b>User:</b>{' '}
            {userLoading ? (
              'User loading ...'
            ) : user ? (
              <Link to={`/users/${user.id}`}>{user.name}</Link>
            ) : (
              'Not found!'
            )}
          </div>
          <div>
            <b>Title:</b> {post.title}
          </div>
          <div>
            <b>Body:</b>
            {post.body}
          </div>
          <div>
            <div className='commentsContainer'>
              <div>
                <b>Comments:</b>
              </div>
              {commentsLoading
                ? 'Comments loading ...'
                : comments.length
                ? comments.map((comment) => (
                    <div className='commentContainer'>
                      <div>
                        <b>{comment.email}</b>
                      </div>
                      {comment.body}
                    </div>
                  ))
                : 'There is not any comment.'}
            </div>
          </div>
        </>
      ) : (
        'Post not found!'
      )}
    </div>
  );
}

export default PostDetails;
