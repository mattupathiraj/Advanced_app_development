// PageWithButtons.jsx (React component)

import './Mainpage.css';

const Mainpage = () => {
  return (
    <div className="page">
      <h1>Welcome to the Page</h1>
      <div className="button-container">
        <button className="admin-button">Admin</button>
        <button className="user-button">User</button>
      </div>
    </div>
  );
};

export default Mainpage;
