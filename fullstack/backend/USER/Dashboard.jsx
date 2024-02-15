
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Event Management Dashboard</h1>

      <div className="dashboard-stats">
        <div className="stat-box">
          <h2>Total Events</h2>
          <p>25</p>
        </div>
        <div className="stat-box">
          <h2>Booked Events</h2>
          <p>15</p>
        </div>
        <div className="stat-box">
          <h2>Revenue</h2>
          <p>$5000</p>
        </div>
      </div>

      <div className="dashboard-events">
        <h2>Recent Events</h2>
        <div className="event-list">
          {/* Display recent events */}
          <div className="event-item">
            <h3>Web Development Workshop</h3>
            <p>Join us for an exciting workshop on web development.</p>
          </div>
          <div className="event-item">
            <h3>Data Science Conference</h3>
            <p>Explore the latest trends in data science and machine learning.</p>
          </div>
          {/* Add more events as needed */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
