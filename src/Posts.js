import React, { useContext } from 'react';
import { StoreContext } from './state/posts';

export const Posts = () => {
  const store = useContext(StoreContext);
  const state = store.state;

  return (
    <div>
      <ul>
        {state.posts?.map((post) => {
          return (
            <div key={post.id}>
              <li>
                <b>
                  <h3>{post.title}</h3>
                </b>
                <p>{post.body}</p>
              </li>
              <hr />
            </div>
          );
        })}
      </ul>
    </div>
  );
};
