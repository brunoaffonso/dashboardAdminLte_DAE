import React from 'react';

export default function Card() {
  return (
    <div>
      <div className="card card-primary card-outline">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>

          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="card-link">
            Card link
          </a>
          <a href="#" className="card-link">
            Another link
          </a>
        </div>
      </div>
    </div>
  );
}
