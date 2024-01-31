
import "./MyBookings.css";
import { useState } from "react";
function MyBookings() {
  // Sample data for events
  const eventsData = [
    {
      id: 1,
      title: "Web Development Workshop",
      description: "Join us for an exciting workshop on web development.",
    },
    {
      id: 2,
      title: "Data Science Conference",
      description: "Explore the latest trends in data science and machine learning.",
    },
    {
      id: 3,
      title: "Data Science Conference",
      description: "Explore the latest trends in data science and machine learning.",
    },
    {
      id: 4,
      title: "Data Science Conference",
      description: "Explore the latest trends in data science and machine learning.",
    },
    {
      id: 5,
      title: "Data Science Conference",
      description: "Explore the latest trends in data science and machine learning.",
    },
  
    // Add more events as needed
  ];

  // State to manage booked events
  const [bookedEvents, setBookedEvents] = useState([]);

  // Function to book an event
  const bookEvent = (event) => {
    setBookedEvents([...bookedEvents, event]);
    alert(`Event "${event.title}" booked successfully!`);
  };

  return (
    <div className="event-booking-container">
      <h1>Event Booking System</h1><br></br>

      {/* View All Events */}
      <div className="event-section">
        <h2>All Events</h2>
        <div className="event-list">
          {eventsData.map((event) => (
            <div className="event-item" key={event.id}>
              <h3>{event.title}</h3>
              <p>{event.description}</p><br></br>
              <button className="btn" onClick={() => bookEvent(event)}>
                Book 
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* My Bookings */}
      <div className="event-section">
        <h2>My Bookings</h2>
        <div className="event-list">
          {bookedEvents.map((bookedEvent) => (
            <div className="event-item" key={bookedEvent.id}>
              <h3>{bookedEvent.title}</h3>
              <p>{bookedEvent.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyBookings;
