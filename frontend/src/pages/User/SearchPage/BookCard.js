// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import "./SearchPage.css";

// function BookCard(props) {
//   return (
//     <div class="card" className="book-in-search1">
//       <img
//         src={require("../../../assets/image/book.png")}
//         class="card-img-top"
//         alt=""
//         className="image1"
//       />

//       <div class="card-body">
//         <div class="card-title" className="title4">
//           {props.title}
//         </div>

//         <p class="card-text" className="author1">
//           by {props.authorName}
//         </p>

//         <button className="mn-btn1">
//           <div className="mn-btn-item" />
//           <div className="mn1">Mượn</div>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default BookCard;

import React from "react";
import { Link } from "react-router-dom";

function BookCard(props) {
  const bookDetailUrl = `/bookdetailpage/${props.ISBN}`;
  return (
    <div
      className="card"
      style={{
        marginRight: "5%",
        marginLeft: "5%",
        boxShadow: "2px 6px 8px 0 rgba(22, 22, 26, 0.18)",
      }}
    >
      <img
        className="product--image"
        // src={require("../../../assets/image/book.png")}
        src={props.coverLink}
        alt="img"
        style={{
          width: "100%",
          height: "260px",
          objectFit: "cover",
        }}
      />
      <Link to={bookDetailUrl}>
        <div
          style={{
            width: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            color: "#324552",
            fontSize: 14,
            fontFamily: "Work Sans",
            fontWeight: "600",
            wordWrap: "break-word",
          }}
        >
          {props.title}
        </div>
      </Link>
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          color: "#7D92A1",
          fontSize: 12,
          fontFamily: "Work Sans",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        by {props.authorName}
      </div>

      <button
        className="btn btn-success"
        style={{
          width: "100%",
          textAlign: "center",
          color: "white",
          fontSize: 14,
          fontFamily: "Inter",
          fontWeight: "400",
          wordWrap: "break-word",
          backgroundColor: "#31AAB7",
        }}
      >
        Mượn
      </button>
    </div>
  );
}

export default BookCard;
