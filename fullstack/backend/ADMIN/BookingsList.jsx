/* eslint-disable react/prop-types */


import "./BookingsList.css";

// eslint-disable-next-line react/prop-types
function BookingsList({ bookings }) {
  return (
    <div className="booking-list">
      <h2>All Bookings</h2>
     
      {bookings.length > 0 ? (
        <ul>
          {bookings.map((booking) => (
            <li key={booking.id}>
              <div className="booking-item">
                <h3>{booking.eventTitle}</h3>
                <p>{booking.eventDate}</p>
                
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No bookings available</p>
      )}
    </div>
  );
}

export default BookingsList;
