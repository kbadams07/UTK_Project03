import React, { useState } from "react";

function ContactPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName]   = useState("");
  const [email, setEmail]         = useState("");
  const [comments, setComments]   = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log({
      firstName,
      lastName,
      email,
      comments
    });

    setFirstName("");
    setLastName("");
    setEmail("");
    setComments("");

    setSubmitted(true);

    setTimeout(() => {setSubmitted(false);}, 4000);
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

      {submitted && (
        <p className="success-message">
          ✅ Feedback submitted successfully!
        </p>
      )}
      
    </div>
  );
}

export default ContactPage;
