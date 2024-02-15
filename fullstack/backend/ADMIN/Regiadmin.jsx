// RegistrationForm.jsx (React component)

import './Regiadmin.css';
import { useState } from 'react';

const Regiadmin = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobileNumber: '',
    role: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    const validationErrors = {};
    if (!formData.username.trim()) {
      validationErrors.username = 'Username is required';
    }

    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Invalid email format';
    }

    if (!formData.password) {
      validationErrors.password = 'Password is required';
    }

    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.mobileNumber.trim()) {
      validationErrors.mobileNumber = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      validationErrors.mobileNumber = 'Invalid mobile number';
    }

    if (!formData.role) {
      validationErrors.role = 'Role is required';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Form submission logic (can be added here)
      console.log('Form data submitted:', formData);
    }
  };

  return (
    <div className="registration-form">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        {errors.username && <p className="error">{errors.username}</p>}

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}

        <label htmlFor="mobileNumber">Mobile Number:</label>
        <input
          type="text"
          id="mobileNumber"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          required
        />
        {errors.mobileNumber && <p className="error">{errors.mobileNumber}</p>}

        <label htmlFor="role">Role:</label>
        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
        >
          <option value="">Select Role</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        {errors.role && <p className="error">{errors.role}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Regiadmin;
