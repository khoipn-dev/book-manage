import React from "react";
import { ClipLoader } from "react-spinners";
import "./LoadMoreIcon.css";

export default function LoadMoreIcon() {
  return (
    <div className="LoadMore">
      <ClipLoader loading={true} sizeUnit={"px"} size={20} color={"#4bd8b7"} />
    </div>
  );
}
