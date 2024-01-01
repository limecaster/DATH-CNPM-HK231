import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./BookDetailPage.css";
import useNode from "./useNode";
import Comment from "./Comment";
import ReadMore from "./ReadMore";
import { Rating } from "@mui/material";
const comments = {
  id: 1,
  items: [],
};
export default function BookDetailPage() {
  const { ISBN } = useParams();
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState([]);
  const [commentsData, setCommentsData] = useState(comments);
  const [value, setValue] = useState(0);
  const { insertNode, editNode, deleteNode } = useNode();
  const handleInsertNode = (folderId, item) => {
    const finalStructure = insertNode(commentsData, folderId, item);
    setCommentsData(finalStructure);
  };

  const handleEditNode = (folderId, value) => {
    const finalStructure = editNode(commentsData, folderId, value);
    setCommentsData(finalStructure);
  };

  const handleDeleteNode = (folderId) => {
    const finalStructure = deleteNode(commentsData, folderId);
    const temp = { ...finalStructure };
    setCommentsData(temp);
  };
  const [isHearted, setIsHearted] = useState(false);

  const handleHeartClick = async () => {
    setIsHearted(!isHearted);
    try {
      const apiUrl = "http://localhost:3001/favorite";
      const method = "POST";
      const readerID = "ST1000000";
      const bookISBN = "9780143039976";

      const response = await fetch(apiUrl, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          readerID,
          bookISBN,
        }),
      });

      if (response.ok) {
        console.log("setfavorite successfully");
      } else {
        console.log("setfavorite unsuccessfully");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/books")
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/books/${ISBN}/genres`)
      .then((res) => {
        console.log(res.data);
        setGenres(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const book = books.find((b) => String(b.ISBN) === ISBN);
  if (!book) return null;

  return (
    <div className="display">
      <div>
        <img
          //src={require("../../../assets/image/book.png")}
          src={book.coverLink}
          alt="img"
          className="img"
        />

        <div className="text">
          {/* book title */}
          <p
            style={{
              fontSize: "40px",
              fontFamily: "Work Sans",
              fontWeight: "700",
              marginLeft: "10px",
            }}
          >
            {book.title}
          </p>
          <p
            style={{
              fontSize: "20px",
              fontFamily: "Work Sans",
              fontWeight: "700",
              marginLeft: "10px",
              color: isHearted ? "red" : "black",
              cursor: "pointer",
            }}
            onClick={handleHeartClick}
          >
            {isHearted ? "❤️" : "🤍"}
          </p>
          {/* rating */}
          <p>
            <div
              style={{
                color: "rgb(255, 200, 0)",
                fontSize: "24px",
                marginLeft: "10px",
                display: "inline-block",
              }}
            >
              &#9733;
            </div>
            <div
              style={{
                display: "inline-block",
                fontSize: "20px",
                fontFamily: "Work Sans",
                fontWeight: "600",
                marginLeft: "10px",
              }}
            >
              4,8
            </div>
            <div
              style={{
                display: "inline-block",
                fontSize: "20px",
                fontFamily: "Work Sans",
                color: "grey",
                marginLeft: "10px",
              }}
            >
              (1,873)
            </div>
          </p>
          {/* author */}
          <p>
            <div
              style={{
                display: "inline-block",
                fontSize: "25px",
                fontFamily: "Work Sans",
                fontWeight: "600",
                marginLeft: "10px",
              }}
            >
              Tác giả
            </div>
            <div
              style={{
                display: "inline-block",
                fontSize: "20px",
                fontFamily: "Work Sans",
                color: "grey",
                marginLeft: "10px",
              }}
            >
              {book.authorName}
            </div>
          </p>
          {/* genres */}
          <p>
            <div
              style={{
                display: "inline-block",
                fontSize: "25px",
                fontFamily: "Work Sans",
                fontWeight: "600",
                marginLeft: "10px",
              }}
            >
              Thể loại
            </div>
            <div
              style={{
                display: "inline-block",
                fontSize: "20px",
                fontFamily: "Work Sans",
                color: "grey",
                marginLeft: "10px",
              }}
            >
              <div>
                {genres.map((genre, index) => (
                  <React.Fragment key={index}>
                    {genre}
                    {index !== genres.length - 1 && ", "}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </p>
          {/* publisher */}
          <p>
            <div
              style={{
                display: "inline-block",
                fontSize: "25px",
                fontFamily: "Work Sans",
                fontWeight: "600",
                marginLeft: "10px",
              }}
            >
              Nhà xuất bản
            </div>
            <div
              style={{
                display: "inline-block",
                fontSize: "20px",
                fontFamily: "Work Sans",
                color: "grey",
                marginLeft: "10px",
              }}
            >
              {book.publisher}
            </div>
          </p>
          {/*  button mượn */}
          <p>
            <button
              className="btn btn-success "
              style={{
                width: "200px",
                textAlign: "center",
                color: "white",
                fontSize: 20,
                fontFamily: "Work Sans",
                fontWeight: "400",
                wordWrap: "break-word",
                backgroundColor: "#31AAB7",
                //marginTop: "175px",
                marginLeft: "10px",
              }}
            >
              Mượn sách
            </button>
          </p>
        </div>
      </div>
      {/* mô tả */}
      <div className="description">
        <p>
          <div
            style={{
              fontSize: "25px",
              fontFamily: "Work Sans",
              fontWeight: "600",
              //marginLeft: "10px",
            }}
          >
            Mô tả
          </div>

          <div
            style={{
              fontSize: "20px",
              fontFamily: "Work Sans",
              color: "grey",
              //marginLeft: "10px",
            }}
          >
            <ReadMore text={book.desc} />
          </div>
        </p>
      </div>

      <div
        className="feedback"
        style={{
          fontSize: "25px",
          fontFamily: "Work Sans",
          fontWeight: "600",
          marginTop: "10px",
        }}
      >
        Phản hồi
      </div>
      <div style={{ marginTop: "20px" }}>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </div>
      <Comment
        handleInsertNode={handleInsertNode}
        handleEditNode={handleEditNode}
        handleDeleteNode={handleDeleteNode}
        comment={commentsData}
      />
    </div>
  );
}
