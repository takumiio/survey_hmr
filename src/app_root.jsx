/** @jsx jsx */
import { jsx } from '@emotion/core'

import React from "react";

const AppRoot = (props) => (
  <div>
    <h1 
      className="title" 
      css={{ 
        color: 'hotpink' 
      }}
    >
      { props.val }
    </h1>
    <div>
      <input
        type="text"
        onChange={ e => props.change_action(e) }
        value={ props.val }
      />
    </div>
  </div>
);
export default AppRoot;
