import { useEffect, useState } from "react";
import React from "react";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./user.css";

export default function User() {
  const [data, setData] = useState("");

  const [id, setId] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [password, SetPassword] = useState("");
  const [address, SetAddress] = useState("");
  const [avatar, SetAvatar] = useState("");
  const [isActive, SetIsActive] = useState(0);
  const [roleId, SetRoleId] = useState("");

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userUpdate">
        <span className="userUpdateTitle">Edit</span>
        <form className="userUpdateForm">
          <div className="userUpdateLeft">
            <div className="userUpdateItem">
              <label>Username</label>
              <input
                type="text"
                value={fullname}
                onChange={(e) => {
                  setFullname(e.target.value);
                }}
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Anna Becker"
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>Email</label>
              <input
                type="text"
                placeholder="annabeck99@gmail.com"
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>Phone</label>
              <input
                type="text"
                placeholder="+1 123 456 67"
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>Country</label>
              <input
                type="text"
                placeholder="New York | USA"
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>Gender</label>
              <div className="UserUpdateGender">
                <input type="radio" name="gender" id="male" value="male" />
                <label for="male">Male</label>
                <input type="radio" name="gender" id="female" value="female" />
                <label for="female">Female</label>
                <input type="radio" name="gender" id="other" value="other" />
                <label for="other">Other</label>
              </div>
            </div>
            <div className="userUpdateItem">
              <label>Password</label>
              <input
                type="text"
                placeholder="New York | USA"
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>Address</label>
              <input
                type="text"
                placeholder="New York | USA"
                className="userUpdateInput"
              />
            </div>
            <div className="userUpdateItem">
              <label>IsActive</label>
              <select className="newUserSelect" name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="userUpdateItem">
              <label>RoleId</label>
              <input
                type="text"
                placeholder="New York | USA"
                className="userUpdateInput"
              />
            </div>
          </div>
          <div className="userUpdateRight">
            <div className="userUpdateUpload">
              <img
                className="userUpdateImg"
                src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              />
              <label htmlFor="file">
                <Publish className="userUpdateIcon" />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="userUpdateButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
