import React from "react";

function Catimg({ n }) {
  return (
    <>
      {n < 5 && (
        <img
          src="/cat-no.gif"
          className="rounded-lg w-full "
          alt="nigger cat"
        />
      )}
      {n >= 5 && n < 10 && (
        <img src="/no.gif" className="rounded-lg w-full " alt="nigger cat" />
      )}
      {n >= 10 && n < 15 && (
        <img src="/sadge.gif" className="rounded-lg w-full " alt="nigger cat" />
      )}
      {n >= 15 && (
        <img src="/cri.gif" className="rounded-lg w-full " alt="nigger cat" />
      )}
    </>
  );
}

export default Catimg;
