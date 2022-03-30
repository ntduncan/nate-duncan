import React from "react";
import "./BlogCard.css"

export default function BlogCardLeft({children, alternate}) {
  return (
    <div className={alternate===true ? "blog-card alt":"blog-card"}>
      <div className="meta">
        <div
          className="photo"
        ></div>
      </div>
      <div className="description">
        {children}
      </div>
    </div>
  );
}
