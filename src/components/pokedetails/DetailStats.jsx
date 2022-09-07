import React from "react";

const DetailStats = ({ hab }) => {
  const num = hab["base_stat"] * 2;
  const widthstat = {
    width: num,
  };
  console.log(num);
  return (
    <li className={`detail__li `}>
      <h4 className={`detail__tithab detail__${hab.stat.name}`}>
        {hab.stat.name}
      </h4>
      <div className={`detail__numstat`}>
        <p className="detail__num" style={widthstat}>
          {hab["base_stat"]}
        </p>
      </div>
    </li>
  );
};

export default DetailStats;
