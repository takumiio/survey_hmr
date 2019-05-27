/** @jsx jsx */
import { jsx } from '@emotion/core'
import { hot } from "react-hot-loader";

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

export default ( process.env.NODE_ENV === "development" ) ?  hot(module)(AppRoot) : AppRoot;

