import React from 'react';

const Contact = () => {
  return (
    <div className="contact p-4 mb-1" id="contact">
      <h2 style={{ textAlign: 'center' }}>Contact Me</h2>

      <div className="d-flex" id="follow">
        <a
          className="social-network"
          href="https://www.linkedin.com/in/kalyanijoshibh/"
          target="_blank"
          data-toggle="tooltip"
          data-placement="top"
          title="LinkedIn"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/Kay-code-1"
          className="social-network"
          target="_blank"
          data-toggle="tooltip"
          data-placement="top"
          title="Github"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://twitter.com/Kalyani75705853"
          className="social-network"
          target="_blank"
          data-toggle="tooltip"
          data-placement="top"
          title="Twitter"
        >
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;