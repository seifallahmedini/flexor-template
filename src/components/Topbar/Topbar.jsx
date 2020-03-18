import React from "react";

export default function Topbar() {
  return (
    <section id="topbar" className="d-none d-lg-block">
      <div className="container d-flex">
        <div className="contact-info mr-auto">
          <ul>
            <li>
              <i className="icofont-envelope" />
              <a href="mailto:contact@example.com">contact@example.com</a>
            </li>
            <li>
              <i className="icofont-phone" /> +1 5589 55488 55
            </li>
            <li>
              <i className="icofont-clock-time icofont-flip-horizontal" />{" "}
              Mon-Fri 9am - 5pm
            </li>
          </ul>
        </div>
        <div className="cta">
          <a href="#about" className="scrollto">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
