import React from "react";
import "./DownArrow.css";
import { FaChevronDown } from "react-icons/fa";

export default function DownArrow() {
  return (
    <div className="arrow-down flex">
      <h1 className="chevron">
        <FaChevronDown />
      </h1>
    </div>
  );
}
