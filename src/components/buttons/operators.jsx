import React from 'react';

import CONSTANTS from '../../core/CONSTANTS';

function Operators(props) {
  return (
    <div className="operators">
      {CONSTANTS.OPERATORS.map((operator, idx) => (
        <div key={idx} data-operator={true}>
          {operator}
        </div>
      ))}
    </div>
  );
}

export default Operators;
