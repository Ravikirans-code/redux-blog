import jsonPlacholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPostAndUSers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    // console.log(getState().posts;
    _.uniq(_.map(getState().posts, 'userId')).forEach(id => dispatch(fetchUser(id)));

}

export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlacholder.get('/posts');
    dispatch({ type: "FETCH_POSTS", payload: response.data });
}
export const fetchUser = (id) => async (dispatch) => {
    const response = await jsonPlacholder.get(`/users/${id}`);
    dispatch({ type: "FETCH_USER", payload: response.data });
}