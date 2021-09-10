import React from 'react';

import CONSTANTS from '../../core/CONSTANTS';
import Numbers from './numbers/numbers';

function LeftPanel() {
  return (
    <div className="leftPanel">
      {CONSTANTS.LEFT_PANEL_VALUES.map((value, idx) => (
        <Numbers key={idx} value={value} />
      ))}
    </div>
  );
}

export default LeftPanel;
