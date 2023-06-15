import React, { useEffect, useState, Fragment } from "react";
import { getUserAPI, deleteUserAPI } from "../../../src/utils/api/UserAPI";
import Table from "react-bootstrap/Table";
import "./userList.css";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@material-ui/icons";

export default function UserList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getUserAPI();
      setData(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
      // Set an error state or display an error message to the user
    }
  };

  const handleEdit = (id) => {
    alert(id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?") === true) {
      await deleteUserAPI(id);
      window.location.reload();
    }
  };

  return (
    <Fragment>
      <Table responsive className="user-list-table">
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>FullName</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Country</th>
            <th>Gender</th>
            <th>Password</th>
            <th>Address</th>
            <th>Avatar</th>
            <th>isActive</th>
            <th>RoleId</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.id}</td>
                  <td className="userListUser">{item.fullname}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.country}</td>
                  <td>{item.gender}</td>
                  <td>{item.password}</td>
                  <td>{item.address}</td>
                  <td>{item.avatar}</td>
                  <td>{item.isActive ? "True" : "False"}</td>
                  <td>{item.roleId}</td>
                  <td colSpan={2}>
                    {/* <button
                      className="btn btn-primary"
                      onClick={() => handleEdit(item.id)}
                    >
                      Edit
                    </button> */}
                    <Link to={`/user/${item.id}`}>
                      <button
                        className="userListEdit"
                        onClick={() => handleEdit(item.id)}
                      >
                        Edit
                      </button>
                    </Link>
                    <DeleteOutline
                      className="btn btn-damger"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </DeleteOutline>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="12">Loading...</td>
            </tr>
          )}
        </tbody>
      </Table>
    </Fragment>
  );
}
