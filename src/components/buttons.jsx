import React from 'react';

import Equal from './buttons/equal';
import LeftPanel from './buttons/leftPanel';
import Operators from './buttons/operators';

function Buttons({ onButton }) {
  return (
    <div className="buttons" onClick={(event) => onButton(event.target)}>
      <Operators />
      <LeftPanel />
      <Equal />
    </div>
  );
}

export default Buttons;
