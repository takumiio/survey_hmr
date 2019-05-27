/** @jsx jsx */
import { jsx } from '@emotion/core'
import { hot } from "react-hot-loader";

import React, { useEffect } from "react";

const AppRoot = (props) => { 
  const input_ref = React.createRef();

  useEffect( () => {
    input_ref.current.focus();
  }, []);

  return (
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
          className="input_title"
          ref={ input_ref }
          value={ props.val }
        />
      </div>
    </div>
  ) 
};

export default ( process.env.NODE_ENV === "development" ) ?  hot(module)(AppRoot) : AppRoot;

