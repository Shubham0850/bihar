import React from "react";

export default function Contact() {
  return (
    <div id="contact" className="contact">
      <div className="contact__box">
        <div className="contact__heading">
          <h1 className="h1">Contact Us</h1>
        </div>
        <div className="contact__form-box">
          <div className="contact__form-details">
            <p className="p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s,
              <br />
              <br />
              <em>
                "when an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not"
              </em>
            </p>
            <h4 className="name h4">Shubham Raj</h4>
            <p className="sign">shubham raj</p>
          </div>

          <form className="contact__form">
            <input className="inp" type="text" placeholder="Name" required />
            <input className="inp" type="email" placeholder="Email" required />
            <input
              className="inp"
              type="number"
              placeholder="Number"
              required
            />
            <button className="btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
