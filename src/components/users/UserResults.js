import Spinner from '../layouts/Spinner';
import UserItems from '../users/UserItems';
import { useContext } from 'react';
import GithubContext from '../context/github/GithubContext';

const UserResults = () => {
  const { users, loading } = useContext(GithubContext);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => {
          return <UserItems key={user.id} user={user} />;
        })}
      </div>
    );
  }
};

export default UserResults;
