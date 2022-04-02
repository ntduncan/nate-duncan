import React from "react";
import "./BlogCard.css"

export default function BlogCardLeft({children, alternate, photoUrl}) {
  return (
    <div className={alternate===true ? "blog-card alt":"blog-card"}>
      <div className="meta">
        <div
          className="photo"
          style={{backgroundImage: `url(${photoUrl})`}}
        ></div>
      </div>
      <div className="description">
        {children}
      </div>
    </div>
  );
}
