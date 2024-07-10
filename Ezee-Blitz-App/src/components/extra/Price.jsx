import React from "react";

export default function Price(props) {
  let { value, decimals = 0 } = props;
  return <>₹{Number(value).toFixed(decimals)}</>;
}
