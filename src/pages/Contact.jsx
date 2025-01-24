import React from 'react';
import { GlobalContext } from '../context/context';
import { useContext } from "react";

const Contact = () => {
  let { state, dispatch } = useContext(GlobalContext);
      return (
          <div>
              <h1>I am Contact page</h1>
              <h1>{state.myNum}</h1>
              <button onClick={()=>{dispatch({type:"CLEAR"})}}>Clear</button>
          </div>
      );
}

export default Contact;
