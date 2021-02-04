import React from 'react';
import Card from './Card';

export default function MainContent() {
  return (
    <div>
      {/* <!-- Main content --> */}
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
