import React from 'react';

function Footer() {
  return (
    <div className="admin-div">
      <div>
        <a href="/admin" className="admin-link">Admin</a>
      </div>
      <div className="social-media">
        <a href="https://www.facebook.com/knowyourvotecanada/"><i className="fab fa-facebook-f"></i></a>
        <a href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a>
        <a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
        <a href="https://github.com/danvangogh/know-your-vote"><i className="fab fa-github"></i></a>
      </div>
    </div>
  )
}

export default Footer;

