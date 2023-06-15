import React, { useState } from "react";
import "./newUser.css";
import { Publish } from "@material-ui/icons";

export default function NewUser() {
  const [formData, setFormData] = useState(initialFormData);

  const initialFormData = Object.freeze({
    title: "Post x",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.value]: e.target.value,
    });
  };

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Full Name</label>
          <input value={formData.fullname} type="text" name="Enter Full Name" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Country</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="text" placeholder="New York | USA" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="New York | USA" />
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="newUserItem">
          <img
            className="userUpdateImg"
            src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <label htmlFor="file">
            <Publish className="newUserIcon" />
          </label>
          <input type="file" id="file" style={{ display: "none" }} />
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
