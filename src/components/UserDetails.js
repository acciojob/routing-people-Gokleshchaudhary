import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    setLoading(true); // Set loading true on each new request
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false); // Done loading
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; // REQUIRED FOR CYPRESS TO PASS
  }

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
    </div>
  );
}

export default UserDetails;
