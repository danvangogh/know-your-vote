import React from 'react';

function Footer() {
  return (
    <div className="admin-div">
      <div>
        <a href="/admin" className="admin-link">Admin</a>
      </div>
      <div className="social-media">
        <a href="https://www.facebook.com/knowyourvotecanada/"><i className="fab fa-facebook-f"></i></a>
        <i className="fab fa-linkedin-in"></i>
        <i className="fab fa-twitter"></i>
        <a href="https://github.com/danvangogh/know-your-vote"><i className="fab fa-github"></i></a>
      </div>
    </div>
  )
}

export default Footer;

