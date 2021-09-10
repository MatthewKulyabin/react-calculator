import React, { useState } from 'react';

import Input from './input';
import Buttons from './buttons';
import { dotCheck } from '../core/utils';
import CONSTANTS from '../core/CONSTANTS';

function Calculator(props) {
  const [button, setButton] = useState('0');

  const handleButton = (target) => {
    let value = '';
    if (
      target.dataset.number ||
      target.dataset.operator ||
      target.dataset.equal
    ) {
      value = target.textContent;
      if (value === 'AC') {
        setButton('0');
        return;
      }
      if (!isNaN(value)) {
        setButton((prev) => (prev === '0' ? value : (prev += value)));
        return;
      }
      if (value === '.') {
        console.log(button);
        !isNaN(+button[button.length - 1]) &&
          dotCheck(button) &&
          setButton((prev) => (prev += value));
        return;
      } else {
        if (value === '=') {
          setButton(eval(button));
          return;
        }
        if (!isNaN(button[button.length - 1])) {
          setButton((prev) => (prev += value));
        }
        CONSTANTS.OPERATORS.forEach((operator) => {
          if (button[button.length - 1] === operator) {
            setButton((prev) => {
              let newStr = prev.split('');
              newStr.pop();
              newStr = newStr.join('') + value;
              return newStr;
            });
          }
        });
      }
    }
  };

  return (
    <div className="calculator">
      <Input button={button} />
      <Buttons onButton={handleButton} />
    </div>
  );
}

export default Calculator;
