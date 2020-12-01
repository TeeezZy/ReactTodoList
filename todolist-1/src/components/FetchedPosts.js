import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import Loader from './Loader';
import Post from './Post';

export default () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => {
    return state.posts.fetchedPosts;
  });

  const loading = useSelector((state) => {
    return state.app.loading;
  });

  if (loading) {
    return <Loader />;
  }

  if (!posts.length) {
    return (
      <button
        className='btn btn-primary'
        onClick={() => {
          dispatch(fetchPosts());
        }}
      >
        Load
      </button>
    );
  }

  return posts.map((post) => <Post post={post} key={post.id} />);
};
