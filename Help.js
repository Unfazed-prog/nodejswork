import React from 'react';

function Help() {
  return (
    <div className="container p-4 bg-light rounded">
      <h2 style={{ color: 'black' }}>Help</h2>
      <p style={{ color: 'black' }}>Need assistance? We're here to help!</p>

      <h5 style={{ color: 'black' }}>FAQs</h5>
      <ul style={{ color: 'black' }}>
        <li>How do I list a parking spot?</li>
        <li>How do I find a parking spot?</li>
        <li>What if I have an issue with a parking spot?</li>
      </ul>

      <h5 style={{ color: 'black' }}>Contact Us</h5>
      <p style={{ color: 'black' }}>
        If you have more questions or need further assistance, please email us at: <strong>support@parkhelp.com</strong>
      </p>
    </div>
  );
}

export default Help;
