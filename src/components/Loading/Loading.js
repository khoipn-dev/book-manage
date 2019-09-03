import React from "react";
import { ClipLoader } from "react-spinners";
import "./Loading.css";

export default function Loading({loading}) {
  return (
    <div className="Loading">
      <ClipLoader loading={loading} sizeUnit={"px"} size={25} color={"#4bd8b7"} />
    </div>
  );
}
