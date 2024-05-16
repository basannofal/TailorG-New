import React from "react";
import Authroute from "./routes/Authroute";
import OnboadingPaths from "./OnboadingPaths";

const RouteMaster = () => {
  return (
    <>
      <OnboadingPaths />
      <Authroute />
    </>
  );
};

export default RouteMaster;
