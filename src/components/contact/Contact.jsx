import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_377jtpr",
        "template_l7xn3oi",
        form.current,
        "EaTlEQDXc28gQSvmK"
      )
      .then(
        (result) => {
          
          alert("Thanks for Contacting ");
        },
        (error) => {
          alert("oops Something went wrong  ");
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>priyanshusingh1877@gmail.com</h5>
            <a href="mailto:priyanshusingh1877@gmail.com" target="_blank">
              Send a Message{" "}
            </a>
          </article>
          <article className="contact__option">
            <AiFillLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>priyanshu Kumar Singh</h5>
            <a href="mailto:priyanshusingh1877@gmail.com" target="_blank">
              Send a Message{" "}
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>9304011004</h5>
            <a
             href="https://wa.me/+919304011004"
              target="_blank"
            >
              Send a Message{" "}
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />

          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
