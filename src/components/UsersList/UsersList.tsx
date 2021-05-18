import React, { useEffect } from "react";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

const UsersList: React.FC = () => {
  const { users, loading, error } = useTypedSelector((state) => state.user);

  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div>
      {users.map((item) => (
        <p>{item.name}</p>
      ))}
    </div>
  );
};

export default UsersList;
