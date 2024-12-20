import React, { useState } from "react";
import axios from "axios";

function SignUp() {
  const API_URL = "http://localhost:3000/users";
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const addUser = async () => {
    console.log(newUser);
    try {
      const response = await axios.post(API_URL, newUser);
      console.log("User added", response.data);
    } catch (error) {
      console.error("Error in adding", error);
    }
  };

  const [userIdToDelete, setUserIdToDelete] = useState("");
  const deleteUser = async () => {
    if (!userIdToDelete) {
      console.error("User ID is required to delete a user");
      return;
    }

    try {
      const response = await axios.delete("${API_URL}/${userIdToDelete}");
      console.log("User deleted", response.data);
    } catch (error) {
      console.error("Error in deleting user", error);
    }
  };
  const [userIdToUpdate, setUserIdToUpdate] = useState("");
  const [updatedUser, setUpdatedUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const updateUser = async () => {
    if (!userIdToUpdate) {
      console.error("User ID is required to update a user");
      return;
    }

    try {
      const response = await axios.put(
        "${API_URL}/${userIdToUpdate}",
        updatedUser
      );
      console.log("User updated", response.data);
    } catch (error) {
      console.error("Error in updating user", error);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      {/* Sign Up Form */}
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
      />
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
      />
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        value={newUser.password}
        onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
      />
      <button onClick={addUser}>Sign-up</button>
      <p>Already have an account?</p>
      <button>Login</button>

      {/* Delete User */}
      <input
        type="text"
        placeholder="User ID to delete"
        value={userIdToDelete}
        onChange={(e) => setUserIdToDelete(e.target.value)}
      />
      <button onClick={deleteUser}>Delete User</button>

      <input
        type="text"
        placeholder="User ID to update"
        value={userIdToUpdate}
        onChange={(e) => setUserIdToUpdate(e.target.value)}
      />
      <input
        type="text"
        name="name"
        placeholder="Enter new name"
        value={updatedUser.name}
        onChange={(e) =>
          setUpdatedUser({ ...updatedUser, name: e.target.value })
        }
      />
      <input
        type="email"
        name="email"
        placeholder="Enter new email"
        value={updatedUser.email}
        onChange={(e) =>
          setUpdatedUser({ ...updatedUser, email: e.target.value })
        }
      />
      <input
        type="password"
        name="password"
        placeholder="Enter new password"
        value={updatedUser.password}
        onChange={(e) =>
          setUpdatedUser({ ...updatedUser, password: e.target.value })
        }
      />
      <button onClick={updateUser}>Update User</button>
    </div>
  );
}

export default SignUp;
