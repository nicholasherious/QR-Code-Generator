import React from 'react';

function CodeResult({ code }) {
  return (
    <div className="container shadow-lg p-3 mb-5 bg-white rounded">
    <div className="row">
      <div className="col-sm">
        <img
          src={`http://api.qrserver.com/v1/create-qr-code/?data=${code}&size=250x250`}
          alt="qr code" className="rounded mx-auto d-block"
        />
        </div>
        <div className="col-sm">
        <ul className="list-group list-group-flush">
  <li className="list-group-item">Code: {code}</li>
  <li className="list-group-item">URL: <a href={`http://api.qrserver.com/v1/create-qr-code/?data=${code}&size=250x250`} target="_blank" rel="noopener noreferrer">Right click to save</a></li>
  <li className="list-group-item">Size: 250 x 250</li>
  <li className="list-group-item">Type: PNG</li>
  <li className="list-group-item">Quality: L (default)</li>
</ul>
      </div>
      </div>
      
    </div>
  );
}

export default CodeResult;
