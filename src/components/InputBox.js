import React, { useState } from 'react';

function InputBox({ buttonClick }) {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  };

  const buttonClickHandler = e => {
    e.preventDefault();
    buttonClick(value)
    setValue('')
  };

  return (
    <div className="container">
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon1"
            onClick={buttonClickHandler}
          >
            Generate
          </button>
        </div>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className="form-control"
          placeholder="Your link here"
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        />
      </div>
    </div>
  );
}

export default InputBox;
