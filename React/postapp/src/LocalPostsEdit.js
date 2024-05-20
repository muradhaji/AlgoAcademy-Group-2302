import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './LocalPostsCreate.css';
import { toNumber } from 'lodash';

function LocalPostsEdit() {
  let params = useParams();
  let { id } = params;

  let [post, setPost] = useState(null);

  let navigate = useNavigate();

  useEffect(() => {
    let localposts = JSON.parse(localStorage.getItem('localposts') || '[]');
    let foundPost = localposts.find((post) => post.id === toNumber(id));
    if (foundPost) {
      setPost(foundPost);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let localPosts = JSON.parse(localStorage.getItem('localposts') || '[]');

    localPosts = localPosts.map((post) => {
      return post.id === toNumber(id)
        ? { ...post, title: e.target.title.value, body: e.target.body.value }
        : post;
    });

    localStorage.setItem('localposts', JSON.stringify(localPosts));

    navigate(`/localposts/${id}`);
  };

  return (
    <>
      <h2>Edit post:</h2>
      <form className='createPost' onSubmit={handleSubmit}>
        <input
          name='title'
          type='text'
          placeholder='Title'
          defaultValue={post?.title}
        />
        <textarea
          name='body'
          placeholder='Body'
          defaultValue={post?.body}
        ></textarea>
        <div className='buttonHolder'>
          <input type='submit' value='Save' />
        </div>
      </form>
    </>
  );
}

export default LocalPostsEdit;
