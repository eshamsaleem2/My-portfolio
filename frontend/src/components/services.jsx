function Services() {
  return (
    <section className="services" id="services">
      <h2>Services</h2>

      <p className="section-text">
        I build modern, responsive, and fully functional
        web applications with powerful frontend and backend solutions.
      </p>

      <div className="services-container">

        {/* Frontend Development */}

        <div className="service-card">
          <h3>💻 Frontend Development</h3>
          <p>
            Responsive websites using HTML, CSS, JavaScript,
            Bootstrap and React.
          </p>
        </div>

        <div className="service-card">
          <h3>⚛️ React Applications</h3>
          <p>
            Fast and interactive React applications with
            reusable components and dynamic interfaces.
          </p>
        </div>

        <div className="service-card">
          <h3>📱 Responsive Design</h3>
          <p>
            Mobile-friendly layouts that work perfectly
            on all screen sizes and devices.
          </p>
        </div>

        <div className="service-card">
          <h3>🎨 UI/UX Implementation</h3>
          <p>
            Clean, modern and attractive user interfaces
            with smooth animations from Figma or designs.
          </p>
        </div>

        {/* Backend Development */}

        <div className="service-card">
          <h3>⚙️ Backend Development</h3>
          <p>
            Server-side development using Node.js and
            Express.js to build powerful and functional
            web application backends.
          </p>
        </div>

        <div className="service-card">
          <h3>🗄️ Database Management</h3>
          <p>
            MongoDB database integration, Mongoose schemas,
            data storage and efficient database operations.
          </p>
        </div>

        <div className="service-card">
          <h3>🔗 REST API Development</h3>
          <p>
            Creating and integrating RESTful APIs for
            seamless communication between frontend
            and backend systems.
          </p>
        </div>

        <div className="service-card">
          <h3>🔐 Authentication & Security</h3>
          <p>
            Login, signup, JWT authentication, password
            hashing and role-based access control.
          </p>
        </div>

        <div className="service-card">
          <h3>🚀 Full-Stack Development</h3>
          <p>
            Complete web applications combining frontend,
            backend, database integration and admin dashboards.
          </p>
        </div>

        {/* Additional Services */}

        <div className="service-card">
          <h3>⚡ Performance Optimization</h3>
          <p>
            Faster-loading websites with optimized code
            and improved user experience.
          </p>
        </div>

        <div className="service-card">
          <h3>🔧 Website Maintenance</h3>
          <p>
            Bug fixing, updates, feature additions
            and continuous website support.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Services;