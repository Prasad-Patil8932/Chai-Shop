import React, { Fragment } from "react";
import AvailableTeas from "./AvailableTeas";
import TeaSummary from "./TeaSummary";
import TeaItem from "./TeaItem/TeaItem";

const Teas = () => {
  return (
    <Fragment>
      <TeaSummary />
      <AvailableTeas />
      {/* <TeaItem/> */}
    </Fragment>
  );
};

export default Teas;
