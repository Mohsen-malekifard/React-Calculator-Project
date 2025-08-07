import { useState } from 'react';

export default function Calculator() {
  const [input, setInput] = useState('');

  function handleClick(value) {
    setInput(prev => prev + value);
  }

  function handleClear() {
    setInput('');
  }

  function handleResult() {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('خطا');
    }
  }

  const buttonStyle = {
    padding: '15px',
    margin: '5px',
    fontSize: '18px',
    width: '60px',
    cursor: 'pointer'
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px'
  };

  const rowStyle = {
    display: 'flex',
    justifyContent: 'center'
  };

  const inputStyle = {
    fontSize: '20px',
    padding: '10px',
    marginBottom: '15px',
    width: '260px',
    textAlign: 'right'
  };

  return (
    <div style={containerStyle}>
      <input
        style={inputStyle}
        type="text"
        value={input}
        readOnly
        placeholder="محاسبه کنید..."
      />
      <div style={rowStyle}>
        <button style={buttonStyle} onClick={() => handleClick('1')}>1</button>
        <button style={buttonStyle} onClick={() => handleClick('2')}>2</button>
        <button style={buttonStyle} onClick={() => handleClick('3')}>3</button>
        <button style={buttonStyle} onClick={() => handleClick('+')}>+</button>
      </div>
      <div style={rowStyle}>
        <button style={buttonStyle} onClick={() => handleClick('4')}>4</button>
        <button style={buttonStyle} onClick={() => handleClick('5')}>5</button>
        <button style={buttonStyle} onClick={() => handleClick('6')}>6</button>
        <button style={buttonStyle} onClick={() => handleClick('-')}>-</button>
      </div>
      <div style={rowStyle}>
        <button style={buttonStyle} onClick={() => handleClick('7')}>7</button>
        <button style={buttonStyle} onClick={() => handleClick('8')}>8</button>
        <button style={buttonStyle} onClick={() => handleClick('9')}>9</button>
        <button style={buttonStyle} onClick={() => handleClick('*')}>×</button>
      </div>
      <div style={rowStyle}>
        <button style={buttonStyle} onClick={handleClear}>C</button>
        <button style={buttonStyle} onClick={() => handleClick('0')}>0</button>
        <button style={buttonStyle} onClick={handleResult}>=</button>
        <button style={buttonStyle} onClick={() => handleClick('/')}>÷</button>
      </div>
    </div>
  );
}