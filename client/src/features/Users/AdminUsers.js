import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, deleteUser, updateUser } from './UsersSlice';
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
    dispatch(updateUser({ id: userId, ...editedValues[userId] }));
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
    <div className="table-container">
    <table className="table table-striped">
        <thead className="table-header">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>City</th>
            <th>State</th>
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
                    value={editedValues[user.id]?.first_name || `${user.first_name}`}
                    onChange={(e) => handleInputChange(user.id, 'first_name', e.target.value)}
                  />
                ) : (
                  `${user.first_name}`
                )}
              </td>
              <td>
                {editableFields[user.id] ? (
                  <input
                    type="text"
                    value={editedValues[user.id]?.last_name || `${user.last_name} ${user.last_name}`}
                    onChange={(e) => handleInputChange(user.id, 'last_name', e.target.value)}
                  />
                ) : (
                  `${user.last_name}`
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
                    value={editedValues[user.id]?.user_city || user.user_city}
                    onChange={(e) => handleInputChange(user.id, 'user_city', e.target.value)}
                  />
                ) : (
                  user.user_city
                )}
              </td>
              <td>
              {editableFields[user.id] ? (
                  <input
                    type="text"
                    value={editedValues[user.id]?.user_state || user.user_state}
                    onChange={(e) => handleInputChange(user.id, 'user_state', e.target.value)}
                  />
                ) : (
                  user.user_state
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
