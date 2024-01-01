import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Header from "../../../components/Header/Header";
import Welcome from "../../../components/Homepage/welcome";
import Trending from "../../../components/Homepage/trending";
import New from "../../../components/Homepage/new";
import Favor from "../../../components/Homepage/favor";
import Category from "../../../components/Homepage/category";
import Footer from "../../../components/Footer/footer";
import { BsFire } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";
import { BsFillHeartFill } from "react-icons/bs";
import { FaBook } from "react-icons/fa6";
import { responsive } from "../../../components/Homepage/CarouselRespon";

import axios from "axios";
import React, { useEffect, useState } from "react";
// import { newData } from './newdata';
// import { favorData } from './favordata';
// import { categoryData } from './categorydata';

function Homepage() {
  const email = localStorage.getItem("userEmail");
  const password = localStorage.getItem("userPassword");
  const name = localStorage.getItem("username");
  const readerID = localStorage.getItem("userID");
  // Clear the stored email and password
  // localStorage.removeItem("tempEmail");
  // localStorage.removeItem("tempPassword");

  // Log email and password to console
  console.log("Email:", email, "Password:", password, "Name:", name);

  const [books, setBooks] = useState([]);
  const [genrebooks, setgenreBooks] = useState([]);
  const [favoritebooks, setfavoriteBooks] = useState([]);
  const [trendingbooks, settrendingBooks] = useState([]);

  const displayedBooks = books;
  const displayedgenreBooks = genrebooks;
  const displayedfavoriteBooks = favoritebooks;
  const displayedtrendingBooks = trendingbooks;

  useEffect(() => {
    axios
      .get("http://localhost:3001/books")
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => {
        // console.error(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3001/books/trending")
      .then((res) => {
        console.log(res.data);
        settrendingBooks(res.data);
      })
      .catch((err) => {
        // console.error(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/borrow/favorite/${readerID}`)
      .then((res) => {
        console.log(res.data);
        setfavoriteBooks(res.data);
      })
      .catch((err) => {
        // console.error(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3001/books/genres")
      .then((res) => {
        console.log(res.data);
        setgenreBooks(res.data);
      })
      .catch((err) => {
        // console.error(err);
      });
  }, []);

  const newsData = displayedBooks.map((book) => (
    <New
      key={book.ISBN}
      ISBN={book.ISBN}
      title={book.title}
      authorName={book.authorName}
      coverLink={book.coverLink}
    />
  ));
  const trendData = displayedtrendingBooks.map((book) => (
    <Trending
      key={book.isbn}
      ISBN={book.isbn}
      title={book.title}
      authorName={book.authorName}
      coverLink={book.coverLink}
    />
  ));
  const favoriteData = displayedfavoriteBooks.map((book) => (
    <Favor
      key={book.ISBN}
      ISBN={book.ISBN}
      title={book.title}
      authorName={book.authorName}
      coverLink={book.coverLink}
    />
  ));
  const categData = displayedgenreBooks.map((book) => (
    <Category
      key={book.genre}
      genre={book.genre}
      coverLink={book.random_coverLink}
    />
  ));
  // const newsData = newData.map((item) => <New name={item.name} url={item.imageurl} author={item.author}/>);
  // const trendData = trendingData.map((item) => <Trending name={item.name} url={item.imageurl} author={item.author}/>);
  // const favoriteData = favorData.map((item) => <Favor name={item.name} url={item.imageurl} author={item.author}/>);
  // const categData = categoryData.map((item) => <Category name={item.name} url={item.imageurl}/>);
  return (
    <>
      <div className="container">
        <Welcome />
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            color: "#02598B",
            fontSize: 50,
            fontFamily: "Inter",
            fontWeight: "400",
            wordWrap: "break-word",
            paddingBottom: "30px",
            paddingTop: "100px",
          }}
        >
          <BsFire />
          Mới nhất
        </div>
        <Carousel responsive={responsive}>{newsData}</Carousel>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            color: "#02598B",
            fontSize: 50,
            fontFamily: "Inter",
            fontWeight: "400",
            wordWrap: "break-word",
            paddingBottom: "30px",
            paddingTop: "100px",
          }}
        >
          <BsGraphUpArrow />
          Phổ biến
        </div>
        <Carousel responsive={responsive}>{trendData}</Carousel>
        {!email ? (<></>) : (
          <>
          {displayedfavoriteBooks.length === 0 ? (<></>) : (
          <>
            <div
          className="d-flex align-items-center justify-content-center"
          style={{
            color: "#02598B",
            fontSize: 50,
            fontFamily: "Inter",
            fontWeight: "400",
            wordWrap: "break-word",
            paddingBottom: "30px",
            paddingTop: "100px",
          }}
        >
          <BsFillHeartFill />
          Ưa thích
        </div>
        <Carousel responsive={responsive}>{favoriteData}</Carousel>
        </>)}
        </>)}
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            color: "#02598B",
            fontSize: 50,
            fontFamily: "Inter",
            fontWeight: "400",
            wordWrap: "break-word",
            paddingBottom: "30px",
            paddingTop: "100px",
          }}
        >
          <FaBook />
          Thể loại
        </div>
        <Carousel responsive={responsive}>{categData}</Carousel>
      </div>
    </>
  );
}

export default Homepage;
