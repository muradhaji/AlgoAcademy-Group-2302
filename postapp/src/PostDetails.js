import { isEmpty, isMap } from 'lodash';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PostDetails() {
  let [post, setPost] = useState(null);
  let [loading, setLoading] = useState(false);
  let [user, setUser] = useState(null);
  let [userLoading, setUserLoading] = useState(false);
  let [comments, setComments] = useState([]);
  let [commentsLoading, setCommentsLoading] = useState(false);

  let params = useParams();
  let { id } = params;

  console.log(params);

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: 'GET' })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        if (!isEmpty(data)) {
          setPost(data);
        }
        setLoading(false);
      })
      .catch(function (err) {
        console.log(err);
        setLoading(false);
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
      fetch(`https://jsonplaceholder.typicode.com/comments`, { method: 'GET' })
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          let foundComments = data.filter(
            (comment) => comment.postId === post.id
          );
          if (!isEmpty(foundComments)) {
            setComments(foundComments);
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
    <div>
      {loading ? (
        'Loading...'
      ) : post ? (
        <>
          <div>
            <b>User:</b>{' '}
            {userLoading ? 'Loading...' : user ? user.name : 'Not found!'}
          </div>
          <div>
            <b>Title:</b> {post.title}
          </div>
          <div>
            <b>Body:</b>
            {post.body}
          </div>
          <div>
            <div>
              <b>Comments:</b>
            </div>
            {commentsLoading
              ? 'Loading ...'
              : comments.length
              ? comments.map((comment) => (
                  <>
                    <div>
                      <b>{comment.email}</b>
                    </div>
                    {comment.body}
                  </>
                ))
              : 'There is not any comment.'}
          </div>
        </>
      ) : (
        'Post not found!'
      )}
    </div>
  );
}

export default PostDetails;
