import export react:
App.js:
import React, { Component, useState } from "react";
import '../styles/App.css';
import Heading from './Heading.js';
import SubHeading from './SubHeading.js';
import InputQuery from './InputQuery.js';
import SubmitButton from './SubmitButton.js';

const App = () => {
  return (
    <div id="main">
      <Heading />
      <SubHeading />
      <InputQuery />
      <SubmitButton />
    </div>
  )
}

export default App;

Heading.js:
import React from 'react'

function Heading() {
    return (
        <h1>Welcome to our Site.</h1>
    )
}
export default Heading;

InputQuery.js:
import React from 'react'

function InputQuery() {
    return (
        <input placeHolder={'Enter your query here..'} />
    )
}
export default InputQuery;

SubHeading.js:
import React from 'react'

function SubHeading() {
    return (
        <h5>Happy to solve you doubts.</h5>
    )
}
export default SubHeading;

SubmitButton.js:
import React from 'react'

function SubmitButton() {
    return (
        <button>Ask</button>     
    )
}
export default SubmitButton;
