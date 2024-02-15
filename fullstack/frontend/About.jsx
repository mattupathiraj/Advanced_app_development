
import './About.css'; // Import CSS file for styling

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-header">
        <h1>About Us</h1>
        <p>Welcome to our Team Events management company!</p>
      </div>
      <div className="about-us-content">
        <div className="mission-section">
          <h2>Our Mission</h2><br></br>
          <p>At Team Events, our mission is to create unforgettable experiences that inspire and delight our clients and their guests. We believe in the power of events to bring people together, foster connections, and leave lasting impressions. With meticulous planning, innovative ideas, and attention to detail, we strive to exceed expectations and make every event a resounding success. Whether its a corporate conference, a grand gala, or an intimate celebration, were dedicated to making your vision a reality and crafting moments that will be cherished forever.</p>
        </div>
      
          
        <div className="past-events-section">
          <h2>Past Events</h2>
          <div className="event-card">
            <img src="https://media.insider.in/image/upload/c_crop,g_custom/v1699430542/d7u69d9u7kwlqy8lbgxj.jpg" alt="Event 1" />
            <h3>Annual Gala 2020</h3>
            <p></p>
          </div>
          <div className="event-card">
            <img src="https://businessviewmagazine.in/wp-content/uploads/2023/12/iitf.jpg" alt="Event 2" />
            <h3>Conference 2019</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          {/* Add more past events as needed */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
