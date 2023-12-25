import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/user/${id}`, {
      method: "DELETE",
    });
  };

  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      Users
      {users.map((user) => {
        return (
          <div>
            <h1>
              Name: {user.name}{" "}
              <Link to={`/user/${user._id}`}>
                <button>Update</button>
              </Link>
              <button
                onClick={() => handleDelete(user._id)}
                className="btn btn-primary"
              >
                X
              </button>
            </h1>
          </div>
        );
      })}
    </div>
  );
}
