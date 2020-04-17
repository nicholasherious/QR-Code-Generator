import React, { useState } from 'react';
import Navbar from './components/Navbar';
import InputBox from './components/InputBox';
import CodeResult from './components/CodeResult';

function App() {
  const [code, setCode] = useState([]);

  const buttonClick = qrcode => {
    setCode(qrcode);
  };

  console.log(code);
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="row">
            <div className="col mt-1">
              <InputBox buttonClick={buttonClick} />
            </div>
          </div>
          <div className="row">
           
              {code.length > 0 ? <CodeResult code={code} /> : null}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
