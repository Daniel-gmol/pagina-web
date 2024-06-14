import React, { useEffect, useState } from "react";
import axios, {AxiosError} from "axios";

const Admin = () => {
  const [users, setUsers] = useState([]);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(`${API_URL}/api/users`);
      setUsers(response.data);
    };

    fetchUsers();
  }, []);

  const deleteUser = async (userId) => {
    try {
      await axios.post(`${API_URL}/api/deleteUser`, { id: userId }, { withCredentials: true });
      // Remove the deleted user from the state
      setUsers(users.filter(user => user.id !== userId));
    } catch (error) {
      console.error('Logout failed');
      console.error(error.response?.data);
    }

  };

  return (
    <table>
      <thead>
        <tr>
          <th style={{ padding: '10px' }}>ID</th>
          <th style={{ padding: '10px' }}>First Name</th>
          <th style={{ padding: '10px' }}>Last Name</th>
          <th style={{ padding: '10px' }}>Email</th>
          <th style={{ padding: '10px' }}>Company</th>
          <th style={{ padding: '10px' }}>Role</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td style={{ padding: '10px' }}>{user.id}</td>
            <td style={{ padding: '10px' }}>{user.first_name}</td>
            <td style={{ padding: '10px' }}>{user.last_name}</td>
            <td style={{ padding: '10px' }}>{user.email}</td>
            <td style={{ padding: '10px' }}>{user.company}</td>
            <td style={{ padding: '10px' }}>{user.rol}</td>
            <td style={{ padding: '10px' }}>
              <button className="bg-red-500 rounded-md p-2" onClick={() => deleteUser(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


export default Admin;
