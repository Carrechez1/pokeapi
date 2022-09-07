import React from "react";

const DetailsMoves = ({ mov }) => {
  return (
    <li className={`detail__limov`}>
      <h4 className="detail__titmov">
        <strong>{mov.move.name}</strong>
      </h4>
    </li>
  );
};

export default DetailsMoves;
