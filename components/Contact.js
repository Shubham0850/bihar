import React, { useState } from "react";
import Airtable from "airtable";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const { name, number, email, message } = formData;

  const handleChange = (e) => {
    let fieldName = e.target.name;
    setFormData({ ...formData, [fieldName]: e.target.value });
  };

  const sendData = (e) => {
    e.preventDefault();
    setLoading(true);

    var base = new Airtable({ apiKey: "keykHD6CWKJ8mnEw3" }).base(
      "appQGedSkLdWuJvjN"
    );

    base("Data").create(
      [
        {
          fields: {
            Name: name,
            Number: number,
            Email: email,
            Message: message,
          },
        },
      ],
      function (err, records) {
        setLoading(false);
        if (err) {
          setErr(err.message);
          return;
        }
        records.forEach(function (record) {
          console.log(record.getId());
          setSuccess(true);
          setFormData({
            name: "",
            number: "",
            email: "",
            message: "",
          });
        });
      }
    );
  };

  return (
    <div id="contact" className="contact">
      <div className="contact__box">
        <div className="contact__heading">
          <h1 className="h1">Contact Us</h1>
        </div>
        <div className="contact__form-box">
          <div className="contact__form-details">
            <p className="p">
              {`Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s,`}
              <br />
              <br />
              <em>
                {`"when an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not"`}
              </em>
            </p>
            <h4 className="name h4">Shubham Raj</h4>
            <p className="sign">shubham raj</p>
          </div>

          <form className="contact__form" onSubmit={sendData}>
            <input
              name="name"
              className="inp"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                handleChange(e);
              }}
              required
            />
            <input
              name="email"
              className="inp"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                handleChange(e);
              }}
              required
            />
            <input
              className="inp"
              type="number"
              placeholder="Number"
              name="number"
              value={number}
              onChange={(e) => {
                handleChange(e);
              }}
              required
            />
            <textarea
              name="message"
              className="inp"
              type="text"
              placeholder="Message"
              value={message}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <button className="btn" type="submit" disabled={isLoading}>
              {isLoading ? "Loading..." : success ? "Submitted" : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
