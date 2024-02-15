// AddEventForm.jsx (React component)

import './EventForm.css';
import { useState } from 'react';

const EventForm = () => {
  const [formData, setFormData] = useState({
    eventType: '',
    description: '',
    eventPackage: '',
    participantsCount: 0,
    charges: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="add-event-form">
      <h1>Add New Event</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="eventType">Event Type:</label>
        <input
          type="text"
          id="eventType"
          name="eventType"
          value={formData.eventType}
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>

        <label htmlFor="eventPackage">Event Package:</label>
        <input
          type="text"
          id="eventPackage"
          name="eventPackage"
          value={formData.eventPackage}
          onChange={handleChange}
          required
        />

        <label htmlFor="participantsCount">Participants Count:</label>
        <input
          type="number"
          id="participantsCount"
          name="participantsCount"
          value={formData.participantsCount}
          onChange={handleChange}
          required
        />

        <label htmlFor="charges">Charges:</label>
        <input
          type="number"
          id="charges"
          name="charges"
          value={formData.charges}
          onChange={handleChange}
          required
        />

        <button type="submit">Add Event</button>
      </form>
    </div>
  );
};

export default EventForm;
