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
              <u>
                <h4>Comments</h4>
              </u>
              <ul>
                {post._comments.map((comment) => {
                  return (
                    <li key={comment.id}>
                      <b>
                        <h3>{comment.name}</h3>
                      </b>
                      <p>{comment.body}</p>
                    </li>
                  );
                })}
              </ul>
              <hr />
            </div>
          );
        })}
      </ul>
    </div>
  );
};
