import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { type UserProps } from "@/interfaces";

function Users() {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Header />
      <h1>Users Page</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        users.map((user) => (
          <UserCard
            key={user.email}
            name={user.name}
            email={user.email}
            address={user.address}
          />
        ))
      )}
    </div>
  );
}

export default Users;
