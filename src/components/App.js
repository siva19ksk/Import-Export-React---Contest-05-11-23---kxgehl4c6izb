import React, { Component, useState } from "react";
import '../styles/App.css';
import Header from "./components/Header.js";
import Input from "./components/InputQuery.js";
import SubHead from "./components/SubHeading.js";
import SubmitBtn from "./components/SubmitButton.js";

export default const App = () => {
  return (
    <div id="main">
      <Header/>
      <Input/>
      <SubHead/>
      <SubmitBtn/>
    </div>
  )
}


