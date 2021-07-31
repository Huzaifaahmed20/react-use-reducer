import React, { useReducer } from 'react';
import { initialState, postReducer } from './state/posts';

export const Posts = () => {
  const [state] = useReducer(postReducer, initialState);
  return (
    <div>
      <ul>
        {state.posts?.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
};
