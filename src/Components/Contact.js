import React, { useState } from "react";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiKey = "YOUR_API_KEY"; // Replace with your Firebase Web API Key
    const endpoint = "https://YOUR_PROJECT_ID.firebaseio.com/contacts.json"; // Replace with your Firebase Realtime Database URL

    const data = {
      firstName,
      lastName,
      email,
      message,
      phone,
      timestamp: new Date().toISOString()
    };

    try {
      const response = await fetch(`${endpoint}?auth=${apiKey}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        // Clear form fields after successful submission
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
        setPhone("");

        alert("Message sent successfully!");
      } else {
        const responseData = await response.json();
        console.error("Error sending message:", responseData);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <section id="contact" className="shadow-lg">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-green-500 mb-4">
          Contact Me
        </h2>
        <p className="text-gray-300 mb-8">
          I'm available for new opportunities. Feel free to get in touch!
        </p>
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="bg-gray-700 text-white p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="bg-gray-700 text-white p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-700 text-white p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-gray-700 text-white p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-gray-700 text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
