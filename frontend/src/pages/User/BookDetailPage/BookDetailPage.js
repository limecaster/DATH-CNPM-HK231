// // import axios from "axios";
// // import React, { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";

// // import "./BookDetailPage.css";

// // export default function BookDetailPage() {
// //   const { ISBN } = useParams();
// //   const [books, setBooks] = useState([]);
// //   const [genres, setGenres] = useState([]);

// //   useEffect(() => {
// //     axios
// //       .get("http://localhost:3001/books")
// //       .then((res) => {
// //         console.log(res.data);
// //         setBooks(res.data);
// //       })
// //       .catch((err) => {
// //         console.error(err);
// //       });
// //   }, []);
// //   useEffect(() => {
// //     axios
// //       .get(`http://localhost:3001/books/${ISBN}/genres`)
// //       .then((res) => {
// //         console.log(res.data);
// //         setGenres(res.data);
// //       })
// //       .catch((err) => {
// //         console.error(err);
// //       });
// //   }, []);
// //   const book = books.find((b) => String(b.ISBN) === ISBN);
// //   if (!book) return null;

// //   return (
// //     <div className="display">
// //       <div>
// //         <img
// //           //src={require("../../../assets/image/book.png")}
// //           alt="img"
// //           className="img"
// //           src={book.coverLink}
// //           style={{ width: "100%", height: "260px", objectFit: "cover" }}
// //         />

// //         <div className="text">
// //           {/* book title */}
// //           <p
// //             style={{
// //               fontSize: "40px",
// //               fontFamily: "Work Sans",
// //               fontWeight: "700",
// //               marginLeft: "10px",
// //             }}
// //           >
// //             {book.title}
// //           </p>
// //           {/* rating */}
// //           <p>
// //             <div
// //               style={{
// //                 color: "rgb(255, 200, 0)",
// //                 fontSize: "24px",
// //                 marginLeft: "10px",
// //                 display: "inline-block",
// //               }}
// //             >
// //               &#9733;
// //             </div>
// //             <div
// //               style={{
// //                 display: "inline-block",
// //                 fontSize: "20px",
// //                 fontFamily: "Work Sans",
// //                 fontWeight: "600",
// //                 marginLeft: "10px",
// //               }}
// //             >
// //               4,8
// //             </div>
// //             <div
// //               style={{
// //                 display: "inline-block",
// //                 fontSize: "20px",
// //                 fontFamily: "Work Sans",
// //                 color: "grey",
// //                 marginLeft: "10px",
// //               }}
// //             >
// //               (1,873)
// //             </div>
// //           </p>
// //           {/* author */}
// //           <p>
// //             <div
// //               style={{
// //                 display: "inline-block",
// //                 fontSize: "25px",
// //                 fontFamily: "Work Sans",
// //                 fontWeight: "600",
// //                 marginLeft: "10px",
// //               }}
// //             >
// //               Tác giả
// //             </div>
// //             <div
// //               style={{
// //                 display: "inline-block",
// //                 fontSize: "20px",
// //                 fontFamily: "Work Sans",
// //                 color: "grey",
// //                 marginLeft: "10px",
// //               }}
// //             >
// //               {book.authorName}
// //             </div>
// //           </p>
// //           {/* genres */}
// //           <p>
// //             <div
// //               style={{
// //                 display: "inline-block",
// //                 fontSize: "25px",
// //                 fontFamily: "Work Sans",
// //                 fontWeight: "600",
// //                 marginLeft: "10px",
// //               }}
// //             >
// //               Thể loại
// //             </div>
// //             <div
// //               style={{
// //                 display: "inline-block",
// //                 fontSize: "20px",
// //                 fontFamily: "Work Sans",
// //                 color: "grey",
// //                 marginLeft: "10px",
// //               }}
// //             >
// //               <div>
// //                 {genres.map((genre, index) => (
// //                   <React.Fragment key={index}>
// //                     {genre}
// //                     {index !== genres.length - 1 && ", "}
// //                   </React.Fragment>
// //                 ))}
// //               </div>
// //             </div>
// //           </p>
// //           {/* publisher */}
// //           <p>
// //             <div
// //               style={{
// //                 display: "inline-block",
// //                 fontSize: "25px",
// //                 fontFamily: "Work Sans",
// //                 fontWeight: "600",
// //                 marginLeft: "10px",
// //               }}
// //             >
// //               Nhà xuất bản
// //             </div>
// //             <div
// //               style={{
// //                 display: "inline-block",
// //                 fontSize: "20px",
// //                 fontFamily: "Work Sans",
// //                 color: "grey",
// //                 marginLeft: "10px",
// //               }}
// //             >
// //               {book.publisher}
// //             </div>
// //           </p>
// //           {/*  button mượn */}
// //           <p>
// //             <button
// //               className="btn btn-success button"
// //               style={{
// //                 width: "200px",
// //                 textAlign: "center",
// //                 color: "white",
// //                 fontSize: 14,
// //                 fontFamily: "Work Sans",
// //                 fontWeight: "400",
// //                 wordWrap: "break-word",
// //                 backgroundColor: "#31AAB7",
// //                 //marginTop: "175px",
// //                 marginLeft: "10px",
// //               }}
// //             >
// //               Mượn sách
// //             </button>
// //           </p>
// //         </div>
// //       </div>
// //       <div className="description">
// //         <p>
// //           <div
// //             style={{
// //               fontSize: "25px",
// //               fontFamily: "Work Sans",
// //               fontWeight: "600",
// //               //marginLeft: "10px",
// //             }}
// //           >
// //             Mô tả
// //           </div>
// //           <div
// //             style={{
// //               fontSize: "20px",
// //               fontFamily: "Work Sans",
// //               color: "grey",
// //               //marginLeft: "10px",
// //             }}
// //           >
// //             {book.desc}
// //           </div>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }

// nested comment section
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import "./styles.css";
import "./BookDetailPage.css";
import useNode from "./useNode";
import Comment from "./Comment";
const comments = {
  id: 1,
  items: [],
};
export default function BookDetailPage() {
  const { ISBN } = useParams();
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState([]);
  const [commentsData, setCommentsData] = useState(comments);

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
          src={require("../../../assets/image/book.png")}
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
              className="btn btn-success button"
              style={{
                width: "200px",
                textAlign: "center",
                color: "white",
                fontSize: 14,
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
            {book.desc}
          </div>
        </p>
      </div>

      <div
        style={{
          fontSize: "25px",
          fontFamily: "Work Sans",
          fontWeight: "600",
          marginTop: "10px",
        }}
      >
        Phản hồi
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
