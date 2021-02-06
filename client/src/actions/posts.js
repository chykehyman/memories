import * as API from '../api';

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await API.fetchPosts();
    dispatch({
      type: 'FETCH_ALL',
      payload: data.payload,
    });
  } catch (error) {
    console.error(error.message);
  }
};

export const createPost = (postData) => async (dispatch) => {
  try {
    const { data } = await API.createPost(postData);
    dispatch({ type: 'CREATE', payload: data.payload });
  } catch (error) {
    console.error(error.message);
  }
};
