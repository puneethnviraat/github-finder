import React, { useState, useContext } from 'react';
import GithubContext from '../context/github/GithubContext';
import AlertContext from '../context/alert/AlertContext';

const UserSearch = () => {
  const { setAlert } = useContext(AlertContext);
  const [text, setText] = useState('');
  const { users, searchUsers, clearUsers } = useContext(GithubContext);
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('please enter something', 'error');
    } else {
      // @todo search users
      searchUsers(text);
      setText('');
    }
  };
  const handleClear = () => {
    clearUsers();
  };
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                value={text}
                onChange={handleChange}
                className="w-full pr-40 bg-gray-200 input input-md text-black"
                placeholder="Search"
              />
              <button
                type="submit"
                className=" bg-black absolute top-0 right-0 rounded-r-md rounded-l-none w-36 btn-md"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        {users.length > 0 && (
          <button className="btn btn-ghost btn-md" onClick={handleClear}>
            Clear
          </button>
        )}
      </div>
    </div>
  );
};

export default UserSearch;
