import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, deleteUser } from './UsersSlice';
import { ClipLoader } from 'react-spinners';

function AdminUsers() {
  const [editableFields, setEditableFields] = useState({});
  const [editedValues, setEditedValues] = useState({});

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.entities);
  const loading = useSelector((state) => state.users.status === 'loading');

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDelete = (userId) => {
    dispatch(deleteUser(userId));
  };  

  const handleUpdate = (userId) => {
    setEditableFields((prevState) => ({
      ...prevState,
      [userId]: !prevState[userId],
    }));
  };

  const handleInputChange = (userId, fieldName, value) => {
    setEditedValues((prevState) => ({
      ...prevState,
      [userId]: {
        ...prevState[userId],
        [fieldName]: value,
      },
    }));
  };

  const handleSave = (userId) => {
    console.log('Edited Values from Save', editedValues);
    // Dispatch an action to update the user with editedValues[userId]
    // You need to implement this action in your Redux logic

    setEditedValues((prevState) => ({
      ...prevState,
      [userId]: {},
    }));
    handleUpdate(userId);
  };

  if (loading) {
    return (
      <div className="loading-spinner-container">
        <div className="loading-spinner">
          <ClipLoader loading={loading} size={150} color={'#123abc'} />
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>User List</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>User Full Name</th>
            <th>User Phone</th>
            <th>User Email</th>
            <th>User Location</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                {editableFields[user.id] ? (
                  <input
                    type="text"
                    value={editedValues[user.id]?.full_name || `${user.first_name} ${user.last_name}`}
                    onChange={(e) => handleInputChange(user.id, 'full_name', e.target.value)}
                  />
                ) : (
                  `${user.first_name} ${user.last_name}`
                )}
              </td>
              <td>
                {editableFields[user.id] ? (
                  <input
                    type="text"
                    value={editedValues[user.id]?.phone || user.phone}
                    onChange={(e) => handleInputChange(user.id, 'phone', e.target.value)}
                  />
                ) : (
                  user.phone
                )}
              </td>
              <td>
                {editableFields[user.id] ? (
                  <input
                    type="text"
                    value={editedValues[user.id]?.email || user.email}
                    onChange={(e) => handleInputChange(user.id, 'email', e.target.value)}
                  />
                ) : (
                  user.email
                )}
              </td>
              <td>
                {editableFields[user.id] ? (
                  <input
                    type="text"
                    value={`${editedValues[user.id]?.user_city || user.user_city}, ${
                      editedValues[user.id]?.user_state || user.user_state
                    }`}
                    onChange={(e) => {
                      const [city, state] = e.target.value.split(', ');
                      handleInputChange(user.id, 'user_city', city);
                      handleInputChange(user.id, 'user_state', state);
                    }}
                  />
                ) : (
                  `${user.user_city}, ${user.user_state}`
                )}
              </td>
              <td>
                <div className="controls">
                {editableFields[user.id] ? (
                    <button onClick={() => handleSave(user.id)}>✅</button>
                    ) : (
                    <button onClick={() => handleUpdate(user.id)}>✍️</button>
                    )}
                </div>
            </td>
            <td>
            <button onClick={() => handleDelete(user.id)}>❌</button>
            </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminUsers;
