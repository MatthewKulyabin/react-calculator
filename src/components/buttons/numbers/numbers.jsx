import React from 'react';

function Numbers({ value }) {
  return (
    <div className="numbers">
      {value.map((number, idx) => (
        <div key={idx} data-number={true}>
          {number}
        </div>
      ))}
    </div>
  );
}

export default Numbers;
