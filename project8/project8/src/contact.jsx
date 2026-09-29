function Contact() {
  return (
    <section className="page">
      <p className="small">GET IN TOUCH</p>
      <h1>Contact <span>Me</span></h1>

      <div className="contact-box">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>

        <button>Send Message</button>
      </div>

      <div className="contact-info">
        <p>📧 janani@example.com</p>
        <p>📱 +91 XXXXX XXXXX</p>
      </div>
    </section>
  );
}

export default Contact;