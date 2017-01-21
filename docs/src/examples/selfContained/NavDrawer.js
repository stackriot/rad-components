import React from 'react';
import { NavDrawer } from './../../../../packages/rad-navdrawer/dist/Navdrawer.min.js';

export function NavDrawerSelfContained (props) {
  return (
    <NavDrawer placement="right">
      <p>1</p>
      <p>2</p>
    </NavDrawer>
  );
}

export var NavDrawerSelfContainedSource =
`
import React from 'react';
import { NavDrawer } from 'radcomponents';

function NavDrawerSelfContained (props) {
  return (
    <NavDrawer placement="right">
      <p>1</p>
      <p>2</p>
    </NavDrawer>
  );
}
`;

export var NavDrawerProps =
`
NavDrawer.propType = {
  placement: React.PropTypes.oneOf(['right', 'left']),
}
`;
