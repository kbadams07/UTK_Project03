import React, { useState } from "react";
import "./ContactPage.css"; // optional separate css file if you want

function ContactPage() {
  // local state only (controlled component requirement)
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName]   = useState("");
  const [email, setEmail]         = useState("");
  const [comments, setComments]   = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now just log it. In a real app you'd send to a server.
    console.log({
      firstName,
      lastName,
      email,
      comments
    });

    // reset after submit (nice touch, not required)
    setFirstName("");
    setLastName("");
    setEmail("");
    setComments("");
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e)=>setFirstName(e.target.value)}
            placeholder="First name"
          />
        </label>

        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e)=>setLastName(e.target.value)}
            placeholder="Last name"
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </label>

        <label>
          Comments:
          <textarea
            value={comments}
            onChange={(e)=>setComments(e.target.value)}
            placeholder="How can we help?"
          />
        </label>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactPage;
