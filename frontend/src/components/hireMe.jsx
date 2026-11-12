function HireMe() {
  return (
    <section className="hire-me" id="hire">
      <h2>Let's Build Something Amazing Together</h2>

      <p>
       I'm available for freelance and remote web development
        opportunities. Whether you need a modern responsive
        website, a fully functional web application, an
        e-commerce platform, or a custom backend solution,
        I'd love to help bring your ideas to life.
      </p>

     <div className="contact-info">

  <div className="info-item">
    <span>📧</span>
    <p>Email: eshamsaleem2@gmail.com</p>
  </div>

  <div className="info-item">
    <span>📍</span>
    <p>Location: Sahiwal, Pakistan</p>
  </div>

  <div className="info-item">
    <span>📱</span>
    <p>WhatsApp: +92 303 5688827</p>
  </div>

  <div className="info-item">
    <span> 💼 </span>
    <p>Freelance & Remote Work</p>
  </div>

  <div className="info-item">
    <span>⏰</span>
    <p>Usually responds within 24 hours.</p>
  </div>

</div>


     <button
  className="talk-btn"
  onClick={() =>
    window.open(
      "https://wa.me/923035688827?text=Hi%20Esham,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
      "_blank"
    )
  }
>
  Let's Talk
</button>
    </section>
  );
}

export default HireMe;