import React, { Component } from "react";
function Welcome(props) {
  return <h1>Hello,{props.name}</h1>;
}
function Demo() {
  return (
    <div>
      <Welcome name="MSD" />
      <Welcome name="VK" />
      <Welcome name="RJ" />
      <Welcome name="SA" />
      <span>
        <div>gfertgh</div>
      </span>
    </div>
  );
}
export default Demo;
