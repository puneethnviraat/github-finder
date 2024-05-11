import React, { createContext } from 'react';
import { useReducer } from 'react';
import githubReducer from './GithubReducer';
const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);

  //get searchh results
  const searchUsers = async (text) => {
    const params = new URLSearchParams({
      q: text,
    });
    setLoading();
    let response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const { items } = await response.json();
    dispatch({
      type: 'GET_USERS',
      payload: items,
    });
  };
  //get a single user results
  const getUser = async (login) => {
    setLoading();
    let response = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    if (response.status === 404) {
      window.location = '/notfound';
    } else {
      const data = await response.json();
      dispatch({
        type: 'GET_USER',
        payload: data,
      });
    }
  };
  const setLoading = () =>
    dispatch({
      type: 'SET_LOADING',
    });
  const clearUsers = () => {
    dispatch({
      type: 'CLEAR_USERS',
    });
  };
  //get repos results
  const getRepos = async (login) => {
    setLoading();
    let response = await fetch(`${GITHUB_URL}/users/${login}/repos`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    dispatch({
      type: 'GET_REPOS',
      payload: data,
    });
  };
  return (
    <GithubContext.Provider
      value={{
        ...state,
        searchUsers,
        getUser,
        clearUsers,
        getRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
