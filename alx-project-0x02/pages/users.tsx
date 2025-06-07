import React from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { type UserProps } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => (
  <div>
    <Header />
    <h1>Users Page</h1>
    {users.length === 0 ? (
      <p>No users found.</p>
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

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return {
    props: { users },
  };
}

export default Users;
