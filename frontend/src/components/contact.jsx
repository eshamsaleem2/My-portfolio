import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const [alert, setAlert] = useState({
    show: false,
    message: "",
    type: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8yhpy1i",
        "template_rzhm0xc",
        form.current,
        "KOYVaZK7YHJv7MZA9"
      )
      .then(
        () => {
          setAlert({
            show: true,
            message: "✅ Message sent successfully!",
            type: "success",
          });

          form.current.reset();

          setTimeout(() => {
            setAlert({
              show: false,
              message: "",
              type: "",
            });
          }, 3000);
        },
        () => {
          setAlert({
            show: true,
            message: "❌ Failed to send message!",
            type: "error",
          });

          setTimeout(() => {
            setAlert({
              show: false,
              message: "",
              type: "",
            });
          }, 3000);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>

      <p>Let's work together!</p>

      {alert.show && (
        <div className={`custom-alert ${alert.type}`}>
          {alert.message}
        </div>
      )}

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;