import React, { useState } from "react";
import Airtable from "airtable";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
  });
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const { name, number, email } = formData;

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
          });
        });
      }
    );
  };

  return (
    <div id="contact" className="contact">
      <div className="contact__box">
        <div className="contact__heading">
          <h1 className="h1">{`Let's Connect`}</h1>
          <h2 className="h2">Contact</h2>
        </div>
        <div className="contact__form-box">
          <div className="contact__form-details">
            <p className="p">
              {`Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.`}
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

          <div className="contact__form">
            <form onSubmit={sendData}>
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
              <button className="btn" type="submit" disabled={isLoading}>
                {isLoading ? "Loading..." : success ? "Submitted" : "Submit"}
              </button>
            </form>
            <a rel="noreferrer" href="https://wa.me/918709052626" target="_blank">
              <button className="btn btn--sec">
                <span className="icon">
                <Image src={"/wa.svg"} alt="wa icon" width={20} height={20} />
                </span>
                Message us on WhatsApp
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
