function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-box">
        <h1>Contact Us</h1>
        <p>Have any feedback about TaskFlow?</p>

        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />

          <textarea
            rows="5"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;