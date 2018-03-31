import axios from 'axios';
import { FETCH_USER } from './types';

// A thunk is a function that wraps an expression to delay its
// evaluation
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  
  dispatch({ type: FETCH_USER, payload: res.data});
};

export const handleToken = (token) => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: res.data});
};