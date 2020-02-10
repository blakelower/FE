import React from "react";

export default function Dashcard(props) {
  return (
    <div className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
      <div className="pa2 ph3-ns pb3-ns">
      <h1 className="f5 f4-ns mv0">{props.equips.name}</h1>
      <h2 className="f6 lh-copy measure mt2 mid-gray">Category: {props.equips.category}</h2>
      <h3 className="f6 lh-copy measure mt2 mid-gray">Price: {props.equips.cost}</h3>
      <h3 className="f6 lh-copy measure mt2 mid-gray">Availabilty: {props.equips.available}</h3>
      <h3 className="f6 lh-copy measure mt2 mid-gray">{props.equips.description}</h3>
      <h3 className="f6 lh-copy measure mt2 mid-gray">Seller: {props.equips.owner_username}</h3>
      <button className="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib black">Rent</button>
    </div>
    </div>
  );
}
