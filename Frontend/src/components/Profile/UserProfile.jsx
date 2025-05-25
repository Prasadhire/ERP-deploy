import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";
import Swal from "sweetalert2";
import "./UserProfile.css";

const UserProfile = () => {
  const [profile, setProfile] = useState({
    fullname: "",
    email: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    api.get("/users/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => setProfile(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    api
      .put("/users/profile", profile, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => Swal.fire("Success", "Profile updated successfully", "success"))
      .catch((err) =>
        Swal.fire("Error", err.response?.data?.message || "Failed to update profile", "error")
      );
  };

  return (
    <div className="profile-container">
      <button
        type="button"
        className="back-button"
        onClick={() => navigate(-1)}
        style={{ marginBottom: "1rem" }}
      >
        ← Back
      </button>
      <h2 className="profile-header">Your Profile</h2>
      {/* Show account created date if available */}
      {profile.createdAt && (
        <div style={{ marginBottom: "1.2rem", color: "#64748b", fontWeight: 500 }}>
          Joined: {new Date(profile.createdAt).toLocaleDateString()}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <label className="profile-label">Full Name</label>
        <input
          type="text"
          name="fullname"
          value={profile.fullname}
          onChange={handleChange}
          className="profile-input"
          required
        />

        <label className="profile-label">Email</label>
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
          className="profile-input"
          disabled
        />

        <button
          type="submit"
          className="profile-update-btn"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default UserProfile;
