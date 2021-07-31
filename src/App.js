import { useEffect, useReducer } from 'react';
import { actions, initialState, postReducer } from './state/posts';
import './App.css';
import { Posts } from './Posts';

function App() {
  const [state, dispatch] = useReducer(postReducer, initialState);

  useEffect(() => {
    dispatch({
      type: actions.GET_POSTS,
    });
    async function fetchPosts() {
      try {
        const posts = await (
          await fetch('https://jsonplaceholder.typicode.com/posts')
        ).json();
        dispatch({
          type: actions.GET_POSTS_SUCCESS,
          payload: posts,
        });
      } catch (error) {
        dispatch({
          type: actions.GET_POSTS_FAILURE,
        });
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className='App'>
      {state.loading && <p>LOADING ........</p>}
      <Posts />
    </div>
  );
}

export default App;
